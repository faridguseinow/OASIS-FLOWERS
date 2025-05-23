import React, { useState } from 'react'
import './style.scss';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { motion } from 'framer-motion';

import HeaderRepeat from '@/layout/HeaderRepeat/index'

//import images
import Num1 from '@/assets/icons/logo_mini.png'
import Num2 from '@/assets/icons/flowers_icons/chrysanthemum.png'
import Num3 from '@/assets/icons/flowers_icons/rose.png'
import Num4 from '@/assets/icons/flowers_icons/exotic.png'
import Num6 from '@/assets/icons/flowers_icons/domestic.png'
import Num8 from '@/assets/icons/flowers_icons/packaging.png';
import Num9 from '@/assets/icons/flowers_icons/kitay.png'
import Num10 from '@/assets/icons/flowers_icons/delivery.svg'

import BaseIMG from '@/assets/media/images/materials/base.jpg'
import { Helmet } from 'react-helmet';

///Import Constants
import { pageVariants, pageTransition } from '@/constants/framerSettings.js';

///Import Utils
import { useTranslation } from 'react-i18next';

function index() {
    const { t, i18n } = useTranslation();
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="contact_page">

            <Helmet>
                <title>Oasis Cash&Carry - Contacts</title>
                <link rel="canonical" href="http://oasisflowers.ru/contacts" />
            </Helmet>

            <HeaderRepeat
                title={t('contacts.title')}
                img={'https://i0.wp.com/floristsreview.com/wp-content/uploads/2021/12/Untitled-1-2.jpg?resize=1280%2C640&ssl=1'}
            />

            <div className="contact_content_wrapper">

                <div className="content_num">
                    <div className="number_container">
                        <div className="number_text">
                            <p className='p1' dangerouslySetInnerHTML={{ __html: t('contacts.section1.title') }}></p>
                            <p className='p2' dangerouslySetInnerHTML={{ __html: t('contacts.section1.title2') }}></p>
                        </div>

                        <div className="numbers">

                            <div className="num_section head">

                                <div className="num_sec_left">
                                    <img src={Num1} width={35} />
                                    <p>{t('contacts.section1.office1')}</p>
                                </div>
                                <div className="num_sec_right">
                                    <a href='https://wa.me/74956658888' target='_blank'>8 (495) 665 88 88</a>
                                    <a href='https://wa.me/79961738888' target='_blank'>8 (996) 173 88 88</a>
                                </div>

                            </div>

                            <div className="num_section xrizant">

                                <div className="num_sec_left">
                                    <img src={Num2} width={35} />
                                    <p>{t('contacts.section1.office2')}</p>
                                </div>
                                <div className="num_sec_right">
                                    <a href='https://wa.me/79660136667' target='_blank'>8 (966) 013 66 67</a>
                                </div>
                            </div>

                            <div className="num_section plant">

                                <div className="num_sec_left">
                                    <img src={Num6} width={35} />
                                    <p>{t('contacts.section1.office6')}</p>
                                </div>
                                <div className="num_sec_right">
                                    <a href='https://wa.me/79660132224' target='_blank'>8 (966) 013 22 24</a>

                                </div>

                            </div>

                            <div className="num_section exotics">

                                <div className="num_sec_left">
                                    <img src={Num4} width={35} />
                                    <p>{t('contacts.section1.office4')}</p>
                                </div>
                                <div className="num_sec_right">
                                    <a href='https://wa.me/79660135222' target='_blank'>8 (966) 013 22 22</a>
                                </div>

                            </div>

                            <div className="num_section rosekenya">

                                <div className="num_sec_left">
                                    <img src={Num3} width={35} />
                                    <p>{t('contacts.section1.office3')}</p>
                                </div>
                                <div className="num_sec_right">
                                    <a href='https://wa.me/79660132444' target='_blank'>8 (966) 013 24 44</a>
                                </div>

                            </div>

                            <div className="num_section roseecuador">

                                <div className="num_sec_left">
                                    <img src={Num3} width={35} />
                                    <p>{t('contacts.section1.office5')}</p>
                                </div>
                                <div className="num_sec_right">
                                    <a href='https://wa.me/79660135333' target='_blank'>8 (966) 013 53 33</a>
                                </div>

                            </div>

                            <div className="num_section rosewater">

                                <div className="num_sec_left">
                                    <img src={Num3} width={35} />
                                    <p>{t('contacts.section1.office7')}</p>
                                </div>
                                <div className="num_sec_right">
                                    <a href='https://wa.me/79252948020' target='_blank'>8 (925) 294 80 20</a>

                                </div>

                            </div>

                            <div className="num_section delivery">

                                <div className="num_sec_left">
                                    <img src={Num10} width={35} />
                                    <p>{t('contacts.section1.office10')}</p>
                                </div>
                                <div className="num_sec_right">
                                    <a href='https://wa.me/79031968889' target='_blank'>8 (903) 196 88 89</a>
                                    <a href='https://wa.me/79032408889' target='_blank'>8 (903) 240 88 89</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form__wrapper">

                    <div className="base_img">
                        <img src={BaseIMG} alt="base_img" />
                    </div>

                    <div className="map">
                        <div className='map_inner'>
                            <iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=37.887058%2C55.789800&mode=search&oid=1354017403&ol=biz&z=16">
                            </iframe>
                        </div>
                    </div>


                </div>
            </div>

        </motion.div>
    )
}

export default index