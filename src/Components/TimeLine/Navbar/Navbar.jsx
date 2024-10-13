import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './navbar.css'; // Use an external CSS file for media queries

const Navbar = () => {
  React.useEffect(() => {
    addHoverEffects();
  }, []);

  const socialLinks = [
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/abdullah.zahid.779642', color: '#3b5998' },
    { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/talha-zahid-953385275/', color: '#0077b5' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/talha_zahid_/', color: '#e4405f' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/923004975820', color: '#25d366' },
    { icon: <FaGithub />, link: 'https://github.com/talhazahid-33', color: '#333' },
    { icon: <FaTwitter />, link: 'https://twitter.com/yourprofile', color: '#1da1f2' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/@TalhaZahid33', color: '#ff0000' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" className="logoLink">Talha Zahid</a>
      </div>
      <ul className="navLinks">
        <li><a href="#start" className="link">Start</a></li>
        <li><a href="#about" className="link">About</a></li>
        <li><a href="#projects" className="link">Projects</a></li>
        <li><a href="#contact" className="link">Contact</a></li>
      </ul>
      <div className="socialIcons">
        {socialLinks.map(({ icon, link, color }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            style={{ '--hover-color': color }}
          >
            {icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

const addHoverEffects = () => {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = link.style.getPropertyValue('--hover-color') || '#fff';
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = '#bbb';
    });
  });
};

export default Navbar;
