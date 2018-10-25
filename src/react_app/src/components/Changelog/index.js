import React from "react";
import "../Grid/styles.css";

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

const TableRows = ({ counters }) => {
  return counters.map((element, index) => (
    <tr key={index}>
      <td>{element.iteration}</td>
      <td>{element.isolation}</td>
      <td>{element.live}</td>
      <td>{element.overPopulation}</td>
      <td>{element.reproduction}</td>
    </tr>
  ));
};

const Changelog = ({ counters }) => {
  return (
    <table id="changelog" className="changelogtable">
      <TableHeader />
      <tbody>
        <TableRows counters={counters} />
      </tbody>
    </table>
  );
};

export default Changelog;
