import React, { useState } from 'react';
import './App.css';
import dataJson from './data.json';
import Filter from './components/Filter';
import Jobs from './components/Jobs';

import bgImage from '../public/images/bg-header-desktop.svg'
import bgImageMobile from '../public/images/bg-header-mobile.svg'

function App() {
  const [data, setData] = useState(dataJson);
  const [filterKeywords, setFilterKeywords] = useState([]);

  const addFilterKeywords = (keyword) => {
    if (!filterKeywords.includes(keyword)) {
      setFilterKeywords([...filterKeywords, keyword]);
    }
  };

  const removeKeyword = (keyword) => {
    const newFilterKeywords = filterKeywords.filter((key) => key !== keyword);
    setFilterKeywords(newFilterKeywords);
  };

  return (
    <div>
      <header>
        <img className='bg-image' src={bgImage} alt="" />
        <img className='bg-image-mobile' src={bgImageMobile} alt="" />
      </header>
      <div className="divider"></div>
      <div className="container">
        {filterKeywords.length > 0 && (
          <Filter
            filterKeywords={filterKeywords}
            removeKeyword={removeKeyword}
            setFilterKeywords={setFilterKeywords}
          />
        )}
        <Jobs data={data} addFilterKeywords={addFilterKeywords} filteredKeywords={filterKeywords} />
      </div>
    </div>
  );
}

export default App;
