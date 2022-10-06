import { Component } from 'react';
import EnergyResources from '../energy-resources/energy-resources';

import './energy-resources-filter.css';

class EnergyResourcesFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electro: false,
      werV: false,
      resources: false,
    };

    this.onwerV = this.onwerV.bind(this);
    this.onResources = this.onResources.bind(this);
  }

  onwerV = () => {
    this.setState(({ werV }) => ({
      werV: !werV,
    }));
  };

  onResources = () => {
    this.setState(({ resources }) => ({
      resources: !resources,
    }));
  };

  render() {
    let menuEnergyResources = null;
    if (this.state.resources) {
      menuEnergyResources = <EnergyResources />;
    }

    const buttonsEnergyResourcesFilter = [
      { name: 'Eectro', label: 'Электоэнергия', click: this.electro },
      { name: 'Warm', label: 'Теплоэнергия' },
      { name: 'Gas', label: 'Газ' },
      { name: 'Firewood', label: 'Дрова' },
      { name: 'Briqutte', label: 'Торфобрикет' },
      { name: 'Water', label: 'Вода' },
      { name: 'WerV', label: 'Объемы отпуска ТЭР', click: this.onwerV },
      { name: 'Resources', label: 'Отчеты', click: this.onResources },
    ];

    const buttons = buttonsEnergyResourcesFilter.map(
      ({ name, label, click }) => {
        return (
          <button
            className="btn btn-outline-light"
            type="button"
            key={name}
            onClick={click}
          >
            {label}
          </button>
        );
      }
    );

    return (
      <div>
        <div className="btn-group">{buttons}</div>
        <div>{menuEnergyResources}</div>
      </div>
    );
  }
}

export default EnergyResourcesFilter;
