import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from '../components/Link';

export function PersonalizedRoadmap() {
  const { currentUser } = useAuth();
  const userCourse = currentUser?.course || 'Engineering';
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a resume file (PDF).');
      return;
    }

    setLoading(true);
    setError('');
    setRoadmap(null);

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await fetch('http://localhost:5000/api/resume/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to analyze resume');
      }

      const data = await response.json();
      setRoadmap(data);
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred while uploading.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Personalized {userCourse} Roadmap
          </h1>
          <p className="text-slate-400 text-lg">
            Upload your resume and our AI will identify your strengths and pinpoint the missing skills you need for a core role in {userCourse}.
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center space-y-6">
          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-slate-600 border-dashed rounded-lg cursor-pointer hover:bg-slate-700/50 transition">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-10 h-10 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              <p className="mb-2 text-sm text-slate-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-slate-500">PDF only (MAX. 5MB)</p>
            </div>
            <input type="file" className="hidden" accept="application/pdf" onChange={handleFileChange} />
          </label>
          
          {file && (
            <div className="text-emerald-400 font-medium bg-emerald-400/10 px-4 py-2 rounded-full">
              Selected: {file.name}
            </div>
          )}

          {error && (
            <div className="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg w-full text-center">
              {error}
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={!file || loading}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl font-bold transition disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
          >
            {loading ? 'Analyzing with AI...' : 'Generate Roadmap'}
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
          </div>
        )}

        {/* Roadmap Results */}
        {roadmap && !loading && (
          <div className="space-y-12 animate-fade-in">
            {/* Strengths Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-3 text-emerald-400">
                <span>🟢</span> Your Strengths
              </h2>
              <p className="text-slate-400">You already know these. Here is a quick revision overview for each:</p>
              <div className="grid md:grid-cols-2 gap-6">
                {roadmap.strengths && roadmap.strengths.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/80 p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition">
                    <h3 className="text-xl font-semibold text-emerald-300 mb-3">{item.skill}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.revisionOverview}</p>
                  </div>
                ))}
                {(!roadmap.strengths || roadmap.strengths.length === 0) && (
                  <p className="text-slate-500">No specific CSE strengths identified.</p>
                )}
              </div>
            </div>

            {/* Areas to Improve Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-3 text-rose-400">
                <span>🎯</span> Areas to Conquer
              </h2>
              <p className="text-slate-400">These are essential CSE skills missing from your resume. Time to learn them!</p>
              <div className="space-y-6">
                {roadmap.areasToImprove && roadmap.areasToImprove.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/80 p-6 rounded-xl border border-rose-500/20 hover:border-rose-500/50 transition flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 space-y-3">
                      <h3 className="text-2xl font-bold text-rose-300">{item.skill}</h3>
                      <div className="bg-slate-900/50 p-4 rounded-lg">
                        <span className="text-xs text-rose-400 uppercase font-bold tracking-wider mb-1 block">Why it matters</span>
                        <p className="text-sm text-slate-300">{item.importance}</p>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="bg-slate-900/50 p-5 rounded-lg h-full">
                        <span className="text-xs text-blue-400 uppercase font-bold tracking-wider mb-2 block">Preparation Guide</span>
                        <p className="text-slate-300 whitespace-pre-wrap">{item.preparationGuide}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {(!roadmap.areasToImprove || roadmap.areasToImprove.length === 0) && (
                  <p className="text-slate-500">You seem to have all the basics covered! Keep practicing.</p>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Navigation Button */}
        <div className="flex justify-center mt-12">
          <Link to="/" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30 rounded-xl font-bold transition flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
