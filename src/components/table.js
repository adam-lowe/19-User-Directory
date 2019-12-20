import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const products = [
  {
  id: 1,
  name: "Milk",
  price: 20
},
  {
  id: 2,
  name: "Cereal",
  price: 16.22
},
  {
  id: 4,
  name: "Apple",
  price: 6.89
},
  {
  id: 3,
  name: "Car",
  price: 234
}
];
 
const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'price',
  text: 'Product Price'
}];
 
export default () =>
  <BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory() } />