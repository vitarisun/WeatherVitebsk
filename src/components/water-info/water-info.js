const WaterInfo = () => {
  return (
    <>
      <h5 className="text-center">Потебление воды</h5>
      <table className="table table-bordered table-condenset">
        <thead>
          <tr>
            <th>№</th>
            <th>Наименование объекта</th>
            <th>Тип счетчика</th>
            <th>№ счетчика</th>
            <th>Начальные показания</th>
            <th>Конечные показания</th>
            <th>
              Потребление, м<sup>3</sup>
            </th>
            <th>Примечание</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>МС Витебск</td>
            <td>Марка счетчика</td>
            <td>16066232</td>
            <td>193001</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default WaterInfo;
