import React from 'react';
import { 
  Building2,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Users,
  Clock,
  Award,
  ArrowRight,
  Facebook,
  Star,
  Calendar
} from 'lucide-react';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/+923234213219', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/Builderabdullah/', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <nav className="relative z-10 container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-10 w-10 text-blue-500" />
              <div>
                <span className="text-white text-2xl font-bold block">Builder Abdullah</span>
                <span className="text-blue-400 text-sm">Real Estate & Construction</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <button onClick={() => scrollToSection('properties')} className="hover:text-blue-400 transition">Properties</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition">About</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button>
              <button onClick={openFacebook} className="hover:text-blue-400 transition">Facebook</button>
            </div>
          </div>
        </nav>
        
        <div className="relative z-10 container mx-auto px-6 h-[calc(100%-88px)] flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Properties in DHA & Walton Road, Lahore
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your trusted partner in real estate for premium properties in Lahore's most sought-after locations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={openWhatsApp} className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition flex items-center">
                Contact on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button onClick={openFacebook} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
                Visit Facebook Page
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-8 shadow-lg relative -mt-16 z-20 mx-6 rounded-xl">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-6">Our Coverage Areas</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13611.476113359342!2d74.3845!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904bbf4370e9b%3A0x9d7555d47a5c8677!2sDHA%20Lahore!5e0!3m2!1sen!2s!4v1647856421012!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Properties Delivered</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div id="properties" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Properties</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Premium properties in DHA Lahore and Walton Road area
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
                alt="DHA Villa" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">DHA Villa</h3>
                  <span className="text-blue-600 font-semibold">PKR 8.5 Cr</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>DHA Phase 6, Lahore</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>5 Beds</span>
                  <span>6 Baths</span>
                  <span>1 Kanal</span>
                </div>
                <button onClick={openWhatsApp} className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  Inquire on WhatsApp
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
                alt="Commercial Plaza" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Commercial Plaza</h3>
                  <span className="text-blue-600 font-semibold">PKR 25 Cr</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Walton Road, Lahore</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>4 Floors</span>
                  <span>Parking</span>
                  <span>10 Marla</span>
                </div>
                <button onClick={openWhatsApp} className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  Inquire on WhatsApp
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
                alt="Residential Plot" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Residential Plot</h3>
                  <span className="text-blue-600 font-semibold">PKR 3.2 Cr</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>DHA Phase 7, Lahore</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>10 Marla</span>
                  <span>Corner</span>
                  <span>Park View</span>
                </div>
                <button onClick={openWhatsApp} className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  Inquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div id="about" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Builder Abdullah?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
                title: 'Trusted Developer',
                desc: '15+ years of excellence in real estate development with proven track record'
              },
              {
                icon: <Star className="h-8 w-8 text-blue-600" />,
                title: 'Premium Locations',
                desc: 'Specialized in DHA Lahore and Walton Road premium properties'
              },
              {
                icon: <Calendar className="h-8 w-8 text-blue-600" />,
                title: 'Instant Response',
                desc: 'Quick response on WhatsApp for property inquiries and viewings'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <button onClick={openWhatsApp} className="flex items-center justify-center hover:text-green-600 transition">
                <Phone className="h-6 w-6 text-green-600 mr-3" />
                <span>+92 321 4789654</span>
              </button>
              {/* <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600 mr-3" />
                <span>info@builderabdullah.com</span>
              </div> */}
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                <span>Office : Near Qurban School, Walton Road, Lahore Cantt, Lahore.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Building2 className="h-8 w-8 text-blue-500" />
              <div>
                <span className="text-xl font-bold block">Builder Abdullah</span>
                <span className="text-blue-400 text-sm">Real Estate & Construction</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button onClick={openFacebook} className="text-gray-400 hover:text-blue-500 transition">
                <Facebook className="h-6 w-6" />
              </button>
              <button onClick={openWhatsApp} className="text-gray-400 hover:text-green-500 transition">
                <Phone className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-4">
            <p>&copy; 2024 Builder Abdullah Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;