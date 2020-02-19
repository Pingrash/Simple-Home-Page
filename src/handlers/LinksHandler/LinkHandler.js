import React, { useContext } from 'react';
import { LinkContext } from '../../context/linkContext';

import LinkGroup from '../../components/LinkGroup/LinkGroup';

const LinkHandler = () => {
  const { links, toggleLinkSettings } = useContext(LinkContext);

  return (
    <LinkGroup
      links={links}
      toggleLinkSettings={toggleLinkSettings}
    />
  );
};

export default LinkHandler;
