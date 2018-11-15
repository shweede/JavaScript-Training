import React from "react";
import "../Grid/styles.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>#</TableCell>
        <TableCell>Isolation</TableCell>
        <TableCell>Live</TableCell>
        <TableCell>Over Population</TableCell>
        <TableCell>Reproduction</TableCell>
      </TableRow>
    </TableHead>
  );
};

const TableRows = ({ counters }) => {
  return counters.map((element, index) => (
    <TableRow key={index}>
      <TableCell>{element.iteration}</TableCell>
      <TableCell>{element.isolation}</TableCell>
      <TableCell>{element.live}</TableCell>
      <TableCell>{element.overPopulation}</TableCell>
      <TableCell>{element.reproduction}</TableCell>
    </TableRow>
  ));
};

const Changelog = ({ counters }) => {
  return (
    <Table id="changelog" className="changelogtable">
      <TableHeader />
      <TableBody>
        <TableRows counters={counters} />
      </TableBody>
    </Table>
  );
};

export default Changelog;
