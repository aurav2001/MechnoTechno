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
import pl1 from '../assets/pl1.webp';
import pl2 from '../assets/pl2.webp';
import pl3 from '../assets/pl3.webp';
import pl4 from '../assets/pl4.webp';


export const machines = [
    {
        id: 1,
        name: "Single Die Crank Machine",
        model: "PMDP-2000 PAPERDONA",
        description: "Plate, Thali making machine with die size 4 to 14 inch.",
        price: "₹45,000",
        priceVal: 45000,
        category: "machines",
        rating: 4.8,
        reviewsCount: 42,
        tag: "Bestseller",
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
        name: "Double Die Crank Machine",
        model: "PAPERDONA, PLATE, THALI",
        description: "Double die plate and thali making machine with die size 4 to 14 inch.",
        price: "₹75,000",
        priceVal: 75000,
        category: "machines",
        rating: 4.6,
        reviewsCount: 28,
        tag: "High Performance",
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
        name: "Single Die Hydraulic Machine",
        model: "PMDP-1700 Hydraulic",
        description: "Multipurpose Use Making Dona, Thali, Diamond, Plate In This Machine.",
        price: "₹1,20,000",
        priceVal: 120000,
        category: "machines",
        rating: 4.9,
        reviewsCount: 56,
        tag: "Top Rated",
        image: mc3,
        gallery: [mg1, mg2, mg3],
        featured: true,
        features: [
            "Many Types Of Moulds Can Be Changed",
            "Multipurpose Use - Dona, Thali, Diamond, Plate",
            "2Hp Induction Motor (SINGLE/THREE PHASE)",
            "Oil Provided With This Machine",
            "Oil Tank Capacity: 40 Litters",
            "Warranty: Induction Motor 1 YEAR"
        ],
        freeAccessories: [
            "Free Dies 7\" WRINKLE DIE",
            "Die Connector – 4 Pcs",
            "Heater Set Of Free Dies",
            "TEFLON SHEET",
            "Adjustable Wrench",
            "Spanner Sets",
            "Allen Key",
            "Fix Spanner"
        ],
        specs: {
            die_size: "4 Inch to 15 Inch",
            production: "1200-1700 Pcs/Hr (Depends on Paper Size and GSM)",
            paper_material: "80 GSM to 500 GSM (SHEET form)",
            power_source: "220V 50Hz / 440V 50Hz",
            power_consumption: "1.5 Units/Hr",
            motor: "2Hp Induction Motor (SINGLE/THREE PHASE)",
            oil_tank_capacity: "40 Litters",
            dimension: "24\"(L) x 17\"(W) x 43\"(H)",
            weight: "200 kg"
        }
    },
    {
        id: 4,
        name: "Fully Automatic Single Die High Speed Dona Plate Making Machine",
        model: "PMDP-2000",
        description: "High speed automatic machine for making paper dona, plate and thali with die size 4 to 14 inch.",
        price: "₹65,000",
        priceVal: 65000,
        category: "machines",
        rating: 4.7,
        reviewsCount: 19,
        tag: "Super Fast",
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
        name: "Silver Paper Plate Raw Material (Roll)",
        description: "High quality PE-coated silver paper roll for paper plate and dona making machines.",
        price: "₹75/kg",
        priceVal: 75,
        category: "raw-materials",
        rating: 4.5,
        reviewsCount: 128,
        tag: "Bestseller",
        image: mc11,
        features: ["PE-coated", "Multiple Sizes Available", "Dona/Thali/Plate Suitable", "Made in India"],
        specs: {
            GSM: "80-180 GSM",
            packaging_Type: "Roll form",
            color: "Silver/Golden",
            Usage: "Paper Plate Making"
        }
    },
    {
        id: 8,
        name: "Customized Printed Paper Plate Raw Material",
        description: "Printed paper roll for Dona and plates. Eco-friendly customized size and design, high quality finish raw material.",
        price: "₹90/kg",
        priceVal: 90,
        category: "raw-materials",
        rating: 4.8,
        reviewsCount: 94,
        tag: "Custom Printing",
        image: mc13,
        features: ["PE-coated", "Multiple Sizes Available", "Custom Design Support", "High Grade Paper"],
        specs: {
            GSM: "80-180 GSM",
            packaging_Type: "Roll form",
            color: "Customized Prints",
            Usage: "Paper Plate Making"
        }
    },
    {
        id: 9,
        name: "Paper Plate Making Machine Die",
        description: "Heavy duty steel dies for paper plate making. Plain, wrinkle, or diamond cutting patterns available.",
        price: "₹8,500",
        priceVal: 8500,
        category: "dies",
        rating: 4.9,
        reviewsCount: 73,
        tag: "Premium Quality",
        image: pl4,
        gallery: [pl1, pl2, pl3, pl4],
        features: ["Plain/Wrinkle/Diamond Pattern", "Capacity up to 3000 Pcs/Hr", "Heavy Duty Steel Construction", "Precision Engineering"],
        specs: {
            Material: "Carbon Steel",
            Size: "4 Inch to 13 Inch",
            For_Machine: "Crank/Hydraulic",
            Usage: "Plate/Dona Making"
        }
    }
];
