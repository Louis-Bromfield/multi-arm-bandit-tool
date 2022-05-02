import React from 'react';
import TabSelector from './TabSelector';
import MainContent from './MainContent';
import PageFooter from '../PageFooter';

function MainBody() {
  return (
    <div>
        <TabSelector />
        <MainContent />
        <PageFooter />
    </div>
  )
}

export default MainBody;