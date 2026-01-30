# Venpattu - Luxury Silk E-Commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS, replicating the luxury silk products shopping experience.

## Features

✨ **Modern Design**
- Clean, luxury-focused UI with gradient backgrounds
- Responsive layout that works on all devices
- Smooth animations and transitions
- Interactive product cards with hover effects

🛍️ **E-Commerce Functionality**
- Product catalog with ratings and reviews
- Shopping cart integration (UI ready)
- Category browsing
- Special offers and badges (Best Seller, Sale, New)
- Newsletter subscription

🎨 **UI Components**
- Sticky header with navigation
- Hero section with call-to-action buttons
- Product grid with filtering
- Category cards
- Footer with links
- Mobile-responsive menu

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to ` http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
venpattu-ecommerce/
├── index.html              # HTML template
├── main.tsx                # Application entry point
├── venpattu-ecommerce.tsx  # Main component
├── index.css               # Global styles with Tailwind
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Key Components

### VenpattuEcommerce (Main Component)
The main component containing:
- Header with navigation and cart
- Hero section with featured products
- Category browsing section
- Product listings (Best Sellers & Special Offers)
- Newsletter signup
- Footer

### ProductCard Component
Reusable product card featuring:
- Product image with hover effects
- Badges (Best Seller, Sale, New)
- Star ratings
- Price display with discounts
- Add to cart button

## Customization

### Colors
The color scheme uses Tailwind's built-in colors:
- Primary: Amber (amber-600)
- Accent: Pink (pink-50, pink-100)
- Background: White, Stone, and gradient combinations

To customize, edit the `tailwind.config.js` file.

### Products
Product data is defined in the `products` array. To add/modify products, edit the array in `venpattu-ecommerce.tsx`:

```typescript
const products: Product[] = [
  {
    id: 1,
    name: "Product Name",
    price: 99,
    originalPrice: 129,
    rating: 4.8,
    reviews: 1234,
    image: "image-identifier",
    badge: "BEST SELLER",
    discount: "-25%"
  },
  // Add more products...
];
```

## Future Enhancements

- [ ] Add product detail pages
- [ ] Implement shopping cart functionality
- [ ] Add user authentication
- [ ] Connect to backend API
- [ ] Implement search functionality
- [ ] Add product filtering and sorting
- [ ] Payment integration
- [ ] Order tracking
- [ ] User reviews and ratings
- [ ] Wishlist functionality

## Browser Support

- Chrome (latest)


## License

This project is created for demonstration purposes.

## Credits

Design inspired by the Venpattu luxury silk products website.
Built with React, TypeScript, and Tailwind CSS.
