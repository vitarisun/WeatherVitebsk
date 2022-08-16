const WarmInfo = () => {
  return (
    <div>
      <h5 className="text-center">Потебление тепловой энергии</h5>
      <table className="table table-bordered table-condenset">
        <tbody>
          <tr>
            <td rowspan="2">№</td>
            <td rowspan="2">Объект</td>
            <td rowspan="2">Адрес объекта </td>
            <td rowspan="2">Вид нагрузки (отопление, отопление и ГВС, ГВС)</td>
            <td rowspan="2">Регистрационный номер счетчик</td>
            <td rowspan="2">Место установки прибора</td>
            <td colspan="3">Показания прибора</td>
            <td rowspan="2">Коэффи-циент пересчета</td>
            <td rowspan="2">Кол-во тепловой энергии в Гкал</td>
            <td rowspan="2">Кол-во дней работы прибора</td>
          </tr>
          <tr>
            <td>На конец месяца</td>
            <td>На начало месяца</td>
            <td>Разность</td>
          </tr>
          <tr>
            <td rowspan="2">1</td>
            <td rowspan="2"></td>
            <td rowspan="2"></td>
            <td rowspan="2"></td>
            <td rowspan="2"></td>
            <td>На подающем трубопроводе</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Таймер</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colspan="10">ИТОГО</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WarmInfo;
