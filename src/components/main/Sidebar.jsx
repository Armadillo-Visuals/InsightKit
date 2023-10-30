/**
 * **************************************************
 *
 * @description
 * This component renders the sidebar
 *
 * **************************************************
 */

import { useState } from 'react';
import StateDropdown from './StateDropdown';
import DisasterDropdown from './DisasterDropdown';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

/*
Endpoints from the backend for widgets
/data/disasters-over-time/:state/:type
/data/carbon-over-time/:state
/data/disasters-all-time/:state
*/

const Sidebar = ({ addWidget }) => {
  const [stateDOT, setStateDOT] = useState('AL');
  const [disasterDOT, setDisasterDOT] = useState('Flood');
  const [stateDPC, setStateDPC] = useState('AL');
  const [stateCOT, setStateCOT] = useState('AL');

  const addDisastersOverTime = () => {
    addWidget('line', 'disasters-over-time', stateDOT, disasterDOT, null);
  };
  const addDisastersAllTime = () => {
    addWidget('pie', 'disasters-all-time', stateDPC, null, null);
  };
  const addCarbonOverTime = () => {
    addWidget('line', 'carbon-over-time', stateCOT, null, null);
  };

  return (
    <div className='pt-[40px] w-[400px] bg-[var(--olivegreen)] pl-[1em] mr-[25px] rounded h-full text-[var(--darkgreen)]'>
      <div className='rounded'>
        <div className='bg-[var(--cream)] rounded p-[1em] flex justify-center items-center relative mr-[15px] mb-[40px]'>
          <div>
            <div className='text-[16px] ml-auto pb-[10px] text-center justify-center'>
              DISASTERS OVER TIME
            </div>
            <StateDropdown handleSelect={(e) => setStateDOT(e.target.value)} />
            <DisasterDropdown handleSelect={(e) => setDisasterDOT(e.target.value)} />
            <button className='flex mx-auto' onClick={addDisastersOverTime}>
              <PlusCircleIcon className='text-[var(--darkgreen)] w-[30px]' />
            </button>
          </div>
        </div>
        <div className='bg-[var(--cream)] rounded p-[1em] flex justify-center items-center relative mr-[15px] mb-[40px]'>
          <div className='disasterPieChartSelector'>
            <div className='text-[16px] ml-auto pb-[10px] text-center justify-center'>
              DISASTERS PIE CHART
            </div>
            <StateDropdown handleSelect={(e) => setStateDPC(e.target.value)} />
            <button className='flex mx-auto' onClick={addDisastersAllTime}>
              <PlusCircleIcon className='text-[var(--darkgreen)] w-[30px]' />
            </button>
          </div>
        </div>
        <div className='bg-[var(--cream)] rounded p-[1em] flex justify-center items-center relative mr-[15px] mb-[40px]'>
          <div className='carbonOverTimeSelector'>
            <div className='text-[16px] ml-auto pb-[10px] text-center justify-center'>
              CARBON OVER TIME
            </div>
            <StateDropdown handleSelect={(e) => setStateCOT(e.target.value)} />
            <button className='flex mx-auto' onClick={addCarbonOverTime}>
              <PlusCircleIcon className='text-[var(--darkgreen)] w-[30px]' />
            </button>
          </div>
          <div className='spacer'></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
