import './energy-resources-filter.css';

const EnergyResourcesFilter = () => {
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

      <button className="btn btn-outline-light" type="button">
        Отчеты
      </button>
    </div>
  );
};

export default EnergyResourcesFilter;
