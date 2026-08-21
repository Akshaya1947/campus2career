import { HealthCenter, HealthContent, EmergencyContact } from '../types';

export const mockHealthCenters: HealthCenter[] = [
  {
    id: '1',
    name: 'Primary Health Centre - Thanjavur',
    address: 'Medical College Road, Thanjavur - 613004',
    phone: '+91-4362-230234',
    services: ['General Medicine', 'Pediatrics', 'Gynecology', 'Emergency'],
    coordinates: { lat: 10.7870, lng: 79.1378 },
    distance: 2.5,
  },
  {
    id: '2',
    name: 'Government Hospital - Kumbakonam',
    address: 'TSR Big Street, Kumbakonam - 612001',
    phone: '+91-435-2421333',
    services: ['Surgery', 'Orthopedics', 'Cardiology', 'ICU'],
    coordinates: { lat: 10.9601, lng: 79.3788 },
    distance: 15.2,
  },
  {
    id: '3',
    name: 'Community Health Centre - Mayiladuthurai',
    address: 'Hospital Road, Mayiladuthurai - 609001',
    phone: '+91-4364-222266',
    services: ['Maternity', 'Child Health', 'TB Treatment', 'Laboratory'],
    coordinates: { lat: 11.1085, lng: 79.6504 },
    distance: 8.7,
  },
];

export const mockHealthContent: HealthContent[] = [
  {
    id: '1',
    title: 'Diabetes Prevention and Management',
    description: 'Essential guide to preventing and managing diabetes in Tamil',
    category: 'Chronic Diseases',
    mediaType: 'video',
    mediaUrl: 'https://example.com/diabetes-tamil.mp4',
    content: 'Comprehensive guide on diabetes management...',
  },
  {
    id: '2',
    title: 'Maternal Health Care',
    description: 'Complete guide for expecting mothers',
    category: 'Mother & Child Health',
    mediaType: 'article',
    content: 'Detailed information about prenatal care...',
  },
  {
    id: '3',
    title: 'Mental Health Awareness',
    description: 'Understanding and managing mental health',
    category: 'Mental Health',
    mediaType: 'audio',
    mediaUrl: 'https://example.com/mental-health-tamil.mp3',
    content: 'Audio guide on mental health awareness...',
  },
];

export const mockEmergencyContacts: EmergencyContact[] = [
  { id: '1', name: 'Ambulance (State)', number: '108', type: 'ambulance' },
  { id: '2', name: 'Police Emergency', number: '100', type: 'police' },
  { id: '3', name: 'Fire Emergency', number: '101', type: 'fire' },
  { id: '4', name: 'National Emergency', number: '112', type: 'ambulance' },
  { id: '5', name: 'Poison Control', number: '1066', type: 'poison' },
  { id: '6', name: 'Child Helpline', number: '1098', type: 'ambulance' },
];