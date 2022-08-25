// import ElemElectricity from '../electrocity-table-item/electrocity-table-item';

import ElectricityListItem from '../electricity-list-item/electricity-list-item';

import './electricity-list.css';

const ElectricityList = ({ data }) => {
  // const elemElectricity = data.map((i, item) => {
  //   return (
  //     <ElectricityListItem
  //       branch="Административное помещение филиала «Витебскоблгидромет»"
  //       treatyElectro="01-550"
  //       typeCounter="СС-301-10.1/U/1/P(L)K"
  //       numberCounter={16066232}
  //       startCounter={193001}
  //       endCounter={193030}
  //       transformer="0"
  //       coefficient={1}
  //       electroResult={29}
  //     />

  //     // <tbody>
  //     //   <tr>
  //     //     <th scope="row">{i + 1}</th> {/* Порядковый */}
  //     //     <td>{item.branch}</td> {/* Наименование объекта */}
  //     //     <td>{item.treatyElectro}</td> {/* Договор на электроснабжение */}
  //     //     <td>{item.typeCounter}</td> {/* Тип счетчика */}
  //     //     <td>{item.numberCounter}</td> {/* номер счетчика */}
  //     //     <td>{item.startCounter}</td> {/* начальные показания */}
  //     //     <td>{item.endCounter}</td> {/* конечные показания */}
  //     //     <td>{item.transformer}</td> {/* Тр-ры тока */}
  //     //     <td>{item.coefficient}</td> {/* Расчет. коэф */}
  //     //     <td>{item.electroResult}</td> {/* Потребление, кВт/ч */}
  //     //   </tr>
  //     // </tbody>
  //   );
  // }
  // );

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
          {/* {elemElectricity} */}

          <ElectricityListItem
            i={0}
            branch="Административное помещение филиала «Витебскоблгидромет»"
            treatyElectro="01-550"
            typeCounter="СС-301-10.1/U/1/P(L)K"
            numberCounter={16066232}
            startCounter={193001}
            endCounter={193030}
            transformer="0"
            coefficient={1}
            electroResult={29}
          />
          <ElectricityListItem
            i={1}
            branch="ДМРЛ (аэропорт «Витебск»), Ввод № 1"
            treatyElectro="01-550"
            typeCounter="СС-301-5.1/U"
            numberCounter={18087619}
            startCounter={3363.4}
            endCounter={3363.4}
            transformer="150/5"
            coefficient={30}
            electroResult={2576}
          />
        </table>
      </div>
    </ul>
  );
};

export default ElectricityList;
