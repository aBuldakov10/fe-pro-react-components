import React from 'react';
import PropTypes from 'prop-types';

const PostsList = ({postsListPreview}) => {
  if (postsListPreview.length === 0) {
    return (
      <div className="list__item">
        <p>There are no articles here yet</p>
      </div>
    )
  } else {
    return (
      <ul className="list">
        {
          postsListPreview.map(({id, title, description}) => {
            return (
              <li className="list__item" key={id}>
                <h2>{title}</h2>
                <p>{description}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

PostsList.propTypes = {
  postsListPreview: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
}

export default PostsList;
