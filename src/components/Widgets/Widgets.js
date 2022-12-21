import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Thrillophilia, ahead of Make My Trip and Goibibo", "Tops news - 7,456 readers")}
      {newsArticle("Coronavirus: Lagos updates", "Tops news - 1,324 readers")}
      {newsArticle("Bitcoin hits new high", "Tops news - 2,324 readers")}
      {newsArticle("Elon Musk takes over Twitter", "Tops news - 3,998 readers")}
      {newsArticle("Global recession at its peak", "Tops news - 9,328 readers")}
      {newsArticle("Is Redux, too good", "Tops news - 2,328 readers")}
      
    </div>
  )
}

export default Widgets