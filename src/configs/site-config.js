import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Hamidou TESSILIMI. All Rights Reserved.`,
  author: {
    name: "Hamidou TESSILIMI",
    accounts: [
      {
        url: "https://github.com/blacky-yg",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/blacky_yg",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/blacky_yg",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/hamidou-tessilimi-03820a170/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      }
    ]
  }
};

export default siteConfig;
