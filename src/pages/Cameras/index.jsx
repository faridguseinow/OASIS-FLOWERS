import React from 'react'
import './style.scss'
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '@/constants/framerSettings.js';
import HeaderRepeat from '@/layout/HeaderRepeat/index'
import { useTranslation } from 'react-i18next';
// import 'react-photo-view/dist/react-photo-view.css';
// import { PhotoView } from 'react-photo-view';
import ModalImage from "react-modal-image";
import { Helmet } from "react-helmet";

// IMAGES
// import Kenya from "@/assets/media/images/camera/k.jpg"
// import Xrizant from "@/assets/media/images/camera/x.jpg"
// import Ecuador from "@/assets/media/images/camera/ec.jpg"
// import Exotics from "@/assets/media/images/camera/ex.jpg"
// import Plant from "@/assets/media/images/camera/p.jpg"
// import Plant2 from "@/assets/media/images/camera/p2.jpg"

function index() {

    const { t, i18n } = useTranslation();

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="cameras_container">

            <Helmet>
                <title>Oasis Cash&Carry - Cameras</title>
                <link rel="canonical" href="http://gfcc.ru/cameras" />
            </Helmet>

            <div className="fixed-img__wrapper"></div>

            <HeaderRepeat
                title={t('navbar.showcase')}
                img={'https://sun9-64.userapi.com/impg/_5mezx39pBYrSEf2Zu7yRqQ5Jzb8Av3yOCCRdw/wKpkI0H8UMc.jpg?size=2560x1709&quality=95&sign=9327b466c838e22f865e7915915c48ef&type=album'}
            />

            <div className="camera">
                <div className='cameras_container'>

                    <div className="cam_container_inner">

                        <h3 dangerouslySetInnerHTML={{ __html: t('showcase.sectionMain.caution') }}></h3>

                        {/* <div className="camera_gallery">
                            <div className="image_container">
                                <div className="xrizant img_cont_inner">
                                    <ModalImage hideDownload
                                        small={Xrizant}
                                        large={Xrizant}
                                        alt={t('showcase.sectionMain.xrizant')}
                                    />
                                    <span>{t('showcase.sectionMain.xrizant')}</span>
                                </div>
                                <div className="exotics img_cont_inner">
                                    <ModalImage hideDownload
                                        small={Exotics}
                                        large={Exotics}
                                        alt={t('showcase.sectionMain.exotic')}
                                    />
                                    <span>{t('showcase.sectionMain.exotic')}</span>
                                </div>
                                <div className="plant img_cont_inner">
                                    <ModalImage hideDownload
                                        small={Plant}
                                        large={Plant}
                                        alt={t('showcase.sectionMain.plant')}
                                    />
                                    <span>{t('showcase.sectionMain.plant')}</span>
                                </div>
                                <div className="plant_2 img_cont_inner">
                                    <ModalImage hideDownload
                                        small={Plant2}
                                        large={Plant2}
                                        alt={t('showcase.sectionMain.plant2')}
                                    />
                                    <span>{t('showcase.sectionMain.plant2')}</span>
                                </div>
                                <div className="kenya img_cont_inner">
                                    <ModalImage hideDownload
                                        small={Kenya}
                                        large={Kenya}
                                        alt={t('showcase.sectionMain.kenya')}
                                    />
                                    <span>{t('showcase.sectionMain.kenya')}</span>
                                </div>
                                <div className="ecuador img_cont_inner">
                                    <ModalImage hideDownload
                                        small={Ecuador}
                                        large={Ecuador}
                                        alt={t('showcase.sectionMain.ecuador')}
                                    />
                                    <span>{t('showcase.sectionMain.ecuador')}</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default index