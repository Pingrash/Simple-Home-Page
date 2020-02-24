import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import Link from '../Link/Link';

const useStyles = makeStyles(theme => ({
  linkContainer: {
    width: '90vw',
    minHeight: 'fit-content',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '4rem 2rem',
    padding: '0 5%'
  }
}));

const LinkGroup = ({ links }) => {
  const classes = useStyles();

  const linksToRender = links.map(link => {
    return (
      <Link
        key={link.link}
        link={link.link}
        favicon={link.favicon}
        name={link.name}
        data-test='link'
      />
    );
  });

  return (
    <div className={classes.linkContainer} data-test='link-group'>
      {linksToRender}
    </div>
  );
};

LinkGroup.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      favicon: PropTypes.string,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  toggleLinkSettings: PropTypes.func.isRequired
};

export default LinkGroup;
