// import ElectricityInfo from '../electricity-info/electricity-info';
// import GasInfo from '../gas-info/gas-info';
// import WaterInfo from '../water-info/water-info';
// import BriqnetteFirewoodInfo from '../briqnette-firewood-info/briqnette-firewood-info';
// import WarmInfo from '../warm-info/warm-info';

import './electricity-list.css';

const ElectricityList = ({ data }) => {
  const elemElectricity = data.map((item, index) => {
    return (
      <tbody>
        <tr>
          <th scope="row">{index + 1}</th> {/* Порядковый */}
          <td>{item.branch}</td> {/* Наименование объекта */}
          <td>{item.typeCounter}</td> {/* Тип счетчика */}
          <td>{item.numberCounter}</td> {/* номер счетчика */}
          <td>{item.startCounter}</td> {/* начальные показания */}
          <td>{item.endCounter}</td> {/* конечные показания */}
          <td>{item.transformer}</td> {/* Тр-ры тока */}
          <td>{item.coefficient}</td> {/* Расчет. коэф */}
          <td>{item.electroResult}</td> {/* Потребление, кВт/ч */}
        </tr>
      </tbody>
    );
  });

  return (
    <ul className="app-list list-group">
      <div>
        <h5 className="text-center">Электроэнергия</h5>
        <table className="table table-bordered table-condenset">
          <thead>
            <tr>
              <th>№</th>
              <th>Наименование объекта</th>
              <th>Тип счетчика</th>
              <th>№ счетчика</th>
              <th>Начальные показания</th>
              <th>Конечные показания</th>
              <th>Тр-ры тока</th>
              <th>Расчет. коэф.</th>
              <th>Потребление, кВт/ч</th>
            </tr>
          </thead>
          {elemElectricity}
        </table>
      </div>
      {/* {elemElectricity} */}
      {/* <WarmInfo /> */}
      {/* <GasInfo /> */}
      {/* <WaterInfo /> */}
      {/* <BriqnetteFirewoodInfo /> */}
    </ul>
  );
};

export default ElectricityList;
