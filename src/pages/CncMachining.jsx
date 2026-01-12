import { machines } from '../data/machines';
import MachineCard from '../components/MachineCard';

const CncMachining = () => {
    // Filter for CNC Milling Router (ID 2) and Pneumatic Drill (ID 9)
    const categoryMachines = machines.filter(machine => [2, 9].includes(machine.id));

    return (
        <div className="min-h-screen pt-32 pb-20 px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <span className="block text-primary uppercase tracking-[0.2em] text-sm font-bold mb-4">Precision Engineering</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                        CNC & <span className="text-primary">Machining</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        High-precision tools for milling, drilling, and shaping materials with micron-level accuracy.
                    </p>
                </header>

                {categoryMachines.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoryMachines.map((machine) => (
                            <MachineCard key={machine.id} machine={machine} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 py-12">No machines found in this category.</div>
                )}
            </div>
        </div>
    );
};

export default CncMachining;
