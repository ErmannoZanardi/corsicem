import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-slate-100">
        <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg shadow-blue-500/30">
          🎓
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Portale Corsi Tecnici
        </h1>
        <p className="text-slate-600 mb-6">
          Il sistema è attivo e configurato correttamente! Ora caricheremo la tua applicazione completa.
        </p>
        <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200">
          ✨ Connessione a React riuscita
        </div>
      </div>
    </div>
  );
}
