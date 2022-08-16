import './energy-resources.css';

const EnergyResources = () => {
  return (
    <div className="btn-group">
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
  );
};

export default EnergyResources;
