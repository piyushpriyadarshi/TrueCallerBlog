import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Section({ categories, selectedCategory, onCategoryChange }) {
  console.log('pr');
  // const [stateObj, setStateObj] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://public-api.wordpress.com/rest/v1/sites/107403796/categories/'
  //     )
  //     .then(
  //       (response) => {
  //         setStateObj(response.data.categories);

  //         console.log(response.data.categories);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }, []);

  return (
    <div class="card mb-3">
      <div className="card-header">
        <h3>Categories</h3>
      </div>
      <div className="card-body">
        <div class="list-group no-border">
          {categories.map((category) => {
            if (category.name === selectedCategory) {
              return (
                <Link
                  class="list-group-item list-group-item-action active"
                  onClick={() => onCategoryChange(category)}
                >
                  {category.name}
                  <span class="badge badge-primary badge-pill">
                    {category.post_count}
                  </span>
                </Link>
              );
            }
            return (
              <Link
                class="list-group-item list-group-item-action"
                onClick={() => onCategoryChange(category)}
              >
                {category.name}
                <span class="badge badge-primary badge-pill">
                  {category.post_count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section;
