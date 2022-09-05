import { Component } from 'react';

import './energy-resources-filter.css';

class EnergyResourcesFilter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     resources: false,
  //   };
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'resources',
  //   };
  // }

  // onResources = () => {
  //   this.setState(({ resources }) => ({
  //     resources: !resources,
  //   }));
  // };

  render() {
    const { onResources } = this.props;

    return (
      <div className="btn-group">
        <button className="btn btn-outline-light" type="button">
          Электоэнергия
        </button>

        <button className="btn btn-outline-light" type="button">
          Теплоэнергия
        </button>

        <button className="btn btn-outline-light" type="button">
          Газ
        </button>

        <button className="btn btn-outline-light" type="button">
          Дрова
        </button>

        <button className="btn btn-outline-light" type="button">
          Торфобрикет
        </button>

        <button className="btn btn-outline-light" type="button">
          Вода
        </button>
        <button className="btn btn-outline-light" type="button">
          Объемы отпуска ТЭР
        </button>

        {/* <button className="btn btn-outline-light" type="button"> */}
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={onResources}
        >
          Отчеты
        </button>
      </div>
    );
  }
}

export default EnergyResourcesFilter;
