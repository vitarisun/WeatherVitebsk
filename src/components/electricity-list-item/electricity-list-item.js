const ElectricityListItem = (props) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.i + 1}</th> {/* Порядковый */}
        <td>{props.branch}</td> {/* Наименование объекта */}
        <td>{props.treatyElectro}</td> {/* Договор на электроснабжение */}
        <td>{props.typeCounter}</td> {/* Тип счетчика */}
        <td>{props.numberCounter}</td> {/* номер счетчика */}
        <td>{props.startCounter}</td> {/* начальные показания */}
        <td>{props.endCounter}</td> {/* конечные показания */}
        <td>{props.transformer}</td> {/* Тр-ры тока */}
        <td>{props.coefficient}</td> {/* Расчет. коэф */}
        <td>{props.electroResult}</td> {/* Потребление, кВт/ч */}
      </tr>
    </tbody>
  );
};

export default ElectricityListItem;
