import React from 'react';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">User Directory</h1>
      <table class="table">
        <thead>
          <tr>
            <th className="active">Name</th>
            <th>Branch</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Karen Drakkie</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
          <tr>
            <td>John Hertz</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
          <tr>
            <td>Cody Parker</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
          <tr>
            <td>Conrad Frazier</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
          <tr>
            <td>Sophia Wright</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
          <tr>
            <td>Debbie Stewart</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
          <tr>
            <td>Austin Bridges</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
          <tr>
            <td>Jenny Robinson</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
          <tr>
            <td>Donald Henderson</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
          <tr>
            <td>Tracy Lowe</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
          <tr>
            <td>Crystal Swarz</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
          <tr>
            <td>Keli Richards</td>
            <td></td>
            <td> {Math.floor(Math.random()*899999)+100000} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
