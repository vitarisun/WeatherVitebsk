const BriqnetteFirewoodInfo = () => {
  return (
    <div>
      <h5 className="text-center">Драва, торфо-брикет</h5>
      <table className="table table-bordered table-condenset">
        <thead>
          <tr>
            <th>№</th>
            <th>Наименование объекта</th>
            <th>Торфо-брикет, т</th>
            <th>
              Драва, м<sup>3</sup>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>АМС Шарковщина</td>
            <td>0.1</td> {/* Торфо-брикет */}
            <td>0.8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BriqnetteFirewoodInfo;
