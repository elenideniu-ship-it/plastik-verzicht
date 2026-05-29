import SectionHeader from '../components/SectionHeader';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeader 
        label="2026 Schulprojekt"
        title="Plastikverzicht — Ein Selbstversuch" 
        description="Wissenschaftliche Untersuchung über nachhaltiges Leben ohne Plastik im Alltag."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 className="text-lg font-semibold mb-4">Projektübersicht</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dieses wissenschaftliche Schulprojekt untersucht den Plastikverbrauch im täglichen Leben und mögliche nachhaltige Alternativen.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Über mehrere Wochen wurde der persönliche Plastikkonsum dokumentiert, kategorisiert und analysiert.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Projektteam</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• <strong>Medine</strong> - Projektleitung & Entwicklung</li>
            <li>• <strong>Sana</strong> - Datenerfassung & Analyse</li>
            <li>• <strong>Sara</strong> - Datenerfassung & Analyse</li>
            <li>• <strong>Arij</strong> - Datenerfassung & Analyse</li>
            <li>• <strong>Roaa</strong> - Datenerfassung & Analyse</li>
          </ul>
        </div>
      </div>
    </div>
  );
}