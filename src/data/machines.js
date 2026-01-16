import mc1 from '../assets/mc1.jpeg';
import mc2 from '../assets/mc2.webp';
import mc3 from '../assets/mc3.webp';
import mc4 from '../assets/mc4.jpeg';
// mc4 missing, will use URL
import mc5 from '../assets/mc5.jpeg';
import mc6 from '../assets/mc6.jpeg';
import mc8 from '../assets/mc8.jpg';
import mc9 from '../assets/mc9.jpeg';
import mc10 from '../assets/mc10.jpeg';
import mc11 from '../assets/mc11.jpeg';
import mc12 from '../assets/mc12.jpeg';
import mc13 from '../assets/mc13.jpeg';
import mc14 from '../assets/mc14.jpeg';
import mc15 from '../assets/mc15.jpeg';
import mc7 from '../assets/mc7.jpeg';
import mg1 from '../assets/mg1.jpeg';
import mg2 from '../assets/mg2.jpeg';
import mg3 from '../assets/mg3.jpeg';


export const machines = [
    {
        id: 1,
        name: "Single Die Crank",
        model: "PMDP-2000 PAPERDONA",
        description: "Plate, Thali making machine with die size 4 to 14 inch.",
        price: "350 Rs.",
        image: mc1,
        gallery: [mg1, mg2],
        featured: true,
        features: [
            "Many Types Of Moulds Can Be Changed",
            "Channel Based Machine",
            "Pulley 20 Inch 1-B And 20 Inch 2-B High Quality",
            "This Is High Speed Crank Machine",
            "Roller 15 Inch High Quality",
            "This Machine Uses Many Types of Papers Such As Silver Colour And Mica Paper"
        ],
        specs: {
            die_size: "4 to 14 Inch",
            production: "1300 to 2000 PCS/Hour (Depends on Product Size)",
            paper_material: "80 to 180 GSM",
            weight: "250 KG (Approx)",
            power: "1.5 KW",
            power_source: "220V Single Phase",
            motor: "0.5 HP",
            power_consumption: "1.5 to 2 Units/Hr Approx"
        }
    },
    {
        id: 2,
        name: "Double Die Crank",
        model: "PAPERDONA, PLATE, THALI",
        description: "Double die plate and thali making machine with die size 4 to 14 inch.",
        price: "25,500 Rs.",
        image: mc2,
        gallery: [mg1, mg2],
        featured: true,
        features: [
            "Many Types Of Moulds Can Be Changed",
            "Channel Based Machine",
            "Pulley 20 Inch 1-B And 20 Inch 2-B",
            "Roller 18 Inch High Quality",
            "This Machine Uses Many Types Of Papers Such As Silver Colour And Mica Paper"
        ],
        specs: {
            die_size: "4 to 14 Inch",
            production: "1300 to 2600 PCS/Hour (Depends on Product Size)",
            paper_material: "80 to 120 GSM",
            weight: "300 KG (Approx)",
            power: "2 KW",
            power_source: "220V Single Phase",
            motor: "0.5 HP – 1440 RPM (Single Phase)",
            power_consumption: "1.5 to 2.5 Units/Hr Approx"
        }
    },
    {
        id: 3,
        name: "Single Die Hydraulic",
        description: "Automated assembly line unit for pick and place operations.",
        price: "INR 45,000",
        image: mc3,
        gallery: [mg1, mg2, mg3],
        featured: true,
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
        name: "Manual Hand Press Dona Plate Machine",
        model: "PMDP-700",
        description: "Manual hand press machine for making paper dona, plate and thali with die size 4 to 8 inch.",
        price: "Contact for Price",
        image: mc4,
        featured: false,
        features: [
            "Easy Manual Operation",
            "LPG Gas / Electricity Operation",
            "Compact & Portable Design",
            "Low Maintenance Cost",
            "Suitable for Small Scale Production"
        ],
        specs: {
            die_size: "4 to 8 Inch",
            production: "1000 PCS/Hour (Depends on Product Size)",
            paper_material: "80 to 180 GSM",
            weight: "80 KG (Approx)",
            operation_type: "LPG Gas / Electricity"
        }
    },
    {
        id: 5,
        name: "Full Automatic Single Die Angle Based Paper Plate Making Machine",
        model: "PMDP-1000",
        description: "Automatic angle based machine for making paper dona, plate and thali with die size 4 to 10 inch.",
        price: "28,500 Rs.",
        image: mc5,
        featured: true,
        features: [
            "Angle Based Machine",
            "Many Types Of Moulds Supported",
            "Many Types Of Papers Can Be Used",
            "Fully Automatic Operation",
            "High Speed Production"
        ],
        specs: {
            die_size: "4 to 10 Inch",
            production: "1000 to 1200 PCS/Hour (Depends on Product Size)",
            paper_material: "80 to 150 GSM",
            weight: "180 KG (Approx)",
            power: "1.5 KW",
            power_source: "220V Single Phase",
            motor: "0.5 HP",
            power_consumption: "1.5 to 2 Units/Hr Approx"
        }
    },
    {
        id: 6,
        name: "Fully Automatic Single Die High Speed Dona Plate Making Machine",
        model: "PMDP-2000",
        description: "High speed automatic machine for making paper dona, plate and thali with die size 4 to 14 inch.",
        price: "Contact for Price",
        image: mc6,
        featured: true,
        features: [
            "Many Types Of Moulds Can Be Changed",
            "Channel Based Machine",
            "Pulley 20 Inch 1-B And 20 Inch 2-B High Quality",
            "This Is High Speed Crank Machine",
            "Roller 15 Inch High Quality",
            "This Machine Uses Many Types of Papers Such As Silver Colour And Mica Paper"
        ],
        specs: {
            die_size: "4 to 14 Inch",
            production: "1300 to 2000 PCS/Hour (Depends on Product Size)",
            paper_material: "80 to 180 GSM",
            weight: "250 KG (Approx)",
            power: "1.5 KW",
            power_source: "220V Single Phase",
            motor: "0.5 HP",
            power_consumption: "1.5 to 2 Units/Hr Approx"
        }
    },
    {
        id: 7,
        name: "Fully Automatic Dona Plate Double Die Centralized Pulley Fully Channel Based Machine",
        model: "PMDP-3500 (HD)",
        description: "High speed double die automatic machine for making paper dona, plate and thali with die size 4 to 14 inch.",
        price: "Contact for Price",
        image: mc8,
        featured: true,
        features: [
            "Heating Controlling System Inbuilt",
            "Separated Die System",
            "Many Types Of Moulds Can Be Changed",
            "Channel Based Machine",
            "Pulley 20 Inch 1-B And 20 Inch 2-B",
            "Roller 15 Inch High Quality",
            "This Machine Uses Many Types Of Papers"
        ],
        specs: {
            die_size: "4 to 14 Inch",
            production: "2600 to 4200 PCS/Hour (Depends on Product Size)",
            paper_material: "80 to 180 GSM",
            weight: "450 KG (Approx)",
            power: "2 KW",
            power_source: "220V 50Hz",
            motor: "0.5 HP - 1440 RPM (Single Phase)",
            power_consumption: "2 to 2.5 Units/Hr Approx"
        }
    },
    {
        id: 8,
        name: "Fully Automatic Dona Plate Double Die Motor Fully Channel Based Machine",
        model: "PMDP-4000 (HD)",
        description: "High speed double die automatic machine for making paper dona, plate and thali with die size 4 to 14 inch.",
        price: "Contact for Price",
        image: mc9,
        featured: true,
        features: [
            "Heating Controlling System Inbuilt",
            "Separated Die System",
            "Many Types Of Moulds Can Be Changed",
            "Channel Based Machine",
            "Pulley 20 Inch 1-B And 20 Inch 2-B",
            "Roller 15 Inch High Quality",
            "This Machine Uses Many Types Of Papers"
        ],
        specs: {
            output: "500 kVA",
            fuel: "Diesel",
            tank_capacity: "1000 L",
            noise_level: "75 dB @ 7m"
        }
    },
    {
        id: 9,
        name: "Fully Automatic Dona Plate Double Die Motorized Fully Channel Based Machine",
        model: "PMDP-5000 (HD)",
        description: "High speed double die automatic machine for making paper dona, plate and thali with die size 4 to 14 inch.",
        price: "Contact for Price",
        image: mc10,
        featured: true,
        features: [
            "Heating Controlling System Inbuilt",
            "Separated Die System",
            "Many Types Of Moulds Can Be Changed",
            "Channel Based Machine",
            "Pulley 20 Inch 1-B And 20 Inch 2-B",
            "Roller 15 Inch High Quality",
            "This Machine Uses Many Types Of Papers"
        ],
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
        image: mc11,
        features: ["Jacquard ready", "Auto weft repair", "Touch screen interface", "Low vibration"],
        specs: {
            width: "360 cm",
            speed: "1200 picks/min",
            power: "7.5 kW",
            yarn_range: "Cotton, Synth, Wool"
        }
    },
    {
        id: 11,
        name: "Auto-Packer 500",
        description: "High-speed automated packaging solution for final product boxing.",
        price: "$15,500",
        image: mc12,
        features: ["50 boxes/min", "Auto-sealing", "Label applicator", "Compact footprint"],
        specs: {
            speed: "50 ppm",
            box_size_max: "50x50x50 cm",
            power: "220V",
            air_consumption: "5 cfm"
        }
    },
    {
        id: 12,
        name: "Vision Inspector Q1",
        description: "AI-powered visual inspection system for quality control.",
        price: "$22,000",
        image: mc13,
        features: ["99.9% defect detection", "Real-time analytics", "Cloud integration", "Multi-camera support"],
        specs: {
            camera: "4K Global Shutter",
            processing: "NVIDIA Jetson",
            interface: "Ethernet/USB3",
            lighting: "Adaptive LED"
        }
    },
    {
        id: 13,
        name: "Industrial Furnace T-1000",
        description: "Precision heat treatment for metallurgy applications.",
        price: "$65,000",
        image: mc14,
        features: ["PID control", "Ceramic insulation", "Safety interlocks", "Data logging"],
        specs: {
            max_temp: "1200°C",
            chamber_volume: "500 L",
            heating_rate: "10°C/min",
            power: "50 kW"
        }
    }
];
