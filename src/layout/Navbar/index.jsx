import React from 'react'
import './style.scss'

//import images
import Logo from '@/assets/media/images/oasis_logo.png'
import Logo_S from '@/assets/media/images/logoOA.png'
import ArrowDown from '@/assets/icons/arrowDown';
// import ShopSVG from '@/assets/icons/shop.svg'
// import DownloadSVG from '@/assets/icons/download.svg'
// import DownloadSVG from '@/assets/icons/eye.png'
// import VideoCam from '@/assets/icons/videocam.png'

///Import react router dom
import { Link } from 'react-router-dom';

///Import Utils
import { useTranslation } from 'react-i18next';

const Index = ({ menuIsActive, setMenuIsActive }) => {
    const { t, i18n } = useTranslation();

    const menuShowHide = () => {
        menuIsActive ? setMenuIsActive(false) : setMenuIsActive(true)
    }

    // const changeLanguage = async lang => {
    //     await i18n.changeLanguage(lang);
    // }

    const changeLanguage = (lang) => {
        // Store the selected language in localStorage
        localStorage.setItem('i18nextLng', lang);
        // Reload the page to apply the new language
        window.location.reload();
    };

    return (
        <div className='Navbar'>
            <div className='inner_nav'>

                <div className="nav_logo">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src={Logo} alt="Oasis Logo" />
                        </Link>
                    </div>
                    <div className="logo_s" onClick={() => menuIsActive && setMenuIsActive(false)}>
                        <Link to={'/'}>
                            <img src={Logo_S} alt="Oasis Logo Mini" />
                        </Link>
                    </div>
                </div>


                <div className='nav_menu'>

                    <div className='nav_menu_container'>

                        <div className="menu_text_main">
                            <Link to={'/products/flowers'}>
                                <div className='menu_text_main_inner'>
                                    <p>{t('navbar.collection')}</p>
                                    <ArrowDown />
                                </div>
                            </Link>

                            <div className='nav_menu_arrow_list'>
                                <ul>
                                    <Link to={'/products/flowers'}>
                                        <li>{t('navbar.flowers')}</li>
                                    </Link>
                                    <Link to={'/products/plants'}>
                                        <li>{t('navbar.plants')}</li>
                                    </Link>
                                    <Link to={'/products/accessories'}>
                                        <li>{t('navbar.accessories')}</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="menu_text_main">
                            <Link to={'/about'}>
                                <div className='menu_text_main_inner'>
                                    <p>{t('navbar.aboutUs')}</p>
                                    <ArrowDown />
                                </div>
                            </Link>
                            <div className='nav_menu_arrow_list'>
                                <ul>
                                    <Link to={'/about'}>
                                        <li>{t('navbar.whoWeAre')}</li>
                                    </Link>
                                    <Link to={'/cooperation'}>
                                        <li>{t('navbar.cooperation')}</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>

                        <div className="menu_text_main">

                            <Link to={'/contacts'}>
                                <div className='menu_text_main_inner'>
                                    <p>{t('navbar.contact')}</p>
                                </div>
                            </Link>

                        </div>

                        {/* <div className="menu_text_main camera">

                            <Link to={'/cameras'}>
                                <div className='menu_text_main_inner camera_inner'>
                                    <img src={VideoCam} width={24} />
                                    <p>{t('navbar.showcase')}</p>
                                </div>
                            </Link>

                        </div> */}
                    </div>
                </div>

                <div className="nav_right">

                    <div className="shop_button">
                        {/* <a href={"https://gfcc.clients.site/"} target={'_blank'}>
                            <button>
                                <img src={ShopSVG}/>
                                <span>Магазин</span>
                            </button>
                        </a> */}
                        <a href={window.innerWidth <= 767 ? "http://gfcc.ru/pricelist" : "http://gfcc.ru/pricelist"} target={'_blank'}>
                            <button>
                                {/* <img src={DownloadSVG} width={24}/> */}
                                <span>{t('navbar.priceList')}</span>
                            </button>
                        </a>
                    </div>

                    <div className="localization__wrapper">
                        <span
                            onClick={() => changeLanguage('ru')}
                            style={{ color: i18n.language === 'ru' && 'var(--gold)' }}
                        >RU</span>
                        <span>|</span>
                        <span
                            onClick={() => changeLanguage('en')}
                            style={{ color: i18n.language === 'en' && 'var(--gold)' }}
                        >EN</span>
                    </div>

                    <div className="nav_hamburger" data-isactive={menuIsActive ? 'true' : 'false'}>

                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                        <label className="burger" htmlFor="burger-checkbox" onClick={menuShowHide}></label>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Index