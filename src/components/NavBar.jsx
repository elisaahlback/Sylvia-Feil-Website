import { useState } from 'react';
import { Menu, X } from 'lucide-react'; //icons
import LogoSylvia from '.././assets/Logo-Sylvia-Feil.svg'
import SignetSylvia from '.././assets/Signet-Sylvia-Feil.svg'
import { Link } from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <nav className="bg-light text-teal shadow fixed top-0 left-0 w-full z-50 h-20">
        <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-between">
            
            {/* Logo - centered on mobile */}
            <Link to="/" className="logo flex items-center gap-2 h-full">
                  <img src={SignetSylvia} className="h-12 md:h-12 object-contain" alt="Sylvia signet" />
                  <img src={LogoSylvia} className="h-10 md:h-8 object-contain" alt="Sylvia Feil logo" />
            </Link>

            {/* Hamburger - only visible on mobile */}
            <button
              className="lg:hidden ml-auto text-teal"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} className=""/>}
            </button>

            {/* Desktop links */}
            <ul className="hidden lg:flex gap-6 lg:justify-end text-sm">
              <li><Link to="/science_communication" className="text-teal hover:text-red transition-all duration-300 ease-in-out">Wissenschaftskommunikation</Link></li>
              <li><Link to="/media_didactics" className="text-teal hover:text-red transition-all duration-300 ease-in-out">Mediendidaktik</Link></li>
              <li><Link to="/publications" className="text-teal hover:text-red transition-all duration-300 ease-in-out">Publikationen</Link></li>
              <li><Link to="/vita" className="text-teal hover:text-red transition-all duration-300 ease-in-out">Vita</Link></li>
              <li><Link to="/impressum" className="text-teal hover:text-red transition-all duration-300 ease-in-out">Impressum</Link></li>
            </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="lg:hidden flex flex-col items-center gap-4 py-4 bg-light text-sm shadow-md text-teal hover:text-red transition-all duration-300 ease-in-out">
            <li className="text-teal hover:text-red transition-all duration-300 ease-in-out"><Link to="/science_communication" onClick={() => setMenuOpen(false)}>Science communication</Link></li>
            <li className="text-teal hover:text-red transition-all duration-300 ease-in-out"><Link to="/media_didactics" onClick={() => setMenuOpen(false)}>Media didactics</Link></li>
            <li className="text-teal hover:text-red transition-all duration-300 ease-in-out"><Link to="/publications" onClick={() => setMenuOpen(false)}>Publications</Link></li>
            <li className="text-teal hover:text-red transition-all duration-300 ease-in-out"><Link to="/vita" onClick={() => setMenuOpen(false)}>Vita</Link></li>
            <li className="text-teal hover:text-red transition-all duration-300 ease-in-out"><Link to="/impressum" onClick={() => setMenuOpen(false)}>Impressum</Link></li>
          </ul>
        )}
        
      </nav>
    );
  }
  
  export default Navbar;