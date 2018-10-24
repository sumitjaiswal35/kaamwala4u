import React from 'react';
import ReactDom from "react-dom";
import Registration from './components/registration';
import WorkerList from './components/workerlist';
ReactDom.render(
  <WorkerList/>,
  document.getElementById('list')
);

ReactDom.render(
  <Registration/>,
  document.getElementById('registration')
);
