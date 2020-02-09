import React, { useState, useEffect, createContext } from 'react';

const LinkContext = createContext();

const LinkProvider = ({ children }) => {
  const [links, updateLinks] = useState([
    {
      link: 'https://www.facebook.com',
      favicon:
        'http://www.google.com/s2/favicons?domain=www.facebook.com',
      name: 'facebook'
    },
    {
      link: 'https://www.twitter.com',
      favicon:
        'http://www.google.com/s2/favicons?domain=www.twitter.com',
      name: 'twitter'
    },
    {
      link: 'https://www.youtube.com',
      favicon:
        'http://www.google.com/s2/favicons?domain=www.youtube.com',
      name: 'youtube'
    }
  ]);
  const [linkSettingsOpen, updateLinkSettingsOpen] = useState(false);

  const toggleLinkSettings = toggle => updateLinkSettingsOpen(toggle);

  const retrieveLinks = () => {
    let result = JSON.parse(localStorage.getItem('links'));

    // Returns if no links found in local storage.
    // Default state will be used.
    if (!result) return;

    updateLinks(result);
  };

  const updateLinksInStorage = newLinks => {
    const linksToStore = JSON.stringify(newLinks);
    localStorage.setItem('links', linksToStore);
  };

  const addLink = newLink => {
    const newLinks = [...links, newLink];
    updateLinksInStorage(newLinks);
    retrieveLinks();
  };

  /*
    Takes the link to delete then filters it out of the current links state.
    Once done updates links in local storage and calls retrieveLinks.
  */
  const deleteLink = linkToDelete => {
    const checkLink = link => {
      return link.name !== linkToDelete;
    };
    const newLinks = links.filter(checkLink);
    localStorage.setItem('links', JSON.stringify(newLinks));
    retrieveLinks();
  };

  useEffect(() => {
    retrieveLinks();
  }, []);

  return (
    <LinkContext.Provider
      value={{
        links,
        addLink,
        linkSettingsOpen,
        toggleLinkSettings,
        deleteLink
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export { LinkContext, LinkProvider };
