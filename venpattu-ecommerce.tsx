import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Search, User, Heart, Menu, X, ChevronRight } from 'lucide-react';

const FlashSaleCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        // Countdown logic
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to 12 hours when countdown reaches zero
          hours = 12;
          minutes = 0;
          seconds = 0;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
      {/* Flash Sale Icon & Text */}
      <div className="flex items-center gap-3">
        <div className="bg-white/20 p-3 rounded-full">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-2xl md:text-3xl font-bold">Flash Sale</span>
      </div>

      {/* Countdown Timer */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-medium">Ends in:</span>
        <div className="flex gap-2">
          <div className="bg-white/20 px-3 py-2 rounded-lg text-center min-w-[60px]">
            <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-wider">HRS</div>
          </div>
          <div className="text-2xl font-bold flex items-center">:</div>
          <div className="bg-white/20 px-3 py-2 rounded-lg text-center min-w-[60px]">
            <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-wider">MIN</div>
          </div>
          <div className="text-2xl font-bold flex items-center">:</div>
          <div className="bg-white/20 px-3 py-2 rounded-lg text-center min-w-[60px]">
            <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-wider">SEC</div>
          </div>
        </div>
      </div>

      {/* Discount Text */}
      <div className="text-lg md:text-xl font-semibold">
        Up to 40% off select items
      </div>
    </div>
  );
};
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  discount?: string;
}

type Page = 'home' | 'pillowcases' | 'sheets' | 'sleep-masks' | 'scarfs';

const VenpattuEcommerce: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeFilter, setActiveFilter] = useState('all');

  const products: Product[] = [
    {
      id: 1,
      name: "Mulberry Silk Pillowcase - Champagne",
      price: 99,
      rating: 4.8,
      reviews: 1234,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHCd9jDcRQ3aWdslaETfdN_Hq4Cgb6RaZIQ&s",
      badge: "BEST SELLER"
    },
    {
      id: 2,
      name: "Luxury Silk Scarf Set - Blush Pink",
      price: 149,
      originalPrice: 199,
      rating: 4.9,
      reviews: 856,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZAiC-6Jc7lGmFJVwq07xgzn2CI5kcRGOFw&s",
      badge: "SALE",
      discount: "-25%"
    },
    {
      id: 3,
      name: "Mulberry Silk Sheets Set - Cream",
      price: 299,
      rating: 4.7,
      reviews: 2341,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_iA7dNqESu2RmGoXLrmytZglnmNEguMMow&s"
    },
    {
      id: 4,
      name: "Pure Silk Sleep Mask - Cream",
      price: 45,
      rating: 4.9,
      reviews: 567,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJmDD0qVNq0dJv0DEK3-RZQ_vpexAZ7VUBQ&s",
      badge: "NEW"
    },
    {
      id: 5,
      name: "Luxury Silk Duvet Cover",
      price: 349,
      rating: 4.8,
      reviews: 432,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxEqHbLul-ESv6txNMmxeGZffZhCaf5T36w&s"
    },
    {
      id: 6,
      name: "Silk Hair Scrunchies - Neutral Collection",
      price: 28,
      rating: 5.0,
      reviews: 1456,
      image: "https://res.cloudinary.com/dc8efvmzk/image/upload/v1769773511/Gemini_Generated_Image_lgz06ylgz06ylgz0_bfv0jd.png",
      badge: "BEST SELLER"
    }
  ];

  // NEW: 8 products for Curated Selection section
  const curatedProducts: Product[] = [
    {
      id: 7,
      name: "Mulberry Silk Pillowcase - Champagne",
      price: 79,
      originalPrice: 99,
      rating: 4.9,
      reviews: 1247,
      image: "https://res.cloudinary.com/dc8efvmzk/image/upload/v1769772706/Gemini_Generated_Image_vjky6uvjky6uvjky_pimj8u.png",
      badge: "BEST SELLER"
    },
    {
      id: 8,
      name: "Luxury Silk Sheet Set - Blush Rose",
      price: 349,
      originalPrice: 449,
      rating: 4.8,
      reviews: 856,
      image: "https://res.cloudinary.com/dc8efvmzk/image/upload/v1769773402/Screenshot_2026-01-30_170411_ys4ccf.png",
      badge: "SALE",
      discount: "-22%"
    },
    {
      id: 9,
      name: "Pure Silk Sleep Mask - Ivory",
      price: 55,
      rating: 4.9,
      reviews: 1122,
      image: "https://res.cloudinary.com/dc8efvmzk/image/upload/v1769773334/Screenshot_2026-01-30_171118_ecood0.png",
      badge: "NEW"
    },
    {
      id: 10,
      name: "Premium Silk Thread Collection",
      price: 35,
      rating: 4.8,
      reviews: 289,
      image: "https://res.cloudinary.com/dc8efvmzk/image/upload/v1769773386/Screenshot_2026-01-30_170507_euo4vk.png",
      badge: "NEW"
    },
    {
      id: 11,
      name: "Silk Pillowcase - Pearl White",
      price: 75,
      rating: 4.8,
      reviews: 934,
      image: "https://res.cloudinary.com/dc8efvmzk/image/upload/v1769772706/Gemini_Generated_Image_vjky6uvjky6uvjky_pimj8u.png",
      badge: "LIMITED"
    },
    {
      id: 12,
      name: "King Size Silk Sheet Set - Cream",
      price: 429,
      originalPrice: 549,
      rating: 4.9,
      reviews: 445,
      image: "https://res.cloudinary.com/dc8efvmzk/image/upload/v1769773402/Screenshot_2026-01-30_170411_ys4ccf.png",
      badge: "LIMITED"
    },
    {
      id: 13,
      name: "Contoured Silk Eye Mask",
      price: 55,
      rating: 4.6,
      reviews: 1122,
      image: "https://res.cloudinary.com/dc8efvmzk/image/upload/v1769773334/Screenshot_2026-01-30_171118_ecood0.png"
    },
    {
      id: 14,
      name: "Artisan Silk Embroidery Thread",
      price: 35,
      rating: 4.8,
      reviews: 289,
      image: "https://res.cloudinary.com/dc8efvmzk/image/upload/v1769773386/Screenshot_2026-01-30_170507_euo4vk.png",
      badge: "BEST SELLER"
    }
  ];

  // Filter function for curated products
  const getFilteredProducts = () => {
    if (activeFilter === 'all') return curatedProducts;
    if (activeFilter === 'bestsellers') return curatedProducts.filter(p => p.badge === 'BEST SELLER');
    if (activeFilter === 'new') return curatedProducts.filter(p => p.badge === 'NEW');
    if (activeFilter === 'sale') return curatedProducts.filter(p => p.badge === 'SALE' || p.discount);
    if (activeFilter === 'limited') return curatedProducts.filter(p => p.badge === 'LIMITED');
    return curatedProducts;
  };

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      

      {product.badge && (
        <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold rounded-full ${
          product.badge === 'SALE' ? 'bg-red-600 text-white' : 
          product.badge === 'NEW' ? 'bg-emerald-600 text-white' : 
          product.badge === 'LIMITED' ? 'bg-amber-700 text-white' :
          'bg-amber-600 text-white'
        }`}>
          {product.badge}
        </div>
      )}
      {product.discount && (
        <div className="absolute top-4 right-4 z-10 bg-white px-2 py-1 text-xs font-bold text-red-600 rounded">
          {product.discount}
        </div>
      )}
      
     <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-pink-50 overflow-hidden">
  <img
    src={product.image}
    alt={product.name}
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold shadow-lg">
      Quick View
    </button>
  </div>
</div>

      
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          <button className="bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  // Blank placeholder page component
  const BlankPage: React.FC<{ pageName: string }> = ({ pageName }) => (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-pink-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">
          {pageName}
        </h1>
        <p className="text-gray-600 mb-8">This page is under construction</p>
        <button
          onClick={() => setCurrentPage('home')}
          className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );

  // Render different pages based on currentPage state
  if (currentPage === 'pillowcases') {
    return <BlankPage pageName="Pillowcases" />;
  }
  if (currentPage === 'sheets') {
    return <BlankPage pageName="Sheets" />;
  }
  if (currentPage === 'scarfs') {
    return <BlankPage pageName="Scarfs" />;
  }
  if (currentPage === 'sleep-masks') {
    return <BlankPage pageName="Sleep Masks" />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
              <h1 className="text-2xl font-serif font-bold tracking-wider text-gray-900">
                VENPATTU
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => setCurrentPage('pillowcases')} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">Products</button>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">Silk Guide</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search size={20} className="text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User size={20} className="text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart size={20} className="text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart size={20} className="text-gray-700" />
                <span className="absolute top-0 right-0 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <button onClick={() => { setCurrentPage('pillowcases'); setIsMenuOpen(false); }} className="block w-full text-left text-sm font-medium text-gray-700 hover:text-amber-600">Products</button>
              <a href="#" className="block text-sm font-medium text-gray-700 hover:text-amber-600">Silk Guide</a>
              <a href="#" className="block text-sm font-medium text-gray-700 hover:text-amber-600">About</a>
              <a href="#" className="block text-sm font-medium text-gray-700 hover:text-amber-600">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url('https://orange-lingerie.com/cdn/shop/articles/Blo_55_-_Silk_shopping_-_blog_featured_imageb_2000x.jpg?v=1596927160')`
  }}>

      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Experience the<br />
                <span className="text-amber-600">Luxury of Pure Silk</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Discover VENPATTU's exquisite collection of 22-momme mulberry silk products designed to transform your sleep and elevate your lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setCurrentPage('pillowcases')} className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl">
                  Shop Now 
                </button>
                <button onClick={() => setCurrentPage('scarfs')} className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold border-2 border-gray-200 hover:border-amber-600 transition-all">
                  Explore Scarfs
                </button>
              </div>
            </div>
            
            
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-stone-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">22m</div>
                <div className="text-sm text-gray-300">Premium Silk</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">4.9</div>
                <div className="text-sm text-gray-300">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">25000+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-gray-300">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Scrolling Announcement Bar */}
<div className="bg-stone-900 text-white py-4 overflow-hidden">
  <div className="animate-scroll flex whitespace-nowrap">
    <div className="flex items-center shrink-0">
      <span className="mx-8 text-sm font-medium">🎁 Use Code SILK20 for 20% Off Your First Order</span>
      <span className="mx-8 text-sm font-medium">☀️ New Collection: Spring Blush Series Now Available</span>
      <span className="mx-8 text-sm font-medium">✨ Premium 22 Momme Mulberry Silk</span>
      <span className="mx-8 text-sm font-medium">🚚 Free Shipping Over $150</span>
    </div>
    {/* Duplicate for seamless loop */}
    <div className="flex items-center shrink-0">
      <span className="mx-8 text-sm font-medium">🎁 Use Code SILK20 for 20% Off Your First Order</span>
      <span className="mx-8 text-sm font-medium">☀️ New Collection: Spring Blush Series Now Available</span>
      <span className="mx-8 text-sm font-medium">✨ Premium 22 Momme Mulberry Silk</span>
      <span className="mx-8 text-sm font-medium">🚚 Free Shipping Over $150</span>
    </div>
  </div>
</div>
      {/* Shop by Category */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of luxurious silk products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {[
    { name: 'Pillowcases', img: 'https://res.cloudinary.com/dc8efvmzk/image/upload/v1769772706/Gemini_Generated_Image_vjky6uvjky6uvjky_pimj8u.png', page: 'pillowcases' as Page },
    { name: 'Silk Sheets', img: 'https://res.cloudinary.com/dc8efvmzk/image/upload/v1769773402/Screenshot_2026-01-30_170411_ys4ccf.png', page: 'sheets' as Page },
    { name: 'Sleep Masks', img: 'https://res.cloudinary.com/dc8efvmzk/image/upload/v1769773334/Screenshot_2026-01-30_171118_ecood0.png', page: 'sleep-masks' as Page },
    { name: 'Scarfs', img: 'https://res.cloudinary.com/dc8efvmzk/image/upload/v1769773371/Screenshot_2026-01-30_171131_lrqyqy.png', page: 'scarfs' as Page }
  ].map((category, index) => (
    <div key={index} className="group cursor-pointer" onClick={() => setCurrentPage(category.page)}>
      <div className="relative w-25 h-25 aspect-square rounded-full bg-gradient-to-br from-amber-100 to-pink-100 overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-105">
        <img 
          src={category.img} 
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-center font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
        {category.name}
      </h3>
    </div>
  ))}
</div>
        </div>
      </section>
{/* Flash Sale Banner with Live Countdown */}
<section className="bg-gradient-to-r from-rose-900 to-rose-700 text-white py-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <FlashSaleCountdown />
  </div>
</section>
      {/* Best Sellers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                Finest Silk Products
              </h2>
              <p className="text-gray-600">Discover our most loved collections</p>
            </div>
            <button onClick={() => setCurrentPage('pillowcases')} className="hidden md:flex items-center gap-2 text-amber-600 font-semibold hover:gap-4 transition-all">
              View All <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} />

            ))}
          </div>
        </div>
      </section>

      {/* NEW: Curated Selection Section with Filter Buttons */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-full p-1 gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'all'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setActiveFilter('bestsellers')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'bestsellers'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Best Sellers
              </button>
              <button
                onClick={() => setActiveFilter('new')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'new'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                New Arrivals
              </button>
              <button
                onClick={() => setActiveFilter('sale')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'sale'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                On Sale
              </button>
              <button
                onClick={() => setActiveFilter('limited')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'limited'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Limited Edition
              </button>
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-12">
            <p className="text-sm text-amber-700 uppercase tracking-wider font-semibold mb-2">
              CURATED SELECTION
            </p>
          </div>

          {/* 8 Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getFilteredProducts().map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Special Offers
            </h2>
            <p className="text-gray-600">Limited time deals on premium silk products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(3, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-stone-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Join Our Silk Society
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to receive exclusive offers, silk care tips, and early access to new collections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">VENPATTU</h3>
              <p className="text-gray-400 text-sm">
                Premium mulberry silk products crafted with care for your ultimate comfort and luxury.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setCurrentPage('pillowcases')} className="hover:text-white transition-colors">Products</button></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Silk Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 VENPATTU. All rights reserved. Design by Claude.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VenpattuEcommerce;