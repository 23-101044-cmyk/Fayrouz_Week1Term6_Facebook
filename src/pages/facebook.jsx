import React from 'react';
import './facebook.css';
import Navbtn from '../components/navbtn';
import Confirm from '../components/confirm';
import Watch from '../components/watch';
import Uxui from '../components/uxui';
import '../assets/uxui.png';
import Profile from '../components/profile';
import Msg from '../components/msg';
import Post from '../components/post';

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
                    <div className='seealldiv'>
                        <h1 className='title'>Title</h1>
                        <h6 className='seeall'>See all</h6>
                    </div>
                    <article className='uxuidiv'>
                        <Uxui />
                        <Uxui />
                        <Uxui />
                        <Uxui />
                        <Uxui />
                        <Uxui />
                    </article>
                </section>

                <section className='s2'>
                    <article className='profdiv'>
                        <Profile />
                        <Profile />
                        <Profile />
                        <Profile />
                    </article>
                    <Msg />
                    <Post />
                </section>
            </main>

        </body>
     );
}
 
export default Facebook;