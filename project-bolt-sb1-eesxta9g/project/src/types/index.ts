export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface HealthCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  services: string[];
  distance?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface HealthContent {
  id: string;
  title: string;
  description: string;
  category: string;
  mediaType: 'video' | 'audio' | 'article' | 'infographic';
  mediaUrl?: string;
  content: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  number: string;
  type: 'ambulance' | 'police' | 'fire' | 'hospital' | 'poison';
}

export interface DoctorVisit {
  id: string;
  doctorId: string;
  doctorName: string;
  specialization: string;
  village: string;
  date: string; // ISO date
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  notes?: string;
}

export interface PatientReport {
  id: string;
  patientName: string;
  patientPhone: string;
  doctorId: string;
  doctorName: string;
  specialization: string;
  date: string; // ISO date
  summary: string;
  attachments?: Array<{ name: string; url: string }>;
}