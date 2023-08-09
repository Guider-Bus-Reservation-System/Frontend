import React, { useState } from 'react';
import CardG from '../components/gallery/card';
import '../components/gallery/gallery.css';

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  return (
    <div>
      <div className="title" style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Most Popular Destination</h2>
      </div>

      <div className="box">
        <CardG
          title={{
            imageSrc: "https://mediaim.expedia.com/destination/1/c3ec56ec6fd63df7b36a055f39a15107.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
            url: "https://mediaim.expedia.com/destination/1/c3ec56ec6fd63df7b36a055f39a15107.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh"
          }}
      
        />
         <CardG
          title={{
            imageSrc: "https://www.baywalktours.com/wp-content/uploads/2019/10/Old-Town-of-Galle-and-its-fortifications-768x528.jpg",
            url: "https://www.baywalktours.com/wp-content/uploads/2019/10/Old-Town-of-Galle-and-its-fortifications-768x528.jpg",
          }}

        />
         <CardG
          title={{
            imageSrc: "https://th.bing.com/th/id/R.c0f73a1c9f573f5268589bc50bef826e?rik=ZFB9c14yZUxtmg&pid=ImgRaw&r=0",
            url: "https://th.bing.com/th/id/R.c0f73a1c9f573f5268589bc50bef826e?rik=ZFB9c14yZUxtmg&pid=ImgRaw&r=0",
          }}

        />
     
        <CardG
          title={{
            imageSrc: "https://th.bing.com/th/id/R.45c302c58438a8ac30ede52d08aa8251?rik=kZP5TlDf%2fRMAnA&riu=http%3a%2f%2fwww.lanka-excursions-holidays.com%2fuploads%2f4%2f0%2f2%2f1%2f40216937%2fethugala-in-kurunegala_orig.jpg&ehk=B0cHTQkvcQD0fxGurucFwfMLQv%2f3dtI8bXV9LCAYGTw%3d&risl=&pid=ImgRaw&r=0",
            url: "https://th.bing.com/th/id/R.45c302c58438a8ac30ede52d08aa8251?rik=kZP5TlDf%2fRMAnA&riu=http%3a%2f%2fwww.lanka-excursions-holidays.com%2fuploads%2f4%2f0%2f2%2f1%2f40216937%2fethugala-in-kurunegala_orig.jpg&ehk=B0cHTQkvcQD0fxGurucFwfMLQv%2f3dtI8bXV9LCAYGTw%3d&risl=&pid=ImgRaw&r=0",
          }}
          
        />

        <CardG
          title={{
            imageSrc: "https://i.ytimg.com/vi/bobqT58-SNQ/maxresdefault.jpg",
            url: "https://i.ytimg.com/vi/bobqT58-SNQ/maxresdefault.jpg",
          }}
          
        />

        <CardG
          title={{
            imageSrc: "https://www.dhowcruiseindubai.com/blog/wp-content/uploads/2018/01/Optimized-shutterstock_92900035.jpg",
            url: "https://www.dhowcruiseindubai.com/blog/wp-content/uploads/2018/01/Optimized-shutterstock_92900035.jpg",
          }}
          
        />

      </div>
     
    </div>
  );
};

export default Gallery;
