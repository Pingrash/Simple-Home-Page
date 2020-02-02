import React, { useContext } from 'react';
import { LinkContext } from '../../context/linkContext';

import LinkGroup from '../../components/LinkGroup/LinkGroup';

const LinkHandler = () => {
  const { links } = useContext(LinkContext);

  return <LinkGroup links={links} />;
};

export default LinkHandler;
