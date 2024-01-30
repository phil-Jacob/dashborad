import React from 'react'
import Nav from './Nav'


function Home({Toggle}) {
  return (
    <div className='px-3'>
        <Nav Toggle={Toggle}/>
        <div className='container-fluid'>
        <div class="cat"><h3 className='text-white'>Sales Information</h3></div>
           <div className='row g-3 my-2'>
             <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3>Customer</h3>
                        <input placeholder='Enter Customer Name'></input>
                    </div>
                </div>
              </div>
              <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3>Invoice Id</h3>
                        <input placeholder='Enter Invoice Id'></input>
                    </div>
                </div>
              </div>
              <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3>Start Date</h3>
                        <input placeholder='Start Date'></input>
                    </div>
                </div>
                </div>
                <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3>End Date</h3>
                        <input placeholder='End Date'></input>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Invoice ID</th>
      <th scope="col">Date</th>
      <th scope="col">Customer</th>
      <th scope="col">Payable Amount</th>
      <th scope="col">Paid Amount</th>
      <th scope="col">Due</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
    <th scope="row">3</th>
    <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
  
  </tbody>
</table>
    </div>
  )
}

export default Home