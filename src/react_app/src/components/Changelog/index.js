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

const Changelog = ({ counter }) => {
  return (
    <table id="changelog" class="changelogtable">
      <TableHeader />
    </table>
  );
};

export default Changelog;
