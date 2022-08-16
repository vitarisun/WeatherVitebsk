import ElectricityInfo from '../electricity-info/electricity-info';
import GasInfo from '../gas-info/gas-info';
import WaterInfo from '../water-info/water-info';
import BriqnetteFirewoodInfo from '../briqnette-firewood-info/briqnette-firewood-info';
import WarmInfo from '../warm-info/warm-info';

import './electricity-list.css';

const ElectricityList = () => {
  return (
    <ul className="app-list list-group">
      <ElectricityInfo />
      <WarmInfo />
      <GasInfo />
      <WaterInfo />
      <BriqnetteFirewoodInfo />
    </ul>
  );
};

export default ElectricityList;
