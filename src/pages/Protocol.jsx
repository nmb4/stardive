import React from 'react'
import { TerminalIcon } from '../components/icons'

const protocolSteps = [
  {
    step: '01',
    title: 'Verbindungsaufbau',
    description:
      'Ein Client initiiert die Verbindung, indem er einen kryptografischen Handshake über die nächstgelegene isometrische Ebene sendet. Das Gitter antwortet mit einer signierten Bestätigung und baut einen sicheren Kanal auf.',
  },
  {
    step: '02',
    title: 'Ebenen-Routing',
    description:
      'Daten werden in isometrische Pakete segmentiert. Jedes Paket trägt planare Koordinaten, die seinen Pfad durch das Gitter bestimmen. Angrenzende Ebenen teilen Routingtabellen, die in Echtzeit aktualisiert werden.',
  },
  {
    step: '03',
    title: 'Vault-Commit',
    description:
      'Sobald die Zielebene erreicht ist, werden Daten an die Vault-Engine übergeben. Kryptografische Shards werden zur Fehlertoleranz über redundante Knoten innerhalb der Ebene verteilt.',
  },
  {
    step: '04',
    title: 'Verifizierung',
    description:
      'Das Gitter führt eine Konsensprüfung über zwei Drittel der aktiven Knoten in der Ebene aus. Nach der Verifizierung wird ein Bestätigungshash ausgegeben und die Daten werden abrufbar.',
  },
]

const specs = [
  { label: 'Protokoll', value: 'STARDIVE-SP/v2' },
  { label: 'Transport', value: 'Isometrisches UDP / TCP' },
  { label: 'Verschlüsselung', value: 'AES-256-GCM / ChaCha20' },
  { label: 'Persistenz', value: 'Verteilte Vault-Engine' },
  { label: 'Konsens', value: 'Ebenenbewusstes RAFT' },
  { label: 'Max. Ebenen', value: '2.048' },
]

export default function Protocol() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 mb-4 opacity-0 animate-fade-up">
            <span className="w-2 h-px bg-zinc-400 dark:bg-zinc-500" />
            <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase dark:text-zinc-500">
              Spezifikation v2.4
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-zinc-950 mb-8 opacity-0 animate-fade-up delay-100 dark:text-white">
            Das{' '}
            <span className="text-gradient">Protokoll</span>.
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed font-light opacity-0 animate-fade-up delay-200 dark:text-zinc-400">
            STARDIVE kommuniziert über ein proprietäres räumliches Protokoll, das für
            latenzarme Hochdurchsatz-Übertragung über isometrische Ebenen entwickelt wurde.
          </p>
        </div>

        {/* Protocol Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-32">
          {protocolSteps.map((item) => (
            <div
              key={item.step}
              className="flex gap-6 opacity-0 animate-fade-up group"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center font-mono text-sm text-zinc-500 shadow-sm transition-all duration-200 group-hover:border-zinc-400 group-hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-400 dark:group-hover:text-white">
                  {item.step}
                </div>
                <div className="w-px flex-1 bg-gradient-to-b from-zinc-200 to-transparent mt-3 dark:from-zinc-800" />
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-display font-semibold text-zinc-950 mb-3 tracking-tight dark:text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed font-light text-sm dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Specs Table */}
        <div className="glass-panel p-12 md:p-16 rounded-[2rem]">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300">
              <TerminalIcon />
            </div>
            <h2 className="text-2xl font-display font-bold text-zinc-950 tracking-tight dark:text-white">
              Technische Spezifikationen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between items-center p-4 rounded-xl bg-white/60 border border-zinc-200/70 dark:bg-zinc-900/30 dark:border-zinc-800/50"
              >
                <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">
                  {spec.label}
                </span>
                <span className="text-sm font-mono text-zinc-700 dark:text-zinc-300">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
