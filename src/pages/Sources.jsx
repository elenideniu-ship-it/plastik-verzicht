import SectionHeader from '../components/SectionHeader';

export default function Sources() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeader 
        label="Referenzen"
        title="Quellen & Literatur" 
        description="Verwendete Quellen und wissenschaftliche Referenzen für das Projekt."
      />
      
      <div className="mt-12">
        <ul className="space-y-4 text-muted-foreground">
          <li className="border-l-2 border-border pl-4">
            <span className="font-semibold">Plastikatlas 2019</span>
            <p className="text-sm">Heinrich-Böll-Stiftung & BUND</p>
          </li>
          <li className="border-l-2 border-border pl-4">
            <span className="font-semibold">The New Plastics Economy</span>
            <p className="text-sm">Ellen MacArthur Foundation</p>
          </li>
          <li className="border-l-2 border-border pl-4">
            <span className="font-semibold">Kunststoffabfallwirtschaft in Deutschland</span>
            <p className="text-sm">Bundesumweltamt</p>
          </li>
          <li className="border-l-2 border-border pl-4">
            <span className="font-semibold">Single-Use Plastics Report</span>
            <p className="text-sm">UNEP - United Nations Environment Programme</p>
          </li>
          <li className="border-l-2 border-border pl-4">
            <span className="font-semibold">Plastik in der Umwelt</span>
            <p className="text-sm">Greenpeace Deutschland</p>
          </li>
        </ul>
      </div>
    </div>
  );
}