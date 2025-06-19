import SignetSylvia from '.././assets/Signet-Sylvia-Feil.svg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
      <footer className="bg-ocean text-[#4f92b3] inset-shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-8 space-y-6">
            {/*Page links*/}
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
                <li><Link to="/science_communication" className="text-sm hover:text-red transition-all duration-300">Science communication</Link></li>
                <li><Link to="/media_didactics" className="text-sm hover:text-red transition-all duration-300">Media didactics</Link></li>
                <li><Link to="/publications" className="text-sm hover:text-red transition-all duration-300">Publications</Link></li>
                <li><Link to="/vita" className="text-sm hover:text-red transition-all duration-300">Vita</Link></li>
                <li><Link to="/impressum" className="text-sm hover:text-red transition-all duration-300">Impressum</Link></li>
            </ul>
            
            {/*Divider*/}
            <hr className="border-[#4f92b3]" />

            {/*Copyright*/}
            <span className="block text-sm text-center">© 2025 Sylvia Feil. All rights reserved.</span>
        </div>
        
      </footer>
    );
  }
  
  export default Footer;