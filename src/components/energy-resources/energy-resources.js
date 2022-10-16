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
              Добавить
            </button>
          </form>
        </div>
        <h5 className="header">Выберите тип отчета</h5>
        <div>
          <button className="btn btn-outline-light" type="button">
            Энергосбыт
          </button>

          <button className="btn btn-outline-light" type="button">
            Теплосети
          </button>

          <button className="btn btn-outline-light" type="button">
            Водоканал
          </button>

          <button className="btn btn-outline-light" type="button">
            Для 12-ТЭК
          </button>
        </div>
      </div>
    );
  }
}

export default EnergyResources;
