import { useState } from 'react';
import { Link } from 'react-router-dom';
import uticketLogo from "../assets/uticketlogo.png"
import searchSign from '../assets/search.png'
import Modal from './Modal';

function Navbar() {
  const [lang, setLang] = useState("eng")
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <nav>
      <div className="container mx-auto px-4 py-1 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className='h-20 w-21' src={uticketLogo} alt="uticket-logo" />
          </Link>

          <div className='flex gap-6 items-center'>
            <div className="h-8 w-8 cursor-pointer">
              <img className='object-contain' src={searchSign} alt="uticket-logo" onClick={openModal}/>
            </div>
            <div className='flex gap-1'>
              <div className={`cursor-pointer ${lang === 'eng' ? 'font-bold' : ''}`} onClick={() => { setLang("eng") }}>EN </div>
              <div className='h-[23px] w-[2px] bg-white'></div>
              <div className={`cursor-pointer ${lang === 'th' ? 'font-bold' : ''}`} onClick={() => { setLang("th") }}>TH</div>
            </div>
            <Link to="/auth" className='button-pink'>Sign in / Log in</Link>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}/>
    </nav>
  );
}

export default Navbar;