import { Component } from 'react';
import EnergyResources from '../energy-resources/energy-resources';
import ElectricityList from '../electricity-list/electricity-list';
import WarmInfo from '../warm-info/warm-info';
import GasInfo from '../gas-info/gas-info';
import WaterInfo from '../water-info/water-info';
import BriqnetteFirewoodInfo from '../briqnette-firewood-info/briqnette-firewood-info';

import './energy-resources-filter.css';

class EnergyResourcesFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataElectro: [
        {
          i: 1,
          branch: 'Административное помещение филиала «Витебскоблгидромет»',
          treatyElectro: '01-550',
          typeCounter: 'СС-301-10.1/U/1/P(L)K',
          numberCounter: 16066232,
          startCounter: 193001,
          endCounter: 193030,
          transformer: '0',
          coefficient: 1,
          electroResult: 29,
          id: 1,
        },
        {
          i: 2,
          branch: 'ДМРЛ (аэропорт «Витебск»), Ввод № 1',
          treatyElectro: '01-550',
          typeCounter: 'СС-301-5.1/U',
          numberCounter: 18087619,
          startCounter: 3277.52,
          endCounter: 3363.4,
          transformer: '150/5',
          coefficient: 30,
          electroResult: 2576,
          id: 2,
        },
      ],
      electro: false,
      warm: false,
      gas: false,
      water: false,
      firewoodBriqutte: false,
      werV: false,
      resources: false,
    };

    this.onElectro = this.onElectro.bind(this);
    this.onWarm = this.onWarm.bind(this);
    this.onGas = this.onGas.bind(this);
    this.onWater = this.onWater.bind(this);
    this.onFirewoodBriqutte = this.onFirewoodBriqutte.bind(this);
    // this.onwerV = this.onwerV.bind(this);
    this.onResources = this.onResources.bind(this);
  }

  onElectro = () => {
    this.setState(({ electro }) => ({
      electro: !electro,
    }));
  };

  onWarm = () => {
    this.setState(({ warm }) => ({
      warm: !warm,
    }));
  };

  onGas = () => {
    this.setState(({ gas }) => ({
      gas: !gas,
    }));
  };

  onWater = () => {
    this.setState(({ water }) => ({
      water: !water,
    }));
  };

  onFirewoodBriqutte = () => {
    this.setState(({ firewoodBriqutte }) => ({
      firewoodBriqutte: !firewoodBriqutte,
    }));
  };

  onWerV = () => {
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
    const buttonsEnergyResourcesFilter = [
      { name: 'Electro', label: 'Электоэнергия', click: this.onElectro },
      { name: 'Warm', label: 'Теплоэнергия', click: this.onWarm },
      { name: 'Gas', label: 'Газ', click: this.onGas },
      { name: 'Water', label: 'Вода', click: this.onWater },
      {
        name: 'FirewoodBriqutte',
        label: 'Дрова/Торфобрикет',
        click: this.onFirewoodBriqutte,
      },
      { name: 'WerV', label: 'Объемы отпуска ТЭР', click: this.onWerV },
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
        {this.state.resources ? <EnergyResources /> : null}
        <div>
          {this.state.electro ? (
            <ElectricityList data={this.state.dataElectro} />
          ) : null}
        </div>
        <div>{this.state.warm ? <WarmInfo /> : null}</div>
        <div>{this.state.gas ? <GasInfo /> : null}</div>
        <div>{this.state.water ? <WaterInfo /> : null}</div>
        <div>
          {this.state.firewoodBriqutte ? <BriqnetteFirewoodInfo /> : null}
        </div>
      </div>
    );
  }
}

export default EnergyResourcesFilter;
