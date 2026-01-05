import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const cards = [
    {
      title: "Professional Experience",
      image: "/images/about1.jpg",
      icon: "📊",
      text: `With nine years of dedicated teaching experience in the government and private sector, My career began in 2017 at Government College Phullarwan, where I built a strong foundation in classroom management and curriculum delivery. In 2020, I transitioned to Government College Bhera, further refining my ability to engage diverse student populations and contribute to the institutional success of prestigious public colleges.`
    },
    {
      title: "Educational Profile",
      image: "/images/about2.jpg",
      icon: "📋",
      text: `My academic journey began in my hometown of Bhera, where I built a strong foundational education, completing my Matriculation in 2009 and Intermediate studies in 2011. Driven by a passion for technology, I moved to Sargodha in 2011 to pursue higher education. Over the following years, I successfully completed a comprehensive academic circuit in Computer Science Education, earning my Bachelor’s, Master’s, and MPhil degrees.`
    },
    {
      title: "My Hobby",
      image: "/images/about3.jpg",
      icon: "👁️",
      text: `"I thrive at the intersection of innovation and growth, whether I’m writing lines of code. My fascination with technology and AI stems from a deep curiosity about how we can build the future, and I spend much of my time learning to solve complex problems through programming. When I’m not exploring the latest in artificial intelligence, you’ll find me in my garden, cultivating plants and finding peace in nature’s rhythms.`
    }
  ];

  return (
    <section className="about-section">
      <h1 className="about-heading title-text">ABOUT US</h1>

      <div className="about-cards">
        {cards.map((card, index) => (
          <div className="about-card" key={index}>
            <div className="image-wrapper">
              <img src={card.image} alt={card.title} />
              <div className="icon-circle">{card.icon}</div>
            </div>

            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
