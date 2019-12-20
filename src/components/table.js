import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const products = [
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
{
  id: Math.floor(Math.random()*899999)+100000,
  name: "Milk",
  branch: 20
},
];
 
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
  text: 'Employee Branch'
}];
 
export default () =>
  <BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory() } />