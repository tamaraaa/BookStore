import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const BooksFilter = () => {
  const [value, setValue] = useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="All Books" />
        <Tab label="Popular" disabled />
      </Tabs>
    </Paper>
  );
};
export default BooksFilter;
