import React, { useState, useEffect } from 'react';

//Import Images
import Loading from '@/assets/icons/loading.svg';

//Import Layout
import HeaderRepeat from '@/layout/HeaderRepeat/index';

//Import Component
import Button from '@/components/Button/Index';
import Input from '@/components/Input/Index';
import BackBtn from '@/components/BackBtn/index';
import GalleryCard from '@/components/GalleryCard/Index';

//Import DB
import PagesData from '@/db/pages.json';
import PlantsData from '@/db/plants.json';

///Import Utils
import { useTranslation } from 'react-i18next';

///IMPORT HOOKS
import useShowMore from '@/hooks/useShowMore';

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
   const [searchInputValue, setSearchInputValue] = useState(searchValue);
   const [galleryLoading, setGalleryLoading] = useState(true);
   const [pageData, setPageData] = useState(null);
   const [galleryData, setGalleryData] = useState([]);
   const [collectionData, setCollectionData] = useState(null);

   useEffect(() => {
      let currentLocation = location.pathname.split('/')[2];
      let itemName = location.pathname.split('/')[3];
      setMaxLengthDefault();

      setPageData({
         page_URL: currentLocation,
         itemName: itemName
      });
   }, [location]);

   useEffect(() => {
      setGalleryLoading(true);
      getSearchedData();

      setTimeout(() => {
         setGalleryLoading(false);
      }, 500)
   }, [pageData]);

   const getSearchedData = () => {
      if (pageData) {
         if (searchValue) {
            let selectedFlowerData = PlantsData.find((p, i) => p.inner_URL === pageData.itemName);
            let searchedValue = selectedFlowerData?.items.filter(p => p.name[lang].toLowerCase().includes(searchValue.toLowerCase()));
            setGalleryData(searchedValue);
            setCollectionData(selectedFlowerData);
         } else {
            let selectedFlowerData = PlantsData.find((p, i) => p.inner_URL === pageData.itemName);
            setGalleryData(selectedFlowerData?.items);
            setCollectionData(selectedFlowerData);
         }
      }
   }

   //Search On Submit
   const searchSubmit = (e) => {
      e.preventDefault();

      if (searchValue !== searchInputValue) {
         navigate(`${location.pathname}?s=${searchInputValue}`)
      }
   }

   return (
      <div className="products-page__container">

         <HeaderRepeat
            title={collectionData?.name[lang].replace('', ' ')}
            img={collectionData?.images[0].img}
         />

         <div className="products_content_wrapper">
            <div className="content_wrapper_inner">
               <p className='content_title' dangerouslySetInnerHTML={{ __html: collectionData?.galleryTitle[lang] }}></p>

               <div className="details__container">

                  <div className="search_bar" style={{ justifyContent: 'space-between' }}>
                     <BackBtn className={'btn btn_white hover_gold'} />

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
                              `/product?productType=plants&productName=${f.name['en'].toLowerCase()}&collection=${collectionData.inner_URL}`
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
            </div>
         </div>
      </div>
   )
}

export default Index