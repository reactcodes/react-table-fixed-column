import React from 'react';
import FixedColumnTable from './FixedColumnTable'
const tableHeaders = [
    "Frozen First Column",
    "Frozen Second Column",
    "Reg First Column",
    "Reg Second Column",
    "Reg Third Column",
    "Reg Fourth Column",
    "Reg Fifth Column",
    "Reg Sixth Column"
]
const tableData = [
  [
    '1a',
    '2a',
    '3a',
    '4a',
    '5a',
    '6a',
    '7a',
    '8a',
  ],
  [
    '1b',
    '2b',
    '3b',
    '4b',
    '5b',
    '6b',
    '7b',
    '8b',
  ],
  [
    '1a',
    '2a',
    '3a',
    '4a',
    '5a',
    '6a',
    '7a',
    '8a',
  ],
  [
    '1b',
    '2b',
    '3b',
    '4b',
    '5b',
    '6b',
    '7b',
    '8b',
  ],
]
class App extends React.Component {
  
  render(){
  return (
    <FixedColumnTable headers={tableHeaders} data={tableData} frozen={2} />
  );
  }
}

export default App;
