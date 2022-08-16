const ElectricityInfo = () => {
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
            <th scope="row">1</th>
            <td>Административное помещение филиала «Витебскоблгидромет»</td>
            <td>СС-301-10.1/U/1/P(L)K</td>
            <td>16066232</td>
            <td>193001</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>ДМРЛ (аэропорт «Витебск»), Ввод № 1</td>
            <td>СС-301-5.1/U</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Гидрологический пост Добригоры</td>
            <td>СС-101-120S</td> {/* марка счетчика */}
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* <tr>
      <th scope="row">4</th>
      <td colspan="2">Larry the Bird</td>
      <td></td>
    </tr> */}
          <tr>
            <th scope="row">4</th>
            <td>Гидрологический пост Витебск</td>
            <td>СС-101-120B</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ElectricityInfo;
