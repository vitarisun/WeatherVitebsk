import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import EnergyResourcesFilter from '../energy-resources-filter/energy-resources-filter';
import EnergyResources from '../energy-resources/energy-resources';
import ElectricityList from '../electricity-list/electricity-list';
import ElectroAddForm from '../electro-add-form/electro-add-form';
import WarmInfo from '../warm-info/warm-info';
import GasInfo from '../gas-info/gas-info';
import WaterInfo from '../water-info/water-info';
import BriqnetteFirewoodInfo from '../briqnette-firewood-info/briqnette-firewood-info';

import './app.css';

// function App(props) {
//

//   let value = true;
//   let valueMenu = true;
//   let valueElectricity = true;
//   let valueElectroAddForm = true;
//   let valueEnergyResources = true;

//   let appInfo = null;
//   let menuInfo = null;
//   let menuElectro = null;
//   let menuElectroAddForm = null;
// let menuEnergyResources = null;

//   if (value) {
//     appInfo = <AppInfo />;
//   }

//   if (valueMenu) {
//     menuInfo = <EnergyResourcesFilter />;
//   }

//   if (valueEnergyResources) {
//     menuEnergyResources = <EnergyResources />;
//   }

//   if (valueElectricity) {
//     menuElectro = <ElectricityList />;
//   }

//   if (valueElectroAddForm) {
//     menuElectroAddForm = <ElectroAddForm />;
//   }

//   return (
//     <div className="app">
//       {appInfo}
//       {menuInfo}
//       {menuEnergyResources}
//       {menuElectro}
//       {menuElectroAddForm}
//     </div>
//   );
// }

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'resources',
  //     onShowHideResources: false,
  //   };

  //   // this.hideComponent = this.hideComponent.bind(this);
  // }

  // hideComponent(name) {
  //   switch (name) {
  //     case 'onShowHideResources':
  //       this.setState({ onShowHideResources: !this.state.onShowHideResources });
  //       break;
  //     default:
  //     // null;
  //   }
  // }

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
      name: 'resources',
      ShowHideComponent: false,
    };

    // this.hideComponent = this.hideComponent.bind(this);
  }

  // hideComponent = (onResources) => {
  //   if (onResources) {
  //     console.log('onResources');
  //   }
  // };

  // hideComponent = (onResources) => {

  //   }
  // };

  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'resources',
  //     onResources: false,
  //   };
  //   // this.hideComponent = this.hideComponent.bind(this);
  // }

  hideComponent = (onResources) => {
    this.setState(({ onResources }) => ({
      onResources: !onResources,
    }));

    // this.setState(({ onResources }) => ({
    //   onResources: !onResources,
    // }));
    // if (onResources) {
    // }
    // console.log({ onResources });
    // };
  };
  // };

  render() {
    // const dataWarm = [
    //   {
    //     i: 1,
    //     branch: 'Административное помещение филиала «Витебскоблгидромет»',
    //     treatyWarm: '01-213-573',
    //     numberCounter: 6608,
    //     supplySipeline: 55.43,
    //     byЕimer: 44.92,
    //     id: 1,
    //   },
    // ];

    return (
      <div className="app">
        <AppInfo />
        <div>
          {/* <EnergyResourcesFilter onResources={this.hideComponent} /> */}
          <EnergyResourcesFilter onClick={this.hideComponent} />
        </div>
        <div>
          {/* {menuEnergyResources} */}
          <EnergyResources resources={this.setState.hideComponent} />
          {/* <EnergyResources /> */}
        </div>
        <ElectricityList data={this.state.dataElectro} />
        {/* <ElectricityList /> */}
        <WarmInfo />
        <GasInfo />
        {/* <WaterInfo data={dataWarm} /> */}
        <WaterInfo />
        <BriqnetteFirewoodInfo />
        <div>
          <ElectroAddForm />
        </div>
      </div>
    );
  }
}

export default App;
