/**
 * **************************************************
 *
 * @description
 * This component holds the widgets
 *
 * **************************************************
 */

import Widget from './Widget';

const WidgetGridContainer = ({ widgets, deleteWidget }) => {
  return (
    <div className='pt-[40px] ml-[25px] bg-[var(--olivegreen)]  p-[2em] flex items-start overflow-x-auto w-full rounded overflow-auto'>
      <div className='flex flex-wrap w-fit gap-4 '>
        {widgets.map((widget, i) => (
          <Widget widgetInfo={widget} deleteWidget={deleteWidget} key={'widget' + i} />
        ))}
      </div>
    </div>
  );
};

export default WidgetGridContainer;
