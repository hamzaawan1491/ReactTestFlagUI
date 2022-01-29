import React from 'react';
import './App.css';
import { Card } from './components/Card';
import { Heading } from './components/Heading';
import { IItem, ISettingAlerts } from './shared/interface';
import { generalData, settingsAlerts } from './utilities/data';

function App() {
  
  return (
  
    <div className="flex flex-col bg-primary h-screen py-5 px-4 flex-wrap">

      <Heading title='general' className='mb-4' />
      <div className="grid grid-cols-3 gap-3 mb-10">
        { generalData?.map((item: IItem, i) => (
          <Card 
            title={item?.title} key={item?.id} showMenu={false}
            className="py-3 px-4 bg-secondary"
          />
        )) }
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        { settingsAlerts?.map((item: ISettingAlerts) => (
          <div key={item?.id} className="flex flex-col">
            <Heading title={item?.title} className='mb-3' />
            <div className="bg-secondary rounded ring ring-primary">
              { item?.lists?.length ? item?.lists?.map((list) => (
                <Card
                    title={list?.title} key={list?.id} subLists={list?.subLists} className="py-2 px-4"
                    showMenu={!!list?.subLists?.length} showDropdown={list?.dropdown}
                />
              )) : null }
            </div>
          </div>
        )) }
      </div>

    </div>

  );

}

export default App;
