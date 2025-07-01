import React from 'react'
import './style.scss'

//import images
import Logo from '@/assets/icons/oasis_logo.png'
import Logo_S from '@/assets/icons/logo_mini.png'
import ArrowDown from '@/assets/icons/arrowDown';

//import components
import ThemeIcon from '@/components/ThemeIcon';


///Import react router dom
import { Link } from 'react-router-dom';

///Import Utils
import { useTranslation } from 'react-i18next';

const Index = ({ menuIsActive, setMenuIsActive, toggleTheme }) => {
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
                                    <Link to={'/suppliers'}>
                                        <li>{t('navbar.suppliers')}</li>
                                    </Link>
                                    <Link to={'https://opt.oasis-gc.ru/'} target='_blank'>
                                        <li>{t('navbar.gardenCenter')}</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="menu_text_main">
                            <Link to={'/contacts'}>
                                <div className='menu_text_main_inner'>
                                    <p>{t('navbar.contacts')}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="nav_right">

                    {/* <div className="shop_button">
                        <a href={"https://gfcc.clients.site/"} target={'_blank'}>
                            <button>
                                <img src={ShopSVG}/>
                                <span>Магазин</span>
                            </button>
                        </a>
                        <a href={window.innerWidth <= 767 ? "https://docs.google.com/spreadsheets/d/1pGaY3Efuyyitsdeq3vMNeF9nMRLFc4ojJA6T_mDleyM/edit?gid=652358148#gid=652358148" : "https://docs.google.com/spreadsheets/d/1pGaY3Efuyyitsdeq3vMNeF9nMRLFc4ojJA6T_mDleyM/edit?gid=1708159673#gid=1708159673"} target={'_blank'}>
                            <button>
                                <img src={DownloadSVG} width={24}/>
                                <span>{t('navbar.priceList')}</span>
                            </button>
                        </a>
                    </div> */}

                    <div className="localization__wrapper">
                        <span
                            onClick={() => changeLanguage('ru')}
                            style={{ color: i18n.language === 'ru' && 'var(--pink)' }}
                        >RU</span>
                        <span>|</span>
                        <span
                            onClick={() => changeLanguage('en')}
                            style={{ color: i18n.language === 'en' && 'var(--pink)' }}
                        >EN</span>
                    </div>

                    <div className="theme_switcher">
                        <button onClick={toggleTheme} className="theme-toggle-btn">
                            <ThemeIcon />
                        </button>
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