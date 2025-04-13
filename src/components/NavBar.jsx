import logoSylvia from '.././assets/Logo-Sylvia-Feil.svg'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-light text-teal px-6 py-0.5 flex items-center justify-between drop-shadow-xs">
        <div className="text-xl font-bold">
            <Link to="/">
                  <img src={logoSylvia} className="logo h-7" alt="Sylvia Feil logo" />
            </Link>
        </div>
        <ul className="flex gap-6">
          <li><Link to="/science_communication" className="text-red-600 hover:text-teal-400">Science communication</Link></li>
          <li><Link to="/media_didactics" className="text-teal hover:text-teal-400">Media didactics</Link></li>
          <li><Link to="/publications" className="text-teal hover:text-teal-400">Publications</Link></li>
          <li><Link to="/vita" className="text-teal hover:text-teal-400">Vita</Link></li>
          <li><Link to="/impressum" className="text-teal hover:text-teal-400">Impressum</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;