import React, { useRef, useEffect } from 'react'
import './style.scss';
import { motion } from 'framer-motion';

import { useLocation } from 'react-router-dom';

import CountUp from 'react-countup';

import Slider from '@/components/Slider/index'
import Button from '@/components/Button/Index';

///Import Utils
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

//import icons
import YearIcon from '@/assets/icons/num_icons/work.svg'
import PlantationIcon from '@/assets/icons/num_icons/plantation.svg'
import ProductsIcon from '@/assets/icons/num_icons/clients.svg'
import ReviewsIcon from '@/assets/icons/num_icons/reviews.svg'

///Import Constants
import { pageVariants, pageTransition } from '@/constants/framerSettings.js';

const Index = () => {
    const { t, i18n } = useTranslation();
    const collectionRef = useRef(null);
    const location = useLocation();

    let sliderFlowers = [
        {
            img: 'https://sun9-67.userapi.com/impg/jX-0ApmiVvwI51S32oNOVZFJDVry9zG_PjngPw/MTF0ZWxy5jw.jpg?size=2560x1707&quality=95&sign=05ad46b891ea73410dcdb8d68e3e4c85&type=album'
        }
    ]

    let sliderPlants = [
        {
            img: 'https://sun9-10.userapi.com/impg/WMxh6QQEBLAE3mT5MYg-M00Jz0wDLIC4cNmGkw/y49aae7hQG8.jpg?size=1834x1222&quality=95&sign=956a7254935c5a03df2af232a23f5f59&type=album'
        }
    ]

    let sliderAccessories = [
        {
            img: 'https://sun9-79.userapi.com/impg/3QHsB5ssjUoeeEwG05VMMTKsdBBB2MvPDQ3-MA/yUB1CLbahA0.jpg?size=1080x720&quality=95&sign=cc1394fc131b7401ce46f7e4cbc1cd85&type=album'
        }
    ]

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="about_page">

            <Helmet>
                <title>Oasis Cash&Carry - About</title>
                <link rel="canonical" href="http://gfcc.ru/about" />
            </Helmet>

            <div className="about_content_wrapper">

                <div className="about_head">

                    <div className="about_div">
                        <div className="about_title">
                            <h1 className='container_title_num'>{t('about.header.title')}</h1>
                            <span className='container_text_num'>{t('about.header.desc')}</span>
                        </div>

                        <div className="animated_numbers_wrapper">
                            <div className="animated_num_wrap_inner">

                                <div className="year_section num_section">
                                    <div className="num_icon">
                                        <img src={YearIcon} />
                                    </div>
                                    <div className="year_count count">
                                        <h1>
                                            <CountUp end={26} duration={2} />+
                                        </h1>
                                    </div>
                                    <div className="year_text num_text">
                                        <span>{t('about.header.num1')}</span>
                                    </div>
                                </div>

                                <div className="plantation_section num_section">
                                    <div className="num_icon">
                                        <img src={PlantationIcon} />
                                    </div>
                                    <div className="plantation_count count">
                                        <h1><CountUp end={100} duration={2} />+</h1>
                                    </div>
                                    <div className="plantation_text num_text">
                                        <span>{t('about.header.num2')}</span>
                                    </div>
                                </div>

                                <div className="products_section num_section">
                                    <div className="num_icon">
                                        <img src={ProductsIcon} />
                                    </div>
                                    <div className="products_count count">
                                        <h1><CountUp end={500} duration={2} />+</h1>
                                    </div>
                                    <div className="products_text num_text">
                                        <span>{t('about.header.num3')}</span>
                                    </div>
                                </div>

                                <div className="starts_section num_section">
                                    <div className="num_icon">
                                        <img src={ReviewsIcon} />
                                    </div>
                                    <div className="starts_count count">
                                        <h1><CountUp end={5} duration={2} />+</h1>
                                    </div>
                                    <div className="starts_text num_text">
                                        <span>{t('about.header.num4')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="about_slider_container" id={'collection'}>

                    <h1 ref={collectionRef} className='container_title'>{t('about.departments.title')}</h1>

                    <div className="about_slider_container_inner">

                        <div className="flowers_slider">

                            <div className="slide_wrapper">
                                <Slider
                                    loop={true}
                                    options={sliderFlowers}
                                />
                            </div>

                            <div className="main_slogan_text">
                                <h1>{t('about.departments.flowers.title')}</h1>
                                <ul className='product_list'>
                                    <li><Link to={'/products/flowers/roses'}>{t('about.departments.flowers.link1')}</Link></li>
                                    <li><Link to={'/products/flowers/chrysanthemum'}>{t('about.departments.flowers.link2')}</Link></li>
                                    <li><Link to={'/products/flowers/dianthus'}>{t('about.departments.flowers.link3')}</Link></li>
                                </ul>
                                <div className="content_button">
                                    <Button
                                        btnText={t('about.departments.flowers.btnText')}
                                        className={'btn btn_white hover_gold'}
                                        icon={'arrow-right'}
                                        href={'/products/flowers'}
                                    />
                                </div>
                            </div>

                        </div>


                        <div className="plants_slider">

                            <div className="slide_wrapper">
                                <Slider
                                    loop={true}
                                    options={sliderPlants}
                                />
                            </div>

                            <div className="main_slogan_text">
                                <h1>{t('about.departments.plants.title')}</h1>
                                <ul className='product_list'>
                                    <li><Link to={'/products/plants/domestic'}>{t('about.departments.plants.link1')}</Link></li>
                                    <li><Link to={'/products/plants/greenery'}>{t('about.departments.plants.link2')}</Link></li>
                                    <li><Link to={'/products/plants/grunt'}>{t('about.departments.plants.link3')}</Link></li>
                                </ul>
                                <div className="content_button">
                                    <Button
                                        btnText={t('about.departments.plants.btnText')}
                                        className={'btn btn_white hover_gold'}
                                        icon={'arrow-right'}
                                        href={'/products/plants'}
                                    />
                                </div>
                            </div>

                        </div>


                        <div className="accessories_slider">

                            <div className="slide_wrapper">
                                <Slider
                                    loop={true}
                                    options={sliderAccessories}
                                />
                            </div>

                            <div className="main_slogan_text">
                                <h1>{t('about.departments.accessories.title')}</h1>
                                <ul className='product_list'>
                                    <li><Link to={'/product?productType=accessories&productName=for%20floristry'}>{t('about.departments.accessories.link1')}</Link></li>
                                    <li><Link to={'/product?productType=accessories&productName=package'}>{t('about.departments.accessories.link2')}</Link></li>
                                    <li><Link to={'/product?productType=accessories&productName=baskets'}>{t('about.departments.accessories.link3')}</Link></li>
                                </ul>
                                <div className="content_button">
                                    <Button
                                        btnText={t('about.departments.accessories.btnText')}
                                        className={'btn btn_white hover_gold'}
                                        icon={'arrow-right'}
                                        href={'/products/accessories'}
                                    />
                                </div>
                            </div>

                        </div>

                    </div>


                </div>




            </div>

        </motion.div>
    )
}

export default Index