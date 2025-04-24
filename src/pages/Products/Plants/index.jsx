import React, { useEffect, useState } from 'react';

//Import Images
import Loading from '@/assets/icons/loading.svg';

//Import Component
import Button from '@/components/Button/Index';
import Input from '@/components/Input/Index';
import GalleryCard from '@/components/GalleryCard/Index';
import { Helmet } from 'react-helmet';

//Import DB
import PlantsData from '@/db/plants.json';

///Import Utils
import { useTranslation } from 'react-i18next';

///IMPORT HOOKS
import useShowMore from '@/hooks/useShowMore';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

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

   useEffect(() => {
      setGalleryLoading(true);
      setMaxLengthDefault();

      setTimeout(() => {
         if (searchValue) {
            let searchedValue = PlantsData.filter(f => f.name[lang].toLowerCase().includes(searchValue.toLowerCase()))
            setGalleryData(searchedValue);
         } else {
            setGalleryData(PlantsData);
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
      <div className="details__container">

         <Helmet>
            <title>Oasis Cash&Carry - Plants</title>
            <link rel="canonical" href="http://gfcc.ru/products/plants" />
         </Helmet>

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
                  img={f.images && f.images[0].img}
                  title={f?.name[lang]}
                  href={
                     `${location.pathname}/${f.inner_URL}`
                  }
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
   )
}

export default Index