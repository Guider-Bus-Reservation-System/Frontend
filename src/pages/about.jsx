import React, { useState } from 'react';
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import "./styles/about.css";

const About = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCardClick = (cardId) => {
    if (expandedCardId === cardId) {
      setExpandedCardId(null); // Collapse if already expandedkkkkkkk
    } else {
      setExpandedCardId(cardId); // Expand the clicked card
    }
  };

  const cardData = [
    {
      imageSrc: "https://mediaim.expedia.com/destination/1/c3ec56ec6fd63df7b36a055f39a15107.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
      url: "https://mediaim.expedia.com/destination/1/c3ec56ec6fd63df7b36a055f39a15107.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
    },
    {
      imageSrc: "https://www.baywalktours.com/wp-content/uploads/2019/10/Old-Town-of-Galle-and-its-fortifications-768x528.jpg",
      url: "https://www.baywalktours.com/wp-content/uploads/2019/10/Old-Town-of-Galle-and-its-fortifications-768x528.jpg",
    },
    {
      imageSrc: "https://th.bing.com/th/id/R.c0f73a1c9f573f5268589bc50bef826e?rik=ZFB9c14yZUxtmg&pid=ImgRaw&r=0",
      url: "https://th.bing.com/th/id/R.c0f73a1c9f573f5268589bc50bef826e?rik=ZFB9c14yZUxtmg&pid=ImgRaw&r=0",
    },
    {
      imageSrc: "https://th.bing.com/th/id/R.45c302c58438a8ac30ede52d08aa8251?rik=kZP5TlDf%2fRMAnA&riu=http%3a%2f%2fwww.lanka-excursions-holidays.com%2fuploads%2f4%2f0%2f2%2f1%2f40216937%2fethugala-in-kurunegala_orig.jpg&ehk=B0cHTQkvcQD0fxGurucFwfMLQv%2f3dtI8bXV9LCAYGTw%3d&risl=&pid=ImgRaw&r=0",
      url: "https://th.bing.com/th/id/R.45c302c58438a8ac30ede52d08aa8251?rik=kZP5TlDf%2fRMAnA&riu=http%3a%2f%2fwww.lanka-excursions-holidays.com%2fuploads%2f4%2f0%2f2%2f1%2f40216937%2fethugala-in-kurunegala_orig.jpg&ehk=B0cHTQkvcQD0fxGurucFwfMLQv%2f3dtI8bXV9LCAYGTw%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      imageSrc: "https://i.ytimg.com/vi/bobqT58-SNQ/maxresdefault.jpg",
      url: "https://i.ytimg.com/vi/bobqT58-SNQ/maxresdefault.jpg",
    },
    {
      imageSrc: "https://www.dhowcruiseindubai.com/blog/wp-content/uploads/2018/01/Optimized-shutterstock_92900035.jpg",
      url: "https://www.dhowcruiseindubai.com/blog/wp-content/uploads/2018/01/Optimized-shutterstock_92900035.jpg",
    },
    // Add more card data as needed
  ];


  return (
    <div className="about">
      <div className="about-header">
        <div className="about-header-navbar">
          <Navbar />
        </div>

        <div className="about-header-image-container">
          <img src="homepage.png" alt="homepage" className="about-header-image" />
        </div>

        <div className="home-header-container">
          <div className="home-header-title">About</div>
          <div className="home-header-subtitle">
            Guider: Expressway Bus Transport Management & Information System
          </div>
        </div>
      </div>

      <div>
        <div style={{ textAlign: 'center' }}>
          <h2>Welcome to Guider</h2>
          <p>Your comprehensive Expressway Bus Transport Management & Information System in Sri Lanka. Our mission is to revolutionize the way people travel by providing efficient and reliable bus transportation services. With Guider, we aim to make commuting a seamless and enjoyable experience for all passengers.</p>
        </div>

        {/* The Vision Section */}
        <div className="container">
          <div className="row">
            <div className="column-66">
              <h1 className="meadium-font">
                <b>Our Vision</b>
              </h1>
              <p>
                At Guider, we envision a future where public transportation is accessible, convenient, and sustainable. We strive to create a reliable and efficient bus transport system that connects people, communities, and businesses across Sri Lanka. Our goal is to contribute to the development of a greener and more interconnected society.
              </p>
            </div>
            <div className="column-33">
              <img src="https://th.bing.com/th/id/R.77937d9290c2b36fb11aeabbdd2aa530?rik=FdPxBfITfxAG2w&riu=http%3a%2f%2fwww.shouman.com%2fimg%2fhome1%2fvision_1.jpg&ehk=TV0YCG3D5SqzZ6XAm2brL0TRY8Y6RlhWBGYaMbAmpv0%3d&risl=&pid=ImgRaw&r=0" width="335" height="471" alt="App" />
            </div>
          </div>
        </div>

        {/* Clarity Section */}
        <div className="container container-clarity">
          <div className="row clarity-section">
            <div className="column-33">
              <img src="https://th.bing.com/th/id/R.cd0dcbc3c592d6fed5adaafeae02b52d?rik=IL2cNgQ2frAsvQ&pid=ImgRaw&r=0" alt="App" />
            </div>
            <div className="column-66">
              <h1 className="meadium-font">
                <b>Our Services</b>
              </h1>
              <p>
                {/* ... (your list items) */}
              </p>
            </div>
          </div>
        </div>

        <div className='galery'>
          <h1>
              <b>Galery</b>
          </h1>
         </div>
        {/* The App Section */}
         <div className="row">
         
              
          
        {cardData.map((card, index) => (
          <div className="column" key={index}>
            <a
              className={`card ${expandedCardId === index ? 'expanded' : ''}`}
              href={card.url}
              onClick={(e) => {
                if (expandedCardId !== index) {
                  e.preventDefault(); // Prevent default navigation if not expanded
                  handleCardClick(index); // Expand the clicked card
                }
              }}
            >
                <img
                  src={card.imageSrc}
                  alt={`Card ${index + 1}`}
                />
              </a>
              </div>
            
          ))}
        </div>
      </div>

      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
