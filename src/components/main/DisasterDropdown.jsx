/**
 * **************************************************
 *
 * @description
 * This component renders disaster dropdown
 *
 * **************************************************
 */

const disasterDropdown = ({ handleSelect }) => {
  return (
    <div className='bg-[var(--darkgreen)] text-[#f4f0e1] p-2 m-4'>
      <label htmlFor='disaster'></label>
      <select
        className='bg-[var(--darkgreen)] w-full'
        id='disaster'
        name='disaster'
        onChange={handleSelect}
      >
        <option value='Flood'>Flood</option>
        <option value='Fire'>Fire</option>
        <option value='Earthquake'>Earthquake</option>
        <option value='SevereStorms'>Severe Storm</option>
        <option value='Hurricane'>Hurricane</option>
        <option value='Tornado'>Tornado</option>
        <option value='Freezing'>Freezing</option>
        <option value='Drought'>Drought</option>
        <option value='All'>All</option>
      </select>
    </div>
  );
};

export default disasterDropdown;
