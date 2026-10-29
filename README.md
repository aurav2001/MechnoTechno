# MechnoTechno — Industrial Machinery & Automation Solutions Platform 🏭⚙️

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.22-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**MechnoTechno** (Machine Services) is an industrial-grade e-commerce and machinery showcase web platform. It presents high-performance manufacturing solutions including single/double die paper dona & plate making machines, heavy-duty crank presses, hydraulic systems, CNC machining, and industrial automation services.

---

## 🌟 Key Features

- **🏭 Rich Industrial Product Catalog**:
  - Detailed product pages for Crank Machines, Hydraulic Presses, Paper Plate/Thali units, Roll-feeding units, and Precision Dies.
  - Comprehensive technical specifications (power consumption, motor HP, production capacity, die sizes, paper GSM).
  - High-resolution interactive image galleries with multi-angle views.

- **🛒 Integrated Cart & Inquiry Drawer**:
  - Slide-out Cart Drawer with real-time quantity adjustment, item totals, and clear cart actions.
  - Quick checkout / inquiry modal allowing customers to send orders and custom quotation requests directly.

- **🔍 Smart Search & Categorized Filtering**:
  - Dynamic keyword search from the navigation bar.
  - Instant category filtering (All, Machines, Raw Materials, Dies) with sorting options (Price, Popularity, Rating).

- **💬 Instant WhatsApp Lead Generation**:
  - Floating WhatsApp action button (+91 8130513030) for instant business inquiries, pricing quotations, and live video consultations.

- **📱 Sleek, Mobile-First UI/UX**:
  - Built with modern Tailwind CSS design principles, featuring fluid carousel banners, glassmorphism navigation, interactive badges, and smooth micro-animations.

- **❓ Interactive FAQ Accordion**:
  - Quick answers covering power consumption, motor warranties, raw material supplies (PE-coated rolls), installation training, and die-changing guidelines.

- **🌐 Dynamic SEO & Social Sharing**:
  - OpenGraph social meta tags and page titles dynamically managed with `react-helmet-async`.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Frontend UI component library |
| **Vite 5** | Next-generation fast build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling with responsive design |
| **React Router v6** | Client-side routing and deep-linking |
| **React Context API** | Global cart state management (`CartContext`) |
| **React Icons** | FontAwesome & Lucide icon sets |
| **React Helmet Async** | Dynamic SEO `<head>` tag management |

---

## 📂 Project Structure

```text
Machine site/
├── public/                     # Static public assets
├── src/
│   ├── assets/                 # Machine images, banners, and logos
│   ├── components/             # Reusable UI components
│   │   ├── CartDrawer.jsx      # Slide-out cart & item management drawer
│   │   ├── CheckoutModal.jsx   # Order inquiry and customer checkout modal
│   │   ├── FAQ.jsx             # Frequently Asked Questions accordion
│   │   ├── Footer.jsx          # Company footer with quick links & social icons
│   │   ├── Hero.jsx            # Dynamic banner carousel
│   │   ├── MachineCard.jsx     # Product card with price, rating & cart actions
│   │   ├── Navbar.jsx          # Responsive header with search & cart badge
│   │   ├── ScrollToTop.jsx     # Automatic route scroll restoration
│   │   └── SEO.jsx             # SEO metadata helper
│   ├── context/
│   │   └── CartContext.jsx     # Cart state management (add, remove, persist)
│   ├── data/
│   │   └── machines.js         # Machine specifications, pricing & gallery data
│   ├── pages/                  # Route view components
│   │   ├── Home.jsx            # Landing page
│   │   ├── OurProducts.jsx     # Catalog with filters & search
│   │   ├── MachineDetails.jsx  # Detailed machine overview & specifications
│   │   ├── Company.jsx         # About company & infrastructure
│   │   ├── Contact.jsx         # Contact form & location details
│   │   ├── Automation.jsx      # Industrial automation services
│   │   ├── Robotics.jsx        # Robotic manufacturing solutions
│   │   ├── CncMachining.jsx    # CNC precision engineering
│   │   ├── Fabrication.jsx     # Metal fabrication services
│   │   ├── SpecialPurpose.jsx  # Custom machinery engineering
│   │   ├── Testimonials.jsx    # Client reviews & ratings
│   │   └── Terms.jsx           # Terms of service & warranty guidelines
│   ├── App.jsx                 # Main application routes wrapper
│   ├── main.jsx                # Application root entry point
│   └── index.css               # Global Tailwind CSS definitions
├── index.html                  # HTML entry template
├── package.json                # Project dependencies and npm scripts
├── tailwind.config.js          # Tailwind CSS design system configuration
└── vite.config.js              # Vite build setup
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (Version 18.0 or higher recommended)
- `npm` or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/aurav2001/MechnoTechno.git
cd MechnoTechno
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production

```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

---

## 📞 Contact & Support

For machine inquiries, dealership opportunities, or technical support:

- **WhatsApp / Phone**: [+91 8130513030](https://wa.me/+918130513030)
- **Repository**: [https://github.com/aurav2001/MechnoTechno](https://github.com/aurav2001/MechnoTechno)
- **Email**: pandeygaurav9801@gmail.com

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
