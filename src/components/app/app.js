// import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import EnergyResourcesFilter from '../energy-resources-filter/energy-resources-filter';
// import EnergyResources from '../energy-resources/energy-resources';
// import ElectricityList from '../electricity-list/electricity-list';
import ElectroAddForm from '../electro-add-form/electro-add-form';
// import WarmInfo from '../warm-info/warm-info';
// import GasInfo from '../gas-info/gas-info';
// import WaterInfo from '../water-info/water-info';
// import BriqnetteFirewoodInfo from '../briqnette-firewood-info/briqnette-firewood-info';

import './app.css';

function App(props) {
  //

  return (
    <div className="app">
      <AppInfo />
      <div>
        <EnergyResourcesFilter />
      </div>
      {/* <ElectricityList  /> */}
      {/* {menuElectro} */}
      {/* <WarmInfo /> */}
      {/* <GasInfo /> */}
      {/* <WaterInfo data={dataWarm} /> */}
      {/* <WaterInfo /> */}
      {/* <BriqnetteFirewoodInfo /> */}
      <div>
        <ElectroAddForm />
      </div>
    </div>
  );

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
}

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

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     // this.hideElectro = this.hidEelectro.bind(this);
//     // this.onElectro = this.onElectro.bind(this);
//   }

// hidEelectro = (name) => {
//   console.log(this.state);
// };

// render() {
//   // let menuElectro = null;
//   // if (this.state.electro) {
//   //   menuElectro = <ElectricityList data={this.state.dataElectro} />;
//   // }

//   return (
//     <div className="app">
//       <AppInfo />
//       <div>
//         <EnergyResourcesFilter />
//       </div>
//       {/* <ElectricityList  /> */}
//       {/* {menuElectro} */}
//       <WarmInfo />
//       <GasInfo />
//       {/* <WaterInfo data={dataWarm} /> */}
//       <WaterInfo />
//       <BriqnetteFirewoodInfo />
//       <div>
//         <ElectroAddForm />
//       </div>
//     </div>
//   );
// }
// }

export default App;
