import React, { useState } from 'react';
import './AddLinkForm.css';
import PropTypes from 'prop-types';

const AddLinkForm = ({ addLink }) => {
  const [url, updateUrl] = useState('');
  const [linkName, updateLinkName] = useState('');
  const [linkAdded, updateLinkAdded] = useState(false);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          const newLink = {
            link: url,
            favicon: `http://www.google.com/s2/favicons?domain=${url}`,
            name: linkName
          };
          addLink(newLink);
          updateLinkAdded(true);
        }}
        className='add-form'
        data-test='entry-form'
      >
        <h3>Add Link</h3>
        <label for='url'>URL: </label>
        <input
          id='url'
          type='url'
          onChange={e => updateUrl(e.target.value)}
          title='Website URL eg. https://www.google.com'
          required
          placeholder='https://'
          defaultValue='https://'
          data-test='form-field'
        />

        <label for='name'>Link Name: </label>
        <input
          id='name'
          onChange={e => updateLinkName(e.target.value)}
          required
          data-test='form-field'
        />
        <button
          type='submit'
          className='submit-button'
          data-test='submit-button'
        >
          Submit
        </button>
      </form>
      {linkAdded ? (
        <span className='success message'>Link Added</span>
      ) : null}
    </>
  );
};

AddLinkForm.propTypes = {
  addLink: PropTypes.func.isRequired
};

export default AddLinkForm;
