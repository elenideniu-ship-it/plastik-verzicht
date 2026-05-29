import SectionHeader from '../components/SectionHeader';

export default function Diary() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeader 
        label="Dokumentation"
        title="Tägliches Protokoll" 
        description="Tägliche Aufzeichnungen des Plastikverbrauchs während des Untersuchungszeitraums."
      />
      
      <div className="mt-12 space-y-8">
        <div className="border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Woche 1: Bewusstseinsbildung</h3>
          <p className="text-muted-foreground">Dokumentation des normalen Plastikverbrauchs ohne Veränderungen.</p>
        </div>
        
        <div className="border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Woche 2-4: Plastikvermeidung</h3>
          <p className="text-muted-foreground">Aktive Reduktion von Plastikprodukten und Erprobung nachhaltiger Alternativen.</p>
        </div>
      </div>
    </div>
  );
}