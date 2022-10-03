// import ElectricityItem from '../electricity-item/electricity-item';

const ElectricityInfo = ({
  elemIndex,
  branch,
  treatyElectro,
  typeCounter,
  numberCounter,
  startCounter,
  endCounter,
  transformer,
  coefficient,
  electroResult,
}) => {
  return (
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
        <tbody>
          <tr>
            <th scope="row">{elemIndex + 1}</th>
            <td>{branch}</td>
            <td>{treatyElectro}</td>
            <td>{typeCounter}</td>
            <td>{numberCounter}</td>
            <td>{startCounter}</td>
            <td>{endCounter}</td>
            <td>{transformer}</td>
            <td>{coefficient}</td>
            <td>{electroResult}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ElectricityInfo;
