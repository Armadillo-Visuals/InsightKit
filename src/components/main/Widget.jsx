/**
 * **************************************************
 *
 * @description
 * This component renders the widgets
 *
 * **************************************************
 */
import DisastersOverTime from './DisastersOverTime';
import CarbonOverTime from './CarbonOverTime';
import DisasterPieChart from './DisasterPieChart';
import { TrashIcon } from '@heroicons/react/24/solid';

const Widget = ({ widgetInfo, deleteWidget }) => {
  // Note: added an "id" property to each widget object which can be used to
  const { graphtype, datatype, parameter1, parameter2, parameter3, id } = widgetInfo;

  return (
    <div className='bg-[var(--cream)] h-fit p-[1em] flex items-center justify-center relative rounded'>
      {/* If the graph type is pie and the data type is diasters-all-time */}
      {graphtype === 'pie' && datatype === 'disasters-all-time' ? (
        <DisasterPieChart state={parameter1} />
      ) : // If the graph type is line and the data type is carbon-over-time
      graphtype === 'line' && datatype === 'carbon-over-time' ? (
        <CarbonOverTime state={parameter1} />
      ) : // If the graph type is line and the data type is disasters-over-time
      graphtype === 'line' && datatype === 'disasters-over-time' ? (
        <DisastersOverTime state={parameter1} disaster={parameter2} />
      ) : null}
      <button className='absolute bottom-[1em] right-[1em] ' onClick={() => deleteWidget(id)}>
        <TrashIcon className='w-[20px] text-[var(--darkgreen)]' />
      </button>
    </div>
  );
};

export default Widget;
