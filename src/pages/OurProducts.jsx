import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MachineCard from '../components/MachineCard';
import { machines } from '../data/machines';
import { FaWhatsapp, FaSearch, FaSlidersH } from 'react-icons/fa';

const OurProducts = () => {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState(() => {
        return new URLSearchParams(location.search).get('search') || '';
    });
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('default');

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('search') || '';
        setSearchQuery(query);
    }, [location.search]);

    const categories = [
        { id: 'all', label: 'All Products' },
        { id: 'machines', label: 'Industrial Machines' },
        { id: 'raw-materials', label: 'Raw Materials' },
        { id: 'dies', label: 'Precision Dies' }
    ];

    // Filter and Sort logical mapping
    const filteredAndSortedProducts = useMemo(() => {
        let result = [...machines];

        // 1. Filter by category
        if (selectedCategory !== 'all') {
            result = result.filter(item => item.category === selectedCategory);
        }

        // 2. Filter by search query
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            result = result.filter(item =>
                item.name.toLowerCase().includes(query) ||
                (item.model && item.model.toLowerCase().includes(query)) ||
                item.description.toLowerCase().includes(query)
            );
        }

        // 3. Sorting
        if (sortBy === 'price-asc') {
            result.sort((a, b) => (a.priceVal || 0) - (b.priceVal || 0));
        } else if (sortBy === 'price-desc') {
            result.sort((a, b) => (b.priceVal || 0) - (a.priceVal || 0));
        } else if (sortBy === 'rating') {
            result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        } else if (sortBy === 'reviews') {
            result.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
        }

        return result;
    }, [searchQuery, selectedCategory, sortBy]);

    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            {/* Header Section */}
            <div className="bg-white py-16 px-4 mb-8 border-b border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="block text-primary uppercase tracking-[0.3em] text-sm font-bold mb-4 animate-pulse">
                        Industrial E-Store
                    </span>
                    <h1 className="text-4xl md:text-6xl uppercase font-display font-extrabold tracking-tight text-gray-900 m-0 relative inline-block">
                        Explore Our <span className="text-primary relative inline-block">
                            Store
                            <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary blur-md opacity-70 rounded-full"></span>
                        </span>
                    </h1>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-medium">
                        Browse premium-grade paper plate machines, carbon steel dies, and top-tier coated raw materials.
                    </p>
                </div>
            </div>

            {/* Filter and Control Bar Section */}
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-6 items-center justify-between">
                    
                    {/* Search Bar */}
                    <div className="relative w-full lg:max-w-md">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                            <FaSearch size={16} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search products, models, specs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-800"
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-gray-400 hover:text-gray-600 font-bold"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {/* Sorting Select */}
                    <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                            <FaSlidersH size={12} />
                            Sort By:
                        </span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 focus:border-primary outline-none transition-all cursor-pointer"
                        >
                            <option value="default">Default Relevance</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="rating">Top Rated ⭐</option>
                            <option value="reviews">Most Reviewed 💬</option>
                        </select>
                    </div>
                </div>

                {/* Category Navigation Tabs */}
                <div className="flex gap-3 overflow-x-auto pb-3 pt-6 mt-2 scrollbar-thin">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`flex-shrink-0 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                                selectedCategory === cat.id
                                    ? 'bg-gray-900 border-gray-900 text-white shadow-md'
                                    : 'bg-white border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Catalog Display Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
                {filteredAndSortedProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
                        {filteredAndSortedProducts.map((machine) => (
                            <MachineCard key={machine.id} machine={machine} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-16 text-center max-w-xl mx-auto">
                        <span className="text-5xl mb-4 block">🔍</span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Products Found</h3>
                        <p className="text-gray-500 text-sm">
                            We couldn't find any products matching "{searchQuery}". Try updating your search query or filters.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setSortBy('default');
                            }}
                            className="mt-6 px-6 py-3 bg-gray-900 text-white hover:bg-primary hover:text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/918130513030"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer"
                title="Chat on WhatsApp"
            >
                <FaWhatsapp className="text-3xl" />
            </a>
        </div>
    );
};

export default OurProducts;
