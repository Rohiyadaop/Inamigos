import { useMemo, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
];

const trustBadges = [
  'Section 8 Registered',
  '80G & 12A Certified',
  'CSR-1 Registered',
  'NITI Aayog Registered',
  'IAF ISO 9001:2015 Certified',
];

const metrics = [
  { value: '50K+', label: 'meals and essentials shared' },
  { value: '30K+', label: 'youth and interns trained' },
  { value: '20K+', label: 'saplings planted' },
  { value: '6', label: 'active focus areas' },
];

const programFilters = ['All', 'Community', 'Education', 'Care', 'Environment', 'Youth'];

const programs = [
  {
    title: 'Project SEVA',
    category: 'Community',
    initials: 'SE',
    summary:
      'Food and clothing support for underprivileged communities, with public information highlighting 50,000+ meals and essentials.',
    outcome: 'Dignity, relief, and basic support',
    impact: '50K+ meals and essentials',
  },
  {
    title: 'Project Bachpanshala',
    category: 'Education',
    initials: 'BA',
    summary:
      'Learning support for underprivileged children through school help, life skills, joyful learning, and digital basics.',
    outcome: 'Confidence, curiosity, and opportunity',
    impact: 'Learning support for children',
  },
  {
    title: 'Project JEEV',
    category: 'Care',
    initials: 'JE',
    summary:
      'Animal welfare work focused on feeding, rescue support, shelter care, and daily support for stray animals.',
    outcome: 'Compassion for voiceless lives',
    impact: '50+ animals fed daily',
  },
  {
    title: 'Project UDAAN',
    category: 'Education',
    initials: 'UD',
    summary:
      'Women empowerment through self-help groups, skill training, digital literacy, menstrual hygiene, and confidence-building.',
    outcome: 'Self-reliance and stronger communities',
    impact: 'Skill-building for women',
  },
  {
    title: 'Project PRAKRITI',
    category: 'Environment',
    initials: 'PR',
    summary:
      'Sustainability initiatives including tree plantation, environmental awareness, and responsible community practices.',
    outcome: 'Cleaner, greener, safer futures',
    impact: '20K+ saplings planted',
  },
  {
    title: 'Project VIKAS',
    category: 'Youth',
    initials: 'VI',
    summary:
      'Internship and skill-development pathways that help youth gain practical exposure and career readiness.',
    outcome: 'Employability and professional growth',
    impact: '30K+ interns trained',
  },
];

const impactCards = [
  { value: '50,000+', label: 'meals and clothing support under Project SEVA' },
  { value: '50+', label: 'stray animals reportedly fed daily through Project JEEV' },
  { value: '20,000+', label: 'saplings planted through Project PRAKRITI' },
  { value: '30,000+', label: 'interns trained through Project VIKAS in four years' },
];

const journeySteps = [
  {
    title: 'Awareness',
    text: 'People first understand the problem, the urgency, and the practical ways they can help.',
  },
  {
    title: 'Action',
    text: 'Volunteers, interns, and supporters join projects that match their strengths and availability.',
  },
  {
    title: 'Impact',
    text: 'Consistent community work creates visible change in education, care, environment, and livelihoods.',
  },
];

const timeline = [
  { year: '2020', title: 'Foundation Started', text: 'Registered as a Section 8 non-profit with a community-first mission.' },
  { year: '2021', title: 'Programs Expanded', text: 'Education, food support, animal care, and youth work became stronger pillars.' },
  { year: '2024+', title: 'National Reach', text: 'Public-facing initiatives and internships helped the mission reach wider audiences.' },
];

const focusHighlights = [
  { icon: '🍲', title: 'Immediate Relief', text: 'Food, clothing, and essentials for families facing difficult days.' },
  { icon: '📚', title: 'Long-Term Learning', text: 'Education, digital literacy, and skill-building for brighter futures.' },
  { icon: '🌱', title: 'Shared Responsibility', text: 'Care for animals, communities, women, youth, and the environment.' },
];

const reachStates = ['Chhattisgarh', 'Maharashtra', 'Delhi NCR', 'Uttar Pradesh', 'Odisha', 'Pan-India volunteers'];

const donationExamples = [
  { amount: '₹250', text: 'can support meal and essential drives.' },
  { amount: '₹750', text: 'can help learning materials reach children.' },
  { amount: '₹1,500', text: 'can strengthen animal care or plantation work.' },
];

const volunteerTestimonials = [
  {
    quote: 'Volunteering feels meaningful because every task connects to a real person or community need.',
    name: 'Program volunteer',
  },
  {
    quote: 'The best part is being able to contribute skills even when I cannot be physically present.',
    name: 'Remote awareness intern',
  },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/inamigos-foundation' },
  { label: 'Instagram', href: 'https://www.instagram.com/inamigosfoundation/' },
  { label: 'Facebook', href: 'https://www.facebook.com/inamigosfoundation/' },
];

const stories = [
  {
    title: 'Learning With Dignity',
    tag: 'Education',
    text: 'Children receive learning support that makes education feel less distant and more reachable.',
  },
  {
    title: 'Food As First Support',
    tag: 'Community',
    text: 'Meals and essential supplies help families face difficult days with more stability and dignity.',
  },
  {
    title: 'Care Beyond Humans',
    tag: 'Animal Welfare',
    text: 'Street animals are included in the circle of care through feeding and rescue-oriented support.',
  },
];

const faqs = [
  {
    question: 'How can someone support InAmigos Foundation?',
    answer:
      'They can volunteer, donate, spread awareness, collaborate as a partner, or help connect communities with active projects.',
  },
  {
    question: 'Is this website connected to a backend?',
    answer:
      'This React version is a front-end website. The contact form shows a confirmation message and can later be connected to an API, email service, or database.',
  },
  {
    question: 'Where did the public facts come from?',
    answer:
      'The facts are based on the official InAmigos Foundation website and public social-presence themes already documented in the project notes.',
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="InAmigos Foundation home">
          <span className="brand-mark">IA</span>
          <span className="brand-copy">
            <strong>InAmigos</strong>
            <span>Foundation</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              className={link.href === '#donate' ? 'nav-donate' : undefined}
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Uniting minds for measurable change</p>
          <h1>Every act of care can become a life-changing ripple.</h1>
          <p className="hero-lead">
            InAmigos Foundation is a Section 8 registered non-profit founded on September 23, 2020 by
            Mr. Govind Shukla. Based in Chhattisgarh and active across India, it works across food
            support, education, women empowerment, animal welfare, sustainability, and skills.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#donate">
              Donate Now
            </a>
            <a className="button button-secondary" href="#volunteer">
              Become a Volunteer
            </a>
          </div>

          <p className="hero-note">Secure giving link, verified registrations, and clear ways to help.</p>

          <div className="metric-row" aria-label="Foundation public impact metrics">
            {metrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Illustrated program dashboard">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="hero-photo-card" role="img" aria-label="Volunteers supporting education, food drives, and community care">
            <span>Volunteer Action</span>
            <strong>Hands-on support, hope in motion.</strong>
          </div>
          <div className="impact-dashboard">
            <span className="dashboard-kicker">Live Mission Map</span>
            <h2>Food. Education. Women. Animals. Planet. Youth.</h2>
            <div className="dashboard-list">
              {['Project SEVA', 'Bachpanshala', 'JEEV', 'UDAAN'].map((item, index) => (
                <div className="dashboard-item" key={item}>
                  <span>{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="floating-card">
            <span>Community Pulse</span>
            <strong>Practical compassion, organized beautifully.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Registrations and certifications">
      <div className="container trust-grid">
        {trustBadges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad about-section">
      <div className="container two-column">
        <div>
          <p className="section-label">About The NGO</p>
          <h2>A people-first foundation with a wide circle of care.</h2>
          <p>
            InAmigos Foundation presents itself as a transparent, impact-driven organization that
            connects volunteers, interns, supporters, and local communities to solve real social
            problems. Its approach combines immediate help with long-term empowerment.
          </p>
          <p>
            The mission is practical: serve meals when support is urgent, help children keep
            learning, strengthen women through skills, care for stray animals, protect nature, and
            prepare youth for better opportunities.
          </p>

          <div className="highlight-grid" aria-label="Foundation focus highlights">
            {focusHighlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <span aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-panel">
          <h3>Growth Timeline</h3>
          <div className="timeline" aria-label="Foundation milestone timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.year}>
                <span>{item.year}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visiblePrograms = useMemo(() => {
    if (activeFilter === 'All') {
      return programs;
    }

    return programs.filter((program) => program.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="programs" className="section-pad programs-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Programs</p>
          <h2>Projects creating visible change.</h2>
          <p>
            Filter the initiatives by focus area to quickly understand where each project contributes
            and how it supports the foundation&apos;s wider mission.
          </p>
        </div>

        <div className="filter-row" aria-label="Program filters">
          {programFilters.map((filter) => (
            <button
              className={filter === activeFilter ? 'filter-button is-active' : 'filter-button'}
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="program-grid">
          {visiblePrograms.map((program, index) => (
            <article className="program-card" key={program.title}>
              <div className={`program-image program-image-${index % 6}`} aria-hidden="true" />
              <div className="program-icon">{program.initials}</div>
              <span>{program.category}</span>
              <h3>{program.title}</h3>
              <p>{program.summary}</p>
              <p className="program-impact">{program.impact}</p>
              <strong>{program.outcome}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="section-pad impact-section">
      <div className="container impact-layout">
        <div>
          <p className="section-label">Impact</p>
          <h2>Small actions become stronger systems when communities move together.</h2>
          <p>
            Each project addresses a different barrier to dignity and opportunity. Together, they
            form a complete social-impact model: urgent help today and stronger futures tomorrow.
          </p>

          <div className="journey-grid">
            {journeySteps.map((step) => (
              <div className="journey-card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="impact-card-grid">
          {impactCards.map((card) => (
            <div className="impact-card" key={card.label}>
              <strong className="count-up">{card.value}</strong>
              <span>{card.label}</span>
            </div>
          ))}
        </div>

        <div className="reach-panel" aria-label="State-wise reach visualization">
          <h3>State-wise reach</h3>
          <p>Illustrative reach map for quick scanning. Replace with live state data when available.</p>
          <div className="reach-map">
            {reachStates.map((state, index) => (
              <span className={`reach-dot reach-dot-${index}`} key={state}>
                {state}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="section-pad stories-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Stories</p>
          <h2>What this work feels like on the ground.</h2>
        </div>

        <div className="story-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.title}>
              <span>{story.tag}</span>
              <h3>{story.title}</h3>
              <p>{story.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Volunteer() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus('Thank you! This demo form is ready to connect with a backend or email service.');
    event.currentTarget.reset();
  };

  return (
    <section id="volunteer" className="section-pad volunteer-section">
      <div className="container volunteer-layout">
        <div className="volunteer-copy">
          <p className="section-label">Get Involved</p>
          <h2>Volunteer, donate, collaborate, or simply amplify the mission.</h2>
          <p>
            A full NGO website should make participation easy. This section gives visitors a clear
            path to offer time, skills, resources, or partnerships.
          </p>

          <div className="volunteer-options">
            <span>Teaching support</span>
            <span>Social media awareness</span>
            <span>Food drives</span>
            <span>Animal care</span>
            <span>Tree plantation</span>
            <span>Fundraising</span>
          </div>

          <div className="testimonial-grid">
            {volunteerTestimonials.map((item) => (
              <blockquote className="testimonial-card" key={item.name}>
                <p>“{item.quote}”</p>
                <cite>{item.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email address
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Interest area
            <select name="interest" defaultValue="Volunteering">
              <option>Volunteering</option>
              <option>Donation</option>
              <option>Collaboration</option>
              <option>Internship</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="How would you like to help?" />
          </label>
          <button className="button button-primary" type="submit">
            Send Interest
          </button>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
      </div>
    </section>
  );
}

function Donation() {
  return (
    <section id="donate" className="section-pad donation-section">
      <div className="container donation-card">
        <div>
          <p className="section-label">Donate</p>
          <h2>Make support visible, simple, and trustworthy.</h2>
          <p>
            A clear donation moment helps visitors understand exactly why their contribution matters
            and gives them confidence before leaving the site to pay securely.
          </p>
          <div className="trust-cues" aria-label="Donation trust indicators">
            <span>Secure payment gateway</span>
            <span>Registered NGO</span>
            <span>Impact-led giving</span>
          </div>
        </div>

        <div className="donation-actions">
          {donationExamples.map((example) => (
            <article className="donation-example" key={example.amount}>
              <strong>{example.amount}</strong>
              <p>{example.text}</p>
            </article>
          ))}
          <a className="button button-primary" href="https://rzp.io/l/kWQ87HP" target="_blank" rel="noreferrer">
            Donate Securely
          </a>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section-pad faq-section">
      <div className="container faq-layout">
        <div>
          <p className="section-label">FAQ</p>
          <h2>Quick answers for visitors.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container contact-card">
        <div>
          <p className="section-label">Contact</p>
          <h2>Ready to support the movement?</h2>
          <p>
            Use the official links for donation, volunteering, and verification. The React site can
            later be extended with a real backend, CMS, admin panel, or donation dashboard.
          </p>
        </div>

        <div className="contact-actions">
          <a className="button button-primary" href="https://rzp.io/l/kWQ87HP" target="_blank" rel="noreferrer">
            Support the NGO
          </a>
          <a
            className="button button-secondary"
            href="https://inamigosfoundation.org.in/contact"
            target="_blank"
            rel="noreferrer"
          >
            Official Contact
          </a>
        </div>

        <div className="contact-details">
          <span>
            Email: <a href="mailto:support@inamigosfoundation.org.in">support@inamigosfoundation.org.in</a>
          </span>
          <span>
            Phone: <a href="tel:+916267309902">+91 626 730 9902</a>
          </span>
          <span>Location: Bilaspur, Chhattisgarh</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <h2>InAmigos Foundation</h2>
          <p>
            React website created from the original awareness page, using public information already
            documented in the project notes.
          </p>
        </div>

        <div>
          <h3>Connect</h3>
          <a href="https://inamigosfoundation.org.in/" target="_blank" rel="noreferrer">
            Official Website
          </a>
          {socialLinks.map((link) => (
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <h3>Explore</h3>
          {navLinks.slice(1).map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <form className="newsletter-form" aria-label="Newsletter subscription form">
          <h3>Newsletter</h3>
          <label>
            <span>Get updates from the mission</span>
            <input type="email" name="newsletter" placeholder="you@example.com" />
          </label>
          <button className="button button-secondary" type="button">
            Subscribe
          </button>
        </form>
      </div>
      <p className="copyright">© {new Date().getFullYear()} InAmigos Foundation awareness website.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <About />
        <Programs />
        <Impact />
        <Stories />
        <Volunteer />
        <Faq />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
