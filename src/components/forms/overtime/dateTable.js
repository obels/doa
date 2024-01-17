const DateTable = () => {
  const tableHeader = [
    "Date",
    "Start Hour",
    "Start Minute",
    "End Hour",
    "End Minute",
    "Hours",
  ];

  console.log(tableHeader);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            {tableHeader.map((header) => {
              <th>{header}</th>;
            })}
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DateTable;
