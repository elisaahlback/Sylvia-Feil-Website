import { useState } from 'react';
import { Menu, X } from 'lucide-react'; //icons
import LogoSylvia from '.././assets/Logo-Sylvia-Feil.svg'
import { Link } from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <nav className="bg-light text-teal shadow fixed top-0 left-0 w-full z-50 py-6">
        <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-between">
            
            {/* Logo centered on mobile */}
            <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img src={LogoSylvia} className="h-8 object-contain" alt="Sylvia Feil logo" />
            </Link>

            {/* Hamburger only visible on mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden h-8 w-8 text-teal flex items-center justify-center focus:outline-none focus:ring-0 bg-transparent border-none transition-all"
            >
              <div className="transition-transform duration-300 ease-in-out text-ocean bg-none">
                {menuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </div>
            </button>




            {/* Desktop links */}
            <ul className="hidden lg:flex gap-6 text-sm">
              <li><Link to="/science_communication" className="text-teal hover:text-red transition-all duration-300 ease-in-out">Wissenschaftskommunikation</Link></li>
              <li><Link to="/media_didactics" className="text-teal hover:text-red transition-all duration-300 ease-in-out">Mediendidaktik</Link></li>
              <li><Link to="/publications" className="text-teal hover:text-red transition-all duration-300 ease-in-out">Publikationen</Link></li>
              <li><Link to="/vita" className="text-teal hover:text-red transition-all duration-300 ease-in-out">Vita</Link></li>
              <li><Link to="/impressum" className="text-teal hover:text-red transition-all duration-300 ease-in-out">Impressum</Link></li>
            </ul>
        </div>

        {/* Animated Mobile Menu */}
        <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        >
          <ul className="flex flex-col items-center gap-4 pt-4 text-sm text-teal bg-light">
            <li><Link to="/science_communication" onClick={() => setMenuOpen(false)} className="hover:text-red transition">Wissenschaftskommunikation</Link></li>
            <li><Link to="/media_didactics" onClick={() => setMenuOpen(false)} className="hover:text-red transition">Mediendidaktik</Link></li>
            <li><Link to="/publications" onClick={() => setMenuOpen(false)} className="hover:text-red transition">Publikationen</Link></li>
            <li><Link to="/vita" onClick={() => setMenuOpen(false)} className="hover:text-red transition">Vita</Link></li>
            <li><Link to="/impressum" onClick={() => setMenuOpen(false)} className="hover:text-red transition">Impressum</Link></li>
          </ul>
        </div>
        
      </nav>
    );
  }
  
  export default Navbar;