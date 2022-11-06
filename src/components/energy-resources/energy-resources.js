import { Component } from 'react';

import './energy-resources.css';

class EnergyResources extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'Resources',
  //   };
  // }

  render() {
    const buttonsEnergyResources = [
      { name: 'EnergySales', label: 'Энергосбыт' },
      { name: 'HeatingNetwork', label: 'Теплосети' },
      { name: 'waterSewer', label: 'Водоканал' },
      { name: 'for12TEK', label: 'Для 12-ТЭК' },
    ];

    const buttonsResources = buttonsEnergyResources.map(({ name, label }) => {
      return (
        <button
          className="btn btn-outline-light"
          type="button"
          key={name}
          // onClick={click}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="energy-resources">
        <h5 className="header">Выберите подраздиление и отчетный период</h5>
        <div>
          <form className="add-form d-flex">
            <select className="form-select">
              <option defaultValue="0">Выберите подразделение</option>
              <option value="1">ОГЭ</option>
              <option value="2">МС Витебск</option>
              <option value="3">МС Орша</option>
            </select>
            <label>Начало</label>
            <input
              type="date"
              id="start-date"
              className="form-control new-post-label"
            ></input>

            <label>Окончание</label>
            <input
              type="date"
              id="end-date"
              className="form-control new-post-label"
            ></input>

            <button type="submit" className="btn btn-outline-light">
              Выбрать
            </button>
          </form>
        </div>
        <h5 className="header">Выберите тип отчета</h5>
        <div className="btns">{buttonsResources}</div>
      </div>
    );
  }
}

export default EnergyResources;
