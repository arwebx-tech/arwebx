import businessImg from '../assets/services/business.webp';
import landingImg from '../assets/services/landing.webp';
import clinicImg from '../assets/services/clinic.webp';
import packersImg from '../assets/services/packers.webp';
import restaurantImg from '../assets/services/restaurant.webp';

export const services = [
  {
    id: 'business-websites',
    icon: 'bi-globe2',
    title: 'Business Websites',
    image: businessImg,
    shortDesc: 'Build trust, communicate value, and generate enquiries.',
    description:
      'Multi-page websites designed to build trust, communicate value, and generate enquiries. Every page is crafted to guide visitors toward meaningful action.',
    features: [
      'Responsive design',
      'Performance optimisation',
      'Contact forms',
    ],
  },
  {
    id: 'landing-pages',
    icon: 'bi-cursor',
    title: 'Landing Pages',
    image: landingImg,
    shortDesc: 'Conversion-focused pages for products, services, and campaigns.',
    description:
      'Conversion-focused landing pages for products, services, campaigns, and offers. Designed to turn traffic into leads with strong messaging and clear CTAs.',
    features: [
      'Strong messaging',
      'CTA-focused design',
      'Mobile optimisation',
      'Fast loading',
    ],
  },
  {
    id: 'clinic-websites',
    icon: 'bi-heart-pulse',
    title: 'Clinic Websites',
    image: clinicImg,
    shortDesc: 'Healthcare & clinic websites designed for patient trust and online booking.',
    description:
      'Custom websites for clinics, hospitals, and medical practitioners. Built to present doctor profiles, treatments, patient testimonials, and enable online appointment enquiries.',
    features: [
      'Patient booking form',
      'Doctor & service profiles',
      'Mobile-friendly design',
      'Google Maps & contact info',
    ],
  },
  {
    id: 'packers-movers-websites',
    icon: 'bi-truck',
    title: 'Packers & Movers Websites',
    image: packersImg,
    shortDesc: 'Packers & movers websites designed for trust and online booking.',
    description:
      'Custom websites for Packers & movers. Built to present Packers & Movers services, customer reviews, rate calculators, and enable quick quote enquiries.',
    features: [
      'Packers & Movers booking form',
      'Service & rate profiles',
      'Mobile-friendly design',
      'Google Maps & contact info',
    ],
  },
  {
    id: 'restaurant-website',
    icon: 'bi-restaurant',
    title: 'Restaurant Website',
    image: restaurantImg,
    shortDesc: 'Restaurant website designed for trust and online booking.',
    description:
      'Custom websites for Restaurants & Cafes. Built to present menu items, dining atmosphere, customer reviews, and enable online table reservations or orders.',
    features: [
      'Restaurant online order form',
      'Menu & dining gallery',
      'Mobile-friendly design',
      'Google Maps & contact info',
    ],
  },
];
