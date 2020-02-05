import React, { useContext } from 'react';
import { LinkContext } from '../../context/linkContext';

import LinkGroup from '../../components/LinkGroup/LinkGroup';
import LinkSettings from '../../components/LinkSettings/LinkSettings';

const LinkHandler = () => {
  const {
    links,
    linkSettingsOpen,
    toggleLinkSettings,
    addLink,
    deleteLink
  } = useContext(LinkContext);

  return linkSettingsOpen ? (
    <LinkSettings
      toggleLinkSettings={toggleLinkSettings}
      addLink={addLink}
      links={links}
      deleteLink={deleteLink}
    />
  ) : (
    <LinkGroup
      links={links}
      toggleLinkSettings={toggleLinkSettings}
    />
  );
};

export default LinkHandler;
