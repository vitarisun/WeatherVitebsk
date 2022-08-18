const ElectricityInfo = ({
  elemIndex,
  branch,
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
      <table class="table table-bordered table-condenset">
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

        <tbody>
          <tr>
            <th scope="row">{elemIndex + 1}</th>
            <td>{branch}</td> {/* Наименование объекта */}
            <td>{typeCounter}</td> {/* Тип счетчика */}
            <td>{numberCounter}</td> {/* номер счетчика */}
            <td>{startCounter}</td> {/* начальные показания */}
            <td>{endCounter}</td> {/* конечные показания */}
            <td>{transformer}</td> {/* Тр-ры тока */}
            <td>{coefficient}</td> {/* Расчет. коэф */}
            <td>{electroResult}</td> {/* Потребление, кВт/ч */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ElectricityInfo;
