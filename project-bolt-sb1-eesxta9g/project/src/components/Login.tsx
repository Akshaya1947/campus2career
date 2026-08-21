import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../hooks/useLanguage';

const Login: React.FC<{ onLoggedIn: () => void } > = ({ onLoggedIn }) => {
  const { t } = useLanguage();
  const { loginDoctor, loginPatient } = useAuth();
  const [mode, setMode] = useState<'doctor' | 'patient'>('doctor');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [village, setVillage] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (mode === 'doctor') {
      const ok = loginDoctor(username, password, village);
      if (!ok) {
        setError(t('invalidCredentials'));
        return;
      }
      onLoggedIn();
    } else {
      if (!patientPhone) {
        setError(t('enterPhone'));
        return;
      }
      loginPatient(patientPhone, village);
      onLoggedIn();
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t('login')}</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex space-x-2 mb-4">
          <button onClick={()=>setMode('doctor')} className={`flex-1 py-2 rounded ${mode==='doctor'?'bg-red-600 text-white':'bg-gray-100'}`}>{t('doctor')}</button>
          <button onClick={()=>setMode('patient')} className={`flex-1 py-2 rounded ${mode==='patient'?'bg-red-600 text-white':'bg-gray-100'}`}>{t('patient')}</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="w-full border rounded px-3 py-2" placeholder={t('village')} value={village} onChange={e=>setVillage(e.target.value)} />
          {mode==='doctor' ? (
            <>
              <input className="w-full border rounded px-3 py-2" placeholder={t('username')} value={username} onChange={e=>setUsername(e.target.value)} />
              <input type="password" className="w-full border rounded px-3 py-2" placeholder={t('password')} value={password} onChange={e=>setPassword(e.target.value)} />
            </>
          ) : (
            <input className="w-full border rounded px-3 py-2" placeholder={t('patientPhone')} value={patientPhone} onChange={e=>setPatientPhone(e.target.value)} />
          )}
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button type="submit" className="w-full bg-red-600 text-white py-2 rounded">{t('login')}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

