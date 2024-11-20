import React from 'react';
import '../styles/home.css';

function Home() {
  const Card = ({ title, imageUrl, link }) => (
    <div className="home-card">
      <div className="home-card-image-container">
        <img src={imageUrl} alt={title} className="home-card-image" />
      </div>
      <div className="home-card-content">
        <h3 className="home-card-title">{title}</h3>
        <a href={link} className="home-card-button">Learn More</a>
      </div>
    </div>
  );

  return (
    <main className="home-main">
      <h1 className="home-title">MarketPlace Freelance
      </h1>
          <p className="home-description">
          MarketPlace Freelance is a web application in which users can register and publish their projects, therefore other Users (Freelancers) can also register and apply for the respective projects in order to find employment.
      </p>
      <div className="home-cards-container">
        <Card 
          title="About Us" 
          imageUrl="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/S2lN3aEUIFN7rHpqtup8FeRuR5M=/1200x630/cultureampcom/production/f34/fd9/830/f34fd98303160743bfe9f398/blog-employee-personas.png" 
          link="/about"
        />
        <Card 
          title="Our Team" 
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4F5AzeQxGJr3AOvHwr_LCFXW8UZkQdiaQJQ&s" 
          link="/team"
        />
        <Card 
          title="Services" 
          imageUrl="https://midias-blog-mkt.s3.amazonaws.com/uploads/2022/03/ESM-scaled.jpg" 
          link="/services"
        />
      </div>
    </main>
  );
}

export default Home;
