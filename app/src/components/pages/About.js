import React from 'react';
import "./AboutStyle.css";

const About = () => {
  return (
    <div>
      {/* <header class="header">
        <nav class="navbar">
          <ul>
            <li><a href="#home" class="nav-link" data-section="home">Home</a></li>
            <li><a href="#about" class="nav-link" data-section="about">About</a></li>
            <li><a href="#services" class="nav-link" data-section="services">Services</a></li>
            <li><a href="#testimonials" class="nav-link" data-section="testimonials">Testimonials</a></li>
            <li><a href="#contact" class="nav-link" data-section="contact">Contact</a></li>
          </ul>
        </nav>
      </header> */}

      <section id="home" class="section home">
        <h1>Welcome to Our Website</h1>
        <img src="https://via.placeholder.com/1920x800?text=Home" alt="Home Section" />
      </section>

      <section id="about" class="section about">
        <h1>About Us</h1>
        <img src="https://via.placeholder.com/1920x1080" alt="About Section" />
      </section>

      <section id="services" class="section services">
        <h1>Our Services</h1>
        <img src="https://via.placeholder.com/1920x1080" alt="Services Section" />
      </section>

      <section id="testimonials" class="section testimonials">
        <h1>What Our Clients Say</h1>
        <img src="https://via.placeholder.com/1920x1080" alt="Testimonials Section" />
      </section>

      <section id="contact" class="section contact">
        <h1>Contact Us</h1>
        <img src="https://via.placeholder.com/1920x1080" alt="Contact Section" />
      </section>
    </div>
  );
};

export default About;