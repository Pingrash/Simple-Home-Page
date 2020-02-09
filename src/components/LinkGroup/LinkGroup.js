import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

import Link from '../Link/Link';

const useStyles = makeStyles(theme => ({
  linkContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    margin: '2rem 6rem'
  },
  toggleButton: {
    flex: 1,
    width: 90,
    alignSelf: 'flex-end',
    marginRight: '2rem'
  }
}));

const LinkGroup = ({ links, toggleLinkSettings }) => {
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
    <>
      <Button
        variant='contained'
        onClick={() => toggleLinkSettings(true)}
        className={classes.toggleButton}
        data-test='toggle-button'
      >
        Settings
      </Button>
      <div className={classes.linkContainer} data-test='link-group'>
        {linksToRender}
      </div>
    </>
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
