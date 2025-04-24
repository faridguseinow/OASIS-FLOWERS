import React from 'react';
import './style.scss';
import { motion } from 'framer-motion';

//Import Components
import Button from '@/components/Button/Index';
import Slider from '@/components/Slider/index';
import MapSVG from '@/assets/media/images/materials/world_map.png';
import AboutVid from '@/assets/media/video/about_vid.mp4';
// import Lemonad from '@/assets/media/images/materials/lemonad.svg';
import { Helmet } from 'react-helmet';

//Import Utils
import { useTranslation } from 'react-i18next';

///Import Constants
import { pageVariants, pageTransition } from '@/constants/framerSettings.js';
import ParallaxText from '@/components/Parallax';

const Index = () => {
    const { t, i18n } = useTranslation();

    let sliderOptions = [
        {
            img: 'https://sun9-71.userapi.com/impg/CZP1u3gVYIKYixqzQs0En_LT-pvhXf9bmuNmKQ/nligGLe7Bs8.jpg?size=1080x720&quality=95&sign=92ddeae870e45cb004cc12253e5a1896&type=album',
            title: 'РОЗЫ МЕСТНЫЕ'
        },
        {
            img: 'https://sun9-27.userapi.com/impg/dJFYOgFnn8Lg31pCYxRdrA8fAAQVEOf508qs4Q/5muJqE7ox9g.jpg?size=1080x720&quality=95&sign=fe221955c44202c353e82ea1730c0c90&type=album',
            title: 'РОЗЫ ГОЛЛАНДСКИЕ'
        },
        {
            img: 'https://sun9-80.userapi.com/impg/-T03Fao9ePC9qoy2tnOq9ojmjaaEP-debSJyUA/5xpt40z0kik.jpg?size=1080x720&quality=95&sign=e835f355ec2c53bd4d4dda9bf3f853a2&type=album',
            title: 'ХРИЗАНТЕМА'
        },
        {
            img: 'https://sun9-78.userapi.com/impg/aoWbwNwDtv3knokAohxi3ToL0TAzDGkp-Aoa9g/r7vThk42F2I.jpg?size=1080x720&quality=95&sign=3429a8dbadc50a3488388590d7611fb5&type=album',
            title: 'ЭКЗОТИЧЕСКИЕ ЦВЕТЫ'
        },
        {
            img: 'https://sun9-51.userapi.com/impg/al6yuS_JezjJqYg5xa6u8K76HayRtrsFo5KSeQ/TRABzZU4VN8.jpg?size=1080x720&quality=95&sign=4a81b37a4c4fa164743e102cf5c127ef&type=album',
            title: 'РОЗЫ ИЗ ЭКВАДОРА'
        },
        {
            img: 'https://sun9-39.userapi.com/impg/TM-r-aSfi0SbKaKTT92xVdtJqDLTAjg_bAQftQ/rvksrjdcjvA.jpg?size=1080x720&quality=95&sign=d344a8046deb5e35b1fcf24afe4ffe66&type=album',
            title: 'РОЗЫ ИЗ КЕНИИ'
        },
        {
            img: 'https://sun9-19.userapi.com/impg/OCuVZn3wl9F8i4rg8mJyFL0NSHHfXV67dYPZ_A/cXWLC3fyd-k.jpg?size=1080x720&quality=95&sign=a6fa13ff568d1a55020dbf4cb1d8e76d&type=album',
            title: 'КОМНАТНЫЕ РАСТЕНИЯ'
        },
        {
            img: 'https://sun9-50.userapi.com/impg/bb2VpNG76pIE6ZyXbNwRzpGPqLy0NGi4qN0jpg/aTyKt18t6zU.jpg?size=1080x720&quality=95&sign=1c2caf155853e0b488a8d54e5e88da27&type=album',
            title: 'АКСЕССУАРЫ'
        }
    ]

    let sliderMainOptions = [
        {
            img: 'https://sun9-51.userapi.com/impg/PxZkPrrOjVZzit2tlatNh64gPFZ4QFcFBUde4A/_GaNmEAc2YI.jpg?size=1280x853&quality=95&sign=0fb842027c86b8a967d963500b4e8c96&type=album'
        },
        {
            img: 'https://sun9-52.userapi.com/impg/0NzSz2zT8HymeJpIW9MIuKqe0DBaYk4-lyGuWA/BqLfctZ4fSg.jpg?size=1280x853&quality=95&sign=dede5b363a7217c0cc9a1fa8c9320e5f&type=album'
        },
        {
            img: 'https://sun9-24.userapi.com/impg/tF3TEh2LLcPSiMWxEuSWKphQyWscnyXjlO-OQQ/lD7NM1PxWLM.jpg?size=1080x720&quality=95&sign=213cc431d5836b35402ef0392d8be844&type=album'
        },
        {
            img: 'https://sun9-29.userapi.com/impg/if-3JNyfbIVZ3rWDy5jfqckIwwrNq6q4eA8tQQ/Bx-5mfiFXOk.jpg?size=1080x720&quality=95&sign=f3138b6260d632ab4cb231ca7894d0a0&type=album'
        },
        {
            img: 'https://sun9-40.userapi.com/impg/akYge6qrzYj03BwbGHgjgerHROKE4UM_r8b11g/07z2pBdjBhY.jpg?size=1080x720&quality=95&sign=ce6c4286caca4b4ae1d7bff842fc9aef&type=album'
        },
        {
            img: 'https://sun9-19.userapi.com/impg/AM_HAknMYE7Pjbo0dNGj4nOCqXRxSPMckK52Dw/-aw_sXoTmmU.jpg?size=1080x720&quality=95&sign=dbb654a650778a6a7d8e0b4e12cd8cb2&type=album'
        }
    ]

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="home_page_container">

            <Helmet>
                <title>Oasis Cash&Carry - Home</title>
                <link rel="canonical" href="http://gfcc.ru/" />
            </Helmet>

            <header>

                <div className="header_slogan">
                    <p className='p1'>ОАЗИС Сash&Сarry</p>
                    <p className='p2'>{t('home.headerDesc')}</p>

                    {/* <div className="yandex_otziv">
                    <iframe src="https://yandex.ru/sprav/widget/rating-badge/57660294184?type=award"></iframe>
                    </div> */}
                </div>


                <div className="slide_wrapper">
                    <Slider
                        loop={true}
                        options={sliderOptions}
                    />
                </div>
            </header>

            <div className="about_wrapper">
                <div className="about_wrapper_inner">

                    <div className="left_content">
                        <video playsInline src={AboutVid} autoPlay muted loop>
                        </video>
                    </div>
                    <div className="right_content">
                        <p className='content_title'>{t('home.aboutSection.title')}</p>

                        <span className='content_desc'>{t('home.aboutSection.desc')}</span>

                        <div className="content_button">
                            <Button
                                btnText={t('home.aboutSection.btnText')}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                                href={'/about'}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="main_title_wrapper">
                <div className="main_slogan">

                    <div className="main_slogan_text">
                        <h1>{t('home.collectionSection.title')}</h1>
                        <p>{t('home.collectionSection.desc')}</p>
                        <div className="content_button">
                            <Button
                                btnText={t('home.collectionSection.btnText')}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                                href={'/about'}
                            />
                        </div>
                    </div>

                </div>
                <div className="slide_wrapper">
                    <Slider
                        loop={true}
                        options={sliderMainOptions}
                    />
                </div>
            </div>

            <div className="scroller_container">
                <h1>{t('home.marqueeSection.title')}</h1>
                <div className="scroller_departments">

                    <div className="scroll_flowers scroll_parts">
                        <div className="scroller_text">
                            <h1>{t('home.marqueeSection.flowers')}</h1>
                        </div>

                        <ParallaxText baseVelocity={-1} size={2}>
                            <img src="https://sun9-48.userapi.com/impg/nMctEaxRZdeF4u3ad-nnx4aH06fvtGNBVzAWiw/4qNNq6-VWP4.jpg?size=1080x720&quality=95&sign=6961a86d4edb0d31f7e8b4d1295badf1&type=album" />
                            <img src="https://sun9-40.userapi.com/impg/1ENGAYDDpURdfP4tKwQJFr0Xe7iHKlM5R5ozwQ/XcJlM2tCL6U.jpg?size=1080x720&quality=95&sign=ede28e0ac82d593a3f7c4f32ec257897&type=album" />
                            <img src="https://sun9-22.userapi.com/impg/9sKkMp-lAaxDiQUqr0hXWvi2nPOjZXUtQO7QXA/cKfXbojIP6A.jpg?size=1080x720&quality=95&sign=c5c4e2fbbcc17fda22009b9412cddf72&type=album" />
                            <img src="https://sun9-15.userapi.com/impg/xvDeQLcCHmOfwY2Xnsw5eadfdj_Uyu_7HMbFcQ/zBYQhowM-fw.jpg?size=1080x720&quality=95&sign=6e131275efe20b7edda90aa959611ff3&type=album" />
                            <img src="https://sun9-21.userapi.com/impg/arYn0Oo2rzIy09CoQ58jlmEceElVpzsXeZQihg/IcWy4X15pi4.jpg?size=1080x720&quality=95&sign=c4ab4e5f38c73529eb38cb214f516fd0&type=album" />
                            <img src="https://sun9-7.userapi.com/impg/wf18sBd9iZtg_KVymP6C_dAtgXA9s2PwOE5zhQ/uF06sgrQF1Y.jpg?size=1080x721&quality=95&sign=9ddbd63ebceeed218b2eaa5e212788dd&type=album" />
                            <img src="https://sun9-42.userapi.com/impg/GcEbFo0ambtlcUOZ8FXccdpsDJM6L_2cDOj8ZQ/SEog1xdbFq0.jpg?size=1080x720&quality=95&sign=06b2b544d815bf3df841a4e14b4def72&type=album" />
                            <img src="https://sun9-44.userapi.com/impg/WIVU5U5_MLd-1h-EkDVbahNXn0Z00Aahsj_B9w/kxSW1BGXo98.jpg?size=1080x720&quality=95&sign=cb76ec7275dc3862029dab3fea764963&type=album" />
                        </ParallaxText>
                    </div>

                    <div className="scroll_plants scroll_parts">
                        <ParallaxText baseVelocity={1} size={2}>
                            <img src="https://sun9-34.userapi.com/impg/1R5J3N2P5dbh20e4THF4I_df9_MYlyFNaN6iZQ/-DvJaU3lgac.jpg?size=1080x720&quality=95&sign=cd52d4ac54a7096e55d3255ba9911923&type=album" />
                            <img src="https://sun9-54.userapi.com/impg/dEYVhkKVYhfv5n1GtqvnPIfC83khj3w2FZZ4Mw/eXfLzvJLtSc.jpg?size=1080x720&quality=95&sign=4aa9df82d16419e4c7c21814b276914f&type=album" />
                            <img src="https://sun9-26.userapi.com/impg/Ux1bIswMAsx5cJuDCOyhOVRh0R4iEPnmAnxaFg/c52T3tfATFY.jpg?size=1080x720&quality=95&sign=ec89164171e9f51760f45a117bdbf011&type=album" />
                            <img src="https://sun9-80.userapi.com/impg/wCpJPkYemI6V8nZl2p9NOn8Mxs7sLNPF9Ao6mg/yahR2arSSW0.jpg?size=1080x720&quality=95&sign=e88a5bf10f434e81b3ad75df0750b531&type=album" />
                            <img src="https://sun9-1.userapi.com/impg/Ekqc3MyVhPa5rJITw149XXX4gkqUNe73cTpbqA/9RgV5lC2Nfc.jpg?size=1080x720&quality=95&sign=ba625321c16f08a073d0e4c7b6eddd37&type=album" />
                            <img src="https://sun9-65.userapi.com/impg/MoWU_g5dqcq7mY1D0kTEBkALTFrRhOrxacqkog/56UYe9qq0gc.jpg?size=1080x720&quality=95&sign=3df65d793c6dce32c9d17e096e48a703&type=album" />
                            <img src="https://sun9-43.userapi.com/impg/ELqkySzfWawwvgbldNI_GDgglvGRXpxo0n5yOA/1wGEGuEQ6KE.jpg?size=1080x720&quality=95&sign=bb6aeac8156d8bd5210fa4468de26784&type=album" />
                            <img src="https://sun9-18.userapi.com/impg/31yuM9aK2E5keNQj-TMqQG0Sk9xPlZttYbKDGg/7aMhXcdVyFQ.jpg?size=1080x720&quality=95&sign=5d2e6abc21fe19940ea25d410cdead7d&type=album" />
                        </ParallaxText>

                        <div className="scroller_text">
                            <h1>{t('home.marqueeSection.plants')}</h1>
                        </div>
                    </div>

                    <div className="scroll_accessories scroll_parts">
                        <div className="scroller_text">
                            <h1>{t('home.marqueeSection.accessories')}</h1>
                        </div>

                        <ParallaxText baseVelocity={-1} size={2}>
                            <img src="https://sun9-35.userapi.com/impg/xV-bwTCjzCyRUkAm2bawKS6VzHKJ-2OQAZHL1g/V-g7OucFuT8.jpg?size=1080x720&quality=95&sign=7893ae8957527f4c89ca97be863408ed&type=album" />
                            <img src="https://sun9-65.userapi.com/impg/PiG_CJClmW03ttlJ3nIh0ujga2lENQ1HISZsbw/2TXiywq56JE.jpg?size=1080x720&quality=95&sign=15f783bdb1e386d19d7379e5acb51c7e&type=album" />
                            <img src="https://sun9-22.userapi.com/impg/VvHm-8nVEnStN0Dp8ovhmttKRNutvp76aXj9wg/TsdL8PbslDI.jpg?size=1080x720&quality=95&sign=8e55367911e5e5fa6381a9cff3b43d29&type=album" />
                            <img src="https://sun9-79.userapi.com/impg/4EftWAYK4nnwT77RogS6G7rw0ORyudCyvidRPg/OM1gkXErFMI.jpg?size=1080x720&quality=95&sign=40be25d2701cb2b9535f04fd424d1dc8&type=album" />
                            <img src="https://sun9-42.userapi.com/impg/xaPAdb3rX0iFAZY2y23ny_LLyE33pqMOV7LyAg/VbsjP3bVF6g.jpg?size=1080x720&quality=95&sign=5b3973438055dd29264e83a515a056a6&type=album" />
                            <img src="https://sun9-11.userapi.com/impg/IZ3s0jAoR7oBo8bIuk865oflzkKjyH27dygR4Q/uYej2KtgoAI.jpg?size=1080x720&quality=95&sign=e9074ff5b7dd88232247b4ea2d4eb6af&type=album" />
                            <img src="https://sun9-3.userapi.com/impg/udA-zjSJ33wVL5T93qrATllWm_OUM86UKY_cvQ/ott_3BiUH_0.jpg?size=1080x720&quality=95&sign=2443a4a63ab2fe3bdfd6943f9225fdde&type=album" />
                            <img src="https://sun9-69.userapi.com/impg/16bVlWcD2mGxzQBiiKpl0uctGHsjjQzMSSj1Kg/Poo-gM-_obE.jpg?size=1080x720&quality=95&sign=465568ebb5a4b0f9a74f64c86b029c01&type=album" />
                        </ParallaxText>
                    </div>
                </div>
            </div>

            <div className="home_map_wrapper">
                <div className='map'>
                    <img src={MapSVG} />
                    <div className='map_wrapper'>
                        <div className="map_wrapper_text">
                            <span>{t('home.supplierSection.title')}</span>
                            <p>{t('home.supplierSection.desc')}</p>
                            <div className="content_button">
                                <Button
                                    btnText={t('home.supplierSection.btnText')}
                                    className={'btn btn_white hover_gold'}
                                    icon={'arrow-right'}
                                    href={'/cooperation'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="yandex_container">
                <div className='reviews_forms'>
                    <iframe className="reviews" src="https://yandex.ru/maps-reviews-widget/57660294184?comments"></iframe>
                    <iframe className="yandex_forms" src="https://forms.yandex.ru/u/678c1a1990fa7b0b411c1639/?iframe=1" frameborder={0} width={650}></iframe>
                </div>

            </div> */}
        </motion.div>
    )
}

export default Index