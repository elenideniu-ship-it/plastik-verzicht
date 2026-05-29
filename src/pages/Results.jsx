import SectionHeader from '../components/SectionHeader';

export default function Results() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeader 
        label="Projekt-Abschluss"
        title="Ergebnisse & Fazit" 
        description="Zusammenfassung der Findings und Schlussfolgerungen aus dem Projekt."
      />
      
      <div className="mt-12 space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Haupterkenntnisse</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>✓ Plastikvermeidung ist im Alltag umsetzbar</li>
            <li>✓ Nachhaltige Alternativen sind verfügbar</li>
            <li>✓ Kleine Gewohnheitsänderungen führen zu großen Effekten</li>
            <li>✓ Umweltbewusstsein steigt durch aktive Teilnahme</li>
          </ul>
        </div>
        
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Fazit</h3>
          <p className="text-muted-foreground leading-relaxed">
            Das Projekt zeigt, dass ein bewusstes Leben ohne Plastik möglich und sinnvoll ist. Die positiven Auswirkungen auf die Umwelt überwiegen die Herausforderungen deutlich.
          </p>
        </div>
      </div>
    </div>
  );
}