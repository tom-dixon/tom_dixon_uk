import React from 'react';
import linkedInLogo from 'src/images/png/LI-In-Bug.png';
import instagramLogoWhite from 'src/images/svg/Instagram_Glyph_White.svg';
import githubLogo from 'src/images/svg/github-mark-white.svg';

import './socials.scss';

function Socials() {
  return (
    <div className="socials">
      <div className="instagram">
        <a
          className="socials-link socials-link--instagram"
          href="https://www.instagram.com/tom_dixon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramLogoWhite} className="socials-link-img" alt="Instagram Personal" />
          <p className="label">Personal(Private)</p>
        </a>
        <a
          className="socials-link"
          href="https://www.instagram.com/i_spied_this/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramLogoWhite} className="socials-link-img" alt="Instagram Photography" />
          <p className="label">Photography</p>
        </a>
        <a
          className="socials-link"
          href="https://www.instagram.com/berkshire_allotment/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramLogoWhite} className="socials-link-img" alt="Instagram Allotment" />
          <p className="label">Allotment</p>
        </a>

      </div>
      <div className="other">
        <a
          className="socials-link"
          href="https://github.com/tom-dixon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} className="socials-link-img socials-link-img--white" alt="Github" />
        </a>
        <a
          className="socials-link"
          href="https://www.linkedin.com/in/dixonwt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInLogo} className="socials-link-img socials-link-img--white" alt="LinkedIn" />
        </a>

      </div>
    </div>
  );
}

export default Socials;
