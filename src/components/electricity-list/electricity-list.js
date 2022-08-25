import ElectricityListItem from '../electricity-list-item/electricity-list-item';

import './electricity-list.css';

const ElectricityList = ({ data }) => {
  const elemElectricity = data.map((item) => {
    const { id, ...itemProps } = item;

    return <ElectricityListItem key={id} {...itemProps} />;
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
              <th>Договор</th>
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
    </ul>
  );
};

export default ElectricityList;
