import React, { useEffect, useState } from 'react';
import './style.scss';
import { motion } from 'framer-motion';

////IMPORT COMPONENT
import Button from '@/components/Button/Index';
import BackBtn from '@/components/BackBtn/index';

////IMPORT DB
import FlowersData from '@/db/flowers.json';
import PlantsData from '@/db/plants.json';
import AccessoriesData from '@/db/accessories.json';

///Import Modals
import ThreeDModal from '@/components/Modals/ThreeDViewer';

///Import Utils
import { useTranslation } from 'react-i18next';

///Import React router Dom
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

///Import Constants
import { pageVariants, pageTransition } from '@/constants/framerSettings.js';

const Index = () => {
   const { t, i18n } = useTranslation();
   let lang = i18n.language;
   const location = useLocation();
   const navigate = useNavigate();
   const searchParams = new URLSearchParams(location.search);
   const [productData, setProductData] = useState(null);
   const [showMore, setShowMore] = useState(false);
   const [showMoreCare, setShowMoreCare] = useState(false);
   const [showMoreAssortment, setShowMoreAssortment] = useState(false);
   const [modalIsActive, setModalIsActive] = useState(false);

   useEffect(() => {
      getProductDatas();
   }, [location]);


   console.log(productData)
   const getProductDatas = async () => {
      switch (searchParams.get('productType')) {
         case 'flowers':
            if (searchParams.get('collection')) {
               let singleData = await FlowersData.find(f => f.inner_URL === searchParams.get('collection'));
               let getDataFromCollection = await singleData.items.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(getDataFromCollection);
            } else {
               let singleData = await FlowersData.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(singleData);
            }
            break;
         case 'plants':
            if (searchParams.get('collection')) {
               let singleData = await PlantsData.find(f => f.inner_URL === searchParams.get('collection'));
               let getDataFromCollection = await singleData.items.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(getDataFromCollection);
            } else {
               let singleData = await PlantsData.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(singleData);
            }
            break;
         case 'accessories':
            if (searchParams.get('collection')) {
               let singleData = await AccessoriesData.find(f => f.inner_URL === searchParams.get('collection'));
               let getDataFromCollection = await singleData.items.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(getDataFromCollection);
            } else {
               let singleData = await AccessoriesData.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(singleData);
            }
            break;
      }
   }

   return (
      <motion.div
         initial="initial"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}
         className="single-product_container">

         {
            productData?.threeDPath &&
            <ThreeDModal
               modalIsActive={modalIsActive}
               setModalIsActive={setModalIsActive}
               glbPath={productData?.threeDPath}
            />
         }

         <div className="product_about">
            <div className="button__wrapper">
               <BackBtn className={'btn btn_white hover_gold'} />

               {
                  productData?.threeDPath &&
                  <span className='btn btn_white hover_gold' onClick={() => setModalIsActive(true)}>view 3D</span>
               }
            </div>

            <h1 className='product_title'>{productData?.name[lang]}</h1>
            <div>
               <span className='product_description'
                  dangerouslySetInnerHTML={{
                     __html: productData?.desc && (showMore ? productData.desc[lang] : productData.desc[lang].slice(0, 150))
                  }}
               ></span>
               {
                  productData?.desc[lang].length > 150 &&
                  <span
                     style={{ fontSize: '18px', fontFamily: 'var(--f-regular)', color: 'var(--pink)', cursor: 'pointer' }}
                     onClick={() => showMore ? setShowMore(false) : setShowMore(true)}
                  > {showMore ? ` ${t('showLess')}` : ` ... ${t('showMore')}`}</span>
               }
            </div>
            {/* <span className='product_description' dangerouslySetInnerHTML={{ __html: Grund[1].desc['ru'] }}></span> */}
            <div className="product_elements">
               <div className="product_elements_wrapper">
                  {
                     productData?.plantation &&
                     <div className="product_quantity product-elements__item">
                        <h1>Плантация</h1>
                        <span>{productData?.plantation}</span>
                     </div>
                  }
                  {
                     productData?.flag &&
                     <div className="product_color product-elements__item">
                        <h1>Страна поставщика</h1>
                        <span>{productData?.flag[lang]}</span>
                     </div>
                  }
                  {
                     productData?.quantity &&
                     <div className="product_quantity product-elements__item">
                        <h1>Количество в упаковке (шт.)</h1>
                        <span>{productData?.quantity}</span>
                     </div>
                  }
                  {
                     productData?.color &&
                     <div className="product_color product-elements__item">
                        <h1>Цвет</h1>
                        <span>{productData?.color[lang]}</span>
                     </div>
                  }
                  {
                     productData?.season &&
                     <div className="product_seasons product-elements__item">
                        <h1>Сезон</h1>
                        <span>{productData?.season[lang]}</span>
                     </div>
                  }
                  {
                     productData?.height &&
                     <div className="product_size product-elements__item">
                        <h1>Высота (см)</h1>
                        <span>{productData?.height}</span>
                     </div>
                  }
                  {
                     productData?.care &&
                     <div className="product_care product-elements__item">
                        <h1>Уход</h1>
                        <span>{showMoreCare ? productData?.care[lang] : productData?.care[lang].slice(0, 150)}
                           {
                              productData?.care[lang].length > 150 &&
                              <span
                                 style={{ fontSize: '18px', fontFamily: 'var(--f-regular)', color: 'var(--pink)', cursor: 'pointer' }}
                                 onClick={() => showMoreCare ? setShowMoreCare(false) : setShowMoreCare(true)}
                              > {showMoreCare ? ` ${t('showLess')}` : ` ... ${t('showMore')}`}</span>
                           }
                        </span>
                     </div>
                  }
                  {
                     productData?.assortment &&
                     <div className="product_assortment product-elements__item">
                        <h1>Ассортимент</h1>
                        <span>{showMoreAssortment ? productData?.assortment[lang] : productData?.assortment[lang].slice(0, 50)}
                           {
                              productData?.assortment[lang].length > 50 &&
                              <span
                                 style={{ fontSize: '18px', fontFamily: 'var(--f-regular)', color: 'var(--pink)', cursor: 'pointer' }}
                                 onClick={() => showMoreAssortment ? setShowMoreAssortment(false) : setShowMoreAssortment(true)}
                              > {showMoreAssortment ? ` ${t('showLess')}` : ` ... ${t('showMore')}`}</span>
                           }
                        </span>
                     </div>
                  }
                  {
                     productData?.department &&
                     <div className="product_department product-elements__item">
                        <h1>Товары</h1>
                        <span>{productData?.department}</span>
                     </div>
                  }
                  {
                     productData?.brand &&
                     <div className="product_brand product-elements__item">
                        <h1>Бренд</h1>
                        <span>{productData?.brand}</span>
                     </div>
                  }
                  {
                     productData?.country &&
                     <div className="product_country product-elements__item">
                        <h1>Страна производителя</h1>
                        <span>{productData?.country[lang]}</span>
                     </div>
                  }
               </div>


               {/* <div className="product_button">
                  <Button
                     btnText={'Перейти в магазин'}
                     className={'btn btn_white hover_gold'}
                     icon={'arrow-right'}
                     href={'https://gfcc.clients.site/'}
                     target={'_blank'}
                  />
               </div> */}
            </div>
         </div>
         <div className="product_info">

            <div className="images__wrapper">
               {
                  productData?.images?.map((i, index) => (
                     <img src={i.img} key={index} alt="" />
                  ))
               }
            </div>
         </div>

         <Outlet />
      </motion.div>

   )
}

export default Index