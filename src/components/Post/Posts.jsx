import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import './post.css';
import Loading from '../Section/Loading';

function Posts() {
  let params = useParams();
  const [stateObj, setStateObj] = useState(() => {
    return [
      {
        featured_image: '',
        content: '',
        title: '',
        categories: {
          BusinessHacks: { name: '' },
          Tech: { name: '' },
        },
      },
    ];
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        'https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/' +
          params.postId
      )
      .then(
        (response) => {
          setStateObj(response.data);
          setLoading(false);
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <div class="container-fluid">
        <div class="row">
          <div className="col-md-4"></div>
          <div className="col-md-6">
            <div class="card mb-3">
              <div class="card-header">
                <h3>{stateObj.title}</h3>
              </div>
              <div className="card-title"></div>
              <img
                class="card-img-top"
                src={stateObj.featured_image}
                alt="Post Thumbnail"
                style={{ maxHeight: '450px' }}
              />

              <div className="card-body">
                <div
                  dangerouslySetInnerHTML={{ __html: stateObj.content }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
