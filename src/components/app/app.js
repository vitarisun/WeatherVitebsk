import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import EnergyResourcesFilter from '../energy-resources-filter/energy-resources-filter';
// import EnergyResources from '../energy-resources/energy-resources';
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

      // electro: false,
    };
    // this.electro = this.electro.bind(this);
  }

  // onElectro = () => {
  //   this.setState(({ electro }) => ({
  //     electro: !electro,
  //   }));
  // };

  render() {
    // let menuElectro = null;
    // if (this.state.electro) {
    //   menuElectro = <ElectricityList data={this.state.dataElectro} />;
    // }

    return (
      <div className="app">
        <AppInfo />
        <div>
          <EnergyResourcesFilter />
        </div>
        <div></div>
        <ElectricityList data={this.state.dataElectro} />
        {/* {menuElectro} */}
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
