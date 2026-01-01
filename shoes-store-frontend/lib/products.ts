export interface Product {
    id: string;
    name: string;
    price: string;
    category: string;
    color: string;
    brand: string;
    image: string;
    images: string[];
    description: string;
    descriptionImage?: string;
    sizes: string[];
    colors: { name: string; hex: string }[];
    reviews: { rating: number; count: number };
}

export const products: Product[] = [
    // --- LADIES COLLECTION ---
    {
        id: "l1",
        name: "Air Max Plus OG",
        price: "180",
        category: "Athletic",
        color: "Pink",
        brand: "Nike",
        image: "/resource/items/lady1.png",
        images: ["/resource/items/lady1.png", "/resource/items/lady2.png", "/resource/items/lady3.png"],
        description: "The street-ready icon returns with vibrant pink accents and tuned air cushioning. Perfect for all-day comfort and a bold fashion statement.",
        descriptionImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 5", "US 6", "US 7", "US 8", "US 9"],
        colors: [{ name: "Pink", hex: "#ec4899" }, { name: "White", hex: "#ffffff" }],
        reviews: { rating: 4.8, count: 124 }
    },
    {
        id: "l4",
        name: "Chuck Taylor Lift",
        price: "75",
        category: "Classic",
        color: "White",
        brand: "Converse",
        image: "/resource/images/whiteNike.png",
        images: ["/resource/images/whiteNike.png", "/resource/images/whiteNike.png"],
        description: "The classic Chuck Taylor high-top, elevated. Features a double-stacked platform sole for extra height and a timeless canvas upper.",
        descriptionImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 5", "US 6", "US 7", "US 8"],
        colors: [{ name: "White", hex: "#ffffff" }],
        reviews: { rating: 4.4, count: 56 }
    },
    {
        id: "l6",
        name: "Yeezy Slide Pure",
        price: "70",
        category: "Casual",
        color: "Rose",
        brand: "Yeezy",
        image: "/resource/images/pinkN.png",
        images: ["/resource/images/pinkN.png", "/resource/images/pinkN.png"],
        description: "Minimalist design meets maximum comfort. The Yeezy Slide features injected EVA foam for lightweight durability and a unique outsole design for traction.",
        descriptionImage: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 5", "US 6", "US 7", "US 8", "US 9"],
        colors: [{ name: "Rose", hex: "#f43f5e" }],
        reviews: { rating: 4.7, count: 112 }
    },

    // --- GENTS COLLECTION ---
    {
        id: "g1",
        name: "Air Jordan 1 High",
        price: "180",
        category: "Classic",
        color: "Black",
        brand: "Jordan",
        image: "/resource/items/gent1.png",
        images: ["/resource/items/gent1.png", "/resource/items/gent2.png"],
        description: "The shoe that changed culture. The Air Jordan 1 High features premium leather and the iconic wings logo for an unmistakable courtside look.",
        descriptionImage: "https://images.unsplash.com/photo-1552346154-21d328109a27?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 9", "US 10", "US 11", "US 12"],
        colors: [{ name: "Black", hex: "#000000" }, { name: "Red", hex: "#ef4444" }],
        reviews: { rating: 4.9, count: 320 }
    },
    {
        id: "g2",
        name: "Ultraboost Light",
        price: "190",
        category: "Athletic",
        color: "White",
        brand: "Adidas",
        image: "/resource/items/gent2.png",
        images: ["/resource/items/gent2.png", "/resource/items/gent1.png"],
        description: "The lightest Ultraboost ever. Experience incredible energy return and comfort with the revolutionary Light Boost material.",
        descriptionImage: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 8", "US 9", "US 10", "US 11"],
        colors: [{ name: "White", hex: "#ffffff" }],
        reviews: { rating: 4.7, count: 180 }
    },
    {
        id: "g3",
        name: "Air Max 90",
        price: "130",
        category: "Casual",
        color: "Blue",
        brand: "Nike",
        image: "/resource/items/gent3.png",
        images: ["/resource/items/gent3.png", "/resource/items/gent1.png"],
        description: "Nothing as fly, nothing as comfortable, nothing as proven. The Air Max 90 stays true to its roots with the iconic Waffle sole and stitched overlays.",
        descriptionImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 8", "US 9", "US 10"],
        colors: [{ name: "Blue", hex: "#3b82f6" }],
        reviews: { rating: 4.6, count: 145 }
    },
    {
        id: "g4",
        name: "RS-X Efekt",
        price: "110",
        category: "Street",
        color: "Grey",
        brand: "Puma",
        image: "/resource/items/gent3.png",
        images: ["/resource/items/gent3.png", "/resource/items/gent1.png"],
        description: "Bulky, bold, and unapologetically retro. The RS-X Efekt pushes the boundaries of design with layered materials and vibrant style.",
        descriptionImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 8", "US 9", "US 10", "US 11"],
        colors: [{ name: "Grey", hex: "#9ca3af" }],
        reviews: { rating: 4.5, count: 68 }
    },
    {
        id: "g6",
        name: "Yeezy Boost 350",
        price: "230",
        category: "Luxury",
        color: "Grey",
        brand: "Yeezy",
        image: "/resource/items/gent2.png",
        images: ["/resource/items/gent2.png", "/resource/items/gent1.png"],
        description: "A triumph of engineering and style. The 350 V2 features a full-length boost midsole and re-engineered Primeknit for an adaptive fit.",
        descriptionImage: "https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 8", "US 9", "US 10", "US 11"],
        colors: [{ name: "Grey", hex: "#9ca3af" }],
        reviews: { rating: 4.8, count: 210 }
    },

    // --- LANDING PAGE ---
    {
        id: "lp1",
        name: "Neon Runner X1",
        price: "149",
        category: "Athletic",
        color: "Red/White",
        brand: "NIKE",
        image: "/resource/images/rednike.png",
        images: ["/resource/images/rednike.png", "/resource/images/rednike.png", "/resource/images/rednike.png"],
        description: "High-performance running shoe with neon accents and breathable structure. Engineered for maximum speed and comfort, featuring our signature responsive cushioning.",
        descriptionImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
        colors: [{ name: "Red", hex: "#ef4444" }, { name: "Black", hex: "#000000" }],
        reviews: { rating: 4.5, count: 50 }
    },
    {
        id: "lp2",
        name: "Velocity Blue",
        price: "129",
        category: "Athletic",
        color: "Blue/Grey",
        brand: "NIKE",
        image: "/resource/images/pinkN.png",
        images: ["/resource/images/pinkN.png", "/resource/images/pinkN.png"],
        description: "Lightweight and durable, perfect for daily training and long-distance comfort. The streamlined design minimizes drag while the outsole provides superior grip.",
        descriptionImage: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 6", "US 7", "US 8", "US 9", "US 10"],
        colors: [{ name: "Blue", hex: "#3b82f6" }],
        reviews: { rating: 4.2, count: 32 }
    },
    {
        id: "lp3",
        name: "Urban Trekker",
        price: "189",
        category: "Casual",
        color: "Green/Black",
        brand: "ADIDAS",
        image: "/resource/images/greenNike.png",
        images: ["/resource/images/greenNike.png", "/resource/images/greenNike.png"],
        description: "Rugged yet stylish, the Urban Trekker is designed for city exploration and outdoor adventures. Features a weather-resistant upper and trail-ready traction.",
        descriptionImage: "https://images.unsplash.com/photo-1541411191165-f184e0c52df2?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
        colors: [{ name: "Olive", hex: "#65a30d" }, { name: "Black", hex: "#000000" }],
        reviews: { rating: 4.7, count: 45 }
    },
    {
        id: "lp4",
        name: "Cloud Strider",
        price: "159",
        category: "Athletic",
        color: "Black/White",
        brand: "PUMA",
        image: "/resource/images/rednike.png",
        images: ["/resource/images/rednike.png", "/resource/images/rednike.png"],
        description: "Experience cloud-like cushioning with every step. Perfect for those who prioritize comfort and style in their daily rotation.",
        descriptionImage: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 7", "US 8", "US 9", "US 10"],
        colors: [{ name: "Black", hex: "#000000" }],
        reviews: { rating: 4.4, count: 28 }
    },

    // --- SALE COLLECTION ---
    {
        id: "s1",
        name: "Air Max Pulse",
        price: "99",
        category: "Nike",
        color: "Red",
        brand: "Nike",
        image: "/resource/images/rednike.png",
        images: ["/resource/images/rednike.png"],
        description: "FLASH SALE: The Air Max Pulse combines street style with rugged durability. Features a point-loaded Air unit for ultimate bounce.",
        descriptionImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 8", "US 9", "US 10", "US 11"],
        colors: [{ name: "Red", hex: "#ef4444" }],
        reviews: { rating: 4.6, count: 420 }
    },
    {
        id: "s2",
        name: "Ultraboost Light",
        price: "120",
        category: "Adidas",
        color: "Blue",
        brand: "Adidas",
        image: "/resource/images/pinkN.png", // Using as placeholder
        images: ["/resource/images/pinkN.png"],
        description: "FLASH SALE: Ultraboost Light is the lightest Ultraboost ever, with 30% lighter BOOST material for epic energy return.",
        descriptionImage: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 7", "US 8", "US 9", "US 10"],
        colors: [{ name: "Blue", hex: "#3b82f6" }],
        reviews: { rating: 4.8, count: 350 }
    },
    {
        id: "s3",
        name: "RS-X Efekt",
        price: "65",
        category: "Puma",
        color: "Pink",
        brand: "Puma",
        image: "/resource/images/rednike.png",
        images: ["/resource/images/rednike.png"],
        description: "FLASH SALE: The RS-X Efekt features a progressive aesthetic and angular details. A future-retro design for the bold.",
        descriptionImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 6", "US 7", "US 8"],
        colors: [{ name: "Pink", hex: "#ec4899" }],
        reviews: { rating: 4.5, count: 180 }
    },
    {
        id: "s4",
        name: "Jordan Retro 4",
        price: "175",
        category: "Jordan",
        color: "Black",
        brand: "Jordan",
        image: "/resource/images/rednike.png",
        images: ["/resource/images/rednike.png"],
        description: "FLASH SALE: The Air Jordan 4 Retro is inspired by the original 1989 design. Features a visible Air-Sole unit.",
        descriptionImage: "https://images.unsplash.com/photo-1552346154-21d328109a27?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 9", "US 10", "US 11"],
        colors: [{ name: "Black", hex: "#000000" }],
        reviews: { rating: 4.9, count: 520 }
    },
    {
        id: "s5",
        name: "Boost 350 V2",
        price: "150",
        category: "Yeezy",
        color: "Gold",
        brand: "Yeezy",
        image: "/resource/images/pinkN.png",
        images: ["/resource/images/pinkN.png"],
        description: "FLASH SALE: The 350 V2 redefined the silhouette. Primeknit upper and full-length boost cushioning.",
        descriptionImage: "https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 8", "US 9", "US 10"],
        colors: [{ name: "Gold", hex: "#fbbf24" }],
        reviews: { rating: 4.7, count: 310 }
    },
    {
        id: "s12",
        name: "Forum Low",
        price: "70",
        category: "Adidas",
        color: "Blue",
        brand: "Adidas",
        image: "/resource/images/pinkN.png",
        images: ["/resource/images/pinkN.png"],
        description: "FLASH SALE: The Forum Low brings back the golden era of basketball style. Features the iconic X-strap design.",
        descriptionImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000",
        sizes: ["US 7", "US 8", "US 9"],
        colors: [{ name: "Blue", hex: "#3b82f6" }],
        reviews: { rating: 4.4, count: 125 }
    }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
