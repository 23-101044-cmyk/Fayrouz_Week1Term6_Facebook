import React from 'react';
import './facebook.css';
import Navbtn from '../components/navbtn';
import Confirm from '../components/confirm';
import Watch from '../components/watch';

const Facebook = () => {
    return ( 
        <body>

            <nav>
                <div className='logo'></div>
                <div className='btnsdiv'>
                    <Navbtn />
                    <Navbtn />
                    <Navbtn />
                    <Navbtn />
                </div>
                <div className='logo2'></div>
            </nav>

            <main>
                <section className='s1'>
                    <Confirm />
                    <article className='watchdiv'>
                        <Watch />
                        <Watch />
                        <Watch />
                        <Watch />
                    </article>
                    <div className='seeall'>

                    </div>
                </section>
            </main>

        </body>
     );
}
 
export default Facebook;