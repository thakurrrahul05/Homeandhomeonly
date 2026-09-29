export interface BuyingGuide {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  categoryColor: string;
  image: string;
  date: string;
  readTime: string;
  shortDesc: string;
  verdict: string;
  topPick: string;
  testedCount: number;
  products: {
    name: string;
    award: string;
    rating: number;
    price: string;
    wattage?: string;
    capacity?: string;
    warranty: string;
    image: string;
    pros: string[];
    cons: string[];
    bestFor: string;
    verdict: string;
  }[];
  buyingChecklist: {
    title: string;
    desc: string;
  }[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  categoryColor: string;
  image: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  contentParagraphs: string[];
  keyTakeaways: string[];
}

export interface HomeProblem {
  id: string;
  question: string;
  iconType: 'bulb' | 'bed' | 'zap' | 'clock' | 'sparkle' | 'flame';
  category: string;
  quickAnswer: string;
  fullCause: string;
  stepByStepFix: string[];
  preventiveTip: string;
}

export const CATEGORIES = [
  {
    id: 'kitchen-appliances',
    name: 'Kitchen & Appliances',
    slug: 'kitchen-appliances',
    desc: 'Mixer grinders · kettles · cookware and more',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-woUNfJqvIjzTgwXmjmM9dFoJDlFqiEuupt6ySfhmjixPYNTcO-d8q3s56MRXKVVKRotRhouLCRKz_XwpQ3nSktK2W2Zg7C5ySQrH2oTQXfWHRzxT4gE7znrMDDCbkAmtiGJSGAw47D9yJfbowzjIbCmBjf2-Oz7pHhK6iMCbtqFU4BiAatINJGDtSkWndcMHgJY56rWqWNV4u4aBaNaYe4ynA8TnuQv3YzEW_PKAD7FOvXjPYPSnJg',
    accentColor: '#075B4F',
    articleCount: 28,
    subcategories: ['Mixer Grinders', 'Wet Grinders', 'Electric Kettles', 'Air Fryers', 'Pressure Cookers', 'Water Purifiers']
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    slug: 'home-decor',
    desc: 'Decor ideas · organization · styling tips',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbTA36hvh5G9EpQFA53X37y-c1PsPT0fsV58GBki9zmKcmgRSNIJO2NK4Ahdt4Gd7qt8snkyNaCvbqC86Ed31izKZH2vC_mmWW-dI_wTBanrBghjSjaDNchR5Aug8xeL57j0EHjPdF0XuDcDQRNtsYXGHfZJxoYDyzbilfDkNXZQQsfTtBSdL6-hM6akml1FP0HU5Ag4uRUYSjSQefO2-dmo-75Aa0r1ikDzcWiFsIw4yDzh3en-6Lig',
    accentColor: '#E96B72',
    articleCount: 19,
    subcategories: ['Living Room', 'Indoor Plants', 'Wall Accents', 'Lighting & Lamps', 'Festive Styling']
  },
  {
    id: 'home-furnishing',
    name: 'Home Furnishing',
    slug: 'home-furnishing',
    desc: 'Mattresses · furniture · everyday essentials',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Wsx9rU90j4Oh2clKAaEWuOYbxC6OuAkSIPCiWJnSgshGdmIbL7Q782-PauQVompmz0uuapYImSZrZ0BimEf6rKiVINiiKwyMcn_OdL2mxEhxmcftRDRZ9iq_6vpw0t1KGx6O2YIZqA7L_mfwmIDMCJO5gyRMB5PiVGNMCCIiYZBnPD3CADI1M4nRGzggy4SBHtJXzgA4HSnRyLe3nn1n38PV-swzNxOkKE7wT_AfPQt2FOZHiAX2ig',
    accentColor: '#0284C7',
    articleCount: 22,
    subcategories: ['Orthopedic Mattresses', 'Sofa Beds', 'Curtains & Blinds', 'Wardrobes', 'Bed Linen']
  },
  {
    id: 'buying-guides',
    name: 'Buying Guides',
    slug: 'buying-guides',
    desc: 'What to buy · what to compare · what to avoid',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh5hozyqpRakz84UCf_uUQCOo2n7YnPxgT7rPvuU4sx8z7fa3ESnxzEwOyVcFvo8CCOAF3ZwO_2T4tAnNvBsrwKVWa5P1hRIjo1xRdw-xE168tE2g1DnELiZO5ZyNNJKh03UMcp5m1odTh6Wv01M8FBMpuMsg4ExhE-ouloeZHPZSxT4wBkLnZBQJX-Afry7YK7bD02oKofY-kMBKN3tGWGANxA51N0UOKFyY5QO5_5khM6bhc6HxSjg',
    accentColor: '#D97706',
    articleCount: 35,
    subcategories: ['Top 5 Ranked', 'Price vs Value', 'Indian Kitchen Tested', 'Buyer Checklists']
  }
];

export const BUYING_GUIDES: BuyingGuide[] = [
  {
    id: 'guide-1',
    slug: '5-best-wet-grinders-indian-kitchens',
    title: '5 Best Wet Grinders for Indian Kitchens',
    category: 'Kitchen Appliances',
    categorySlug: 'kitchen-appliances',
    categoryColor: '#075B4F',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlEoODQgM8bupDcO1vP1X-UNK0W2Dnncriqh4AhnGXA1kE64-vZydEflyRLjBlGkZOSyp6x2usFSPPxjj8YuFV2ucZYK_ox6Vbnk3hUOdjzcp21mJwEiNBe-ky8InXezoeKayOig6d6Y0cdZFC8Ocy-b0HnubykM1sFUXsQcyrvOjzxcua5Y6vDeY2v95h2MEplR3l2b-SgrQm1b6ElR53UkvS1p8PrRMgdSSKgz7KQ1wwOrWRtKa4rQ',
    date: 'Sep 28, 2025',
    readTime: '8 min read',
    shortDesc: 'Tested for fermentation-ready idli batter, vada consistency, and motor durability without heating up.',
    verdict: 'If you make South Indian breakfast batter twice a week or more, the Elgi Ultra Dura+ remains our undisputed gold standard for ultra-smooth batter and whisper-quiet operation.',
    topPick: 'Elgi Ultra Dura+ 1.25L Table Top',
    testedCount: 14,
    products: [
      {
        name: 'Elgi Ultra Dura+ 1.25L Table Top Wet Grinder',
        award: 'Best Overall for Most Families',
        rating: 4.8,
        price: '₹7,990',
        wattage: '85 Watts (High Torque)',
        capacity: '1.25 Litres',
        warranty: '10-Year Motor Warranty',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlEoODQgM8bupDcO1vP1X-UNK0W2Dnncriqh4AhnGXA1kE64-vZydEflyRLjBlGkZOSyp6x2usFSPPxjj8YuFV2ucZYK_ox6Vbnk3hUOdjzcp21mJwEiNBe-ky8InXezoeKayOig6d6Y0cdZFC8Ocy-b0HnubykM1sFUXsQcyrvOjzxcua5Y6vDeY2v95h2MEplR3l2b-SgrQm1b6ElR53UkvS1p8PrRMgdSSKgz7KQ1wwOrWRtKa4rQ',
        pros: [
          'Conical grinding stones crush grains faster without heating batter',
          'AISI 304 food-grade stainless steel drum resists rust and scratches',
          'Batter cleaner attachment makes scooping effortless',
          'Remarkably low vibration and quiet motor'
        ],
        cons: [
          'Drum capacity (1.25L) suits nuclear families of 3–5 members',
          'Requires two hands to lock the arm safely'
        ],
        bestFor: 'Families wanting restaurant-soft idlis with minimal noise and zero batter heating.',
        verdict: 'The gold standard wet grinder in Indian kitchens for over a decade. Reliable, quiet, and delivers fluffy batter in under 25 minutes.'
      },
      {
        name: 'Butterfly Smart 2-Litre Table Top Wet Grinder',
        award: 'Best Value for Large Households',
        rating: 4.6,
        price: '₹4,499',
        wattage: '150 Watts',
        capacity: '2.0 Litres',
        warranty: '2-Year Product Warranty',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-woUNfJqvIjzTgwXmjmM9dFoJDlFqiEuupt6ySfhmjixPYNTcO-d8q3s56MRXKVVKRotRhouLCRKz_XwpQ3nSktK2W2Zg7C5ySQrH2oTQXfWHRzxT4gE7znrMDDCbkAmtiGJSGAw47D9yJfbowzjIbCmBjf2-Oz7pHhK6iMCbtqFU4BiAatINJGDtSkWndcMHgJY56rWqWNV4u4aBaNaYe4ynA8TnuQv3YzEW_PKAD7FOvXjPYPSnJg',
        pros: [
          'Generous 2L drum handles large weekly batches in one go',
          'Shockproof ABS body with compact footprint',
          'Affordable price point under ₹4,500',
          'Dual cylindrical stones provide even texture'
        ],
        cons: [
          'Slightly higher hum than Elgi Ultra',
          'Drum takes a little effort to detach for washing'
        ],
        bestFor: 'Joint families or weekly meal prep cooks looking for high capacity at an honest price.',
        verdict: 'Unbeatable value for money. Built tough for heavy grinding and big South Indian families.'
      },
      {
        name: 'Preethi Iconic 2L Table Top Wet Grinder',
        award: 'Fastest Grinding Technology',
        rating: 4.5,
        price: '₹6,890',
        wattage: '150 Watts',
        capacity: '2.0 Litres',
        warranty: '5-Year Motor Warranty',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh5hozyqpRakz84UCf_uUQCOo2n7YnPxgT7rPvuU4sx8z7fa3ESnxzEwOyVcFvo8CCOAF3ZwO_2T4tAnNvBsrwKVWa5P1hRIjo1xRdw-xE168tE2g1DnELiZO5ZyNNJKh03UMcp5m1odTh6Wv01M8FBMpuMsg4ExhE-ouloeZHPZSxT4wBkLnZBQJX-Afry7YK7bD02oKofY-kMBKN3tGWGANxA51N0UOKFyY5QO5_5khM6bhc6HxSjg',
        pros: [
          'Quick Grinding Stone setup reduces run time by 15%',
          'Advanced ventilation keeps body cool during long runs',
          'Comes with atta kneader and coconut scraper attachments',
          'Sturdy base with anti-skid rubber feet'
        ],
        cons: [
          'Heavier unit, best kept on counter rather than cabinet storage'
        ],
        bestFor: 'Busy kitchens that also want chapati dough kneading and fresh coconut scraping.',
        verdict: 'A versatile 3-in-1 workhorse that grinds batter, kneads soft dough, and scrapes fresh coconut.'
      }
    ],
    buyingChecklist: [
      {
        title: 'Stone Shape: Conical vs. Cylindrical',
        desc: 'Conical stones provide better surface contact, creating micro-air pockets in urad dal batter for maximum idli fluffiness without motor strain.'
      },
      {
        title: 'Motor Wattage & Batter Temperature',
        desc: 'Higher wattage is not always better for wet grinders. Look for 85W–150W high-torque induction motors that run slow and cool, preventing yeast damage.'
      },
      {
        title: 'Food-Grade 304 Stainless Steel Drum',
        desc: 'Always verify AISI 304 grade drums. Cheaper 202 grade drums can develop microscopic pitting and black residue when exposed to fermented tamarind or salt.'
      },
      {
        title: 'Ease of Cleaning & Weight of Stones',
        desc: 'Check if the roller stone assembly can be lifted with one hand. Heavy single-piece stone holders cause wrist fatigue during daily kitchen washdowns.'
      }
    ]
  },
  {
    id: 'guide-2',
    slug: 'how-to-choose-the-right-mattress',
    title: 'How to Choose the Right Mattress',
    category: 'Home Furnishing',
    categorySlug: 'home-furnishing',
    categoryColor: '#0284C7',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8bQCjoWgKjN9fcd1orwNZxWLOBjKidR8btM-5DSc10amPwT8AVj6hKufe6drx33iBD_Cd_OJ4Tj-EVOnhqcsaG8k2l21eTFxFeNasGdhqK6iKw577Bei61vp4mKywmrbrKWRXd7faZ-71umuqk5AHA1ohSTl3BKYGfhbSoBS2w6yxn_KRs_Ld_KHjr8p8_m6OxI7J_dYIFfs8k3MIA752j-ZkxLebzr7KNsTNs6WOPX0BM7Qxm8MBow',
    date: 'Sep 26, 2025',
    readTime: '10 min read',
    shortDesc: 'Pocket spring vs bonded foam vs natural latex: what really supports your lower back in humid climates.',
    verdict: 'For Indian body weights and summer bedroom temperatures, a Medium-Firm Pocket Spring or Natural Latex mattress prevents heat trapping and keeps the spine naturally neutral.',
    topPick: 'SleepyCat Ortho Luxe Hybrid 8-inch',
    testedCount: 18,
    products: [
      {
        name: 'SleepyCat Ortho Luxe Hybrid 8-inch',
        award: 'Best Orthopedic Back Support',
        rating: 4.8,
        price: '₹14,999',
        warranty: '10-Year Warranty & 100-Night Trial',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8bQCjoWgKjN9fcd1orwNZxWLOBjKidR8btM-5DSc10amPwT8AVj6hKufe6drx33iBD_Cd_OJ4Tj-EVOnhqcsaG8k2l21eTFxFeNasGdhqK6iKw577Bei61vp4mKywmrbrKWRXd7faZ-71umuqk5AHA1ohSTl3BKYGfhbSoBS2w6yxn_KRs_Ld_KHjr8p8_m6OxI7J_dYIFfs8k3MIA752j-ZkxLebzr7KNsTNs6WOPX0BM7Qxm8MBow',
        pros: [
          'Zero motion transfer with pocketed steel coils',
          'Cooling gel-infused memory foam top layer',
          'High-density edge foam prevents rolling off the sides',
          'Machine-washable bamboo fiber zipper cover'
        ],
        cons: [
          'Takes 24 hours to fully expand after unboxing',
          'Slightly heavy to rotate alone'
        ],
        bestFor: 'Couples and anyone suffering from lumbar tightness or morning stiffness.',
        verdict: 'The ideal sweet spot of pressure relief and responsive pocket spring pushback for Indian sleeping habits.'
      },
      {
        name: 'Wakefit Orthopedic Dual Comfort Mattress',
        award: 'Best Value Everyday Mattress',
        rating: 4.6,
        price: '₹8,499',
        warranty: '7-Year Warranty',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLlywelQYvVLc8acvhwngQxRQM7BFQv-H_v-Jcxl023E8Uuars5Z_8VnMY5vNuJjUGSxQq8_sVuA0mjudn8knt4TnzLaIbB83Xm-L_BSlIvWN_HPq2E_quG3P9iTGq4vkAkN6A9eucy5UUsU16ldfiSC5CeRWFwU1PUglW4dMen73TN-odQ5rSQ_3_WunHbdWiZmpOCZ37RCYlCsvs0hF6ifUORsJoHzm1rGsdZ9_4ZGWAo8r6r0YXPg',
        pros: [
          'Reversible dual feel: medium firm on one side, firm on the other',
          'Tested over 500,000+ Indian households',
          'Breathable open-cell memory foam structure',
          'Excellent value per square inch'
        ],
        cons: [
          'Foam-only design feels warmer in un-airconditioned bedrooms during peak May/June heat'
        ],
        bestFor: 'First-time apartment buyers looking for certified orthopedic support on a budget.',
        verdict: 'India’s most popular direct-to-consumer mattress for good reason: durable, supportive, and budget-friendly.'
      }
    ],
    buyingChecklist: [
      {
        title: 'Firmness Rating for Your Sleep Position',
        desc: 'Back sleepers need 6.5–7.5/10 firmness to prevent hip sagging. Side sleepers require 5.5–6.5/10 to cushion shoulders and pelvic bones.'
      },
      {
        title: 'Thermal Dissipation in Indian Summers',
        desc: 'Standard dense polyurethane foam traps body heat. Always look for open-cell latex, pin-core ventilation, or hybrid pocket spring cores for continuous airflow.'
      }
    ]
  },
  {
    id: 'guide-3',
    slug: 'best-electric-kettles-what-to-check',
    title: 'Best Electric Kettles: What to Check Before Buying',
    category: 'Kitchen Appliances',
    categorySlug: 'kitchen-appliances',
    categoryColor: '#075B4F',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-Ii6Y_PwlvXueSLPv0fkTdABhpR3u-bSlvURGvtMmGp_vFiumeBFRiimfUUDyUa-scwA-jOLom3XFbo7gltXgw-QT1ts676b_Xwq53iA1IO8abDGSZUfMwG7AS9oy3O2n3BDSj_EMqX2fIKq-YAM9RiXzxwKJ3pDiX8ZEofalMDfTUHJbnAf7emgx5zzREl_DLEpVlYywUZ0w2BWThBPIDMp8ExotrMfhyLtu9oGGP9t9hiS36I-bww',
    date: 'Sep 24, 2025',
    readTime: '6 min read',
    shortDesc: 'Double-wall cool touch bodies, concealed heating elements, and scaling prevention for Indian tap water.',
    verdict: 'Never buy single-wall steel kettles if you have kids or elderly parents at home. A double-wall 1.5L kettle boils 1 liter in 2.5 minutes while remaining safely cool to the touch.',
    topPick: 'Philips HD9306 1.5L Double Wall Cordless',
    testedCount: 11,
    products: [
      {
        name: 'Philips HD9306 1.5-Litre Electric Kettle',
        award: 'Safest Cool-Touch Exterior',
        rating: 4.7,
        price: '₹1,999',
        wattage: '1800W Fast Boil',
        capacity: '1.5 Litres',
        warranty: '2-Year International Warranty',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-Ii6Y_PwlvXueSLPv0fkTdABhpR3u-bSlvURGvtMmGp_vFiumeBFRiimfUUDyUa-scwA-jOLom3XFbo7gltXgw-QT1ts676b_Xwq53iA1IO8abDGSZUfMwG7AS9oy3O2n3BDSj_EMqX2fIKq-YAM9RiXzxwKJ3pDiX8ZEofalMDfTUHJbnAf7emgx5zzREl_DLEpVlYywUZ0w2BWThBPIDMp8ExotrMfhyLtu9oGGP9t9hiS36I-bww',
        pros: [
          'Double-wall vacuum insulation keeps exterior body cool (never burns hands)',
          'Boils water 40% faster than traditional stove gas burners',
          '360-degree pirouette cordless base with cord winder',
          'UK Strix thermostat prevents dry boil automatically'
        ],
        cons: [
          'No digital temperature preset for green tea'
        ],
        bestFor: 'Everyday morning hot water, green tea, instant noodles, and baby formula sterilization.',
        verdict: 'Bulletproof reliability and safety. The gold standard cool-touch electric kettle for busy Indian households.'
      }
    ],
    buyingChecklist: [
      {
        title: 'Double-Wall vs Single-Wall Construction',
        desc: 'Single-wall steel kettles reach 95°C on the outer surface, posing severe burn risks. Double-wall plastic/steel layers keep outer walls safe at under 40°C.'
      },
      {
        title: 'Hard Water Descaling Port',
        desc: 'Indian borewell and municipal water quickly deposits white calcium scale. Look for wide mouths of at least 85mm diameter so your hand fits inside for descaling with vinegar.'
      }
    ]
  }
];

export const LATEST_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'simple-home-decor-ideas-transform-space',
    title: 'Simple Home Decor Ideas to Transform Your Space',
    category: 'Home Decor',
    categorySlug: 'home-decor',
    categoryColor: '#E96B72',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyC2NBcEC6mG9fis5UMc6d6Ka_mntkAaQZv-8QdcmEyOY2VTHpiP0u3P6nr0qxuivX_5E-S8aI76Qac_sqRAuPe9JHY3qOLn3NvkDaZIMEmG6z-geQooEZLjzd76OrvEjC0zQJOkrK2SaTbGpFttiyZXEj0mJW9E6vu2ISHe7qDxW6sFbhm5S78aRR1-b82RXrsl-MqUoSilm9Fas79A2TszlLNuhFoVHMCDPDAOtejO9R4BQkYeJzMg',
    date: 'Sep 25, 2025',
    readTime: '5 min read',
    excerpt: 'Small tweaks that make living rooms feel spacious, inviting, and layered without expensive contractor renovations.',
    author: {
      name: 'Pooja Venkatesh',
      role: 'Interior Stylist & Home Editor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Hb4VpIfC3L8TFMzx1ppc9kQcVVonZp0BGTyEviIWLNYNGFxq5hdHGzvJBztEHXEBu_WeP9UsPbRaxRs1djbZU1xHKjumdpWvXHvyWyjt6XU9Nx3hp_-0MxOAAlxgFa1D9cfvi63tsz2SeupmSq3JweVcChMnQzk3GWTlwECGPbzoTu0BqujSPVa7afZdeptI2O0liFiAfQGDHV-a0gWNVsYM12li-X12eekO4qz4LvapOP3u1ahzHg'
    },
    contentParagraphs: [
      'Transforming an Indian home doesn’t require knocking down walls or spending lakhs on interior decorators. Most urban apartments struggle with three distinct challenges: low natural daylight in corridor living rooms, cluttered storage, and harsh overhead ceiling tube-lights.',
      'By introducing layered lighting—such as warm floor lamps with 2700K bulbs and brass wall sconces—you instantly break the cold institutional feel of flat overhead LEDs. Pair this with hardy indoor plants like ZZ Plants, Areca Palms, and Money Plants in terracotta pots to add texture and breathable freshness.',
      'Next, audit your textile palette. Replace heavy, dust-trapping synthetic velvet curtains with sheer cotton linen blends that let natural breezes flow while filtering harsh afternoon glare. A hand-woven jute or dhurrie rug grounds the conversation area and ties mismatched furniture pieces together.'
    ],
    keyTakeaways: [
      'Switch harsh 6500K cool white tube lights for 2700K warm ambient table & floor lamps',
      'Use vertical floating wooden shelves to display brass heirlooms and potted pothos without eating floor space',
      'Choose breathable linen or slub cotton cushion covers in rust, sage green, and warm ochre tones'
    ]
  },
  {
    id: 'art-2',
    slug: 'impact-kettle-style-and-functionality',
    title: 'The Impact Kettle: A Perfect Blend of Style and Functionality',
    category: 'Kitchen Appliances',
    categorySlug: 'kitchen-appliances',
    categoryColor: '#075B4F',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX3cHfhL-81X8ieCCz8eNS3g37A3vbddJ-olxn6-jDbGg8RA5BMUBA9W6gQRdNlpraiVDoS_hYReioVuFrDJdK5mXRmrGP3W0YPojfRpm93yvxKXMe1ITWzbxU6zBN0ajY3H9nR4jehjh2LjiF28-cK7Q4Ncm9HJCQL-5w45XorUzZH6dIsK7L-VnD5rKzjxYG1j4P-T-f23GLB79J0vuwVGPPVmVfWA3cmWbUMRhyg_I6Z6wTCI-CHQ',
    date: 'Sep 20, 2025',
    readTime: '4 min read',
    excerpt: 'How borosilicate glass and gooseneck spouts changed the morning tea ritual in contemporary Indian kitchens.',
    author: {
      name: 'Aditya Rao',
      role: 'Appliance Testing Lead',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY4KnZEtrembLpETWKpiY_nt7RSps0qGxW4xWXUVwyoyV9_Z8iLw9PvoDdwO0_8DIT4nBdo9i3b3-u_PA8qttFwXGO_wZSbHd8e-glcxI5yjssSWfT8L5Ek-L3Sqd3qiqWJFswOMGy-RJqVBACkXBEzvNxR5awLf9eM_GlTyfT6k9-Dn5WnRj2ZozEG1ULlhYWDpEqf1NpQSjSPBTtZHorrB5YASz54zegnLEWF-v6nYNf9xFgZZqYng'
    },
    contentParagraphs: [
      'For decades, water in Indian homes was boiled in a humble stovetop patila. While nostalgic, heating a pot on gas consumes more time, creates scale stains on cookware, and lacks automatic shut-off safety when you step away.',
      'Modern glass and stainless steel kettles heat water in less than half the time using 1500W to 1800W internal elements. Because electric elements transfer 90%+ of electrical energy directly into water compared to 40% efficiency on gas burners, you save both time and fuel costs.',
      'Borosilicate glass kettles with blue LED indicators add aesthetic elegance to dining credenzas, allowing you to monitor water clarity and scale deposits before they harden.'
    ],
    keyTakeaways: [
      'Electric kettles boil water at 90% thermal efficiency compared to only ~40% on standard gas hobs',
      'Borosilicate thermal-shock glass won’t crack under sudden temperature shifts and doesn’t retain metallic odors',
      'Essential for instant breakfast porridge, filter coffee decoction, and sterilizing baby feeding utensils'
    ]
  },
  {
    id: 'art-3',
    slug: '7-best-mattresses-for-back-pain-2025',
    title: '7 Best Mattresses for Back Pain in 2025',
    category: 'Home Furnishing',
    categorySlug: 'home-furnishing',
    categoryColor: '#0284C7',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLlywelQYvVLc8acvhwngQxRQM7BFQv-H_v-Jcxl023E8Uuars5Z_8VnMY5vNuJjUGSxQq8_sVuA0mjudn8knt4TnzLaIbB83Xm-L_BSlIvWN_HPq2E_quG3P9iTGq4vkAkN6A9eucy5UUsU16ldfiSC5CeRWFwU1PUglW4dMen73TN-odQ5rSQ_3_WunHbdWiZmpOCZ37RCYlCsvs0hF6ifUORsJoHzm1rGsdZ9_4ZGWAo8r6r0YXPg',
    date: 'Sep 15, 2025',
    readTime: '7 min read',
    excerpt: 'Medical consensus on orthopedic support: why extra-hard coir is actually harming your lumbar spine.',
    author: {
      name: 'Dr. Neha Shenoy',
      role: 'Ergonomics & Posture Contributor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOG3EC-lAzNBUwMWT1q8n9-FQ1WEQS9lP-8Zn-ArDltYM9IZBgEcn7hwoTzb3DPrH4bmaT4krlmtHoDd4vZ6wNlhY9gysRYq_XpFdZTJquYR9-Kgve-1oihqiIF_mAxzfvrgPOC2aGBJk-g4M-q8_CAEABzma7fE0nwx-OVtq_NL0xAfb1Vy2KcYOhawotdslmSiBKRTBNNoygvfuHie3Qrk2htlafaS3Hr1hy5gKwgMil-NyVQASXUQ'
    },
    contentParagraphs: [
      'In India, generations grew up hearing that sleeping on a rock-hard cotton or rubberized coir mattress is the cure for lower back pain. Modern spinal biomechanics demonstrates the exact opposite: an overly rigid mattress forces the lumbar spine to bridge unnaturally in the air, straining lower back muscles throughout the night.',
      'True orthopedic support requires progressive zoned contouring. The heavier pelvic area must sink just enough to maintain horizontal spinal alignment, while the lumbar curve receives firm pushback.',
      'Our orthopedic testing team evaluated 19 leading mattresses across three criteria: spinal neutrality with pressure-sensor mapping, edge support for easy sit-to-stand movement, and thermal comfort during sultry summer nights.'
    ],
    keyTakeaways: [
      'Avoid brick-hard mattresses; target medium-firm (6.5 to 7.5 on 10) to support spinal natural S-curve',
      'Zoned pocket springs prevent pelvic over-sink while isolating partner movement completely',
      'Look for certifications like CertiPUR-US and OEKO-TEX for non-toxic, odor-free foam formulations'
    ]
  }
];

export const HOME_PROBLEMS: HomeProblem[] = [
  {
    id: 'prob-1',
    question: 'Why does my mixer smell while grinding?',
    iconType: 'bulb',
    category: 'Kitchen Appliances',
    quickAnswer: 'A slight burning smell during the first 3–5 uses is normal (factory motor varnish curing). In older mixers, it indicates overloaded dry grinding or worn carbon brushes.',
    fullCause: 'Mixer grinder motors (universal motors) run at 18,000–22,000 RPM. When grinding hard spices (turmeric, dry red chillies) without intervals, the internal copper winding heats up. In brand new units, protective insulation varnish evaporates, causing a noticeable chemical smell.',
    stepByStepFix: [
      'Never run the mixer grinder continuously for more than 90 seconds. Always use 15-second pauses.',
      'Inspect the base of the machine for proper ventilation; do not operate on a soft cloth or plastic mat that blocks bottom air vents.',
      'If the machine is older than 2 years and emits black smoke or crackling sparks, stop immediately—the carbon brushes need ₹150 replacement at a local service center.',
      'Check if the coupler rubber teeth are stripping due to forcing misaligned jar locks.'
    ],
    preventiveTip: 'Always grind tough ingredients like whole turmeric or chana dal in pulse mode first before switching to speed 3.'
  },
  {
    id: 'prob-2',
    question: 'How do I choose a mattress for back support?',
    iconType: 'bed',
    category: 'Home Furnishing',
    quickAnswer: 'Skip extra-hard coir and ultra-soft pillowy memory foam. Pick a 7/10 medium-firm hybrid mattress that keeps your spine in a straight horizontal line.',
    fullCause: 'Sleeping on an overly soft mattress causes the heavy pelvis to sink, bending the spine into a C-curve. Sleeping on a rock-hard mattress fails to support the natural inward curve of the lower back (lumbar gap), making stabilizing muscles contract all night.',
    stepByStepFix: [
      'Perform the hand slide test: Lie flat on your back on your prospective mattress. Try sliding your flat hand under the small of your lower back.',
      'If your hand slides through with massive empty space, the mattress is too firm.',
      'If you have to force your hand under your body because you are deeply sunk in, the mattress is too soft.',
      'Opt for high-resilience (HR) base foam paired with individual pocket springs that cushion pressure points independently.'
    ],
    preventiveTip: 'Rotate your mattress head-to-toe once every 90 days to prevent body impression sagging.'
  },
  {
    id: 'prob-3',
    question: 'Is a 1000W mixer actually better?',
    iconType: 'zap',
    category: 'Kitchen Appliances',
    quickAnswer: 'Not for everyone. 750W is the ideal sweet spot for 95% of Indian cooking. 1000W is only necessary if you frequently grind whole hard turmeric roots or raw batter daily.',
    fullCause: 'Manufacturers market 1000W as a status upgrade, but higher wattage motors generate significantly louder decibels (up to 92 dB vs 80 dB), consume more electricity, and can heat up chutneys so fast they lose their vibrant green cilantro color.',
    stepByStepFix: [
      'If your daily cooking involves onion-tomato pastes, coconut chutneys, idli batter, and dry garam masalas: a 750W heavy-duty copper motor is quieter, cooler, and lasts just as long.',
      'Choose 1000W only if you operate commercial tiffin services, grind fibrous whole turmeric roots monthly, or need large 1.5L wet grinding in under 2 minutes.',
      'Verify motor wire material: A 750W 100% pure copper motor always outlasts an inferior 1000W copper-clad aluminum (CCA) motor.'
    ],
    preventiveTip: 'Prioritize blade quality and jar flow-breaker design over pure wattage numbers.'
  },
  {
    id: 'prob-4',
    question: 'Do I really need an electric kettle?',
    iconType: 'clock',
    category: 'Kitchen Appliances',
    quickAnswer: 'Yes, if you value 5 minutes saved every morning. It boils water twice as fast as LPG stoves, auto-cuts off safely, and uses less electricity than gas cost.',
    fullCause: 'Stovetop boiling wastes over 60% of heat into the kitchen air. A cordless kettle submerges the heating element directly in water, boiling 1 liter in 2.5 minutes while automatically switching off without boiling dry.',
    stepByStepFix: [
      'Ideal for instant warm water with lemon/honey without washing oily pots.',
      'Pre-boil water in 2 minutes for pasta, dal, or rice before pouring into pressure cooker, saving 10 minutes of cooking time.',
      'Safe for teenagers and elderly parents who might forget a pot on gas burners.',
      'Keep it descaled once a month using 2 tablespoons of white vinegar and water.'
    ],
    preventiveTip: 'Always choose a 304 food-grade double-wall body so the outside remains cool to touch.'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'insta-1',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Hb4VpIfC3L8TFMzx1ppc9kQcVVonZp0BGTyEviIWLNYNGFxq5hdHGzvJBztEHXEBu_WeP9UsPbRaxRs1djbZU1xHKjumdpWvXHvyWyjt6XU9Nx3hp_-0MxOAAlxgFa1D9cfvi63tsz2SeupmSq3JweVcChMnQzk3GWTlwECGPbzoTu0BqujSPVa7afZdeptI2O0liFiAfQGDHV-a0gWNVsYM12li-X12eekO4qz4LvapOP3u1ahzHg',
    caption: 'Cozy living room corners that don’t cost a fortune. Warm wood + linen = peace 🛋️',
    likes: '1.2k'
  },
  {
    id: 'insta-2',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDhqoXGpOUkaZSpZyDU3IG9djE0mNpvXL9ibtV5Rm4zvG8Ug0GqOVU-8q130UW7bKi9XjsS5O2H2JYIENQi4V6zbsH19DRZVH6sUQYH6-qT-JFtYblyVEYdDNl6iqSLT10wqg7f7zel9DLi4lEKIzjzLCw534dhl9WIRAUHSWTahMZAa6dMDEmon1zEc6Y-rPgj6EAAdo5g6aNEbP0ICa8tDVdiC8O1Arh1L7Hulcny4aBeOX9yyuz4w',
    caption: 'Plant parenting 101: Terracotta pots breath better than painted ceramic! 🌱',
    likes: '894'
  },
  {
    id: 'insta-3',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY4KnZEtrembLpETWKpiY_nt7RSps0qGxW4xWXUVwyoyV9_Z8iLw9PvoDdwO0_8DIT4nBdo9i3b3-u_PA8qttFwXGO_wZSbHd8e-glcxI5yjssSWfT8L5Ek-L3Sqd3qiqWJFswOMGy-RJqVBACkXBEzvNxR5awLf9eM_GlTyfT6k9-Dn5WnRj2ZozEG1ULlhYWDpEqf1NpQSjSPBTtZHorrB5YASz54zegnLEWF-v6nYNf9xFgZZqYng',
    caption: 'Morning brew station aesthetics. Quiet rituals for productive days ☕',
    likes: '2.4k'
  },
  {
    id: 'insta-4',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOG3EC-lAzNBUwMWT1q8n9-FQ1WEQS9lP-8Zn-ArDltYM9IZBgEcn7hwoTzb3DPrH4bmaT4krlmtHoDd4vZ6wNlhY9gysRYq_XpFdZTJquYR9-Kgve-1oihqiIF_mAxzfvrgPOC2aGBJk-g4M-q8_CAEABzma7fE0nwx-OVtq_NL0xAfb1Vy2KcYOhawotdslmSiBKRTBNNoygvfuHie3Qrk2htlafaS3Hr1hy5gKwgMil-NyVQASXUQ',
    caption: 'The secret to hotel-level bed styling at home: 300TC breathable cotton bedding 🛏️',
    likes: '1.7k'
  },
  {
    id: 'insta-5',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrMoqlY054lOoJyQSlOi7zVDCKiAPLpwPR8PmTxdhDzWY7EfYAVi66fpJp3kUN0ACNLUKSXC7MiKObdTJZZEWLRRq2Xq2Ti_sLgJChOs9O2SAddonf4YM0EZkOHTu7IkfoFUz1xinPWz7bFB6-EERviI4aaPqv_Zaz03pyH1tPCtt1uTCxWJmHB8594y-AtGkLmkWVQn6thFxT_mr_tin3CmC69yu8gCBvf1wCVDY5yMrRbpMetG8Y0A',
    caption: 'Floating ledges keep your floors clean and your souvenirs spotlighted ✨',
    likes: '950'
  }
];
