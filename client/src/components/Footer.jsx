import { Link } from 'react-router-dom';
import uticketLogo from "../assets/uticketlogo.png"

const Footer = () => {
  return (
    <footer>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-1"> 
            <Link to="/" className="h-2 w-2">
                <img className='h-20 w-21' src={uticketLogo} alt="uticket-logo"/>
            </Link>
            <div>
            <p className="text-white">2024 UTicket. All Rights reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer