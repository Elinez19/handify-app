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

export const data = {
  onboarding,
  workCategories,
  serviceCategories,
  topRatedProviders,
  ongoingServices,
};
