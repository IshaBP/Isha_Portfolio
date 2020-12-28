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
  { logo: <FaLinkedin />, link: "" },
  { logo: <ImGithub />, link: "" },
  { logo: <ImTwitter />, link: "" },
  { logo: <IoMdMail />, link: "" }
];
