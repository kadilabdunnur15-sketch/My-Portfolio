/**
 * Engr. Abdun-Nur D. Kadil - Portfolio Web Application
 * Interactive Scripts & Dataset Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Seminars and Trainings Comprehensive Dataset (19 Items)
  const seminarsData = [
    {
      year: '2026',
      date: 'July 11-12, 2026',
      title: 'PlanSwift + Primavera P6 Online Training and Workshop',
      organizer: 'XSTRUCTURES',
      role: 'Participant',
      roleClass: 'badge-cert'
    },
    {
      year: '2026',
      date: 'April 27-30, 2026',
      title: 'Cost Estimate Masterclass (16-hour live online training)',
      organizer: 'Online Training Institute',
      role: 'Participant',
      roleClass: 'badge-cert'
    },
    {
      year: '2025',
      date: 'September 24-26, 2025',
      title: 'The World Coconut Congress (WCC) 2025',
      organizer: 'SMX Convention Center Manila',
      role: 'Participant',
      roleClass: 'badge-participant'
    },
    {
      year: '2025',
      date: 'August 26-28, 2025',
      title: 'Intellectual Property (IP) Rights: Orientation and Basic Workshop',
      organizer: 'Western Mindanao State University',
      role: 'Participant',
      roleClass: 'badge-participant'
    },
    {
      year: '2024',
      date: 'June 8, 9, 15, 16, 2024',
      title: '40-Hour Construction Occupational Safety and Health (COSH) with 2-Hour Training of Trainers (TOT)',
      organizer: 'Accredited OSH Training Organization (DOLE)',
      role: 'Safety Officer 2 Certification',
      roleClass: 'badge-cert'
    },
    {
      year: '2023',
      date: 'November 25-26, 2023',
      title: 'Zamboanga Peninsula Civil Engineering Summit 2023 "AVANCE"',
      organizer: 'Western Mindanao State University',
      role: 'Organizer',
      roleClass: 'badge-organizer'
    },
    {
      year: '2023',
      date: 'April 13, 2023',
      title: 'UP NCTS Webinar: "Supporting Walkability Transition"',
      organizer: 'DOST & UP NCTS (Zoom Webinar)',
      role: 'Participant',
      roleClass: 'badge-participant'
    },
    {
      year: '2023',
      date: 'April 04, 2023',
      title: 'Foresters\' CPD Webinar Series 2: "Cities & Greens: Saving the Urban Green Spaces"',
      organizer: 'UP Los Baños (Webinar)',
      role: 'Participant',
      roleClass: 'badge-participant'
    },
    {
      year: '2023',
      date: 'March 25, 2023',
      title: 'PICE Los Baños Chapter: "REINFORCE, Exploring software advancements in engineering design and analysis"',
      organizer: 'PICE Los Baños (Zoom Webinar)',
      role: 'Participant',
      roleClass: 'badge-participant'
    },
    {
      year: '2023',
      date: 'March 23, 2023',
      title: 'MIDAS GTS NX: Soil Anchoring Using Slope Stability Method',
      organizer: 'MIDAS Geotechnical Engineering (Zoom)',
      role: 'Participant',
      roleClass: 'badge-participant'
    },
    {
      year: '2022',
      date: 'November 25-26, 2022',
      title: 'Zamboanga Peninsula Civil Engineering Summit 2022 "UNBRACE"',
      organizer: 'Western Mindanao State University (Zoom)',
      role: 'Organizer',
      roleClass: 'badge-organizer'
    },
    {
      year: '2022',
      date: 'February 11, 2022',
      title: 'UP NCTS Webinar: "Technologies / Infrastructures for Public Transportation Smart Mobility"',
      organizer: 'UP NCTS (Zoom Meeting)',
      role: 'Participant',
      roleClass: 'badge-participant'
    },
    {
      year: '2022',
      date: '2022',
      title: 'English Proficiency in International Competitiveness (EPIC)',
      organizer: 'Language & Competitiveness Assessment Board',
      role: 'Certified Competent',
      roleClass: 'badge-cert'
    },
    {
      year: '2021',
      date: 'November 19-20, 2021',
      title: 'Zamboanga Peninsula Civil Engineering Summit 2021',
      organizer: 'Western Mindanao State University (Zoom)',
      role: 'Organizer',
      roleClass: 'badge-organizer'
    },
    {
      year: '2021',
      date: 'October 23, 30, 2021',
      title: 'SkillUp 2k21: Expanding Project Management Skill Set Through MS OFFICE',
      organizer: 'UP Los Baños (Zoom Meeting)',
      role: 'Participant',
      roleClass: 'badge-participant'
    },
    {
      year: '2021',
      date: 'October 3, 2021',
      title: 'National Civil Engineering Summit 2021: "Innovation Without Limits" (Part 2)',
      organizer: 'UP Association of Civil Engineering Students (Zoom)',
      role: 'Participant',
      roleClass: 'badge-participant'
    },
    {
      year: '2021',
      date: 'September 26, 2021',
      title: 'National Civil Engineering Summit 2021: "Innovation Without Limits" (Part 1)',
      organizer: 'UP Association of Civil Engineering Students (Zoom)',
      role: 'Participant',
      roleClass: 'badge-participant'
    },
    {
      year: '2021',
      date: 'July 31, 2021',
      title: 'Webinar on Disaster Resilience',
      organizer: 'Philippine Institute of Civil Engineers (PICE)',
      role: 'Participant',
      roleClass: 'badge-participant'
    },
    {
      year: '2021',
      date: 'June 25-26, 2021',
      title: '2021 PICE Virtual Midyear National Convention and Technical Conference',
      organizer: 'Philippine Institute of Civil Engineers (National)',
      role: 'Participant',
      roleClass: 'badge-participant'
    }
  ];

  // 2. Projects Complete Database for Detailed Modal View
  const projectOrder = ['proj-1', 'proj-2', 'proj-3', 'proj-4', 'proj-5', 'proj-6', 'proj-7', 'proj-8'];
  let currentProjIndex = 0;

  const projectsData = {
    'proj-1': {
      title: 'Steel Design of Student Computer Center',
      scope: 'Western Mindanao State University • Undergrad Project',
      image: 'images/STEEL DESIGN OF STUDENT COMPUTER CENTER - UNDERGRAD PROJECT.png',
      badge: 'STAAD.Pro 3D FEA Analysis',
      what: 'Redesigning an existing reinforced concrete (RC) structure into an optimized structural steel framework for the Student Computer Center of Western Mindanao State University, ensuring all state structural criteria and serviceability limit states are satisfied.',
      how: 'The structure was fully modeled and analyzed using Bentley STAAD.Pro advanced analysis. Rigorous 3D load combinations (dead, live, wind, and seismic forces) were applied to obtain bending moment diagrams, shear forces, axial loads, and lateral drift displacement patterns across columns and roof truss connections.',
      tags: ['STAAD.Pro', 'AutoCAD', 'Structural Steel', 'AISC / NSCP Codes', '3D Frame Analysis', 'FEA Modeling'],
      specs: {
        'Engineering Discipline': 'Structural & Civil Engineering',
        'Structural System': 'Special Moment Resisting Steel Frame (SMRF)',
        'Primary Analysis Tool': 'Bentley STAAD.Pro V8i / CONNECT',
        'Drafting Tool': 'AutoCAD 2024',
        'Governing Codes': 'NSCP 2015 / AISC 360-16 / ASCE 7-16'
      }
    },
    'proj-2': {
      title: 'Rainwater Collector & Filtration System',
      scope: 'UP Diliman NCES • Case Study Finalist',
      image: 'images/RAINWATER COLLECTOR AND FILTRATION SYSTEM - CASE STUDY FINALIST.png',
      badge: 'BAPEERO Reverse Osmosis CAD',
      what: 'Engineered an ecological rainwater collection, pre-treatment, and micro-filtration system incorporating banana peel-derived reverse osmosis membranes (BAPEERO). Recognized as a national Case Study Finalist at the prestigious UP Diliman National Civil Engineering Summit (NCES).',
      how: 'Created complete 3D CAD models from architectural roof catchment layouting to mechanical filtration assembly renderings. Integrated flow calculations, sediment pre-filter stages, active carbon filters, and clean water storage with automatic overflow mechanisms.',
      tags: ['CAD 3D Modeling', 'Reverse Osmosis', 'Sustainable Water', 'Hydrology', 'NCES Finalist', 'Eco-Engineering'],
      specs: {
        'Engineering Discipline': 'Environmental & Water Resources Engineering',
        'Core Technology': 'BAPEERO (Banana Peel Reverse Osmosis)',
        'CAD Modeling Platform': 'AutoCAD 3D & SolidWorks',
        'National Recognition': 'Finalist - UP Diliman NCES 2021',
        'System Application': 'Sustainable off-grid community rainwater purification'
      }
    },
    'proj-3': {
      title: 'Rotary Buko Trimmer and Peeler',
      scope: 'PCA-ZRC • PCAARRD Project',
      image: 'images/ROTARY BUKO TRIMMER AND PEELER _ PCA-ZRC.png',
      badge: '3D SolidWorks & ANSYS CFD',
      what: 'Developed a rotary green coconut (buko) trimmer and peeler machine to assist local coconut farmers by mechanizing the labor-intensive trimming and diamond-shaping process for commercial value addition.',
      how: 'Produced comprehensive 3D CAD parts and assembly models along with detailed 2D fabrication shop drawings. Utilized ANSYS CFD (Computational Fluid Dynamics) and motion dynamics to simulate blade rotation speeds, debris expulsion airflow, and structural torque distribution to guarantee operator safety.',
      tags: ['ANSYS CFD', 'SolidWorks', 'Machine Fabrication', 'Agricultural Engineering', 'PCAARRD', 'Operator Safety'],
      specs: {
        'Engineering Discipline': 'Agricultural Machinery & Computational Simulation',
        'Primary CAD Suite': 'SolidWorks 3D CAD & Drafting',
        'Simulation Suite': 'ANSYS CFD & Mechanical Dynamics',
        'Institutional Partner': 'DOST-PCAARRD & PCA-ZRC',
        'Safety Integration': 'Full blade containment & emergency cutoff'
      }
    },
    'proj-4': {
      title: 'Mobile Coconut Husk Decorticating Machine',
      scope: 'PCA-ZRC • Mobile Farm Machinery',
      image: 'images/MOBILE COCONUT HUSK DECORTICATING MACHINE _ PCA-ZRC.png',
      badge: 'Mobile Trailer CAD & FEA',
      what: 'Engineered a mobile, trailer-mounted coconut husk decorticator capable of being transported directly to plantations to extract natural coir fibers and coco peat from bulky agricultural waste.',
      how: 'Generated full CAD models, component part lists, and structural assembly drawings. Performed mechanical assessments and dynamic load simulations to optimize drum beater configurations, fiber extraction efficiency, shaft harmonics, and road mobility towing stability.',
      tags: ['SolidWorks', 'FEA Simulation', 'Mobile Chassis', 'Coir Processing', 'Machine Design', 'Chassis Stress'],
      specs: {
        'Engineering Discipline': 'Mobile Industrial & Agricultural Machinery',
        'Structural Verification': 'SolidWorks FEA Chassis Stress Analysis',
        'Towable Configuration': 'Standard heavy-duty off-road trailer hitch',
        'Output Products': 'Export-grade coir fiber & agricultural coco peat',
        'Operation Site': 'In-situ field operation across coconut plantations'
      }
    },
    'proj-5': {
      title: 'Charcoal Pulverizer',
      scope: 'PCA-ZRC • Biomass Processing',
      image: 'images/CHARCOAL PULVERIZER _ PCA-ZRC.png',
      badge: 'Rotary Hammer Mill 3D CAD',
      what: 'Engineered a robust industrial charcoal pulverizer designed to crush and grind carbonized coconut shells into fine, consistent micro-mesh powders suitable for fuel briquette production and activated carbon processing.',
      how: 'Developed technical drawings and high-precision CAD models specifying hopper clearances, hammer rotor assemblies, and screen matrices. Executed mechanical stress evaluations to ensure machine chassis longevity against high-frequency vibration and impact wear.',
      tags: ['AutoCAD', 'Mechanical Stress Analysis', 'Crushing Dynamics', 'Fabrication Specs', 'Activated Carbon'],
      specs: {
        'Engineering Discipline': 'Biomass & Industrial Minerals Processing',
        'Grinding Mechanism': 'High-velocity impact rotary hammer mill',
        'Chassis Design': 'Vibration-isolated reinforced steel baseplate',
        'Target Particle Output': 'Ultra-fine mesh for activated carbon & briquettes',
        'CAD Software': 'AutoCAD 2024 & SolidWorks'
      }
    },
    'proj-6': {
      title: 'Efficient Charcoal Kiln',
      scope: 'PCA-ZRC • Thermal Infrastructure',
      image: 'images/CHARCOAL KILN _ PCA-ZRC.png',
      badge: 'Pyrolysis Dome & Thermal CFD',
      what: 'Engineered a high-efficiency masonry and steel biomass carbonization kiln designed for uniform pyrolysis of coconut shells with minimized particulate emissions and optimized charcoal yield.',
      how: 'Prepared comprehensive structural blueprints and component schedules. Carried out thermal combustion airflow assessments to evaluate heat distribution gradients, chimney draft pressures, and refractory material performance under continuous thermal cycling.',
      tags: ['Thermal Analysis', 'Combustion CFD', 'Refractory Design', 'Clean Energy', 'CAD Blueprints', 'Pyrolysis'],
      specs: {
        'Engineering Discipline': 'Thermal Engineering & Sustainable Structures',
        'Thermal Cycle': 'Controlled anaerobic pyrolysis carbonization',
        'Structural Components': 'High-temperature refractory brick & steel dome',
        'Emissions Control': 'Secondary combustion draft & smoke suppression',
        'Analysis Tool': 'Thermal airflow CFD simulation'
      }
    },
    'proj-7': {
      title: 'Coir Baling Machine',
      scope: 'PCA-ZRC • Industrial Compression',
      image: 'images/COIR BALING MACHINE _ PCA-ZRC.png',
      badge: 'Hydraulic Press & Buckling FEA',
      what: 'Designed a heavy-duty mechanical/hydraulic baling press to compress loose coconut coir fiber into dense, uniform, wire-tied rectangular bales ready for domestic logistics and international export.',
      how: 'Produced detailed CAD models of the structural frame, guide columns, compression platen, and door latches. Conducted mechanical compression simulations to determine tonnage capacity, prevent column buckling, and maximize bale density.',
      tags: ['SolidWorks', 'Structural Columns', 'Hydraulics', 'FEA Buckling Analysis', 'Shop Drawings', 'Export Packaging'],
      specs: {
        'Engineering Discipline': 'Heavy Machinery & Hydraulic Mechanics',
        'Compression Mechanism': 'High-tonnage hydraulic ram & guide columns',
        'Structural Analysis': 'Euler column buckling resistance under max load',
        'Bale Output': 'Uniform rectangular export bales with wire tie-offs',
        'CAD Modeling': 'SolidWorks 3D Assembly & Fabrication Details'
      }
    },
    'proj-8': {
      title: 'White Copra Solar-Powered Dryer',
      scope: 'PCA-ZRC • Renewable Agricultural Infrastructure',
      image: 'images/WHITE COPRA DRYER _ PCA ZRC.png',
      badge: 'Solar Glazed Thermal Dryer CAD',
      what: 'Developed an innovative solar-powered copra drying facility engineered to dehydrate coconut meat cleanly without smoke discoloration, producing high-grade, food-safe white copra.',
      how: 'Created architectural and mechanical CAD models detailing solar collector glazing, drying chamber tray racks, and ventilation flues. Conducted thermal airflow simulations to calculate drying times and ensure consistent temperature distribution across all drying tiers.',
      tags: ['Solar Thermal', 'Airflow Dynamics', 'AutoCAD', 'Sustainable Infrastructure', 'Agri-Tech', 'Aflatoxin-Free'],
      specs: {
        'Engineering Discipline': 'Renewable Solar Energy & Agricultural Facilities',
        'Drying Technology': 'High-transmittance solar thermal greenhouse collector',
        'Airflow System': 'Combined natural convection & forced ventilation flues',
        'Product Quality': '100% aflatoxin-free, food-grade white copra',
        'Environmental Impact': 'Zero smoke, zero fossil fuel, zero carbon emissions'
      }
    }
  };

  // 3. Render Seminars Table
  const seminarTableBody = document.getElementById('seminarTableBody');

  function renderSeminars(data) {
    if (!seminarTableBody) return;
    seminarTableBody.innerHTML = '';

    data.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="event-year">${item.year}</td>
        <td>
          <div class="event-name">${item.title}</div>
          <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 2px;">${item.date}</div>
        </td>
        <td class="event-venue">${item.organizer}</td>
        <td><span class="badge-role-event ${item.roleClass}">${item.role}</span></td>
      `;
      seminarTableBody.appendChild(tr);
    });
  }

  renderSeminars(seminarsData);

  // 4. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.classList.add('is-revealed');
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // 5. Timeline Tabs (Work vs Education)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const workTimeline = document.getElementById('workTimeline');
  const eduTimeline = document.getElementById('eduTimeline');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tab = btn.getAttribute('data-tab');
      if (tab === 'work') {
        workTimeline.classList.add('active');
        eduTimeline.classList.remove('active');
        workTimeline.querySelectorAll('.timeline-item').forEach(el => el.classList.add('is-revealed'));
      } else {
        workTimeline.classList.remove('active');
        eduTimeline.classList.add('active');
        eduTimeline.querySelectorAll('.timeline-item').forEach(el => el.classList.add('is-revealed'));
      }
    });
  });

  // 6. Project Modal Logic & Interactive Viewport
  const modal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalScope = document.getElementById('modalScope');
  const modalBadge = document.getElementById('modalBadge');
  const modalWhat = document.getElementById('modalWhat');
  const modalHow = document.getElementById('modalHow');
  const modalTags = document.getElementById('modalTags');
  const modalImg = document.getElementById('modalImg');
  const modalSpecsGrid = document.getElementById('modalSpecsGrid');
  const modalProjIndex = document.getElementById('modalProjIndex');
  const modalDownloadBtn = document.getElementById('modalDownloadBtn');
  const btnPrevProj = document.getElementById('btnPrevProj');
  const btnNextProj = document.getElementById('btnNextProj');
  const btnZoomToggle = document.getElementById('btnZoomToggle');
  const modalImgStage = document.getElementById('modalImgStage');

  let isZoomed = false;

  window.openProjectModal = function(projId) {
    const idx = projectOrder.indexOf(projId);
    if (idx !== -1) {
      currentProjIndex = idx;
    }
    renderModalContent();
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  function renderModalContent() {
    const projId = projectOrder[currentProjIndex];
    const data = projectsData[projId];
    if (!data || !modal) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalScope) modalScope.textContent = data.scope;
    if (modalBadge) modalBadge.textContent = data.badge || '3D CAD Model';
    if (modalWhat) modalWhat.textContent = data.what;
    if (modalHow) modalHow.textContent = data.how;
    if (modalProjIndex) modalProjIndex.textContent = `${currentProjIndex + 1} / ${projectOrder.length}`;

    // Reset zoom state
    isZoomed = false;
    if (modalImgStage) modalImgStage.classList.remove('zoomed');
    if (btnZoomToggle) btnZoomToggle.textContent = '🔍 Zoom';

    // Set actual project image in modal preview
    if (modalImg && data.image) {
      modalImg.src = data.image;
      modalImg.alt = data.title;
    }

    if (modalDownloadBtn && data.image) {
      modalDownloadBtn.href = data.image;
    }

    // Render tags
    if (modalTags) {
      modalTags.innerHTML = '';
      data.tags.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = t;
        modalTags.appendChild(span);
      });
    }

    // Render specs grid
    if (modalSpecsGrid && data.specs) {
      modalSpecsGrid.innerHTML = '';
      for (const [key, val] of Object.entries(data.specs)) {
        const item = document.createElement('div');
        item.className = 'spec-item';
        item.innerHTML = `
          <span class="spec-label">${key}</span>
          <span class="spec-val">${val}</span>
        `;
        modalSpecsGrid.appendChild(item);
      }
    }
  }

  function navigateModal(direction) {
    currentProjIndex = (currentProjIndex + direction + projectOrder.length) % projectOrder.length;
    renderModalContent();
  }

  if (btnPrevProj) {
    btnPrevProj.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateModal(-1);
    });
  }

  if (btnNextProj) {
    btnNextProj.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateModal(1);
    });
  }

  if (btnZoomToggle && modalImgStage) {
    btnZoomToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      isZoomed = !isZoomed;
      if (isZoomed) {
        modalImgStage.classList.add('zoomed');
        btnZoomToggle.textContent = '✖ Reset Zoom';
      } else {
        modalImgStage.classList.remove('zoomed');
        btnZoomToggle.textContent = '🔍 Zoom';
      }
    });
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    isZoomed = false;
    if (modalImgStage) modalImgStage.classList.remove('zoomed');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      navigateModal(-1);
    } else if (e.key === 'ArrowRight') {
      navigateModal(1);
    }
  });
  // 7. Dark / Light Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('ak_portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('ak_portfolio_theme', nextTheme);
      showToast(`Switched to ${nextTheme} mode`);
    });
  }

  // 8. Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });

    // Close when clicking nav links
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
      });
    });
  }

  // 9. Copy to Clipboard Utility & Toast
  const toast = document.getElementById('toast');
  let toastTimer = null;

  window.showToast = function(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  window.copyToClipboard = function(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg || 'Copied to clipboard!');
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  };

  function fallbackCopy(text, msg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(msg || 'Copied to clipboard!');
    } catch (err) {
      showToast('Copy failed, please select manually.');
    }
    document.body.removeChild(textArea);
  }



  // 10. Active Nav Link & Nav-Scrolled on Scroll (Inspo: alsh4nesali)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link:not(.btn-nav-cta)');
  const siteHeader = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (siteHeader) {
      if (window.scrollY > 30) {
        siteHeader.classList.add('nav-scrolled');
      } else {
        siteHeader.classList.remove('nav-scrolled');
      }
    }

    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 11. Fade-In on Scroll Reveal (Intersection Observer)
  const revealSelectors = [
    '.section-header',
    '.about-card',
    '.timeline-item',
    '.skill-category-card',
    '.credentials-strip',
    '.project-card',
    '.seminars-table-wrapper',
    '.reference-card',
    '.contact-card'
  ];

  const revealElements = document.querySelectorAll(revealSelectors.join(', '));

  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  // Stagger cascading transitions for sibling grid items
  const gridSelectors = [
    '.about-grid',
    '.skills-grid',
    '.projects-grid',
    '.references-grid'
  ];

  gridSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(grid => {
      Array.from(grid.children).forEach((child, idx) => {
        child.style.transitionDelay = `${(idx % 4) * 0.12}s`;
      });
    });
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -45px 0px',
      threshold: 0.08
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // 12. Smooth Scroll to Top (Back to Top & Brand Logo)
  const scrollToTopElements = document.querySelectorAll('.back-to-top, .brand-logo');
  scrollToTopElements.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
      if (mainNav && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
      }
      if (window.history.pushState) {
        window.history.pushState(null, null, window.location.pathname);
      }
    });
  });
});
