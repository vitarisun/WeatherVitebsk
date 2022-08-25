import './electro-add-form.css';

const ElectroAddForm = () => {
  return (
    <div className="app-add-form">
      <h4>Добавление нового счетчика</h4>
      <form className="add-form d-flex">
        <select className="form-select" defaultValue="Один">
          <option selected>Выберите объект</option>
          <option value="1">Один</option>
          <option value="2">Два</option>
          <option value="3">Три</option>
        </select>

        <select className="form-select" defaultValue="Электросчетчик">
          <option selected>Выберите тип счетчика</option>
          <option value="1">Электросчетчик</option>
          <option value="2">Теплосчетчик</option>
          <option value="2">Газовый счетчик</option>
          <option value="2">Водомер</option>
        </select>
      </form>
      <form className="add-form d-flex">
        <label>Дата поверки</label>
        <input type="date" className="form-control new-post-label"></input>

        <label>Дата установки</label>
        <input type="date" className="form-control new-post-label"></input>

        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Номер счетчика"
        ></input>

        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Показания счетчика"
        ></input>

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default ElectroAddForm;
