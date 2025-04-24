import React from 'react'

import './style.scss'

//Import Images
import LogoMini from '@/assets/icons/logo_mini.png'
import TGimg from '@/assets/icons/social/icons8-telegram.svg'
import VKimg from '@/assets/icons/social/icons8-vk.svg'
import Insimg from '@/assets/icons/social/icons8-instagram.svg'
import YTimg from '@/assets/icons/social/icons8-youtube.svg'

import OasisLogo from '@/assets/media/images/gf_logo.svg'

import { Link } from 'react-router-dom';

//Import Utils
import { useTranslation } from 'react-i18next';

//Import Components
// import Button from '@/components/Button/Index'

const Index = () => {
    const { t, i18n } = useTranslation();
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div className="footer_container">

                <div className="f_cont_logo logo_1">
                    <img src={LogoMini} alt="logo mini" />
                </div>

                <div className="footer_container_inner">
                    <div className="f_cont_nav_list list_1">
                        <Link to={'/products/flowers'}>{t('footer.flowers.title')}</Link>
                        <div className="nav_list_inner">
                            <ul className="list_text">
                                <Link to={'/products/flowers/roses'}><li>{t('footer.flowers.rose')}</li></Link>
                                <Link to={'/product?productType=flowers&productName=lily'}><li>{t('footer.flowers.lily')}</li></Link>
                                <Link to={'/product?productType=flowers&productName=peonies'}><li>{t('footer.flowers.peony')}</li></Link>
                                <Link to={'/product?productType=flowers&productName=tulips'}><li>{t('footer.flowers.tulip')}</li></Link>
                                <Link to={'/products/flowers/chrysanthemum'}><li>{t('footer.flowers.chrysanthemum')}</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="f_cont_nav_list list_2">
                        <Link to={'/products/plants'}>{t('footer.plants.title')}</Link>
                        <div className="nav_list_inner">
                            <ul className="list_text">
                                <Link to={'/products/plants/domestic'}><li>{t('footer.plants.indoor')}</li></Link>
                                <Link to={'/products/plants/greenery'}><li>{t('footer.plants.green')}</li></Link>
                                <Link to={'/products/plants/grunt'}><li>{t('footer.plants.soils')}</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="f_cont_nav_list list_3">
                        <Link to={'/products/accessories'}>{t('footer.accessories.title')}</Link>
                        <div className="nav_list_inner">
                            <ul className="list_text">
                                <Link to={'/product?productType=accessories&productName=dried%20flowers'}><li>{t('footer.accessories.dried')}</li></Link>
                                <Link to={'/product?productType=accessories&productName=package'}><li>{t('footer.accessories.package')}</li></Link>
                                <Link to={'/product?productType=accessories&productName=ribbons'}><li>{t('footer.accessories.ribbons')}</li></Link>
                                <Link to={'/product?productType=accessories&productName=vases'}><li>{t('footer.accessories.vases')}</li></Link>
                                <Link to={'/product?productType=accessories&productName=baskets'}><li>{t('footer.accessories.baskets')}</li></Link>
                                <Link to={'/product?productType=accessories&productName=interior%20items'}><li>{t('footer.accessories.interior')}</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="contact_us contact_1">
                        <div className="social_media_container">
                            <Link to={'https://www.instagram.com/gfccru'} target='_blank'>
                                <img src={Insimg} alt="instagram" /> </Link>
                            <Link to={'https://t.me/OasisFlowersOpt'} target='_blank'>
                                <img src={TGimg} alt="telegram" /> </Link>
                            <Link to={'https://vk.com/goldenflowerscc'} target='_blank'>
                                <img src={VKimg} alt="facebook" /> </Link>
                            <Link to={'https://www.youtube.com/@gfccru'} target='_blank'>
                                <img src={YTimg} alt="youtube" /> </Link>
                        </div>
                        <div className="oasis_container">
                            <h1>
                                Партнер:
                            </h1>
                            <Link to={'https://opt.oasis-gc.ru/'} target='_blank' className='oasis'>
                                <img src={OasisLogo} alt="oasis" />
                            </Link>

                            {/* <Link to={'https://yandex.ru/maps/-/CDrK4P8v'} target='_blank' className='adres'>{t('footer.address')}</Link> */}
                        </div>
                    </div>
                </div>

                <div className="footer_bottom">
                    <span className='rights_text'>© {year} {t('footer.rights')}</span>
                    <span>
                        <Link to="https://faridguseinow.framer.website/" target='_blank'>{t('footer.sitecraft')}</Link>
                    </span>
                </div>

            </div>

        </footer>
    )
}

export default Index
