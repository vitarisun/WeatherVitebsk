const WarmInfo = () => {
  return (
    <div>
      <h5 className="text-center">Потебление тепловой энергии</h5>
      <table className="table table-bordered table-condenset">
        <tbody>
          <tr>
            <th rowSpan="2">№</th>
            <th rowSpan="2">Объект</th>
            <th rowSpan="2">Адрес объекта </th>
            <th rowSpan="2">Вид нагрузки (отопление, отопление и ГВС, ГВС)</th>
            <th rowSpan="2">Регистрационный номер счетчик</th>
            <th rowSpan="2">Место установки прибора</th>
            <th colSpan="3">Показания прибора</th>
            <th rowSpan="2">Коэффи-циент пересчета</th>
            <th rowSpan="2">Кол-во тепловой энергии в Гкал</th>
            <th rowSpan="2">Кол-во дней работы прибора</th>
          </tr>
          <tr>
            <th>На конец месяца</th>
            <th>На начало месяца</th>
            <th>Разность</th>
          </tr>
          <tr>
            <th rowSpan="2">1</th>
            <td rowSpan="2"></td>
            <td rowSpan="2"></td>
            <td rowSpan="2"></td>
            <td rowSpan="2"></td>
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
            <th colSpan="10">ИТОГО</th>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WarmInfo;
