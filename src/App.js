import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  let [name, setname] = useState('');
  let [rno, setrno] = useState('');
  let [sub1, setsub1] = useState('');
  let [sub2, setsub2] = useState('');
  let [sub3, setsub3] = useState('');
  let [sub4, setsub4] = useState('');
  let [sub5, setsub5] = useState('');
  let [arr, setarr] = useState([]);
  let [res1, setres1] = useState([]);
  const result = () => {
    let total = parseInt(sub1) + parseInt(sub2) + parseInt(sub3) + parseInt(sub4) + parseInt(sub5);
    let per = total / 5;
    let max = Math.max(sub1, sub2, sub3, sub4, sub5)
    let min = Math.min(sub1, sub2, sub3, sub4, sub5)
    let temp = 0, res;
    if (parseInt(sub1) > 35) {
      temp += 1;
    }
    if (parseInt(sub2) > 35) {
      temp += 1;
    }
    if (parseInt(sub3) > 35) {
      temp += 1;
    }
    if (parseInt(sub4) > 35) {
      temp += 1;
    }
    if (parseInt(sub5) > 35) {
      temp += 1;
    }

    if (temp == 3 || temp == 4) {
      setres1('ATKT')
      res = 'ATKT';
    }
    else if (temp == 5) {
      setres1('PASS')
      res = 'PASS';

    }
    else {
      setres1('FAIL')
      res = 'FAIL';

    }

    console.log(res1)
    // console.log(temp)
    // console.log(res)

    setarr([...arr, { Name: name, Rno: rno, Sub1: sub1, Sub2: sub2, Sub3: sub3, Sub4: sub4, Sub5: sub5, Total: total, Per: per, Max: max, Min: min, Res: res }])
    console.log(arr)


  }
  return (
    <>
      <body >
        <div>
          
          <h1>STUDENT RESULT</h1>
          <table className='info'>
            <tr>
              <td>NAME :-</td>
              <td><input type='text' onChange={(e) => setname(e.target.value)}></input></td>
            </tr>
            <tr>
              <td>ROLLNO :-</td>
              <td><input type='text' onChange={(e) => setrno(e.target.value)}></input></td>
            </tr>
            <tr>
              <td>SUB01 :-</td>
              <td><input type='text' onChange={(e) => setsub1(e.target.value)}></input></td>
            </tr>
            <tr>
              <td>SUB02 :-</td>
              <td><input type='text' onChange={(e) => setsub2(e.target.value)}></input></td>
            </tr>
            <tr>
              <td>SUB03 :-</td>
              <td><input type='text' onChange={(e) => setsub3(e.target.value)}></input></td>
            </tr>
            <tr>
              <td>SUB04 :-</td>
              <td><input type='text' onChange={(e) => setsub4(e.target.value)}></input></td>
            </tr>
            <tr>
              <td>SUB05 :-</td>
              <td><input type='text' onChange={(e) => setsub5(e.target.value)}></input></td>
            </tr>
          </table>
          <button onClick={result} >CLICK HERE...!</button><br></br>
          <table border={2} className='table'>
            <tr>
              <th>NAME</th>
              <th>ROLL NO</th>
              <th>SUB 01</th>
              <th>SUB 02</th>
              <th>SUB 03</th>
              <th>SUB 04</th>
              <th>SUB 05 </th>
              <th>TOTAL</th>
              <th>PERCENTAGE</th>
              <th>MAXIMUM</th>
              <th>MINIMUM</th>
              <th>RESULT</th>
            </tr>
            {
              arr.map((ele) => {
                return (
                  <>
                    <tr>
                      <td>{ele.Name}</td>
                      <td>{ele.Rno}</td>
                      <td>{ele.Sub1}</td>
                      <td>{ele.Sub2}</td>
                      <td>{ele.Sub3}</td>
                      <td>{ele.Sub4}</td>
                      <td>{ele.Sub5}</td>
                      <td>{ele.Total}</td>
                      <td>{ele.Per}</td>
                      <td>{ele.Max}</td>
                      <td>{ele.Min}</td>
                      <td>{ele.Res}</td>
                    </tr>
                  </>
                )
              })
            }
          </table>
        </div>
      </body>
    </>
  );
}

export default App;
