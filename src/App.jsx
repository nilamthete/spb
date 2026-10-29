import React, { useState, useEffect } from 'react';
import './App.css';

const JOURNEY_MILESTONES = [
  {
    id: 1,
    phase: 'phase1',
    phaseName: 'Phase I',
    year: '2004',
    title: 'Educational Foundation',
    category: 'Engineering Degree',
    icon: '🎓',
    desc: 'Completed Bachelor of Engineering in Electronics from K. K. Wagh College of Engineering, Nashik, in 2004. This marked the beginning of a dedicated trajectory in industrial electronics and automation.'
  },
  {
    id: 2,
    phase: 'phase1',
    phaseName: 'Phase I',
    year: 'Early Career',
    title: 'Starting as an Automation Engineer',
    category: 'Fox Controls (9 Years)',
    icon: '⚙️',
    desc: 'Began career as an Automation Engineer at Fox Controls, Nashik, accumulating nine years of hands-on industrial mastery in PLC programming, SCADA architecture, HMI systems, control panel engineering, and machine automation.'
  },
  {
    id: 3,
    phase: 'phase2',
    phaseName: 'Phase II',
    year: '2010',
    title: 'Developing ‘Geine’ Airport Automation',
    category: 'Aviation Tech',
    icon: '✈️',
    desc: 'Developed ‘Geine,’ a proprietary IT automation tool for Airport Baggage Handling Systems, automating complex engineering documentation and multi-terminal commissioning workflows.'
  },
  {
    id: 4,
    phase: 'phase2',
    phaseName: 'Phase II',
    year: '2012',
    title: 'Founding Aarya Technologies',
    category: 'Entrepreneurship',
    icon: '🏢',
    desc: 'Founded Aarya Technologies focusing on specialized consultancy, technical training, Embedded Systems, Industrial Automation, and Communication Protocols, rapidly expanding into turnkey automation and hardware.'
  },
  {
    id: 5,
    phase: 'phase2',
    phaseName: 'Phase II',
    year: '2016',
    title: 'Entering Public Hygiene Tech',
    category: 'Sanitary Innovation',
    icon: '🌿',
    desc: 'Pioneered indigenous public hygiene infrastructure with the development of sanitary napkin vending machines and incinerators, transforming women’s public health access across educational and civic facilities.'
  },
  {
    id: 6,
    phase: 'phase3',
    phaseName: 'Phase III',
    year: '3 July 2019',
    title: 'Aarya Innovtech Pvt. Ltd. Incorporated',
    category: 'Corporate Scaling',
    icon: '🏛️',
    desc: 'Formally incorporated Aarya Innovtech Private Limited on 3 July 2019, scaling operations to state tenders, GeM procurement, and multi-state deployments of Smart Buddy® eco sanitation solutions.'
  },
  {
    id: 7,
    phase: 'phase3',
    phaseName: 'Phase III',
    year: 'Today',
    title: 'Innovation with Purpose',
    category: 'National Impact',
    icon: '💡',
    desc: 'Spearheading industrial automation, R&D, green sanitation, and smart municipal infrastructure across 17+ Indian states under the official corporate motto: “Ideas Engineered into Reality!”'
  }
];

const PRODUCTS_DATA = [
  {
    id: 'e2t',
    title: 'Electronic ECO Toilets (E²T)',
    subtitle: 'Flagship Patented Smart Sanitation',
    category: 'Patented Flagship Tech',
    image: '/smart_buddy_e2t.png',
    icon: '🚻',
    badge: '® E²T Registered',
    description: 'Flagship automated public toilet integrating touchless sensor access, water-conservation flush cycles, embedded IoT monitoring, and bio-digester integration for urban smart cities, transit terminals, and municipal infrastructure.',
    specs: [
      'Touchless sensor entry & automated pre/post flush cycles',
      'Pre-cast concrete / heavy-duty vandal-resistant FRP enclosure',
      'Integrated IoT telemetry dashboard for real-time status',
      'Biological anaerobic bio-digester with zero sewer pipeline need',
      'GeM listed & municipal tender compliant nationwide'
    ],
    inquiryTopic: 'Electronic ECO Toilets (E2T)',
  },
  {
    id: 'biodigester',
    title: 'Biological Bio-Digesters',
    subtitle: 'Off-Grid Sewage Treatment Systems',
    category: 'Off-Grid Sewage Treatment',
    image: '/bio_digester_tank.png',
    icon: '🧪',
    badge: 'MPCB & DRDO Approved',
    description: 'Anaerobic bacterial inoculum decomposition systems converting organic sewage into non-toxic treated water, safeguarding groundwater and operating off-grid in remote and urban facilities with zero pipeline connectivity.',
    specs: [
      '100% natural anaerobic bacterial inoculum degradation',
      'Zero external electric power or regular chemical dosing',
      'Pathogen-free treated water reusable for irrigation/gardening',
      'Underground or above-ground leak-proof FRP/FRP-lined tanks',
      'Certified compliant with national environmental standards'
    ],
    inquiryTopic: 'Government Tender / GeM Procurement',
  },
  {
    id: 'composter',
    title: 'Organic Waste Composters',
    subtitle: 'Rapid 24-Hour Solid Waste Composting',
    category: 'Solid Waste Management',
    image: '/organic_waste_composter.png',
    icon: '🌱',
    badge: '24-Hour Rapid Process',
    description: 'Heavy-duty automated solid waste management systems converting cafeteria and municipal organic waste into high-grade compost fertilizer within 24 hours with odorless bio-decomposition and zero landfill burden.',
    specs: [
      'Converts wet canteen & food waste into nutrient-rich compost in 24h',
      'Built-in heavy duty shredder, heater & moisture control sensors',
      'Reduces total solid waste volume by up to 85% to 90%',
      'Fully automated PLC touchscreen cycle control with auto-ejection',
      'Odorless bio-filter system suitable for indoor cafeteria setups'
    ],
    inquiryTopic: 'Government Tender / GeM Procurement',
  },
  {
    id: 'vending',
    title: 'Sanitary Napkin Vending Machines',
    subtitle: 'Automated 24/7 Female Hygiene Kiosks',
    category: 'Women Hygiene Infrastructure',
    image: null,
    icon: '🌸',
    badge: 'Multi-Coin & UPI QR',
    description: 'Automated dispensing kiosks engineered for multi-coin and UPI QR code digital access, delivering essential sanitary napkins across schools, colleges, and public administrative departments.',
    specs: [
      'Dual electronic coin acceptor & dynamic Bharat QR UPI payment',
      'Mechanical anti-theft drop sensor & jam detection alert',
      'Built-in battery backup for uninterrupted power cuts operation',
      'Storage capacity: 50 to 200 napkins per machine',
      'Heavy-gauge powder-coated steel wall mount chassis'
    ],
    inquiryTopic: 'Sanitary Napkin Vending & Incinerator',
  },
  {
    id: 'rvm',
    title: 'Reverse Vending Machines (RVM)',
    subtitle: 'Automated Smart Recycling & Rewards',
    category: 'Circular Economy & Recycling',
    image: null,
    icon: '♻️',
    badge: 'Optical Scan & Crush',
    description: 'Automated recycling kiosks that optical-scan, accept, crush, and store PET bottles and aluminum cans, incentivizing citizen recycling with digital coupon rewards and municipal waste collection analytics.',
    specs: [
      'High-speed optical barcode & material sensor detection',
      'Heavy-duty crusher mechanism reducing container volume by 80%',
      'Direct citizen coupon printing or UPI cashback credit',
      'Cellular IoT bin-full alerts dispatched to municipal collection crews',
      '10-inch interactive HD citizen engagement display'
    ],
    inquiryTopic: 'Reverse Vending Machines (RVM)',
  },
  {
    id: 'incinerator',
    title: 'Sanitary Waste Incinerators',
    subtitle: 'Scientific Smokeless Thermal Disposal',
    category: 'Scientific Waste Disposal',
    image: null,
    icon: '🔥',
    badge: 'CPCB / MPCB Compliant',
    description: 'Advanced high-temperature scientific incineration units ensuring smokeless, pathogen-free, and environmentally compliant disposal of sanitary hygiene waste, meeting stringent pollution control standards.',
    specs: [
      'High-temperature thermal oxidation chamber exceeding 800°C',
      'Secondary catalytic chamber with ceramic de-smoking filter',
      'Fully automated thermal cut-off timer for low electricity draw',
      'Safe cool-touch outer casing with high-density ceramic insulation',
      'Wall-mountable and pedestal models for schools and hospitals'
    ],
    inquiryTopic: 'Sanitary Napkin Vending & Incinerator',
  },
  {
    id: 'kiosk',
    title: 'Computer Kiosks & SPM',
    subtitle: 'Special Purpose Machines & Telemetry',
    category: 'Digital Public Access & SPM',
    image: null,
    icon: '🖥️',
    badge: 'Ruggedized All-Weather',
    description: 'Ruggedized all-weather interactive information terminals, public citizen kiosks, and customized Special Purpose Machines (SPM) engineered with embedded electronics, touchscreen telemetry, and IoT remote monitoring.',
    specs: [
      'Industrial IP65 weatherproof touchscreen with anti-glare glass',
      'Custom embedded controller / PLC system architecture',
      'Integrated thermal receipt printer, webcam & barcode scanner',
      'Remote telemetry & centralized health monitoring over 4G/WiFi',
      'Custom fabrication for government citizen service centers'
    ],
    inquiryTopic: 'Custom Automation / SPM',
  },
];

const SHOWCASE_PRODUCTS = [
  {
    id: 'e2t',
    step: '01',
    shortName: 'ECO Toilet (E²T)',
    title: 'Electronic ECO Toilets (E²T)',
    subtitle: 'Flagship Patented Standalone Smart Public Sanitation',
    eyebrow: 'Aarya Innovtech Pvt. Ltd. • Flagship Brand: Smart Buddy®',
    badge: '® E²T Registered',
    leadPara: 'Under the visionary engineering leadership of Mrs. Sujata Prashant Bachhav, Aarya Innovtech Pvt. Ltd. has pioneered indigenous sustainable municipal technology and green public sanitation through its patented flagship brand, Smart Buddy® Electronic ECO Toilets (E²T). Designed for modern smart cities, transit terminals, and municipal infrastructure, these automated standalone units feature touchless sensor access, automated water-conservation flush cycles, real-time embedded IoT telemetry monitoring, and biological anaerobic bio-digester treatment that operates completely off-grid with zero sewer pipeline dependency.',
    bodyPara: 'Constructed with heavy-duty vandal-resistant FRP enclosures and pre-cast concrete foundations, Smart Buddy® sanitation systems are operating across 17+ Indian states under ISO 9001:2015, CE, and MPCB compliance. Listed as tier-1 OEM on the Government e-Marketplace (GeM) for municipal tenders nationwide.',
    tags: ['Touchless Sensor Access', 'Zero Sewer Dependency', 'IoT Telemetry Dashboard', 'ISO 9001:2015 & CE', 'GeM Listed Tier-1 OEM'],
    inquiryTopic: 'Electronic ECO Toilets (E2T)',
    image: '/innovations-wide-bg.jpg',
    bgPosition: 'right 6% center',
    bgSize: 'cover',
  },
  {
    id: 'biodigester',
    step: '02',
    shortName: 'Bio-Digester Tank',
    title: 'Biological Anaerobic Bio-Digesters',
    subtitle: 'Eco-Friendly Off-Grid Sewage Treatment Systems',
    eyebrow: 'Off-Grid Sewage Treatment • DRDO & MPCB Approved Tech',
    badge: 'MPCB & DRDO Approved',
    leadPara: 'Engineered by Aarya Innovtech, these heavy-duty anaerobic bio-digester systems utilize specialized cold-tolerant microbial bacterial inoculum to degrade human organic waste into odorless, pathogen-free treated water. Operating completely off-grid without electrical power, external aeration pumps, or continuous chemical dosing, they safeguard groundwater across municipal public restrooms, tourist destinations, and rural facilities.',
    bodyPara: 'Manufactured using heavy-gauge leak-proof FRP and rotomolded polymers with multiple internal baffles for maximum biological retention. The treated effluent meets national CPCB discharge norms and can be directly recycled for landscape irrigation or ground recharge with zero environmental burden.',
    tags: ['100% Anaerobic Bacterial Degradation', 'Zero External Electric Power', 'Pathogen-Free Recycled Water', 'FRP Leak-Proof Tanks', 'DRDO & CPWD Compliant'],
    inquiryTopic: 'Government Tender / GeM Procurement',
    image: '/products/bio_digester_tank.png',
    bgPosition: 'right 8% center',
    bgSize: 'contain',
  },
  {
    id: 'composter',
    step: '03',
    shortName: 'Waste Composter',
    title: 'Smart Buddy® Organic Waste Composters (OWC)',
    subtitle: 'Rapid 24-Hour Automated Solid Waste Processing',
    eyebrow: 'Solid Waste Management • 24-Hour Rapid Processing',
    badge: '24-Hour Rapid Process',
    leadPara: 'Smart Buddy® Organic Waste Composters (OWC) provide an end-to-end, on-site mechanical and biological solution for converting wet cafeteria food waste, market organic discards, and green biomass into nutrient-rich organic compost within 24 hours. Featuring an integrated high-torque shredder, thermal heating jackets, smart moisture sensors, and automated mixing paddles, it reduces waste volume by up to 85%–90% right at the source.',
    bodyPara: 'Equipped with an intuitive industrial PLC color touchscreen (HMI) for one-touch cycle operation, safety limit locks, and an advanced ceramic bio-filter system that eliminates foul odor, making it completely safe for corporate campuses, municipal wards, hotels, and educational institutions.',
    tags: ['24-Hour Rapid Decomposition', 'High-Torque Waste Shredder', '85%–90% Volume Reduction', 'PLC Touchscreen Interface', 'Odorless Ceramic Bio-Filter'],
    inquiryTopic: 'Government Tender / GeM Procurement',
    image: '/products/organic_waste_composter.png',
    bgPosition: 'right 8% center',
    bgSize: 'contain',
  },
];

const AWARD_CEREMONY_PHOTOS = [
  {
    id: 'sakal',
    src: '/images/awards/nashik-next-sakal-award.jpeg',
    title: 'Sakal Media Group & Nashik Next Recognition',
    shortTitle: 'Sakal Media Award',
    desc: 'Award presentation honoring Mrs. Sujata Prashant Bachhav alongside prominent dignitaries, officials & industry leaders.'
  },
  {
    id: 'trophy',
    src: '/images/awards/naari-shakti-trophy.jpeg',
    title: 'Naari Shakti Trophy Showcase',
    shortTitle: 'Golden Trophies',
    desc: 'State Level Nari Shakti Samman Puraskar golden trophies showcase at Shankaracharya Dr. Kurtakoti Sabhagruh ceremony, Nashik.'
  },
  {
    id: 'presentation',
    src: '/images/awards/naari-shakti-presentation.jpeg',
    title: 'State Level Nari Shakti Samman 2026',
    shortTitle: 'Stage Felicitation',
    desc: 'Felicitation ceremony on stage at Shankaracharya Dr. Kurtakoti Sabhagruh, Nashik — Conferred by Brain Train Education Foundation.'
  }
];

const AWARDS_LIST = [
  {
    id: 1,
    icon: '🎖️',
    title: 'State Level Nari Shakti Samman',
    year: '2026',
    badge: 'State Honor',
    citation: 'Highest state-level appreciation for transformative women industrial leadership & public utilities.'
  },
  {
    id: 2,
    icon: '👑',
    title: 'Navadurga Sanman',
    year: '2025',
    badge: 'Leadership',
    citation: 'Honoring inspiring women leadership, dedication to societal upliftment & industrial achievements.'
  },
  {
    id: 3,
    icon: '📰',
    title: 'Power Couples Recognition',
    year: 'Sakal Media',
    badge: 'Media Award',
    citation: 'Felicitation honoring co-leadership, long-term vision & manufacturing enterprise excellence.'
  },
  {
    id: 4,
    icon: '📺',
    title: 'Biz Woman Citation',
    year: 'State TV',
    badge: 'Broadcast Honor',
    citation: 'Television broadcast citation honoring dynamic women leaders in manufacturing & employment.'
  },
  {
    id: 5,
    icon: '🏆',
    title: 'Udyog Janani Kamal Puraskar',
    year: 'Industrial',
    badge: 'Industry Apex',
    citation: 'Exemplary women industrial leadership, indigenous manufacturing excellence & business acumen.'
  },
  {
    id: 6,
    icon: '⚙️',
    title: 'Grassroot Innovators Accolade',
    year: 'Engineering',
    badge: 'Indigenous Tech',
    citation: 'Ground-level engineering & sustainable Smart Buddy® automation public utility machinery.'
  },
  {
    id: 7,
    icon: '🛡️',
    title: 'Ranaragini Puraskar',
    year: 'Leadership',
    badge: 'Valor & Fortitude',
    citation: 'Courage, fortitude & unwavering perseverance in heavy manufacturing engineering operations.'
  },
  {
    id: 8,
    icon: '🌟',
    title: 'Samaj Bhushan Puraskar',
    year: 'Social',
    badge: 'Community Service',
    citation: 'Dedicated community service, female hygiene awareness, women empowerment & societal impact.'
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBioModal, setShowBioModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoZoom, setPhotoZoom] = useState(1);
  const [isFullscreenMode, setIsFullscreenMode] = useState(false);
  const [aboutTab, setAboutTab] = useState('overview');
  const [journeyPhase, setJourneyPhase] = useState('all');
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [isProductAutoPlay, setIsProductAutoPlay] = useState(true);
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [featuredPhotoIdx, setFeaturedPhotoIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('Government Tender / GeM Procurement');
  const [clientName, setClientName] = useState('');
  const [clientOrg, setClientOrg] = useState('');
  const [clientMsg, setClientMsg] = useState('');
  const [selectedAwardPhoto, setSelectedAwardPhoto] = useState(null);

  // Lock body scroll and listen for Escape key when lightbox is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (showPhotoModal) {
          setShowPhotoModal(false);
          setPhotoZoom(1);
        }
        if (selectedAwardPhoto) {
          setSelectedAwardPhoto(null);
        }
      }
    };

    if (showPhotoModal || selectedAwardPhoto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showPhotoModal, selectedAwardPhoto]);

  // Track fullscreen mode
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreenMode(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Auto-play sequence for 3 products (transitions every 6 seconds, pauses while user hovers to read)
  useEffect(() => {
    if (!isProductAutoPlay || isProductHovered) return;
    const interval = setInterval(() => {
      setSelectedProductIndex((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isProductAutoPlay, isProductHovered]);

  // Journey & Product Animation trigger on section change
  useEffect(() => {
    const animElements = document.querySelectorAll('.journey-anim, .product-anim');
    animElements.forEach((el) => el.classList.add('in-view'));
  }, [activeSection]);

  // Sync active section with URL hash on load and hash change
  // Sync active section with URL hash on load and hash change
  useEffect(() => {
    const validSections = ['home', 'about', 'journey', 'innovations', 'awards', 'contact'];
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (validSections.includes(hash)) {
        setActiveSection(hash);
        if (hash === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(hash);
          if (el) {
            const header = document.querySelector('.site-header');
            const headerHeight = header ? header.offsetHeight : 72;
            const rect = el.getBoundingClientRect();
            const targetY = rect.top + window.pageYOffset - headerHeight;
            window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
          }
        }
      }
    };

    if (window.location.hash) {
      setTimeout(syncFromHash, 150);
    }
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  // Active Navigation link scroll spy
  useEffect(() => {
    const navSections = [
      { id: 'home', el: null },
      { id: 'about', el: null },
      { id: 'journey', el: null },
      { id: 'innovations', el: null },
      { id: 'awards', el: null },
      { id: 'contact', el: null },
    ];

    const handleScroll = () => {
      // Check if user has reached the bottom of the page
      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60)) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 160;
      for (let i = navSections.length - 1; i >= 0; i--) {
        const item = navSections[i];
        const el = item.el || document.getElementById(item.id);
        if (el) {
          item.el = el;
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.pageYOffset;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Reveal Micro-Animations Observer
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.06,
    });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleBrowserFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch((err) => {
        console.warn("Fullscreen request error:", err);
      });
    } else {
      document.exitFullscreen?.().catch((err) => {
        console.warn("Exit fullscreen error:", err);
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const textMsg = `Hello Mrs. Sujata Bachhav, my name is ${clientName} (${clientOrg || 'Individual'}). Regarding ${inquiryType}: ${clientMsg}`;
    const whatsappUrl = `https://wa.me/919923810197?text=${encodeURIComponent(textMsg)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNavClick = (sectionId, e) => {
    if (e && e.preventDefault) e.preventDefault();
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history.pushState) window.history.pushState(null, '', '#home');
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      const header = document.querySelector('.site-header');
      const headerHeight = header ? header.offsetHeight : 72;
      const rect = el.getBoundingClientRect();
      const targetY = rect.top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
  };

  const handleProductEnquiry = (inquiryScope, e) => {
    if (e && e.preventDefault) e.preventDefault();
    setInquiryType(inquiryScope);
    handleNavClick('contact');
  };

  return (
    <div className="app-wrapper">
      {/* --------------------------------------------------------------------------
          1. NAVBAR / HEADER (Clean, Single Line, Dark #031c17)
          -------------------------------------------------------------------------- */}
      <header className="site-header">
        <div className="container">
          <div className="navbar-inner">
            <a href="#home" className="navbar-brand-clean" onClick={(e) => handleNavClick('home', e)}>
              <span className="brand-name-text">
                MRS. SUJATA PRASHANT BACHHAV<span className="brand-dot">.</span>
              </span>
            </a>

            <nav>
              <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <li>
                  <a href="#home" className={`nav-link-btn ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleNavClick('home', e)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className={`nav-link-btn ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleNavClick('about', e)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#journey" className={`nav-link-btn ${activeSection === 'journey' ? 'active' : ''}`} onClick={(e) => handleNavClick('journey', e)}>
                    Journey
                  </a>
                </li>
                <li>
                  <a href="#innovations" className={`nav-link-btn ${activeSection === 'innovations' ? 'active' : ''}`} onClick={(e) => handleNavClick('innovations', e)}>
                    Product
                  </a>
                </li>
                <li>
                  <a href="#awards" className={`nav-link-btn ${activeSection === 'awards' ? 'active' : ''}`} onClick={(e) => handleNavClick('awards', e)}>
                    Award
                  </a>
                </li>
                <li>
                  <a href="#contact" className={`nav-link-btn ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleNavClick('contact', e)}>
                    Contact Me
                  </a>
                </li>

                {/* Mobile Drawer Quick Contacts */}
                <li className="mobile-only-contacts">
                  <div className="mobile-contacts-row">
                    <a href="tel:+919923810197" className="mobile-quick-call">
                      📞 +91 9923810197
                    </a>
                    <a href="mailto:director@aaryainnovtech.com" className="mobile-quick-email">
                      ✉️ director@aaryainnovtech.com
                    </a>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="nav-contact-group">
              <a href="mailto:director@aaryainnovtech.com" className="header-contact-pill header-contact-email" title="Email Mrs. Sujata Bachhav">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                <span>director@aaryainnovtech.com</span>
              </a>

              <a href="tel:+919923810197" className="header-contact-pill header-contact-phone" title="Call Mrs. Sujata Bachhav">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                <span>+91 9923810197</span>
              </a>

              <a href="#contact" className="btn-header-connect" onClick={(e) => handleNavClick('contact', e)}>
                Let's Connect
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* --------------------------------------------------------------------------
      {/* --------------------------------------------------------------------------
      {/* --------------------------------------------------------------------------
          2. HERO SECTION (Full Home Page Screen Photo Background)
          -------------------------------------------------------------------------- */}
      <section id="home" className="hero-fullscreen-section">
        {/* Full-Screen Edge-to-Edge Photo Background across the entire home screen */}
        <div className="hero-all-screen-bg">
          {/* Ambient blurred backdrop spreading across the entire screen */}
          <div className="hero-bg-ambient-fill"></div>

          {/* Sharp direct full-height uncropped photo anchored to the right side */}
          <div className="hero-bg-photo-anchor">
            <img
              src="/sujata-bachhav-real.jpg"
              alt="Mrs. Sujata Prashant Bachhav, Director - Aarya Innovtech Pvt. Ltd."
              className="hero-all-screen-img"
            />
            <div className="hero-bg-photo-edge-blend"></div>
          </div>

          {/* Master multi-layered gradient for text readability on the left */}
          <div className="hero-all-screen-gradient"></div>
        </div>

        {/* Hero Foreground Content Container */}
        <div className="container hero-fullscreen-container">
          <div className="hero-fullscreen-content">
            {/* Grand Header: Full Name */}
            <h1 className="hero-kb-title">
              <span className="hero-kb-name">
                <span className="hero-title-prefix">Mrs.</span> <span className="hero-title-name">Sujata Prashant Bachhav</span>
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="hero-kb-subtitle">
              Industrialist | Entrepreneur | Technology Leader
            </h2>

            {/* Gold Category / Credentials Strip */}
            <div className="hero-kb-orange-strip">
              DIRECTOR – AARYA INNOVTECH PVT. LTD. • PROPRIETOR – AARYA TECHNOLOGIES • <span className="nowrap-loc">📍 NASHIK, INDIA</span>
            </div>

            {/* Executive Bio Description */}
            <p className="hero-kb-description">
              Mrs. Sujata Prashant Bachhav is the Director of <strong>Aarya Innovtech Pvt. Ltd.</strong>, bringing
              over <strong>16+ years of professional leadership</strong> in industrial automation, eco-friendly sanitation technologies,
              enterprise management, research & development, and government tendering.
            </p>

            {/* CTA Buttons Row */}
            <div className="hero-kb-btn-row">
              <a href="#about" className="kb-btn-dark">
                Explore My Journey <span className="btn-arrow">→</span>
              </a>
              <a href="#awards" className="kb-btn-orange">
                View Awards 🏆
              </a>
              <a href="#contact" className="kb-btn-outline">
                Let's Connect →
              </a>
            </div>

            {/* Domain Categories Strip */}
            <div className="hero-kb-domains">
              INDUSTRIAL AUTOMATION • SMART SANITATION • GeM TENDERING • MAKE IN MAHARASHTRA
            </div>

            {/* Bottom 4-Column Stat Highlight Cards */}
            <div className="hero-stat-cards-grid">
              <div className="hero-stat-card reveal-on-scroll reveal-delay-1">
                <div className="hero-stat-icon-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <div className="hero-stat-info">
                  <span className="hero-stat-val">16+ Years</span>
                  <span className="hero-stat-lbl">Professional Experience</span>
                </div>
              </div>

              <div className="hero-stat-card reveal-on-scroll reveal-delay-2">
                <div className="hero-stat-icon-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="hero-stat-info">
                  <span className="hero-stat-val">B.E. Electronics</span>
                  <span className="hero-stat-lbl">Batch of 2004</span>
                </div>
              </div>

              <div className="hero-stat-card reveal-on-scroll reveal-delay-3">
                <div className="hero-stat-icon-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <div className="hero-stat-info">
                  <span className="hero-stat-val">Aarya Technologies</span>
                  <span className="hero-stat-lbl">Established 2012</span>
                </div>
              </div>

              <div className="hero-stat-card reveal-on-scroll reveal-delay-4">
                <div className="hero-stat-icon-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18" />
                    <path d="M14 9h3" />
                    <path d="M14 13h3" />
                    <path d="M14 17h3" />
                  </svg>
                </div>
                <div className="hero-stat-info">
                  <span className="hero-stat-val">Aarya Innovtech</span>
                  <span className="hero-stat-lbl">Incorporated 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------------------------
          3. ABOUT SECTION (Executive Narrative Editorial Paragraphs Format)
          -------------------------------------------------------------------------- */}
      <section id="about" className="about-editorial-section">
        <div className="container">
          {/* Main Header with full navbar scroll clearance */}
          <div className="about-editorial-header reveal-on-scroll">
            <h2 className="about-editorial-title">
              <span className="about-title-prefix">About</span> <span className="about-name-accent">Mrs. Sujata Prashant Bachhav</span>
            </h2>
            <p className="about-editorial-tagline">
              Director | Aarya Innovtech Pvt. Ltd. • Proprietor | Aarya Technologies
            </p>
          </div>

          <div className="about-fullscreen-grid">
            {/* Left Column: Interactive Tabs Navigation & Content */}
            <div className="about-left-pane reveal-on-scroll reveal-delay-1">
              {/* Interactive Tabs Navigation */}
              <div className="about-tabs-nav" role="tablist" aria-label="About Navigation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={aboutTab === 'overview'}
                  className={`about-tab-btn ${aboutTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setAboutTab('overview')}
                >
                  <span className="tab-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                      <path d="M9 22v-4h6v4" />
                      <path d="M8 6h.01" />
                      <path d="M16 6h.01" />
                      <path d="M12 6h.01" />
                      <path d="M12 10h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 10h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 10h.01" />
                      <path d="M8 14h.01" />
                    </svg>
                  </span>
                  <span className="tab-label">Executive Overview</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={aboutTab === 'journey'}
                  className={`about-tab-btn ${aboutTab === 'journey' ? 'active' : ''}`}
                  onClick={() => setAboutTab('journey')}
                >
                  <span className="tab-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </span>
                  <span className="tab-label">Education & Journey</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={aboutTab === 'innovations'}
                  className={`about-tab-btn ${aboutTab === 'innovations' ? 'active' : ''}`}
                  onClick={() => setAboutTab('innovations')}
                >
                  <span className="tab-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </span>
                  <span className="tab-label">Innovations & Products</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={aboutTab === 'leadership'}
                  className={`about-tab-btn ${aboutTab === 'leadership' ? 'active' : ''}`}
                  onClick={() => setAboutTab('leadership')}
                >
                  <span className="tab-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <span className="tab-label">Governance & Honors</span>
                </button>
              </div>

              {/* Tab Panels */}
              <div className="about-tab-content-card">
                {aboutTab === 'overview' && (
                  <div className="about-tab-panel animate-tab-fade">
                    <p className="narrative-lead-paragraph">
                      <strong>Mrs. Sujata Prashant Bachhav</strong> is an accomplished Industrialist, Technology Leader, and Director of <strong>Aarya Innovtech Pvt. Ltd.</strong>, as well as the Proprietor of <strong>Aarya Technologies</strong>, headquartered in Nashik, Maharashtra. Bringing over <strong>16+ years of multidisciplinary leadership</strong> across industrial automation, research & development, sustainable sanitation technologies, and government tendering, she combines rigorous electronics engineering mastery with strategic executive governance to deliver indigenous, high-impact innovations across more than 17 Indian states.
                    </p>
                    <p>
                      Today, Mrs. Bachhav directs a multi-disciplinary engineering workforce of <strong>40+ qualified professionals</strong>, overseeing high-precision manufacturing facilities, multi-state project commissioning, and nationwide Annual Maintenance Contract (AMC) service networks. Under her executive stewardship, all enterprise products maintain rigorous compliance with <strong>ISO 9001:2015, CE, and MPCB (Maharashtra Pollution Control Board)</strong> certifications.
                    </p>
                  </div>
                )}

                {aboutTab === 'journey' && (
                  <div className="about-tab-panel animate-tab-fade">
                    <h3 className="narrative-prose-heading">
                      🎓 Academic Foundation & Engineering Roots
                    </h3>
                    <p>
                      Mrs. Bachhav earned her <strong>Bachelor of Engineering (B.E.) in Electronics from K. K. Wagh College of Engineering, Nashik (Batch of 2004)</strong>. Her professional journey commenced with an intensive 9-year tenure as an on-site Automation Engineer at Fox Controls, Nashik, gaining hands-on mastery over electrical schematics, control panels, PLC/HMI programming, and SCADA architecture.
                    </p>
                    <p>
                      In 2010, she spearheaded the landmark creation of <em>“Geine”</em>, an innovative IT automation engineering tool developed specifically for Airport Baggage Handling Systems. <em>Geine</em> automated the generation of purchase order documentation, panel drawings, and PLC logic, dramatically accelerating project delivery and setting new benchmarks for error-free industrial execution.
                    </p>
                    <p>
                      Equipped with deep domain expertise, she founded <strong>Aarya Technologies in 2012</strong>, delivering custom industrial control panels and turnkey factory automation. Recognizing the urgent national need for sustainable civic infrastructure, she founded <strong>Aarya Innovtech Pvt. Ltd. in 2019</strong>.
                    </p>
                  </div>
                )}

                {aboutTab === 'innovations' && (
                  <div className="about-tab-panel animate-tab-fade">
                    <h3 className="narrative-prose-heading">
                      ⚙️ Core Technical Specializations & Patented Innovations
                    </h3>
                    <p>
                      Her core areas of technological authority bridge heavy industrial automation and sustainable green sanitation. She is the innovator behind patented <strong>Electronic Eco-Toilets (E2T)</strong>, which incorporate contactless sensor-driven access, automated self-cleaning mechanisms, controlled flush cycles that conserve up to 70% water, and self-sustaining bio-digester bacterial colonies that convert organic waste into pathogen-free, odorless treated water.
                    </p>
                    <p>
                      Her broader innovation portfolio includes indigenous <strong>Organic Waste Composters (OWC)</strong>, automated <strong>Sanitary Napkin Vending Machines and Incinerators</strong>, and intelligent <strong>Reverse Vending Machines (RVM)</strong> for plastic bottle and can recycling. These solutions have been successfully deployed across municipal corporations, smart cities, and tourist destinations in <strong>17+ Indian states</strong>.
                    </p>
                  </div>
                )}

                {aboutTab === 'leadership' && (
                  <div className="about-tab-panel animate-tab-fade">
                    <h3 className="narrative-prose-heading">
                      🏛️ Government Tendering, Policy Governance & Nari Shakti
                    </h3>
                    <p>
                      Mrs. Bachhav possesses authoritative mastery in <strong>Public Procurement and the Government e-Marketplace (GeM) Portal</strong>. She routinely navigates complex central and state government tender underwriting, transparent L1 competitive bidding, OEM vendor assessments, digital invoicing, and compliance verification, positioning Aarya Innovtech as a trusted tier-1 OEM supplier for government departments and PSUs.
                    </p>
                    <p>
                      Active in public governance and industrial policy, Mrs. Bachhav serves as an <strong>Executive Member of the Industry Skill Development & Entrepreneurship Department, Government of Maharashtra</strong>. Concurrently, she serves as an <strong>Executive Member & GeM Coordinator for Laghu Udyog Bharati (LUB), Nashik</strong>, mentoring MSMEs in leveraging digital public procurement for scalable growth.
                    </p>
                    <p>
                      In recognition of her exceptional contributions to manufacturing and societal progress, she was honored with the prestigious <strong>State Level Nari Shakti Samman Puraskar 2026</strong>. As a pioneering woman founder in heavy manufacturing, she remains a steadfast champion of women in STEM and self-reliant indigenous production aligned with the national <em>Make in India</em> mission.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Guiding Philosophy & Official Connect Card */}
            <div className="about-executive-card reveal-on-scroll reveal-delay-2">
              <div className="about-executive-badge">
                <span className="badge-dot"></span>
                <span>EXECUTIVE MOTTO & DIRECT CONNECT</span>
              </div>
              
              <h3 className="about-executive-motto">
                “Ideas Engineered into Reality!”
              </h3>
              
              <p className="about-executive-sub">
                Combining engineering precision, technological innovation, and practical problem-solving to address real-world industrial and civic challenges.
              </p>
              
              {/* Inline Official Contact & Dossier Actions */}
              <div className="about-executive-actions">
                
                <a
                  href="https://wa.me/919923810197?text=Hello%20Mrs.%20Sujata%20Bachhav%2C%20I%20would%20like%20to%20connect%20regarding%20Aarya%20Innovtech"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-exec-whatsapp"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="btn-exec-svg">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.5C8.86 7.5 8.57 7.57 8.32 7.84C8.07 8.11 7.37 8.76 7.37 10.1C7.37 11.44 8.35 12.73 8.49 12.92C8.63 13.11 10.37 15.89 13.1 16.96C15.35 17.84 15.82 17.67 16.31 17.62C16.8 17.58 17.89 16.97 18.12 16.33C18.35 15.69 18.35 15.13 18.28 15.02C18.21 14.91 18.02 14.84 17.74 14.7C17.46 14.56 16.08 13.88 15.82 13.79C15.57 13.69 15.38 13.65 15.2 13.93C15.01 14.2 14.49 14.84 14.33 15.02C14.17 15.21 14.01 15.23 13.73 15.09C13.45 14.95 12.56 14.66 11.5 13.72C10.68 12.98 10.12 12.07 9.96 11.79C9.8 11.51 9.94 11.36 10.08 11.22C10.21 11.09 10.37 10.88 10.51 10.72C10.65 10.56 10.7 10.44 10.79 10.26C10.88 10.07 10.84 9.91 10.77 9.77C10.7 9.63 10.14 8.27 9.91 7.71C9.69 7.17 9.46 7.24 9.29 7.24C9.13 7.23 8.94 7.23 8.76 7.23" />
                  </svg>
                  <span>Direct WhatsApp Inquiries</span>
                </a>
                
                <a href="#journey" className="btn-exec-trajectory" onClick={(e) => handleNavClick('journey', e)}>
                  <span>Explore Full Career Trajectory</span>
                  <span className="btn-arrow">→</span>
                </a>
              </div>

              {/* Interactive Contact Channels Grid */}
              <div className="about-executive-contacts-grid">
                <a href="mailto:director@aaryainnovtech.com" className="exec-channel-card" title="Send Official Email">
                  <div className="channel-icon-badge">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="channel-meta">
                    <span className="channel-label">Official Email</span>
                    <span className="channel-val">director@aaryainnovtech.com</span>
                  </div>
                </a>

                <a href="tel:+919923810197" className="exec-channel-card" title="Call Director Directly">
                  <div className="channel-icon-badge">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="channel-meta">
                    <span className="channel-label">Direct Phone</span>
                    <span className="channel-val">+91 9923810197</span>
                  </div>
                </a>

                <a href="https://aaryainnovtech.com" target="_blank" rel="noreferrer" className="exec-channel-card" title="Visit Official Website">
                  <div className="channel-icon-badge">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div className="channel-meta">
                    <span className="channel-label">Corporate Website</span>
                    <span className="channel-val">aaryainnovtech.com</span>
                  </div>
                </a>

                <div className="exec-channel-card static" title="Location Headquarters">
                  <div className="channel-icon-badge">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="channel-meta">
                    <span className="channel-label">Executive Office</span>
                    <span className="channel-val">Nashik, Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          5. MY JOURNEY: FROM EMPLOYEE TO ENTREPRENEUR
          -------------------------------------------------------------------------- */}
      <section id="journey" className="journey-section">
        <div className="container">
          {/* Journey Hero Header */}
          <div className="journey-hero-header reveal-on-scroll">
            <h2 className="journey-hero-title">
              <span className="journey-title-prefix">My Journey:</span> <span className="journey-title-name">From Employee to Entrepreneur</span>
            </h2>
            <p className="journey-hero-subtitle">Engineering Leadership • Industrial Automation • Sustainable Tech</p>
          </div>

          {/* Full-Width Grand Milestones Showcase Card */}
          <div className="journey-fullwidth-card reveal-on-scroll reveal-delay-1">
            {/* Top Toolbar: 4 Phase Switcher Tabs in 1 Line + Quick Nav Link */}
            <div className="journey-toolbar">
              <div className="journey-phase-tabs-row" role="tablist" aria-label="Career Phases">
                <button
                  type="button"
                  className={`journey-phase-btn ${journeyPhase === 'all' ? 'active' : ''}`}
                  onClick={() => setJourneyPhase('all')}
                >
                  <span className="phase-bullet"></span>
                  <span className="phase-btn-label">All Milestones (2004–Today)</span>
                  <span className="phase-count">7</span>
                </button>
                <button
                  type="button"
                  className={`journey-phase-btn ${journeyPhase === 'phase1' ? 'active' : ''}`}
                  onClick={() => setJourneyPhase('phase1')}
                >
                  <span className="phase-bullet"></span>
                  <span className="phase-btn-label">Phase I (2004): Engineering & Fox</span>
                  <span className="phase-count">2</span>
                </button>
                <button
                  type="button"
                  className={`journey-phase-btn ${journeyPhase === 'phase2' ? 'active' : ''}`}
                  onClick={() => setJourneyPhase('phase2')}
                >
                  <span className="phase-bullet"></span>
                  <span className="phase-btn-label">Phase II (2010–16): Geine & Aarya</span>
                  <span className="phase-count">3</span>
                </button>
                <button
                  type="button"
                  className={`journey-phase-btn ${journeyPhase === 'phase3' ? 'active' : ''}`}
                  onClick={() => setJourneyPhase('phase3')}
                >
                  <span className="phase-bullet"></span>
                  <span className="phase-btn-label">Phase III (2019–Now): Innovtech</span>
                  <span className="phase-count">2</span>
                </button>
              </div>

              <a href="#innovations" className="btn-journey-nav-header" onClick={(e) => handleNavClick('innovations', e)}>
                <span>Explore Products</span>
                <span className="btn-arrow">→</span>
              </a>
            </div>

            {/* Sub-Header: Phase Title & Metrics */}
            <div className="journey-milestones-header">
              <div className="milestones-header-title">
                <span className="milestones-icon">⚡</span>
                <span>
                  {journeyPhase === 'all' && 'Complete Career Milestones Registry (2004 – Present)'}
                  {journeyPhase === 'phase1' && 'Phase I: Engineering Foundation & Industrial Mastery (2004)'}
                  {journeyPhase === 'phase2' && 'Phase II: Innovation & Entrepreneurial Growth (2010 – 2016)'}
                  {journeyPhase === 'phase3' && 'Phase III: Corporate Leadership & Sustainable Impact (2019 – Present)'}
                </span>
              </div>
            </div>

            {/* Milestones Scrollable Registry */}
            <div className="journey-milestones-scroller">
              {JOURNEY_MILESTONES
                .filter((m) => journeyPhase === 'all' || m.phase === journeyPhase)
                .map((milestone) => (
                  <div key={milestone.id} className={`journey-milestone-item ${milestone.year === 'Today' ? 'today-highlight' : ''}`}>
                    <div className="milestone-indicator">
                      <div className="milestone-icon-bubble">{milestone.icon}</div>
                      <div className="milestone-line"></div>
                    </div>
                    <div className="milestone-card-content">
                      <div className="milestone-card-top">
                        <span className="milestone-year-pill">{milestone.year}</span>
                        <span className="milestone-phase-tag">{milestone.category}</span>
                      </div>
                      <h4 className="milestone-title">{milestone.title}</h4>
                      <p className="milestone-desc">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          6. PRODUCTS & SOLUTIONS - AARYA INNOVTECH PVT. LTD. (Smart Buddy® Portfolio)
          Sequence-wise 6-Product Fullscreen Showcase
          -------------------------------------------------------------------------- */}
      <section
        id="innovations"
        className="products-showcase-section"
        onMouseEnter={() => setIsProductHovered(true)}
        onMouseLeave={() => setIsProductHovered(false)}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 249, 240, 0.98) 0%, rgba(255, 249, 240, 0.92) 35%, rgba(255, 249, 240, 0.60) 48%, rgba(255, 249, 240, 0.15) 58%, rgba(255, 249, 240, 0) 70%), url('${SHOWCASE_PRODUCTS[selectedProductIndex].image}')`,
          backgroundPosition: SHOWCASE_PRODUCTS[selectedProductIndex].bgPosition,
          backgroundSize: SHOWCASE_PRODUCTS[selectedProductIndex].bgSize,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container products-outer-container">
          {/* Products & Solutions Section Heading at Top Left */}
          <div className="products-section-header-top reveal-on-scroll">
            <h2 className="products-page-main-heading">
              <span className="products-title-prefix">Products</span> <span className="stylish-amp">&amp;</span> <span className="products-title-name">Solutions</span>
            </h2>
          </div>

          <div className="products-left-layout-container">
            {/* Left Column: Sequence Navigator + Editorial Narrative */}
            <div className="products-left-editorial reveal-on-scroll reveal-delay-1">

              {/* Editorial Header with Animation Key */}
              <div className="products-editorial-header animate-product-content" key={`header-${SHOWCASE_PRODUCTS[selectedProductIndex].id}`}>
              <div className="editorial-badge-row">
                <span className="editorial-eyebrow">{SHOWCASE_PRODUCTS[selectedProductIndex].eyebrow}</span>
                <span className="editorial-tech-badge">{SHOWCASE_PRODUCTS[selectedProductIndex].badge}</span>
              </div>
              <h3 className="products-editorial-title">{SHOWCASE_PRODUCTS[selectedProductIndex].title}</h3>
              <span className="products-editorial-sub">{SHOWCASE_PRODUCTS[selectedProductIndex].subtitle}</span>
            </div>

            {/* Editorial Narrative with Animation Key */}
            <div className="products-editorial-narrative animate-product-content" key={`narrative-${SHOWCASE_PRODUCTS[selectedProductIndex].id}`}>
              <p className="editorial-lead-para">
                {SHOWCASE_PRODUCTS[selectedProductIndex].leadPara}
              </p>
              <p className="editorial-body-para">
                {SHOWCASE_PRODUCTS[selectedProductIndex].bodyPara}
              </p>

              {/* Key Technical Highlights Tags */}
              <div className="product-highlights-tags">
                {SHOWCASE_PRODUCTS[selectedProductIndex].tags.map((tag, tIdx) => (
                  <span key={tIdx} className="product-tag-pill">
                    <span className="tag-check">✓</span>
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Action CTAs + Sleek Minimal Dots Slider Navigation */}
            <div className="products-editorial-footer-row">
              <div className="products-editorial-actions">
                <button
                  type="button"
                  className="btn-product-quote"
                  onClick={(e) => handleProductEnquiry(SHOWCASE_PRODUCTS[selectedProductIndex].inquiryTopic, e)}
                >
                  <span>Enquire on GeM / Direct Quote</span>
                  <span className="btn-arrow">→</span>
                </button>
                <a
                  href={`https://wa.me/919923810197?text=Hello%20Mrs.%20Sujata%20Bachhav%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(SHOWCASE_PRODUCTS[selectedProductIndex].title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-product-wa"
                >
                  <span>💬 WhatsApp Inquiries</span>
                </a>
              </div>

              {/* Minimalist Micro Dots Indicator */}
              <div className="product-sleek-dots-nav" role="tablist" aria-label="Product Showcase Navigation">
                <button
                  type="button"
                  className="btn-sleek-arrow"
                  onClick={() => setSelectedProductIndex((prev) => (prev - 1 + SHOWCASE_PRODUCTS.length) % SHOWCASE_PRODUCTS.length)}
                  title="Previous Product"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <div className="sleek-dots-group">
                  {SHOWCASE_PRODUCTS.map((prod, idx) => (
                    <button
                      key={prod.id}
                      type="button"
                      className={`sleek-dot ${selectedProductIndex === idx ? 'active' : ''}`}
                      onClick={() => setSelectedProductIndex(idx)}
                      title={`0${idx + 1} - ${prod.shortName}`}
                      aria-label={`Go to ${prod.shortName}`}
                    >
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn-sleek-arrow"
                  onClick={() => setSelectedProductIndex((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length)}
                  title="Next Product"
                  aria-label="Next"
                >
                  ›
                </button>
                <span className="sleek-counter-text">
                  0{selectedProductIndex + 1} / 0{SHOWCASE_PRODUCTS.length}
                </span>
              </div>
            </div>
          </div>

          {/* Right visual space showcasing product cleanly */}
          <div className="products-kiosk-visual-space" aria-hidden="true"></div>
        </div>
      </div>
    </section>

      {/* --------------------------------------------------------------------------
          5. AWARDS & RECOGNITION (Mrs. Sujata Prashant Bachhav)
          -------------------------------------------------------------------------- */}
      <section id="awards" className="awards-page-section">
        <div className="container awards-container">
          {/* Header */}
          <div className="awards-clean-header reveal-on-scroll">
            <h2 className="awards-clean-title">
              <span className="awards-title-prefix">Awards</span>
            </h2>
          </div>

          <div className="awards-modern-layout">
            {/* Left Column: Featured Ceremony Photo Spotlight */}
            <div className="awards-photo-spotlight reveal-on-scroll reveal-delay-1">
              <div 
                className="spotlight-photo-frame"
                onClick={() => setSelectedAwardPhoto(AWARD_CEREMONY_PHOTOS[featuredPhotoIdx])}
                title="Click to view HD fullscreen"
              >
                <img 
                  src={AWARD_CEREMONY_PHOTOS[featuredPhotoIdx].src} 
                  alt={AWARD_CEREMONY_PHOTOS[featuredPhotoIdx].title}
                  className="spotlight-active-img" 
                />
                <div className="spotlight-overlay-hint">
                  <span>🔍 View Full HD</span>
                </div>
                <div className="spotlight-title-bar">
                  <span className="spotlight-badge">🏆 Official Ceremony</span>
                  <h4 className="spotlight-photo-name">{AWARD_CEREMONY_PHOTOS[featuredPhotoIdx].title}</h4>
                </div>
              </div>

              {/* 3 Interactive Photo Switcher Thumbnails */}
              <div className="spotlight-thumbs-row">
                {AWARD_CEREMONY_PHOTOS.map((photo, idx) => (
                  <button
                    key={photo.id}
                    type="button"
                    className={`spotlight-thumb-btn ${featuredPhotoIdx === idx ? 'active' : ''}`}
                    onClick={() => setFeaturedPhotoIdx(idx)}
                  >
                    <img src={photo.src} alt={photo.shortTitle} />
                    <span>{photo.shortTitle}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: 2x4 Grid of All 8 Citations (No Scrollbars, 100% Visible) */}
            <div className="awards-registry-grid-pane reveal-on-scroll reveal-delay-2">
              <div className="registry-grid-header">
                <div className="registry-grid-title">
                  <span className="registry-star-badge">★</span>
                  <span className="registry-title-text">Official Accolades &amp; Honors Registry</span>
                </div>
                <span className="registry-grid-count">
                  <span className="registry-live-dot"></span>
                  8 Conferred Honors
                </span>
              </div>

              <div className="accolades-cards-grid">
                {AWARDS_LIST.map((award, index) => (
                  <div key={award.id} className="accolade-card-item">
                    <div className="accolade-card-header">
                      <div className="accolade-icon-badge">
                        <span className="accolade-icon">{award.icon}</span>
                      </div>
                      <span className="accolade-number">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="accolade-card-body">
                      <h4 className="accolade-title">{award.title}</h4>
                      <div className="accolade-tags">
                        <span className="accolade-year">{award.year}</span>
                      </div>
                      <p className="accolade-citation">{award.citation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          6. CONTACT SECTION (From PDF Page 1 & 2)
          -------------------------------------------------------------------------- */}
      <section id="contact" className="contact-corporate-section">
        <div className="container">
          <div className="contact-header-centered reveal-on-scroll">
            <h2 className="contact-main-heading">
              <span className="contact-title-prefix">Contact</span> <span className="contact-title-name">Mrs. Sujata Bachhav</span>
            </h2>
            <p className="contact-sub-tagline">Director — Aarya Innovtech Pvt. Ltd. • Proprietor — Aarya Technologies</p>
          </div>

          <div className="contact-layout-grid">
            <div className="contact-info-card reveal-on-scroll reveal-delay-1">
              <div className="contact-card-header">
                <div className="contact-card-header-left">
                  <div className="contact-card-badge-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 7v14M21 7v14M6 21V11M18 21V11M10 21V11M14 21V11M2 7l10-4 10 4"/></svg>
                  </div>
                  <div>
                    <h3 className="contact-card-title">Official Direct Channels</h3>
                    <div className="contact-card-sublabel">Verified Executive Office</div>
                  </div>
                </div>
                <div className="contact-card-pill pill-active">
                  <span className="pill-dot"></span>
                  <span>Active Direct</span>
                </div>
              </div>

              <div className="channel-row">
                <div className="channel-icon-cube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="channel-content-block">
                  <div className="ch-tag">Official Email</div>
                  <a href="mailto:director@aaryainnovtech.com" className="ch-value" style={{ display: 'block' }}>
                    director@aaryainnovtech.com
                  </a>
                </div>
              </div>

              <div className="channel-row">
                <div className="channel-icon-cube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="channel-content-block">
                  <div className="ch-tag">Direct Mobile Phone</div>
                  <a href="tel:+919923810197" className="ch-value">
                    +91 9923810197
                  </a>
                </div>
              </div>

              <div className="channel-row">
                <div className="channel-icon-cube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="channel-content-block">
                  <div className="ch-tag">Official Portals</div>
                  <div className="ch-links-inline">
                    <a href="https://aaryainnovtech.com/" target="_blank" rel="noreferrer" className="ch-value">
                      aaryainnovtech.com
                    </a>
                    <span className="dot-sep">•</span>
                    <a href="http://www.theaaryatechnologies.com" target="_blank" rel="noreferrer" className="ch-value">
                      theaaryatechnologies.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="channel-row">
                <div className="channel-icon-cube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="9" y1="22" x2="9" y2="22.01" />
                    <line x1="15" y1="22" x2="15" y2="22.01" />
                    <line x1="9" y1="6" x2="9" y2="6.01" />
                    <line x1="15" y1="6" x2="15" y2="6.01" />
                    <line x1="9" y1="10" x2="9" y2="10.01" />
                    <line x1="15" y1="10" x2="15" y2="10.01" />
                    <line x1="9" y1="14" x2="9" y2="14.01" />
                    <line x1="15" y1="14" x2="15" y2="14.01" />
                    <line x1="9" y1="18" x2="9" y2="18.01" />
                    <line x1="15" y1="18" x2="15" y2="18.01" />
                  </svg>
                </div>
                <div className="channel-content-block">
                  <div className="ch-tag">Official Locations (Nashik)</div>
                  <div className="ch-value address-text">
                    <strong>Factory:</strong> D 104/1, Ambad MIDC - 422010
                  </div>
                  <div className="ch-sub-address">
                    <strong>Office:</strong> Sayali Darshan A, Panchavati - 422003
                  </div>
                </div>
              </div>

              {/* Professional Social Media Profiles */}
              <div className="contact-social-row">
                <span className="contact-social-label">Connect Online:</span>
                <div className="contact-social-buttons">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn linkedin-btn"
                    title="Connect with Mrs. Sujata Bachhav on LinkedIn"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn instagram-btn"
                    title="Follow on Instagram"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              <div className="whatsapp-action-box">
                <a
                  href="https://wa.me/919923810197?text=Hello%20Mrs.%20Sujata%20Bachhav%2C%20I%20would%20like%20to%20connect%20regarding%20Aarya%20Innovtech%20and%20Smart%20Buddy"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-direct"
                >
                  <span className="wa-icon">💬</span>
                  <span>Chat Directly on WhatsApp (+91 9923810197)</span>
                </a>
              </div>
            </div>

            <div className="contact-form-card reveal-on-scroll reveal-delay-2">
              <div className="contact-card-header">
                <div className="contact-card-header-left">
                  <div className="contact-card-badge-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <h3 className="contact-card-title">Consultation &amp; Tender Inquiry Form</h3>
                    <div className="contact-card-sublabel">Priority Dispatch • GeM Ready</div>
                  </div>
                </div>
                <div className="contact-card-pill pill-priority">
                  <span className="pill-dot gold"></span>
                  <span>Priority Line</span>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="contact-corporate-form">
                <div className="form-two-col">
                  <div className="field-group">
                    <label className="field-label">Your Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="form-control-input"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Organization / Municipality:</label>
                    <input
                      type="text"
                      placeholder="e.g. Municipal Corp / Enterprise"
                      className="form-control-input"
                      value={clientOrg}
                      onChange={(e) => setClientOrg(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Inquiry Scope:</label>
                  <select
                    className="form-control-input"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                  >
                    <option value="Government Tender / GeM Procurement">Government Tender / GeM Procurement</option>
                    <option value="Electronic ECO Toilets (E2T)">Electronic ECO Toilets (E2T) Deployment</option>
                    <option value="Reverse Vending Machines (RVM)">Reverse Vending Machines (RVM) Order</option>
                    <option value="Sanitary Napkin Vending & Incinerator">Sanitary Napkin Vending &amp; Incinerators</option>
                    <option value="Custom Automation / SPM">Custom Industrial Automation &amp; SPM</option>
                  </select>
                </div>

                <div className="field-group">
                  <label className="field-label">Message Details:</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Provide details about your project, volume, location, or tender requirements..."
                    className="form-control-input"
                    value={clientMsg}
                    onChange={(e) => setClientMsg(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-contact-submit"
                >
                  <span>🚀</span>
                  <span>Dispatch Inquiry to Mrs. Sujata Bachhav</span>
                </button>

                {formSubmitted && (
                  <div className="contact-success-banner">
                    <span className="success-icon">✓</span>
                    <span>Inquiry dispatched successfully! Opening WhatsApp channel.</span>
                  </div>
                )}

                <div className="form-trust-features">
                  <span className="trust-item">
                    <span className="trust-icon">⚡</span>
                    <span>Direct WhatsApp Dispatch</span>
                  </span>
                  <span className="trust-item">
                    <span className="trust-icon">🔒</span>
                    <span>Official Executive Channel</span>
                  </span>
                  <span className="trust-item">
                    <span className="trust-icon">📄</span>
                    <span>GeM Tender Ready</span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          7. MINIMAL CORPORATE FOOTER (Matching user's centered format)
          -------------------------------------------------------------------------- */}
      <footer className="site-corporate-footer">
        <div className="container">
          <div className="footer-centered-wrap">
            {/* Brand Title with Gold Accent Dot */}
            <div className="footer-brand-title">
              <span className="brand-first">SUJATA </span>
              <span className="brand-last">BACHHAV</span>
              <span className="footer-brand-dot">.</span>
            </div>

            {/* Subtitle / Domains of Expertise */}
            <div className="footer-domains-tagline">
              <span>Director – Aarya Innovtech</span>
              <span className="footer-bullet">•</span>
              <span>Proprietor – Aarya Technologies</span>
              <span className="footer-bullet">•</span>
              <span>Smart Buddy®</span>
              <span className="footer-bullet">•</span>
              <span>Indigenous Automation</span>
              <span className="footer-bullet">•</span>
              <span>GeM Specialist</span>
            </div>

            {/* Navigation Links */}
            <nav className="footer-nav-links" aria-label="Footer Navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#journey">Journey</a>
              <a href="#innovations">Products</a>
              <a href="#awards">Awards</a>
              <a href="#contact">Contact</a>
            </nav>

            {/* Social Media Links in Footer */}
            <div className="footer-social-links">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill footer-linkedin"
                title="LinkedIn Profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill footer-instagram"
                title="Instagram Profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
            </div>

            {/* Copyright Line */}
            <div className="footer-copyright-row">
              © 2026 Mrs. Sujata Prashant Bachhav. All rights reserved. • Aarya Innovtech Pvt. Ltd.
            </div>
          </div>
        </div>
      </footer>

      {/* --------------------------------------------------------------------------
          14. MODAL: OFFICIAL PDF PROFILE VIEWER (Exclusively Mrs. Sujata Bachhav)
          -------------------------------------------------------------------------- */}
      {showBioModal && (
        <div className="pdf-modal-backdrop" onClick={() => setShowBioModal(false)}>
          <div className="pdf-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="btn-close-modal"
              onClick={() => setShowBioModal(false)}
            >
              ✕
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', borderBottom: '2px solid #C68A3A', paddingBottom: '20px', marginBottom: '24px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '14px', background: 'rgba(198, 138, 58, 0.12)', border: '1.5px solid #C68A3A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', color: '#701C24' }}>
                🏛️
              </div>
              <div>
                <h2 style={{ fontSize: '25px', color: '#701C24', margin: 0, fontFamily: 'var(--font-display)' }}>Mrs. Sujata Prashant Bachhav</h2>
                <p style={{ color: '#C68A3A', fontSize: '15px', fontWeight: 750, margin: '2px 0' }}>Director – Aarya Innovtech Pvt. Ltd. | Proprietor – Aarya Technologies</p>
                <p style={{ color: '#606677', fontSize: '13px', margin: 0 }}>Nashik, Maharashtra, India | Ph: +91 9923810197 | email: director@aaryainnovtech.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 style={{ color: '#701C24', fontSize: '13.5px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontWeight: 800 }}>
                  Qualification
                </h4>
                <p style={{ color: '#292D3A', fontSize: '15px' }}>
                  BE Electronics from K.K. Wagh College of Engineering, Nashik in 2004
                </p>
              </div>

              <div>
                <h4 style={{ color: '#701C24', fontSize: '13.5px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontWeight: 800 }}>
                  Professional Experience
                </h4>
                <p style={{ color: '#292D3A', fontSize: '15px', lineHeight: '1.7' }}>
                  <strong>9 Years’ Experience in Automation at Fox Controls Pvt. Ltd. Nashik (2004–2012)</strong>: Control panel design, electrical drawings, PLC programming, SCADA development, HMI logic, machine automation logic, and site commissioning.<br />
                  <strong>2010 Landmark Innovation</strong>: Created “Geine”, an advanced IT automation tool for Airport Baggage Handling Systems.<br />
                  <strong>2012–Present</strong>: Founder of Aarya Technologies and Director of Aarya Innovtech Pvt. Ltd., deploying Smart Buddy &amp; patented E2T toilets across Maharashtra and 17+ Indian states with a 40+ professional team.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#701C24', fontSize: '13.5px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontWeight: 800 }}>
                  Core Functional Roles
                </h4>
                <ul style={{ paddingLeft: '22px', color: '#292D3A', fontSize: '14px', lineHeight: '1.8' }}>
                  <li>Government Tender (Specialization on GeM Portal)</li>
                  <li>Automation Programming</li>
                  <li>Admin &amp; Finance</li>
                  <li>Research &amp; Development</li>
                  <li>Overall Company Operations</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#701C24', fontSize: '13.5px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontWeight: 800 }}>
                  Professional Associations &amp; Government Memberships
                </h4>
                <ul style={{ paddingLeft: '22px', color: '#292D3A', fontSize: '14px', lineHeight: '1.8' }}>
                  <li>Executive Member from Industry Skill Development and Entrepreneurship Department (Government of Maharashtra)</li>
                  <li>Executive Member of Laghu Udyog Bharati, Nashik</li>
                  <li>Co-ordinator for LUB Nashik – GeM</li>
                </ul>
              </div>

              <div style={{ background: '#FAF5EE', padding: '16px', borderRadius: '12px', border: '1px solid #E6D8C5' }}>
                <h4 style={{ color: '#701C24', fontSize: '13.5px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontWeight: 800 }}>
                  Entities Led
                </h4>
                <p style={{ color: '#292D3A', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '6px' }}>
                  <strong>1) Aarya Technologies (Proprietorship)</strong>: Proprietor Mrs. Sujata Bachhav | PAN: AIYPJ2538A | GST: 27AIYPJ2538A1Z6 | Factory: D 104/1, Ambad MIDC, Nashik.
                </p>
                <p style={{ color: '#292D3A', fontSize: '13.5px', lineHeight: '1.6' }}>
                  <strong>2) Aarya Innovtech Private Limited</strong>: Director Mrs. Sujata Bachhav | CIN: U29305MH2019PTC327551 | Inc: 3rd July 2019 | PAN: AASCA4672R | GST: 27AASCA4672R1ZN.
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '10px' }}>
                <div style={{ fontSize: '13px', color: '#606677' }}>
                  email: director@aaryainnovtech.com • Ph: +91 9923810197
                </div>
                <button
                  type="button"
                  className="btn-print-profile"
                  onClick={() => window.print()}
                  style={{ padding: '8px 22px', fontSize: '13px', background: 'linear-gradient(135deg, #701C24 0%, #88242D 100%)', color: '#FFFFFF', border: '1px solid #C68A3A', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}
                >
                  🖨️ Print Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --------------------------------------------------------------------------
          15. FULLSCREEN PHOTO LIGHTBOX MODAL (Mrs. Sujata Bachhav)
          -------------------------------------------------------------------------- */}
      {showPhotoModal && (
        <div
          className="photo-lightbox-backdrop"
          onClick={() => {
            setShowPhotoModal(false);
            setPhotoZoom(1);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Full screen photo viewer"
        >
          <div className="photo-lightbox-container" onClick={(e) => e.stopPropagation()}>
            {/* Lightbox Top Control Bar */}
            <div className="photo-lightbox-header">
              <div className="photo-lightbox-meta">
                <span className="photo-lightbox-badge">🏆 राज्यस्तरीय नारी शक्ती सन्मान पुरस्कार २०२६</span>
                <h3 className="photo-lightbox-name">Mrs. Sujata Prashant Bachhav</h3>
                <p className="photo-lightbox-sub">
                  Director – Aarya Innovtech Pvt. Ltd. | Proprietor – Aarya Technologies
                </p>
              </div>

              <div className="photo-lightbox-actions">
                {/* Zoom Toggle */}
                <button
                  type="button"
                  className="lightbox-action-btn"
                  onClick={() => setPhotoZoom((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1))}
                  title={photoZoom > 1 ? "Reset zoom (1x)" : "Zoom in"}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>{photoZoom === 1 ? 'Zoom 1.5x' : photoZoom === 1.5 ? 'Zoom 2x' : 'Reset 1x'}</span>
                </button>

                {/* Browser Fullscreen Toggle */}
                <button
                  type="button"
                  className="lightbox-action-btn"
                  onClick={toggleBrowserFullscreen}
                  title="Toggle browser fullscreen mode"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    {isFullscreenMode ? (
                      <>
                        <polyline points="4 14 10 14 10 20"></polyline>
                        <polyline points="20 10 14 10 14 4"></polyline>
                        <line x1="14" y1="10" x2="21" y2="3"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                      </>
                    ) : (
                      <>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                      </>
                    )}
                  </svg>
                  <span>{isFullscreenMode ? 'Exit Full' : 'Full Screen'}</span>
                </button>

                {/* Direct High-Res Image Open */}
                <a
                  href="/sujata-bachhav-real.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lightbox-action-btn"
                  title="Open high-resolution original image in new tab"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>HD Photo</span>
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => {
                    setShowPhotoModal(false);
                    setPhotoZoom(1);
                  }}
                  aria-label="Close fullscreen photo viewer"
                  title="Close (Esc)"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Lightbox Image Viewport */}
            <div className="photo-lightbox-body">
              <div
                className="photo-lightbox-image-scroll"
                style={{ overflow: photoZoom > 1 ? 'auto' : 'hidden' }}
              >
                <img
                  src="/sujata-bachhav-real.jpg"
                  alt="Mrs. Sujata Prashant Bachhav, Director - Aarya Innovtech Pvt. Ltd."
                  className="photo-lightbox-img"
                  style={{
                    transform: `scale(${photoZoom})`,
                    cursor: photoZoom > 1 ? 'grab' : 'zoom-in',
                  }}
                  onClick={() => setPhotoZoom((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1))}
                  title="Click image to zoom in/out (झूम करण्यासाठी क्लिक करा)"
                />
              </div>
            </div>

            {/* Bottom Caption Pill */}
            <div className="photo-lightbox-footer">
              <span className="lightbox-footer-tag">✨ राज्यस्तरीय नारी शक्ती सन्मान पुरस्कार सोहळा | Nashik</span>
              <span className="lightbox-footer-hint">⌨️ टीप: बाहेर पडण्यासाठी <strong>Esc</strong> दाबा किंवा बाहेर क्लिक करा</span>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Award Felicitation Photos */}
      {selectedAwardPhoto && (
        <div 
          className="award-photo-modal-backdrop"
          onClick={() => setSelectedAwardPhoto(null)}
        >
          <div 
            className="award-photo-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="award-photo-modal-header">
              <h3 className="award-photo-modal-title">
                <span>🏆</span>
                <span>{selectedAwardPhoto.title}</span>
              </h3>
              <button
                type="button"
                className="award-photo-close-btn"
                onClick={() => setSelectedAwardPhoto(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="award-photo-modal-body">
              <img 
                src={selectedAwardPhoto.src} 
                alt={selectedAwardPhoto.title} 
              />
            </div>
            <div className="award-photo-modal-footer">
              <p className="award-photo-modal-desc">
                {selectedAwardPhoto.desc}
              </p>
              <a
                href={selectedAwardPhoto.src}
                target="_blank"
                rel="noopener noreferrer"
                className="award-photo-action-btn"
              >
                <span>Open Original Image ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
