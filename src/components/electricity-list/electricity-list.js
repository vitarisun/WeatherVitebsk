import ElectricityInfo from '../electricity-info/electricity-info';
// import GasInfo from '../gas-info/gas-info';
// import WaterInfo from '../water-info/water-info';
// import BriqnetteFirewoodInfo from '../briqnette-firewood-info/briqnette-firewood-info';
// import WarmInfo from '../warm-info/warm-info';

import './electricity-list.css';

const ElectricityList = ({ data }) => {
  const elemElectricity = data.map((item, index) => {
    return (
      <ElectricityInfo
        elemIndex={index}
        branch={item.branch}
        typeCounter={item.typeCounter}
        numberCounter={item.numberCounter}
        startCounter={item.startCounter}
        endCounter={item.endCounter}
        transformer={item.transformer}
        coefficient={item.coefficient}
        electroResult={item.electroResult}
      />
    );
  });

  return (
    <ul className="app-list list-group">
      {elemElectricity}
      {/* <WarmInfo /> */}
      {/* <GasInfo /> */}
      {/* <WaterInfo /> */}
      {/* <BriqnetteFirewoodInfo /> */}
    </ul>
  );
};

export default ElectricityList;
