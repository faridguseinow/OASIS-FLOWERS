import React from 'react';
import './style.scss';

const Index = ({ title, img, video }) => {
   return (
      <div 
         className="page_header_repeated" 
         style={{ background: (!img && !video) ? '#151515' : 'none', position: 'relative', overflow: 'hidden' }}
      >
         <div className="header_img" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            {video ? (
               <video 
                  className="header_video"
                  src={video} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
               />
            ) : img ? (
               <div 
                  className="header_image" 
                  style={{ 
                     background: `url('${img}') center/cover no-repeat`, 
                     width: '100%', 
                     height: '100%' 
                  }} 
               />
            ) : null}
         </div>

         <div className="page_header_inner" style={{ position: 'relative', zIndex: 1 }}>
            <h2>{title}</h2>
         </div>
      </div>
   );
}

export default Index;
