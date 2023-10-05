// components/Dashboard.js

import React from 'react';
import LeftSection from './left';
import CenterSection from './center';
import RightSection from './right';
import './Dashboard.css';
const page = () => {
  return (
    <div className="dashboard-container">
      <LeftSection />
      <CenterSection />
      <RightSection />
    </div>
  );
};

export default page;
