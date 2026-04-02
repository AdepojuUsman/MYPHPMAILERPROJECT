import xamanLogo from './images/xamanlogo2.png';
import Logo from './images/xamanlogo1.png';
import mockupImg from './images/mockup.png';
import xamanPost from './images/xamanpost.png';
import atmImg from './images/atm.png';

export function App() {
  const ecosystemApps = [
    {
      name: 'Sologenic',
      cat: 'DEX & NFTs',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
        </svg>
      )
    },
    {
      name: 'XRP Toolkit',
      cat: 'Management',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        </svg>
      )
    },
    {
      name: 'Bithomp',
      cat: 'Explorer',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      name: 'XRPL Services',
      cat: 'Infrastructure',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      )
    },
    {
      name: 'GateHub',
      cat: 'Exchange',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      )
    },
    {
      name: 'xSpectar',
      cat: 'Metaverse',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            <img src={Logo} alt="logo" className="logo-image" />
            
              
            
          </div>
          <nav className="nav-links">
            <a href="#security">Security</a>
            <a href="wallet.html">Developers</a>
            <a href="#cards">Cards</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="wallet.html">Blog</a>
            <a href="#help">Help</a>
          </nav>
          <a href="wallet.html" className="btn-primary">Get Xaman</a>
          <button className="mobile-menu-btn">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round">
              
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="hero">
          <img src={mockupImg} alt="Mockup" className="hero-image" />
        </section>

        {/* ===== FEATURES ===== */}
        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>The Leading Self-Custody Wallet.</h2>
              <p>
                A comprehensive suite of tools designed to give you full control
                over your digital assets.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M12 4v16" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3>Multi-currency support</h3>
                <p>
                  Manage XRP and thousands of other tokens issued on the XRP
                  Ledger seamlessly.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <polyline points="17 1 21 5 17 9" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <polyline points="7 23 3 19 7 15" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                </div>
                <h3>DEX Trading</h3>
                <p>
                  Trade directly on the decentralized exchange built into the
                  XRP Ledger.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <h3>NFT Support</h3>
                <p>
                  View, send, and receive XLS-20 standard NFTs directly in your
                  wallet.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
                <h3>Payment Requests</h3>
                <p>
                  Easily request payments or send funds using simple QR codes or
                  links.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <circle cx="8" cy="8" r="6" />
                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                    <path d="M7 6h1v4" />
                  </svg>
                </div>
                <h3>Token Management</h3>
                <p>
                  Set up trust lines and manage your portfolio of digital assets
                  with ease.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
                <h3>Cross-chain</h3>
                <p>
                  Interact with sidechains and bridges connected to the XRP
                  Ledger ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CARDS ===== */}
        <section id="cards" className="cards-section">
          <div className="bg-glow" />
          <div className="container">
            <div className="cards-content">
              
              <img src={atmImg} alt="Xaman ATM Card" className="card-visual" />
              <h2>Get Your Xaman Cards</h2>
              <p>
                Experience the ultimate cold wallet with Tangem's NFC hardware,
                integrated into the Xaman experience. With an embedded chip
                storing your private key, you maintain full self-custody and
                control. It's the safest way to manage your crypto on the go.
              </p>
              <a href="wallet.html" className="btn-dark">Get Your Tangem Cards</a>
            </div>
          </div>
        </section>

        {/* ===== SECURITY ===== */}
        <section id="security" className="security">
          <div className="container">
            <div className="section-header">
              <h2>Built for Security</h2>
              <p>
                We take security seriously so you don't have to worry.
                Industry-leading protection for your digital assets.
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <div className="security-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                  </svg>
                </div>
                <h3>Self-Custody</h3>
                <p>
                  Your keys, your crypto. We never have access to your private
                  keys or your funds.
                </p>
              </div>
              <div className="security-card">
                <div className="security-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3>Encryption</h3>
                <p>
                  Military-grade encryption protects every transaction and piece
                  of sensitive data.
                </p>
              </div>
              <div className="security-card">
                <div className="security-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
                    <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
                    <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                    <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                    <path d="M8.65 22c.21-.66.45-1.32.57-2" />
                    <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                    <path d="M2 16h.01" />
                    <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                    <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
                  </svg>
                </div>
                <h3>Biometric Auth</h3>
                <p>
                  Secure access with fingerprint and face recognition built into
                  your device.
                </p>
              </div>
              <div className="security-card">
                <div className="security-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3>Open Source</h3>
                <p>
                  Fully auditable, open-source codebase ensuring transparency
                  and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== DEVELOPERS ===== */}
        <section id="developers" className="developers">
          
            <img src={xamanPost} alt="Xaman Developers" className="developers-image" />
          
        </section>

        {/* ===== ECOSYSTEM ===== */}
        <section id="ecosystem" className="ecosystem">
          <div className="container">
            <div className="section-header">
              <h2>The Xaman Ecosystem</h2>
              <p>
                Discover a growing ecosystem of xApps and integrations built by
                the community, for the community.
              </p>
            </div>
            <div className="ecosystem-grid">
              {ecosystemApps.map((app, i) =>
              <div key={i} className="eco-card">
                  <div className="eco-icon">{app.icon}</div>
                  <h3>{app.name}</h3>
                  <span>{app.cat}</span>
                </div>
              )}
            </div>
            <button className="explore-link">Explore all xApps →</button>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="help">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div
                className="logo"
                style={{
                  marginBottom: 24
                }}>
                
                <img src={xamanLogo} alt="Xaman logo" className="logo-image" />
                
              </div>
              <p className="footer-desc">
                The self-custodial wallet for managing your digital assets on
                the XRP Ledger. Secure, simple, and powerful.
              </p>
              <div className="social-links">
                <a href="#">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                    <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
                    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Product</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Wallet</a>
                </li>
                <li>
                  <a href="#">Tangem Cards</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">xApps</a>
                </li>
                <li>
                  <a href="#">Pro Beta</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">System Status</a>
                </li>
                <li>
                  <a href="#">Brand Assets</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">About XRPL Labs</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 XRPL Labs. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}