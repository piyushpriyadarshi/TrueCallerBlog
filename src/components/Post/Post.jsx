import React from 'react';
import { Link } from 'react-router-dom';

import './post.css';
function Post(props) {
  const {
    headerImageUrl,
    content,
    title,
    categories,
    author,
    modifiedTime,
  } = props;

  function createMetdata(content) {
    const str = content.split('</p>');
    return str[0] + '</p>';
  }
  function getModifiedDateTime() {
    let date1 = new Date(modifiedTime);
    let date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffMinutes = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffMinutes;
  }
  return (
    <div class="card mb-3">
      <div class="card-header">
        <Link to={'/post/' + props.id}>
          <h3>{title}</h3>
        </Link>
      </div>
      <Link to={'/post/' + props.id}>
        <img
          class="card-img-top"
          src={headerImageUrl}
          alt="Card  cap"
          style={{ maxHeight: '450px' }}
        />
      </Link>

      <div class="card-body">
        <div class="card-title ">
          <div className="category">
            {Object.values(categories).map((category) => {
              return (
                <span className="btn btn-warning mx-2">{category.name}</span>
              );
            })}
          </div>
          <span className="mx-4">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            Updated {getModifiedDateTime()}Days Ago
          </span>
          <span className="mx-4">
            <i class="fa fa-user" aria-hidden="true"></i>
            {author}
          </span>
        </div>
        <div
          class="card-text"
          dangerouslySetInnerHTML={{ __html: createMetdata(content) }}
        ></div>
        <div class="card-text">
          <Link className="btn btn-primary" to={'/post/' + props.id}>
            Continue Reading
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
