import React, { useState } from 'react';

import './style.css';

const Tabs = props => {  
  const { data } = props;
  const [visibleTab, setVisibleTab] = useState(data[0].id);


  const tabTitles = props.data.map((item, index) => 
      <button role="tab" aria-selected={visibleTab === item.id ? "true" : 'false'} tabIndex={visibleTab === item.id ? "0" : "1"} 
              key={index} onClick={() => setVisibleTab(item.id)} 
              className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}>
        {item.tabTitle}
      </button>
  );
  
  const tabContent = props.data.map((item, index) => 
      <div className="tabs-panel" tabIndex='0' role="tabpanel" key={index} 
          hidden={visibleTab === item.id ? false : true}> 
        <p style={visibleTab === item.id ? {} : {display: 'none'}}>{item.tabContent}</p>
      </div>
  );
  
  return(
    <div className="tabs">
      <div className="tabs-header" role="tablist" aria-label="my-tabs">
        { tabTitles }
      </div>

        { tabContent }
    </div>
  )
};

export default Tabs;