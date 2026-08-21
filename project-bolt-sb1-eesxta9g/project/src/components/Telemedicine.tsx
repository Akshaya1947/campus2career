import React, { useState } from 'react';
import { Video, Calendar, Clock, User, Star, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Telemedicine: React.FC = () => {
  const { t } = useLanguage();
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [appointmentStep, setAppointmentStep] = useState<'select' | 'book' | 'confirm'>('select');

  const doctors = [
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      specialty: 'General Medicine',
      languages: ['Tamil', 'English', 'Hindi'],
      rating: 4.8,
      availability: 'Available Now',
      consultationFee: '₹200',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      specialty: 'Pediatrics',
      languages: ['Tamil', 'English'],
      rating: 4.9,
      availability: 'Next available: 2:30 PM',
      consultationFee: '₹250',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/5407764/pexels-photo-5407764.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: '3',
      name: 'Dr. Meera Nair',
      specialty: 'Gynecology',
      languages: ['Tamil', 'Malayalam', 'English'],
      rating: 4.7,
      availability: 'Available Now',
      consultationFee: '₹300',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/5407225/pexels-photo-5407225.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const handleDoctorSelect = (doctorId: string) => {
    setSelectedDoctor(doctorId);
    setAppointmentStep('book');
  };

  const handleBookingConfirm = () => {
    setAppointmentStep('confirm');
  };

  if (appointmentStep === 'confirm') {
    const doctor = doctors.find(d => d.id === selectedDoctor);
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Video size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Appointment Confirmed!
          </h2>
          <p className="text-green-700 mb-6">
            Your telemedicine consultation with {doctor?.name} is scheduled.
          </p>
          <div className="bg-white rounded-lg p-4 mb-6 text-left max-w-md mx-auto">
            <div className="flex items-center space-x-3 mb-2">
              <User size={18} className="text-gray-500" />
              <span>{doctor?.name}</span>
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <Calendar size={18} className="text-gray-500" />
              <span>Today, 3:00 PM</span>
            </div>
            <div className="flex items-center space-x-3">
              <Video size={18} className="text-gray-500" />
              <span>Video Consultation</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
              <Video size={20} />
              <span>Join Video Call</span>
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <MessageCircle size={20} />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (appointmentStep === 'book' && selectedDoctor) {
    const doctor = doctors.find(d => d.id === selectedDoctor);
    return (
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => setAppointmentStep('select')}
          className="text-red-600 hover:text-red-700 mb-6 flex items-center space-x-2"
        >
          <span>←</span>
          <span>{t('back')}</span>
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">{t('bookAppointment')}</h2>
          
          <div className="flex items-center space-x-4 mb-8 p-4 bg-gray-50 rounded-lg">
            <img
              src={doctor?.image}
              alt={doctor?.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-lg">{doctor?.name}</h3>
              <p className="text-gray-600">{doctor?.specialty}</p>
              <p className="text-sm text-green-600">{doctor?.availability}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Select Date</h4>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {['Today', 'Tomorrow', 'Dec 26'].map((date, index) => (
                  <button
                    key={index}
                    className={`p-3 rounded-lg border text-center hover:bg-red-50 transition-colors ${
                      index === 0 ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-200'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>

              <h4 className="font-semibold mb-4">Available Time Slots</h4>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    className="p-2 text-sm border border-gray-200 rounded hover:bg-red-50 hover:border-red-500 transition-colors"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Patient Information</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter patient name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter age"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Symptoms / Reason for Consultation
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Describe your symptoms or reason for consultation"
                  />
                </div>
              </form>

              <div className="bg-red-50 rounded-lg p-4 mt-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Consultation Fee:</span>
                  <span className="text-xl font-bold text-red-600">{doctor?.consultationFee}</span>
                </div>
              </div>

              <button
                onClick={handleBookingConfirm}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors mt-6"
              >
                Confirm Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('telemedicine')}</h1>
        <p className="text-gray-600">{t('onlineConsultation')}</p>
      </div>

      {/* Service Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
          <Video size={32} className="text-blue-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Video Consultation</h3>
          <p className="text-gray-600 text-sm">Face-to-face consultation with doctors</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
          <Phone size={32} className="text-green-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Audio Consultation</h3>
          <p className="text-gray-600 text-sm">Voice-only consultation for privacy</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500">
          <MessageCircle size={32} className="text-purple-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Chat Consultation</h3>
          <p className="text-gray-600 text-sm">Text-based consultation anytime</p>
        </div>
      </div>

      {/* Available Doctors */}
      <h2 className="text-2xl font-bold mb-6">Available Doctors</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.specialty}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                    <span className="text-sm text-gray-500">({doctor.experience})</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Languages:</span>
                  <span>{doctor.languages.join(', ')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Fee:</span>
                  <span className="font-semibold text-red-600">{doctor.consultationFee}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${
                    doctor.availability.includes('Available') 
                      ? 'text-green-600' 
                      : 'text-orange-600'
                  }`}>
                    {doctor.availability}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleDoctorSelect(doctor.id)}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>{t('bookAppointment')}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Integration with e-Sanjeevani */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mt-12">
        <div className="flex items-center space-x-6">
          <div className="flex-shrink-0">
            <Video size={48} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">e-Sanjeevani Integration</h3>
            <p className="opacity-90">
              Connect directly with government telemedicine platform for specialized consultations 
              and referrals to district hospitals.
            </p>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Launch e-Sanjeevani
          </button>
        </div>
      </div>
    </div>
  );
};

export default Telemedicine;