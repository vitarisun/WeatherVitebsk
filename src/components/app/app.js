import AppInfo from '../app-info/app-info';
import EnergyResourcesFilter from '../energy-resources-filter/energy-resources-filter';
import EnergyResources from '../energy-resources/energy-resources';
import ElectricityList from '../electricity-list/electricity-list';
import ElectroAddForm from '../electro-add-form/electro-add-form';

import './app.css';

function App(props) {
  let value = true;
  let valueMenu = true;
  let valueElectricity = true;
  let valueElectroAddForm = true;
  let valueEnergyResources = true;

  let appInfo = null;
  let menuInfo = null;
  let menuElectro = null;
  let menuElectroAddForm = null;
  let menuEnergyResources = null;

  if (value) {
    appInfo = <AppInfo />;
  }

  if (valueMenu) {
    menuInfo = <EnergyResourcesFilter />;
  }

  if (valueEnergyResources) {
    menuEnergyResources = <EnergyResources />;
  }

  if (valueElectricity) {
    menuElectro = <ElectricityList />;
  }

  if (valueElectroAddForm) {
    menuElectroAddForm = <ElectroAddForm />;
  }

  return (
    <div className="app">
      {appInfo}
      {menuInfo}
      {menuEnergyResources}
      {menuElectro}
      {menuElectroAddForm}
    </div>
  );
}

// function App() {
//   return (
//     <div className="app">
//       <AppInfo />
//       <EnergyResourcesFilter />
//       <EnergyResources />
//       <ElectricityList />
//       <ElectroAddForm />
//     </div>
//   );
// }

export default App;
