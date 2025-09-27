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

export const data = {
  onboarding,
  workCategories,
  serviceCategories,
  topRatedProviders,
  ongoingServices,
  serviceCards,
};
