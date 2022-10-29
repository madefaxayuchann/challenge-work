import React, { Fragment } from "react";

import Header from "./components/Header";
import Routers from "./routers";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routers />
    </Fragment>
  );
};

export default App;
