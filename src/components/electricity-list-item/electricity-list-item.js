const ElectricityListItem = (props) => {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{props.i}</th>
          <td>{props.branch}</td>
          <td>{props.treatyElectro}</td>
          <td>{props.typeCounter}</td>
          <td>{props.numberCounter}</td>
          <td>{props.startCounter}</td>
          <td>{props.endCounter}</td>
          <td>{props.transformer}</td>
          <td>{props.coefficient}</td>
          <td>{props.electroResult}</td>
        </tr>
      </tbody>
    </>
  );
};

export default ElectricityListItem;
