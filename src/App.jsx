import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import MachineDetails from './pages/MachineDetails';

import Company from './pages/Company';
import Projects from './pages/Projects';
import Automation from './pages/Automation';
import Robotics from './pages/Robotics';
import Warehouse from './pages/Warehouse';
import OurProducts from './pages/OurProducts';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<OurProducts />} />
                        <Route path="/company" element={<Company />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/automation" element={<Automation />} />
                        <Route path="/robotics" element={<Robotics />} />
                        <Route path="/warehouse" element={<Warehouse />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/machine/:id" element={<MachineDetails />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
