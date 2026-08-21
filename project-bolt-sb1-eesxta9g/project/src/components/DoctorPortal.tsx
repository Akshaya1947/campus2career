import React, { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { DoctorVisit, PatientReport } from '../types';
import { useAuth } from '../context/AuthContext';
import { Calendar, Clock, MapPin, FileText, Plus, Save, Trash2, Upload } from 'lucide-react';

const STORAGE_VISITS_KEY = 'gov-doctor-visits';
const STORAGE_REPORTS_KEY = 'gov-patient-reports';

const DoctorPortal: React.FC = () => {
	const { t } = useLanguage();
	const [activeTab, setActiveTab] = useState<'visits' | 'reports'>('visits');
	const [visits, setVisits] = useState<DoctorVisit[]>([]);
	const [reports, setReports] = useState<PatientReport[]>([]);

	const [visitForm, setVisitForm] = useState<Omit<DoctorVisit, 'id'>>({
		doctorId: '',
		doctorName: '',
		specialization: '',
		village: '',
		date: new Date().toISOString().slice(0, 10),
		startTime: '10:00',
		endTime: '13:00',
		notes: ''
	});

	const [reportForm, setReportForm] = useState<Omit<PatientReport, 'id'>>({
		patientName: '',
		patientPhone: '',
		doctorId: '',
		doctorName: '',
		specialization: '',
		date: new Date().toISOString().slice(0, 10),
		summary: '',
		attachments: []
	});

	useEffect(() => {
    const v = localStorage.getItem(STORAGE_VISITS_KEY);
    const r = localStorage.getItem(STORAGE_REPORTS_KEY);
    if (v) setVisits(JSON.parse(v));
    if (r) setReports(JSON.parse(r));
	}, []);

	const saveVisits = (list: DoctorVisit[]) => {
		setVisits(list);
		localStorage.setItem(STORAGE_VISITS_KEY, JSON.stringify(list));
	};
	const saveReports = (list: PatientReport[]) => {
		setReports(list);
		localStorage.setItem(STORAGE_REPORTS_KEY, JSON.stringify(list));
	};

  const { user } = useAuth();

  const handleAddVisit = () => {
		const newVisit: DoctorVisit = { id: Date.now().toString(), ...visitForm } as DoctorVisit;
		saveVisits([newVisit, ...visits]);
    // notify locality (same village) via localStorage event and alert fallback
    try {
      localStorage.setItem('visit-notify', JSON.stringify({ ts: Date.now(), village: newVisit.village, title: `${newVisit.doctorName} - ${newVisit.specialization}`, when: `${newVisit.date} ${newVisit.startTime}` }));
    } catch {}
	};
	const handleDeleteVisit = (id: string) => {
		saveVisits(visits.filter(v => v.id !== id));
	};

	const handleAddReport = () => {
		const newReport: PatientReport = { id: Date.now().toString(), ...reportForm } as PatientReport;
		saveReports([newReport, ...reports]);
	};
	const handleDeleteReport = (id: string) => {
		saveReports(reports.filter(r => r.id !== id));
	};

  return (
		<div className="max-w-6xl mx-auto p-6">
			<div className="text-center mb-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">{t('doctorPortal')}</h1>
				<p className="text-gray-600">{t('doctorPortalSubtitle')}</p>
			</div>

			<div className="bg-white rounded-xl shadow-lg overflow-hidden">
				<nav className="flex">
					<button onClick={() => setActiveTab('visits')} className={`flex-1 py-3 font-medium border-b-2 ${activeTab==='visits'?'border-red-600 text-red-600':'border-transparent text-gray-500'}`}>{t('tabVisits')}</button>
					<button onClick={() => setActiveTab('reports')} className={`flex-1 py-3 font-medium border-b-2 ${activeTab==='reports'?'border-red-600 text-red-600':'border-transparent text-gray-500'}`}>{t('tabReports')}</button>
				</nav>

				<div className="p-6">
					{activeTab === 'visits' && (
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
							<div className="lg:col-span-1">
								<h2 className="text-xl font-semibold mb-4">{t('addVisit')}</h2>
								<div className="space-y-3">
									<input className="w-full border rounded-lg px-3 py-2" placeholder={t('doctorId')} value={visitForm.doctorId} onChange={e=>setVisitForm({...visitForm, doctorId:e.target.value})} />
									<input className="w-full border rounded-lg px-3 py-2" placeholder={t('doctorName')} value={visitForm.doctorName} onChange={e=>setVisitForm({...visitForm, doctorName:e.target.value})} />
									<input className="w-full border rounded-lg px-3 py-2" placeholder={t('specialization')} value={visitForm.specialization} onChange={e=>setVisitForm({...visitForm, specialization:e.target.value})} />
									<input className="w-full border rounded-lg px-3 py-2" placeholder={t('village')} value={visitForm.village} onChange={e=>setVisitForm({...visitForm, village:e.target.value})} />
									<div className="grid grid-cols-2 gap-3">
										<div className="flex items-center space-x-2"><Calendar size={18} /><input type="date" className="w-full border rounded-lg px-3 py-2" value={visitForm.date} onChange={e=>setVisitForm({...visitForm, date:e.target.value})} /></div>
										<div className="flex items-center space-x-2"><Clock size={18} /><input type="time" className="w-full border rounded-lg px-3 py-2" value={visitForm.startTime} onChange={e=>setVisitForm({...visitForm, startTime:e.target.value})} /></div>
										<div className="flex items-center space-x-2"><Clock size={18} /><input type="time" className="w-full border rounded-lg px-3 py-2" value={visitForm.endTime} onChange={e=>setVisitForm({...visitForm, endTime:e.target.value})} /></div>
									</div>
									<textarea className="w-full border rounded-lg px-3 py-2 mt-3" rows={3} placeholder={t('notes')} value={visitForm.notes} onChange={e=>setVisitForm({...visitForm, notes:e.target.value || ''})} />
									<button onClick={handleAddVisit} className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 flex items-center justify-center space-x-2"><Plus size={18} /><span>{t('addVisit')}</span></button>
								</div>
							</div>
            <div className="lg:col-span-2">
								<h2 className="text-xl font-semibold mb-4">{t('upcomingVisits')}</h2>
								<div className="space-y-3">
									{visits.length === 0 && <div className="text-sm text-gray-500">{t('noVisits')}</div>}
									{visits.map(v => (
										<div key={v.id} className="p-4 border rounded-lg flex items-center justify-between">
											<div>
												<div className="font-semibold">{v.doctorName} — {v.specialization}</div>
												<div className="text-sm text-gray-600 flex items-center space-x-2"><MapPin size={14} /><span>{v.village}</span></div>
												<div className="text-sm text-gray-600">{v.date} • {v.startTime} - {v.endTime}</div>
												{v.notes && <div className="text-xs text-gray-500 mt-1">{v.notes}</div>}
											</div>
                    {user.role === 'doctor' && <button onClick={()=>handleDeleteVisit(v.id)} className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>}
										</div>
									))}
								</div>
							</div>
						</div>
					)}

					{activeTab === 'reports' && (
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
							<div className="lg:col-span-1">
								<h2 className="text-xl font-semibold mb-4">{t('addReport')}</h2>
								<div className="space-y-3">
									<input className="w-full border rounded-lg px-3 py-2" placeholder={t('patientName')} value={reportForm.patientName} onChange={e=>setReportForm({...reportForm, patientName:e.target.value})} />
									<input className="w-full border rounded-lg px-3 py-2" placeholder={t('patientPhone')} value={reportForm.patientPhone} onChange={e=>setReportForm({...reportForm, patientPhone:e.target.value})} />
									<input className="w-full border rounded-lg px-3 py-2" placeholder={t('doctorId')} value={reportForm.doctorId} onChange={e=>setReportForm({...reportForm, doctorId:e.target.value})} />
									<input className="w-full border rounded-lg px-3 py-2" placeholder={t('doctorName')} value={reportForm.doctorName} onChange={e=>setReportForm({...reportForm, doctorName:e.target.value})} />
									<input className="w-full border rounded-lg px-3 py-2" placeholder={t('specialization')} value={reportForm.specialization} onChange={e=>setReportForm({...reportForm, specialization:e.target.value})} />
									<div className="flex items-center space-x-2"><Calendar size={18} /><input type="date" className="w-full border rounded-lg px-3 py-2" value={reportForm.date} onChange={e=>setReportForm({...reportForm, date:e.target.value})} /></div>
									<textarea className="w-full border rounded-lg px-3 py-2" rows={4} placeholder={t('reportSummary')} value={reportForm.summary} onChange={e=>setReportForm({...reportForm, summary:e.target.value})} />
									<div className="flex items-center space-x-2 text-sm text-gray-600"><Upload size={16} /><span>{t('attachmentsOptional')}</span></div>
									<button onClick={handleAddReport} className="mt-2 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 flex items-center justify-center space-x-2"><Save size={18} /><span>{t('saveReport')}</span></button>
								</div>
							</div>
							<div className="lg:col-span-2">
								<h2 className="text-xl font-semibold mb-4">{t('recentReports')}</h2>
								<div className="space-y-3">
									{reports.length === 0 && <div className="text-sm text-gray-500">{t('noReports')}</div>}
									{reports.map(r => (
										<div key={r.id} className="p-4 border rounded-lg">
											<div className="flex items-center justify-between">
												<div className="font-semibold">{r.patientName} — {r.doctorName} ({r.specialization})</div>
												<button onClick={()=>handleDeleteReport(r.id)} className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
											</div>
											<div className="text-sm text-gray-600">{r.date} • {r.patientPhone}</div>
											<div className="text-sm text-gray-700 mt-2 whitespace-pre-wrap">{r.summary}</div>
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DoctorPortal;
