import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Isolation</th>
        <th>Live</th>
        <th>Over Population</th>
        <th>Reproduction</th>
      </tr>
    </thead>
  );
};

const TableRow = ({ counter }) => {
  return (
    <tr>
      <td>{counter.iteration}</td>
      <td>{counter.isolation}</td>
      <td>{counter.live}</td>
      <td>{counter.overPopulation}</td>
      <td>{counter.reproduction}</td>
    </tr>
  );
};

const Changelog = ({ counter }) => {
  return (
    <table id="changelog" className="changelogtable">
      <TableHeader />
      <tbody>
        <TableRow counter={counter} />
      </tbody>
    </table>
  );
};

export default Changelog;
