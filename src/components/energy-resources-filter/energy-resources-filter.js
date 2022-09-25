import { Component } from 'react';
import EnergyResources from '../energy-resources/energy-resources';

import './energy-resources-filter.css';

class EnergyResourcesFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      werV: false,
      resources: false,

      // dataButtons: [

      //   {energRes: electro, stateEnergRes: false},
      //   {energRes:warm, stateEnergRes: false},
      //   {energRes:gas, stateEnergRes: false},
      //   {energRes:firewood, stateEnergRes: false},
      //   {energRes:briqutte, stateEnergRes: false},
      //   {energRes:water, stateEnergRes: false},
      //   {energRes:werV, stateEnergRes: false},
      //   {energRes:resources, stateEnergRes: false},
      // ]
    };

    this.onResources = this.onResources.bind(this);
    this.onwerV = this.onwerV.bind(this);
  }

  // const onResources = dataButtons.map(({energRes, }) => {
  //       this.setState(({ energRes }) => ({
  //     energRes: !energRes,
  //   }));
  // })

  onResources = () => {
    this.setState(({ resources }) => ({
      resources: !resources,
    }));
  };

  onwerV = () => {
    this.setState(({ werV }) => ({
      werV: !werV,
    }));
  };

  render() {
    let menuEnergyResources = null;
    if (this.state.resources) {
      menuEnergyResources = <EnergyResources />;
    }

    const buttonsEnergyResourcesFilter = [
      { name: 'Eectro', label: 'Электоэнергия' },
      { name: 'Warm', label: 'Теплоэнергия' },
      { name: 'Gas', label: 'Газ' },
      { name: 'Firewood', label: 'Дрова' },
      { name: 'Briqutte', label: 'Торфобрикет' },
      { name: 'Water', label: 'Вода' },
      { name: 'WerV', label: 'Объемы отпуска ТЭР' },
      { name: 'Resources', label: 'Отчеты' },
    ];

    const buttons = buttonsEnergyResourcesFilter.map(({ name, label }) => {
      // let click = this.props;
      // if (name === 'Resources') {
      //   click = this.onResource;
      // } else {
      //   click = false;
      // }
      function click(e) {
        e.preventDefault();

        if (name === 'Resources') {
          console.log(name);
        }
        if (name === 'WerV') {
          console.log(name);
        }
        //

        // if (name === 'Resources') {
        //  oClick = this.onResource
        // }
      }

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
    });

    return (
      <div>
        <div className="btn-group">
          {buttons}
          {/* <button className="btn btn-outline-light" type="button" name="Eectro">
            Электоэнергия
          </button>

          <button className="btn btn-outline-light" type="button" name="Warm">
            Теплоэнергия
          </button>

          <button className="btn btn-outline-light" type="button" name="Gas">
            Газ
          </button>

          <button
            className="btn btn-outline-light"
            type="button"
            name="Firewood"
          >
            Дрова
          </button>

          <button
            className="btn btn-outline-light"
            type="button"
            name="Briqutte"
          >
            Торфобрикет
          </button>

          <button className="btn btn-outline-light" type="button" name="Water">
            Вода
          </button>
          <button className="btn btn-outline-light" type="button" name="WerV">
            Объемы отпуска ТЭР
          </button> */}
          {/* <button
            className="btn btn-outline-light"
            type="button"
            name="Resources"
            onClick={this.onResources}
          >
            Отчеты
          </button> */}
        </div>

        <div>{menuEnergyResources}</div>
      </div>
    );
  }
}

export default EnergyResourcesFilter;
