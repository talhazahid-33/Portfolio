import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactMe = () => {
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
    <section id='contact'>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Me</h2>
        <div style={styles.iconContainer}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.icon, backgroundColor: social.color }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#14121C',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    margin: 'auto',
    width: '100%', 
    maxWidth: '1200px', 
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#fff',
  },
  iconContainer: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap', 
    
  },
  icon: {
    display: 'inline-block',
    padding: '10px',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '30px',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  
  '@media (max-width: 768px)': {
    container: {
      width: '100%', 
    },
    iconContainer: {
      gap: '20px', 
    },
    icon: {
      fontSize: '24px',
      padding: '8px',
    },
  },
  '@media (max-width: 480px)': {
    icon: {
      fontSize: '20px', 
      padding: '6px',
    },
  },
};

export default ContactMe;
