import Glowup from '../public/glowup.png'
import Image from 'next/image';
import {GrLocationPin} from 'react-icons/gr';

const Navigation = () => {
    return (
        <div className='navWrapper'>
            <div className="navIcon">
                <GrLocationPin className='grloc' />
            </div>
            <div className="navLogo">
               <Image 
                src="/glowup.png"
                width='150px'
                height='50px'
                 alt='Glowup leicester'
               />
            </div>
            <div className='navToggle'>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    )
}

export default Navigation;