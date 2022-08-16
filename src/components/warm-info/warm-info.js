const WarmInfo = () => {
  return (
    <div>
      <h5 className="text-center">Потебление тепловой энергии</h5>
      <table className="table table-bordered table-condenset">
        <tbody>
          <tr>
            <th rowspan="2">№</th>
            <th rowspan="2">Объект</th>
            <th rowspan="2">Адрес объекта </th>
            <th rowspan="2">Вид нагрузки (отопление, отопление и ГВС, ГВС)</th>
            <th rowspan="2">Регистрационный номер счетчик</th>
            <th rowspan="2">Место установки прибора</th>
            <th colspan="3">Показания прибора</th>
            <th rowspan="2">Коэффи-циент пересчета</th>
            <th rowspan="2">Кол-во тепловой энергии в Гкал</th>
            <th rowspan="2">Кол-во дней работы прибора</th>
          </tr>
          <tr>
            <th>На конец месяца</th>
            <th>На начало месяца</th>
            <th>Разность</th>
          </tr>
          <tr>
            <th rowspan="2">1</th>
            <td rowspan="2"></td>
            <td rowspan="2"></td>
            <td rowspan="2"></td>
            <td rowspan="2"></td>
            <th>На подающем трубопроводе</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>По таймеру</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10">ИТОГО</th>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WarmInfo;
