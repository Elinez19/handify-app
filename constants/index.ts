import check from "@/assets/images/check.png";
import getStarted from "@/assets/images/get-started.png";
import message from "@/assets/images/message.png";
import noResult from "@/assets/images/no-result.png";
import onboarding2 from "@/assets/images/onboarding-image-1.png";
import onboarding3 from "@/assets/images/onboarding-image-2.png";
import onboarding1 from "@/assets/images/onboarding-image.png";
import signUpCar from "@/assets/images/signup-car.png";
import splashIcon from "@/assets/images/splash-icon.png";
import splash from "@/assets/images/splash.png";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

type IconConfig = {
  name: any;
  library: any;
};

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  getStarted,
  signUpCar,
  check,
  noResult,
  message,
  splashIcon,
  splash,
};

export const icons: Record<string, IconConfig> = {
  arrowDown: { name: "chevron-down", library: Ionicons },
  arrowUp: { name: "chevron-up", library: Ionicons },
  backArrow: { name: "arrow-back", library: Ionicons },
  chat: { name: "chatbubble", library: Ionicons },
  checkmark: { name: "checkmark", library: Ionicons },
  close: { name: "close", library: Ionicons },
  dollar: { name: "attach-money", library: MaterialIcons },
  email: { name: "mail", library: Ionicons },
  eyecross: { name: "eye-off", library: Ionicons },
  google: { name: "logo-google", library: Ionicons },
  home: { name: "home", library: Ionicons },
  list: { name: "list", library: Ionicons },
  lock: { name: "lock-closed", library: Ionicons },
  map: { name: "map", library: Ionicons },
  marker: { name: "location", library: Ionicons },
  out: { name: "log-out", library: Ionicons },
  person: { name: "person", library: Ionicons },
  pin: { name: "pin", library: Ionicons },
  point: { name: "radio-button-on", library: Ionicons },
  profile: { name: "person-circle", library: Ionicons },
  search: { name: "search", library: Ionicons },
  selectedMarker: { name: "location", library: Ionicons },
  star: { name: "star", library: Ionicons },
  target: { name: "camera", library: Ionicons },
  to: { name: "arrow-forward", library: Ionicons },
};

export const onboarding = [
  {
    id: 1,
    title: "Welcome To Handify",
    description:
      "Find trusted handymen for all your home service needs. From plumbing to electrical work, we've got you covered.",
    image: onboarding1,
  },
  {
    id: 2,
    title: "Book Services Easily",
    description:
      "Browse through verified handymen, check their ratings and reviews, then book your service with just a few taps.",
    image: onboarding2,
  },
  {
    id: 3,
    title: "Get Work Done Right",
    description:
      "Track your service requests, communicate with handymen, and ensure quality work with our secure platform.",
    image: onboarding3,
  },
];

export const workCategories = [
  { id: "all", title: "All" },
  { id: "ongoing", title: "On Going Works", badge: "16" },
  { id: "completed", title: "Completed Works" },
];

export const serviceCategories = [
  { id: "repair", name: "Repair", icon: "construct" },
  { id: "cleaning", name: "Cleaning", icon: "sparkles" },
  { id: "painting", name: "Painting", icon: "color-palette" },
  { id: "plumbing", name: "Plumbing", icon: "water" },
  { id: "laundry", name: "Laundry", icon: "shirt" },
];

export const topRatedProviders = [
  {
    id: 1,
    name: "Antony Jose",
    profession: "Professional Painter",
    rate: "₹349/hrs",
    rating: "4.7 (5k)",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    name: "David Michel",
    profession: "Professional Painter",
    rate: "₹349/hrs",
    rating: "4.8 (3k)",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Sarah Wilson",
    profession: "Professional Cleaner",
    rate: "₹299/hrs",
    rating: "4.9 (2k)",
    image: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: 4,
    name: "Chris Evans",
    profession: "Professional Plumber",
    rate: "₹399/hrs",
    rating: "4.6 (4k)",
    image: "https://i.pravatar.cc/150?img=30",
  },
  {
    id: 5,
    name: "Sophia Lee",
    profession: "Professional Cleaner",
    rate: "₹259/hrs",
    rating: "4.8 (2.5k)",
    image: "https://i.pravatar.cc/150?img=40",
  },
];

export const ongoingServices = [
  {
    id: 1,
    name: "David Michel",
    profession: "Professional Painter",
    rate: "₹349/hrs",
    progress: 75,
    progressText: "Almost done!",
    image: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    profession: "Professional Cleaner",
    rate: "₹299/hrs",
    progress: 40,
    progressText: "In progress...",
    image: "https://i.pravatar.cc/100?img=15",
  },
];

export const serviceCards = [
  {
    id: 1,
    title: "Home Deep Cleaning",
    description:
      "Professional deep cleaning service for your entire home. Includes kitchen, bathrooms, living areas, and bedrooms.",
    badge: "Popular",
    price: "₹2,499",
    category: "Cleaning",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    reviewAvatars: [
      "https://i.pravatar.cc/40?img=1",
      "https://i.pravatar.cc/40?img=2",
      "https://i.pravatar.cc/40?img=3",
      "https://i.pravatar.cc/40?img=4",
    ],
    rating: "4.8",
    reviewCount: "127",
  },
  {
    id: 2,
    title: "Plumbing Repair",
    description:
      "Expert plumbing services for leaks, clogs, and installations. 24/7 emergency service available.",
    badge: "Emergency",
    price: "₹1,299",
    category: "Plumbing",
    image:
      "https://images.unsplash.com/photo-1581578731548-c63695cc4942?w=400&h=300&fit=crop",
    reviewAvatars: [
      "https://i.pravatar.cc/40?img=5",
      "https://i.pravatar.cc/40?img=6",
      "https://i.pravatar.cc/40?img=7",
    ],
    rating: "4.9",
    reviewCount: "89",
  },
  {
    id: 3,
    title: "Interior Painting",
    description:
      "Professional interior painting with premium quality paints. Transform your space with expert color consultation.",
    badge: "Premium",
    price: "₹3,999",
    category: "Painting",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    reviewAvatars: [
      "https://i.pravatar.cc/40?img=8",
      "https://i.pravatar.cc/40?img=9",
      "https://i.pravatar.cc/40?img=10",
      "https://i.pravatar.cc/40?img=11",
      "https://i.pravatar.cc/40?img=12",
    ],
    rating: "4.7",
    reviewCount: "203",
  },
  {
    id: 4,
    title: "Appliance Repair",
    description:
      "Fix your home appliances with certified technicians. Same-day service for most common issues.",
    badge: "Fast",
    price: "₹899",
    category: "Repair",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    reviewAvatars: [
      "https://i.pravatar.cc/40?img=13",
      "https://i.pravatar.cc/40?img=14",
      "https://i.pravatar.cc/40?img=15",
    ],
    rating: "4.6",
    reviewCount: "156",
  },
  {
    id: 5,
    title: "Laundry Service",
    description:
      "Professional laundry and dry cleaning service. Pickup and delivery available at your convenience.",
    badge: "Convenient",
    price: "₹199",
    category: "Laundry",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    reviewAvatars: [
      "https://i.pravatar.cc/40?img=16",
      "https://i.pravatar.cc/40?img=17",
      "https://i.pravatar.cc/40?img=18",
      "https://i.pravatar.cc/40?img=19",
    ],
    rating: "4.8",
    reviewCount: "94",
  },
];

// Service-specific professional data
export const serviceProfessionals = {
  1: {
    // Home Deep Cleaning
    id: 1,
    name: "Sarah Johnson",
    profession: "Cleaning Specialist • Housekeeper",
    rate: "₹2,499/service",
    rating: "4.8",
    reviewCount: "127 Reviews",
    experience: "8 yrs Experience",
    customers: "500+ Customers",
    badge: "Top Cleaner",
    image: "https://i.pravatar.cc/300?img=1",
    description:
      "Sarah is a professional cleaning specialist with 8 years of experience in residential and commercial cleaning. She specializes in deep cleaning, move-in/move-out cleaning, and post-construction cleanup. Sarah is known for her attention to detail and eco-friendly cleaning methods.",
    hourlyFee: "₹2,499.00",
    teamWorks: "₹4,999.00 (2-3 days)",
    reviewAvatars: [
      "https://i.pravatar.cc/40?img=1",
      "https://i.pravatar.cc/40?img=2",
      "https://i.pravatar.cc/40?img=3",
    ],
    availability: "Available today",
    responseTime: "Within 2 hours",
    specialties: ["Deep Cleaning", "Eco-friendly Products", "Move-in/Move-out"],
    languages: ["English", "Hindi"],
    location: "Within 5km radius",
  },
  2: {
    // Plumbing Repair
    id: 2,
    name: "Mike Rodriguez",
    profession: "Plumber • Emergency Repair",
    rate: "₹1,299/service",
    rating: "4.9",
    reviewCount: "89 Reviews",
    experience: "12 yrs Experience",
    customers: "300+ Customers",
    badge: "Emergency Expert",
    image: "https://i.pravatar.cc/300?img=2",
    description:
      "Mike is a licensed plumber with 12 years of experience in residential and commercial plumbing. He specializes in emergency repairs, pipe installations, and water heater services. Available 24/7 for urgent plumbing issues.",
    hourlyFee: "₹1,299.00",
    teamWorks: "₹2,499.00 (2-4 hours)",
    reviewAvatars: [
      "https://i.pravatar.cc/40?img=5",
      "https://i.pravatar.cc/40?img=6",
      "https://i.pravatar.cc/40?img=7",
    ],
    availability: "Available 24/7",
    responseTime: "Within 1 hour",
    specialties: ["Emergency Repairs", "Pipe Installation", "Water Heater"],
    languages: ["English", "Spanish"],
    location: "Within 10km radius",
  },
  3: {
    // Interior Painting
    id: 3,
    name: "Julian Marcu Elian",
    profession: "Painter • Color Consultant",
    rate: "₹3,999/project",
    rating: "4.7",
    reviewCount: "203 Reviews",
    experience: "13 yrs Experience",
    customers: "2000+ Customers",
    badge: "Best Top Painter",
    image: "https://i.pravatar.cc/300?img=50",
    description:
      "Julian is a highly skilled, professional painter with over 13 years of experience in residential and commercial painting. His expertise includes interior and exterior finishing, color consultation, and surface preparation. Julian is known for his attention to detail, punctuality, and ability to transform spaces with quality workmanship.",
    hourlyFee: "₹3,999.00",
    teamWorks: "₹7,999.00 (3-5 days)",
    reviewAvatars: [
      "https://i.pravatar.cc/40?img=8",
      "https://i.pravatar.cc/40?img=9",
      "https://i.pravatar.cc/40?img=10",
    ],
    availability: "Available next week",
    responseTime: "Within 4 hours",
    specialties: ["Interior Painting", "Color Consultation", "Surface Prep"],
    languages: ["English", "Romanian"],
    location: "Within 15km radius",
  },
  4: {
    // Appliance Repair
    id: 4,
    name: "David Chen",
    profession: "Appliance Technician • Repair Expert",
    rate: "₹899/service",
    rating: "4.6",
    reviewCount: "156 Reviews",
    experience: "10 yrs Experience",
    customers: "800+ Customers",
    badge: "Certified Technician",
    image: "https://i.pravatar.cc/300?img=3",
    description:
      "David is a certified appliance technician with 10 years of experience repairing all major home appliances. He specializes in refrigerators, washing machines, dryers, and dishwashers. David provides same-day service for most common issues.",
    hourlyFee: "₹899.00",
    teamWorks: "₹1,799.00 (1-2 hours)",
    reviewAvatars: [
      "https://i.pravatar.cc/40?img=13",
      "https://i.pravatar.cc/40?img=14",
      "https://i.pravatar.cc/40?img=15",
    ],
    availability: "Available today",
    responseTime: "Within 3 hours",
    specialties: ["Refrigerator Repair", "Washing Machine", "Dishwasher"],
    languages: ["English", "Mandarin"],
    location: "Within 8km radius",
  },
  5: {
    // Laundry Service
    id: 5,
    name: "Emma Thompson",
    profession: "Laundry Specialist • Dry Cleaner",
    rate: "₹199/load",
    rating: "4.8",
    reviewCount: "94 Reviews",
    experience: "6 yrs Experience",
    customers: "400+ Customers",
    badge: "Quality Service",
    image: "https://i.pravatar.cc/300?img=4",
    description:
      "Emma runs a professional laundry and dry cleaning service with 6 years of experience. She specializes in delicate fabrics, stain removal, and same-day service. Pickup and delivery available at your convenience.",
    hourlyFee: "₹199.00",
    teamWorks: "₹399.00 (Same day)",
    reviewAvatars: [
      "https://i.pravatar.cc/40?img=16",
      "https://i.pravatar.cc/40?img=17",
      "https://i.pravatar.cc/40?img=18",
    ],
    availability: "Available daily",
    responseTime: "Within 1 hour",
    specialties: ["Dry Cleaning", "Stain Removal", "Delicate Fabrics"],
    languages: ["English", "French"],
    location: "Within 3km radius",
  },
};

export const data = {
  onboarding,
  workCategories,
  serviceCategories,
  topRatedProviders,
  ongoingServices,
  serviceCards,
  serviceProfessionals,
};
