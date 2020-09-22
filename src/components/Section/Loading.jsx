import React from 'react';

import './loading.css';
function Loading() {
  return (
    <div>
      <div className="flex-container">
        <div className="flex-item">
          <div class="spinner-border text-primary"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
