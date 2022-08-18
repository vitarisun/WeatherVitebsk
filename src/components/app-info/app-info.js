import './app-info.css';

const AppInfo = () => {
  return (
    <div className="app-info">
      <h2 className="header">Отчеты ТЭР</h2>
      <h2 className="header">Личный кабинет</h2>
      {/* <h3>Подразделение: ОХ Энергетик</h3> */}

      <h5 className="header">Выберите подраздиление и отчетный период</h5>
      <div>
        <form className="add-form d-flex">
          <select className="form-select">
            <option selected>Выберите подразделение</option>
            <option value="1">ОГЭ</option>
            <option value="2">МС Витебск</option>
            <option value="3">МС Орша</option>
          </select>
          <label>Начало</label>
          <input
            type="date"
            id="start-date"
            className="form-control new-post-label"
          ></input>

          <label>Окончание</label>
          <input
            type="date"
            id="end-date"
            className="form-control new-post-label"
          ></input>

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppInfo;
