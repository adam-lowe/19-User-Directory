import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const empArr = [            
    "Karen Drakkie",
    "John Hertz",
    "Cody Parker",
    "Conrad Frazier",
    "Sophia Wright",
    "Debbie Stewart",
    "Austin Bridges",
    "Jenny Robinson",
    "Donald Henderson",
    "Tracy Lowe",
    "Crystal Swarz",
    "Keli Richards"]

const branches = [
    "Sales",
    "Accounting",
    "Legal",
    "Marketing",
    "Operations",
    "Human Resources"
]

const columns = [{
  dataField: 'id',
  text: 'Employee ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Employee Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'branch',
  text: 'Employee Branch',
  sort: true
}];

const products = [
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[0],
  branch: branches[Math.floor(Math.random()*6)]
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[1],
  branch: branches[Math.floor(Math.random()*6)]
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[2],
  branch: branches[Math.floor(Math.random()*6)]
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[3],
  branch: branches[Math.floor(Math.random()*6)]
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[4],
  branch: branches[Math.floor(Math.random()*6)]
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[5],
  branch: branches[Math.floor(Math.random()*6)]
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[6],
  branch: branches[Math.floor(Math.random()*6)]
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[7],
  branch: branches[Math.floor(Math.random()*6)]
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[8],
  branch: branches[Math.floor(Math.random()*6)]
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[9],
  branch: branches[Math.floor(Math.random()*6)]
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[10],
  branch: branches[Math.floor(Math.random()*6)]
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: empArr[11],
  branch: branches[Math.floor(Math.random()*6)]
},
];
 

 
export default () =>
  <BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory() } />