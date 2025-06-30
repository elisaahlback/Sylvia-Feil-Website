import { Link } from 'react-router-dom'

function Footer() {
    return (
      <footer className="bg-ocean text-[#4f92b3] inset-shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
            {/* Copyright (left on desktop, bottom on mobile) */}
            <div className="order-3 lg:order-1 w-full lg:w-auto text-center lg:text-left">
              <span className="text-sm block">© 2025 Sylvia Feil. All rights reserved.</span>
            </div>

            {/* Divider (mobile only) */}
            <hr className="order-2 border-[#4f92b3] w-full block lg:hidden" />

            {/* Page Links (right on desktop, top on mobile) */}
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <ul className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
                <li><Link to="/science_communication" className="text-sm hover:text-red transition-all duration-300">Wissenschaftskommunikation</Link></li>
                <li><Link to="/media_didactics" className="text-sm hover:text-red transition-all duration-300">Mediendidaktik</Link></li>
                <li><Link to="/publications" className="text-sm hover:text-red transition-all duration-300">Publikationen</Link></li>
                <li><Link to="/vita" className="text-sm hover:text-red transition-all duration-300">Vita</Link></li>
                <li><Link to="/impressum" className="text-sm hover:text-red transition-all duration-300">Impressum</Link></li>
              </ul>
            </div>
              
          </div>
        </div>
        
      </footer>
    );
  }
  
  export default Footer;