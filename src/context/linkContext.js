import React, { useState, useEffect, createContext } from 'react';

const LinkContext = createContext();

const LinkProvider = ({ children }) => {
  const [links, updateLinks] = useState([
    {
      link: 'https://www.facebook.com',
      favicon:
        'http://www.google.com/s2/favicons?domain=www.facebook.com'
    },
    {
      link: 'https://www.twitter.com',
      favicon:
        'http://www.google.com/s2/favicons?domain=www.twitter.com'
    },
    {
      link: 'https://www.youtube.com',
      favicon:
        'http://www.google.com/s2/favicons?domain=www.youtube.com'
    },
    {
      link: 'https://www.github.com/pingrash',
      favicon:
        'http://www.google.com/s2/favicons?domain=www.github.com'
    },
    {
      link: 'https://my.commbank.com.au/netbank/Logon/Logon.aspx',
      favicon:
        'http://www.google.com/s2/favicons?domain=my.commbank.com.au'
    },
    {
      link: 'https://www.twitch.tv',
      favicon:
        'http://www.google.com/s2/favicons?domain=www.twitch.tv'
    }
  ]);

  const addLink = link => {
    const newLink = {
      link: link,
      favicon: `http://www.google.com/s2/favicons?domain=${link}`
    };
    updateLinks([...links, newLink]);
  };

  return (
    <LinkContext.Provider value={{ links, addLink }}>
      {children}
    </LinkContext.Provider>
  );
};

export { LinkContext, LinkProvider };
