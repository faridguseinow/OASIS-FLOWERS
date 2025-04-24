import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

//Import Images
import Loading from '@/assets/icons/loading.svg';

//Import Layout
import HeaderRepeat from '@/layout/HeaderRepeat/index';

//Import Component
import Button from '@/components/Button/Index';
import Input from '@/components/Input/Index';
import GalleryCard from '@/components/GalleryCard/Index';

//Import DB
import PagesData from '@/db/pages.json';
import CooperationData from '@/db/cooperation.json';

///Import Utils
import { useTranslation } from 'react-i18next';

///IMPORT HOOKS
import useShowMore from '@/hooks/useShowMore';
import { Helmet } from 'react-helmet';

///Import Constants
import { pageVariants, pageTransition } from '@/constants/framerSettings.js';

//Import react router dom
import { useLocation, useNavigate } from 'react-router-dom';

const Index = () => {
    const { t, i18n } = useTranslation();
    let lang = i18n.language;
    const location = useLocation();
    const navigate = useNavigate();
    const { visibleCardLength, showMoreFunc, loading, setMaxLengthDefault } = useShowMore();
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('s');
    const [galleryLoading, setGalleryLoading] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState(searchValue);
    const [galleryData, setGalleryData] = useState([]);
    const pageData = PagesData.find(p => p.page_name === 'cooperation');

    useEffect(() => {
        setGalleryLoading(true);
        setMaxLengthDefault();

        setTimeout(() => {
            if (searchValue) {
                let searchedValue = CooperationData.filter(f => f.name[lang].toLowerCase().includes(searchValue.toLowerCase()))
                setGalleryData(searchedValue);
            } else {
                setGalleryData(CooperationData);
            }
            setGalleryLoading(false);
        }, 500)
    }, [location]);

    //Search On Submit
    const searchSubmit = (e) => {
        e.preventDefault();

        if (searchValue !== searchInputValue) {
            navigate(`${location.pathname}?s=${searchInputValue}`)
        }
    }

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="products-page__container">

            <Helmet>
                <title>Oasis Cash&Carry - Cooperation</title>
                <link rel="canonical" href="http://gfcc.ru/cooperation" />
            </Helmet>

            <HeaderRepeat
                title={pageData?.headerWrapper.title[lang]}
                img={pageData?.headerWrapper.img}
            />

            <div className="products_content_wrapper">
                <div className="content_wrapper_inner">
                    <p className='content_title' dangerouslySetInnerHTML={{ __html: pageData?.galleryTitle[lang] }}></p>

                    <div className="details__container">
                        <div className="search_bar">
                            <Input
                                value={searchInputValue}
                                type={'text'}
                                className={'input_white'}
                                placeholder={t('searchInput')}
                                icon={'search'}
                                handleChange={(e) => setSearchInputValue(e.target.value)}
                                handleBlur={searchSubmit}
                                submitHandler={searchSubmit}
                            />
                        </div>

                        <div className="gallery_grid_wrapper">
                            {galleryLoading &&
                                <div className="loading_wrapper">
                                    <img className='loading_icon' src={Loading} alt='' />
                                </div>
                            }

                            {!galleryLoading && galleryData?.length === 0 ?
                                <div className="no_result_wrapper">
                                    <h2>Товар не найден...</h2>
                                </div>
                                :
                                null
                            }

                            {!galleryLoading && galleryData?.slice(0, visibleCardLength).map((f, i) => (
                                <GalleryCard
                                    key={i}
                                    img={f.images && f.images.img}
                                    title={f?.name[lang]}
                                    href={f.href}
                                    target={'_blank'}
                                />
                            ))
                            }

                        </div>

                        {
                            loading ?
                                <div className="load_more_wrapper">
                                    <img src={Loading} className='loading_icon' alt="" />
                                </div>
                                :
                                !galleryLoading && visibleCardLength < galleryData?.length ?
                                    <div className="load_more_wrapper">
                                        <Button
                                            className={'btn btn_white hover_gold'}
                                            btnText={'Загрузить еще...'}
                                            disabled={loading ? true : false}
                                            clickHandler={showMoreFunc}
                                        />
                                    </div>
                                    :
                                    null
                        }
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Index