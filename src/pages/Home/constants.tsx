import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { ImGithub, ImTwitter } from 'react-icons/im';
import { IoMdMail } from 'react-icons/io';
import { IconType } from 'react-icons/lib/cjs';

export interface Social {
  logo: JSX.Element;
  link: string;
}

export const SOCIAL: Array<Social> = [
  {
    logo: <FaLinkedin />,
    link: "https://www.linkedin.com/in/isha-pachkawade-1b6051112/"
  },
  { logo: <ImGithub />, link: "https://github.com/IshaBP" },
  { logo: <ImTwitter />, link: "https://twitter.com/_isharcastic" },
  {
    logo: <IoMdMail />,
    link:
      "mailto:isha.pachkawade11@gmail.com?subject=Hey%20Isha!&body=Hi%20Isha%2C%0D%0A%0D%0AI%20just%20checked%20your%20portfolio%20website%20and%20..."
  }
];
