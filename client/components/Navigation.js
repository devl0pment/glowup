import Glowup from '../public/glowup.png'
import Image from 'next/image';

const Navigation = () => {
    return (
        <div className='navWrapper'>
            <div className="navIcon">

            </div>
            <div className="navLogo">
               <Image 
                src="/glowup.png"
                width='150px'
                height='50px'
                 alt='Glowup leicester'
               />
            </div>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    )
}

export default Navigation;