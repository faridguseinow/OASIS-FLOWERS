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
import Button from '@/components/Button/Index';
import CustomerSupport from '@/assets/media/images/materials/contact_us.jpg';


function index() {

    const { t, i18n } = useTranslation();

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="pricelist_container">

            <Helmet>
                <title>Oasis Cash&Carry - Pricelist</title>
                <link rel="canonical" href="http://gfcc.ru/pricelist" />
            </Helmet>

            <HeaderRepeat
                title={t('pricelist.title')}
                img={'https://sun9-42.userapi.com/impg/yDiaiiSfUeHH0DOYKoBqM0FOikGmkDXnCSVLwg/1IraivzOnuU.jpg?size=1920x1280&quality=95&sign=b764cf5ffcea021228149cb83d547181&type=album'}
            />

            <div className="pricelist">

                <div className="pricelist_wrapper">
                    <div className="image_container">
                        <img src={CustomerSupport} alt="" />
                    </div>

                    <div className='pricelist_container'>

                        <div className="zayavka">
                            <h1>{t('pricelist.sectionMain.zayavka')}</h1>

                            <Button
                                btnText={t('pricelist.sectionMain.send')}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                                href={'https://forms.gle/3dvQS5avmNaEnsRK8'}
                                target={'_blank'}
                            />
                        </div>

                        <div className="dostup">
                            <h1>{t('pricelist.sectionMain.dostup')}</h1>
                            <Button
                                btnText={t('pricelist.sectionMain.watch')}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                                href={'https://docs.google.com/spreadsheets/d/13crEl9oqD4mMIwqzXJKNrh8zemP5Tf0pw53jblwvByA/edit?gid=1708159673#gid=1708159673'}
                                target={'_blank'}
                            />
                        </div>

                    </div>
                </div>




            </div>
        </motion.div >


    )
}

export default index