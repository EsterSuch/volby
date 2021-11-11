import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

<div className="castle">
  <div className="castle__image"></div>
  <div className="castle__body">
    <h1>Nový prezident</h1>
    <p className="castle__president">
      {
        president === null ? 'Vyberte svého kandidáta' : president
      }
    </p>
  </div>
</div>

export default Castle;