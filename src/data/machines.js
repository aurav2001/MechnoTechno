import mc1 from '../assets/mc1.jpg';
import mc2 from '../assets/mc2.jpg';
import mc3 from '../assets/mc3.jpg';
import mc4 from '../assets/mc4.jpg';
import mc5 from '../assets/mc5.jpg';
import mc6 from '../assets/mc6.jpg';
import mc8 from '../assets/mc8.jpg';

export const machines = [
    {
        id: 1,
        name: "Hydraulic Press X1",
        description: "High-pressure forming capability for automative parts.",
        price: "350 Rs.",
        image: mc1,
        features: ["50-ton pressure", "Automated feeding", "Safety sensors", "Digital control panel"],
        specs: {
            largest_size: "6720 x 4480 px (22.40 x 14.93 in.) - 300 dpi - RGB",
            voltage: "380V",
            weight: "2500 kg",
            dimensions: "2.5m x 1.5m x 3m"
        }
    },
    {
        id: 2,
        name: "CNC Milling Router",
        description: "Close-up detail of intricate engraved metal printing plates with ornate floral designs. These artistic creations are displayed in an industrial workshop setting, highlighting craftsmanship.",
        price: "25,500 Rs.",
        image: mc2,
        features: ["5-axis milling", "Coolant system", "High-speed spindle", "Tool changer (12 slots)"],
        specs: {
            largest_size: "6720 x 4480 px (22.40 x 14.93 in.) - 300 dpi - RGB",
            voltage: "380V",
            weight: "2500 kg",
            dimensions: "2.5m x 1.5m x 3m"
        }
    },
    {
        id: 3,
        name: "Industrial Robot Arm",
        description: "Automated assembly line unit for pick and place operations.",
        price: "$45,000",
        image: mc3,
        features: ["6 degrees of freedom", "Payload 20kg", "Teaching pendant", "Collision detection"],
        specs: {
            reach: "1.8 m",
            repeatability: "±0.05 mm",
            weight: "350 kg",
            ip_rating: "IP67"
        }
    },
    {
        id: 4,
        name: "Laser Cutter Pro",
        description: "Clean cuts on any material including metal and acrylic.",
        price: "$18,200",
        image: mc4,
        features: ["Fiber laser source", "Auto-focus head", "Fume extraction", "Nesting software"],
        specs: {
            power: "3 kW",
            wavelength: "1064 nm",
            cutting_speed: "30 m/min",
            max_thickness: "20 mm (steel)"
        }
    },
    {
        id: 5,
        name: "Conveyor Belt Sys",
        description: "Logistics handling simplified for warehouse optimization.",
        price: "$8,500",
        image: mc5,
        features: ["Modular design", "Variable speed", "Reversible", "Heavy load capacity"],
        specs: {
            width: "600 mm",
            length: "Customizable",
            speed: "0-60 m/min",
            load: "50 kg/m"
        }
    },
    {
        id: 6,
        name: "3D Printer Gigant",
        description: "Rapid prototyping scale for large industrial parts.",
        price: "$32,000",
        image: mc6,
        features: ["Dual extruder", "Heated build chamber", "Auto-leveling", "Remote monitoring"],
        specs: {
            build_volume: "1m x 1m x 1m",
            layer_height: "0.1 - 0.8 mm",
            materials: "PLA, ABS, PETG, Nylon",
            nozzle_temp: "Up to 400°C"
        }
    },
    {
        id: 7,
        name: "Welding Bot 3000",
        description: "Perfect seams every time with arc sensor technology.",
        price: "$55,000",
        image: mc8,
        features: ["MIG/MAG/TIG support", "Seam tracking", "Weaving patterns", "Water cooled"],
        specs: {
            current: "500 A",
            duty_cycle: "100%",
            gas_flow: "Auto-regulated",
            wire_speed: "25 m/min"
        }
    },
    {
        id: 8,
        name: "Generator Max",
        description: "Power backup for heavy industry. reliable 24/7.",
        price: "$28,000",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop",
        features: ["Silent monitoring enclosure", "Auto transfer switch", "Remote start", "Fuel efficient"],
        specs: {
            output: "500 kVA",
            fuel: "Diesel",
            tank_capacity: "1000 L",
            noise_level: "75 dB @ 7m"
        }
    },
    {
        id: 9,
        name: "Pneumatic Drill",
        description: "Heavy duty drilling and fastening solutions.",
        price: "$1,200",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop",
        features: ["Ergonomic grip", "High torque", "Keyless chuck", "Variable throttle"],
        specs: {
            air_pressure: "6-8 bar",
            torque: "25 Nm",
            weight: "1.5 kg",
            chuck_size: "13 mm"
        }
    },
    {
        id: 10,
        name: "Textile Loom v5",
        description: "High speed fabric weaving for modern textiles.",
        price: "$42,000",
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&auto=format&fit=crop",
        features: ["Jacquard ready", "Auto weft repair", "Touch screen interface", "Low vibration"],
        specs: {
            width: "360 cm",
            speed: "1200 picks/min",
            power: "7.5 kW",
            yarn_range: "Cotton, Synth, Wool"
        }
    },
];
