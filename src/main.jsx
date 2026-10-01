import React, { useState } from 'react';
import { MapPin, Video, Users, FileText, Calendar, Clock, Plus, Trash2, CheckCircle, Shield, ArrowLeft, Search, Building2, User, Phone, Mail, Hash } from 'lucide-react';

export default function App() {
  const [view, setView] = useState('catalog'); // 'catalog', 'admin', 'form'
  const [selectedBrand, setSelectedBrand] = useState('Tutti');
  const [selectedType, setSelectedType] = useState('tutti');
  const [selectedCorso, setSelectedCorso] = useState(null);

  // Lista iniziale dei corsi di prova
  const [corsi, setCorsi] = useState([
    {
      id: 1,
      brand: 'Tecnofire',
      tipo: 'presenza',
      titolo: 'CORSO TECNICO BASE - LIVELLO 1',
      descrizione: 'Panoramica prodotti Tecnofire, Tipiche di Cablaggio, Utilizzo Base e diagnostica, Passi di programmazione e Software Centro.',
      data: 'giovedì 1 ott 2026',
      orario: '09:00 – 13:00',
      luogo_o_link: 'Via dell\'Innovazione 8/10 - 20032 Cormano (MI)',
      capienza_max: 12,
      posti_occupati: 6,
      locandina_url: '#'
    },
    {
      id: 2,
      brand: 'Tecnoalarm',
      tipo: 'meet',
      titolo: 'PROGRAMMAZIONE AVANZATA CENTRALI TP8-64',
      descrizione: 'Approfondimento su bus RS485, integrazione domotica, gestione telecamere e programmazione via software Center.',
      data: 'martedì 6 ott 2026',
      orario: '14:30 – 17:30',
      luogo_o_link: 'Google Meet (Link inviato via email)',
      capienza_max: 20,
      posti_occupati: 20, // Sold out di prova
      locandina_url: '#'
    },
    {
      id: 3,
      brand: 'Nice',
      tipo: 'presenza',
      titolo: 'AUTOMAZIONI E CONFIGURAZIONE RADIO NICE',
      descrizione: 'Installazione e programmazione centrali per cancelli scorrevoli/battenti, logiche di rallentamento e memorizzazione radiocomandi.',
      data: 'mercoledì 14 ott 2026',
      orario: '09:30 – 13:00',
      luogo_o_link: 'Sede operativa - Sala Corsi Nord',
      capienza_max: 15,
      posti_occupati: 4,
      locandina_url: '#'
    },
    {
      id: 4,
      brand: 'Dahua',
      tipo: 'meet',
      titolo: 'SISTEMI DI VIDEOSORVEGLIANZA E AI DAHUA',
      descrizione: 'Configurazione NVR, telecamere IP con intelligenza artificiale, rilevamento volti e integrazione con app DMSS.',
      data: 'venerdì 23 ott 2026',
      orario: '10:00 – 12:30',
      luogo_o_link: 'Google Meet (Link inviato via email)',
      capienza_max: 25,
      posti_occupati: 10,
      locandina_url: '#'
    }
  ]);

  // Lista iscritti simulata
  const [iscritti, setIscritti] = useState([
    { id: 1, corso_id: 1, nome: 'Mario Rossi', azienda: 'Elettrotecnica Rossi Srl', telefono: '3331234567', email: 'mario@rossisrl.it', partecipanti: 2 },
    { id: 2, corso_id: 1, nome: 'Luca Bianchi', azienda: 'Impianti Bianchi', telefono: '3389876543', email: 'luca@bianchiimpianti.it', partecipanti: 4 }
  ]);

  const brands = ['Tutti', 'Tecnofire', 'Tecnoalarm', 'Nice', 'Dahua'];

  // Filtro corsi
  const corsiFiltrati = corsi.filter(corso => {
    const matchBrand = selectedBrand === 'Tutti' || corso.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchType = selectedType === 'tutti' || corso.tipo === selectedType;
    return matchBrand && matchType;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('catalog')}>
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
              T
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Formazione Tecnica Installatori
              </h1>
              <p className="text-xs text-slate-500">Tecnoalarm • Tecnofire • Nice • Dahua</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-3">
            {view === 'catalog' ? (
              <button 
                onClick={() => setView('admin')}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Shield className="w-4 h-4 text-slate-500" />
                Area Admin
              </button>
            ) : (
              <button 
                onClick={() => setView('catalog')}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Torna al Catalogo
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* VISTA CATALOGO CORSI */}
        {view === 'catalog' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                CALENDARIO CORSI AGGIORNATO
              </h2>
              <p className="text-slate-600 mt-1">
                Seleziona un corso per visualizzare i dettagli e prenotare i posti per la tua azienda.
              </p>

              {/* FILTRI BRAND E TIPO */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {brands.map(brand => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                        selectedBrand === brand
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
                  <button
                    onClick={() => setSelectedType('tutti')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${selectedType === 'tutti' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Tutti
                  </button>
                  <button
                    onClick={() => setSelectedType('presenza')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${selectedType === 'presenza' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    In Presenza
                  </button>
                  <button
                    onClick={() => setSelectedType('meet')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${selectedType === 'meet' ? 'bg-purple-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Google Meet
                  </button>
                </div>
              </div>
            </div>

            {/* GRIGLIA CORSI */}
            {corsiFiltrati.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
                <p className="text-slate-500 font-medium">Nessun corso trovato per i filtri selezionati.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {corsiFiltrati.map(corso => {
                  const postiDisponibili = corso.capienza_max - corso.posti_occupati;
                  const isSoldOut = postiDisponibili <= 0;
                  const percentuale = Math.min(Math.round((corso.posti_occupati / corso.capienza_max) * 100), 100);
                  const isMeet = corso.tipo === 'meet';

                  return (
                    <div key={corso.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden">
                      <div className="p-6 pb-4">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-full">
                            {corso.brand}
                          </span>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full ${
                            isMeet ? 'bg-purple-50 text-purple-700' : 'bg-blue-50 text-blue-700'
                          }`}>
                            {isMeet ? <Video className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
                            {isMeet ? 'Google Meet' : 'In Presenza'}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                          {corso.titolo}
                        </h3>

                        <div className="space-y-2 text-sm text-slate-600 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                            <span className="font-medium text-slate-700">{corso.data}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                            <span>{corso.orario}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {isMeet ? <Video className="w-4 h-4 text-slate-400 shrink-0" /> : <MapPin className="w-4 h-4 text-slate-400 shrink-0" />}
                            <span className="truncate text-xs" title={corso.luogo_o_link}>
                              {corso.luogo_o_link}
                            </span>
                          </div>
                        </div>

                        <p className="text-slate-600 text-sm line-clamp-3">
                          {corso.descrizione}
                        </p>
                      </div>

                      <div className="p-6 pt-0 mt-auto">
                        <div className="mb-4 pt-4 border-t border-slate-100">
                          <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                            <span className="flex items-center gap-1 text-slate-700">
                              <Users className="w-3.5 h-3.5 text-slate-400" />
                              Posti disponibili
                            </span>
                            <span className={isSoldOut ? "text-red-600 font-bold" : "text-slate-900"}>
                              {isSoldOut ? "SOLD OUT" : `${postiDisponibili} / ${corso.capienza_max}`}
                            </span>
                          </div>

                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-500 ${
                                isSoldOut ? 'bg-red-500' : percentuale > 80 ? 'bg-amber-500' : 'bg-blue-600'
                              }`} 
                              style={{ width: `${percentuale}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              setSelectedCorso(corso);
                              setView('form');
                            }}
                            disabled={isSoldOut}
                            className={`flex-1 py-2.5 px-4 rounded-xl font-medium text-sm transition-colors text-center shadow-xs ${
                              isSoldOut
                                ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                          >
                            {isSoldOut ? 'Corso al completo' : 'Iscriviti'}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* VISTA FORM DI ISCRIZIONE */}
        {view === 'form' && selectedCorso && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <button 
              onClick={() => setView('catalog')}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Indietro ai corsi
            </button>

            <div className="mb-6 pb-6 border-b border-slate-100">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase rounded-full">
                {selectedCorso.brand}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                {selectedCorso.titolo}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                {selectedCorso.data} • {selectedCorso.orario}
              </p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const numRichiesti = parseInt(formData.get('partecipanti')) || 1;
              const postiDisp = selectedCorso.capienza_max - selectedCorso.posti_occupati;

              if (numRichiesti > postiDisp) {
                alert(`Disponibilità insufficiente! Rimangono solo ${postiDisp} posti.`);
                return;
              }

              // Aggiorna posti occupati
              setCorsi(corsi.map(c => c.id === selectedCorso.id ? { ...c, posti_occupati: c.posti_occupati + numRichiesti } : c));
              
              // Registra iscrizione
              setIscritti([...iscritti, {
                id: Date.now(),
                corso_id: selectedCorso.id,
                nome: formData.get('nome'),
                azienda: formData.get('azienda'),
                telefono: formData.get('telefono'),
                email: formData.get('email'),
                partecipanti: numRichiesti
              }]);

              alert('Iscrizione completata con successo! Riceverai una conferma via email.');
              setView('catalog');
            }} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Nome e Cognome Referente</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input required name="nome" type="text" placeholder="Mario Rossi" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-blue-600" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Nome Azienda Installatrice</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input required name="azienda" type="text" placeholder="Elettrotecnica Srl" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-blue-600" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input required name="email" type="email" placeholder="mario@azienda.it" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-blue-600" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Telefono</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input required name="telefono" type="tel" placeholder="333 1234567" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-blue-600" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Numero di Partecipanti per l'Azienda</label>
                <div className="relative">
                  <Hash className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input required name="partecipanti" type="number" min="1" max={selectedCorso.capienza_max - selectedCorso.posti_occupati} defaultValue="1" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-blue-600" />
                </div>
                <p className="text-xs text-slate-500 mt-1">Posti ancora disponibili per questo corso: {selectedCorso.capienza_max - selectedCorso.posti_occupati}</p>
              </div>

              <button type="submit" className="w-full mt-6 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md transition-colors">
                Conferma Iscrizione
              </button>
            </form>
          </div>
        )}

        {/* VISTA AREA ADMIN */}
        {view === 'admin' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Pannello di Controllo Admin</h2>
                <p className="text-sm text-slate-500">Gestisci i corsi attivi e visualizza le iscrizioni ricevute.</p>
              </div>
              <button 
                onClick={() => {
                  const titolo = prompt("Titolo del nuovo corso:");
                  if (!titolo) return;
                  const brand = prompt("Brand (es. Tecnoalarm, Tecnofire, Nice, Dahua):", "Tecnoalarm");
                  const data = prompt("Data:", "giovedì 15 nov 2026");
                  const capienza = parseInt(prompt("Capienza massima:", "15")) || 12;
                  
                  setCorsi([...corsi, {
                    id: Date.now(),
                    brand: brand || 'Tecnoalarm',
                    tipo: 'presenza',
                    titolo: titolo,
                    descrizione: 'Nuovo corso tecnico inserito da pannello.',
                    data: data,
                    orario: '09:00 – 13:00',
                    luogo_o_link: 'Sede Principale',
                    capienza_max: capienza,
                    posti_occupati: 0,
                    locandina_url: '#'
                  }]);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium shadow-sm transition-colors"
              >
                <Plus className="w-4 h-4" /> Aggiungi Corso
              </button>
            </div>

            {/* TABELLA ISCRITTI */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-slate-100">
                <h3 className="font-bold text-slate-900">Elenco Iscrizioni Ricevute</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-4">Azienda</th>
                      <th className="p-4">Referente</th>
                      <th className="p-4">Contatti</th>
                      <th className="p-4">Corso</th>
                      <th className="p-4 text-center">Persone</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {iscritti.length === 0 ? (
                      <tr><td colSpan="5" className="p-6 text-center text-slate-400">Nessuna iscrizione registrata.</td></tr>
                    ) : (
                      iscritti.map(i => {
                        const corsoRef = corsi.find(c => c.id === i.corso_id);
                        return (
                          <tr key={i.id} className="hover:bg-slate-50">
                            <td className="p-4 font-semibold text-slate-900">{i.azienda}</td>
                            <td className="p-4">{i.nome}</td>
                            <td className="p-4 text-xs">{i.email} <br /> {i.telefono}</td>
                            <td className="p-4 text-xs font-medium text-slate-700">{corsoRef ? corsoRef.titolo : 'Corso rimosso'}</td>
                            <td className="p-4 text-center font-bold text-blue-600">{i.partecipanti}</td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500">
        <p>© 2026 Piattaforma Formazione Tecnica — Gestione Corsi Installatori</p>
      </footer>
    </div>
  );
}