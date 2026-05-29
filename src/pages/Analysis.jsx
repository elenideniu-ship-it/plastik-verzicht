import SectionHeader from '../components/SectionHeader';

export default function Analysis() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeader 
        label="Auswertung"
        title="Datenanalyse" 
        description="Detaillierte Analyse der erfassten Daten und Kategorisierung des Plastikverbrauchs."
      />
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-4">Kategorien</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Lebensmittelverpackungen: 45%</li>
            <li>• Haushaltsartikel: 25%</li>
            <li>• Hygieneartikel: 20%</li>
            <li>• Sonstiges: 10%</li>
          </ul>
        </div>
        
        <div className="border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-4">Erkenntnisse</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Die Daten zeigen, dass der größte Anteil des Plastikverbrauchs durch Lebensmittelverpackungen entsteht. Nachhaltige Alternativen sind praktikabel und wirksam.
          </p>
        </div>
      </div>
    </div>
  );
}