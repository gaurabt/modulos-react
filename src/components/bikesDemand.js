import {Link} from 'react-router-dom'

const BikesDemand = () => {

   return (
   <>
   <div className="header">
    <img src= {require('../images/logo.png').default} alt="logo" />
    </div>
    <div className="container">
        <ul className="sidebar">
            <li className="sidebar-item">
                <img src={require('../images/demo.png').default} alt="demo" />
                <p>Demo</p>
            </li>
            <li className="sidebar-item">
                <img src={require('../images/modulos.png').default} alt="modulos" />
                <p>Modulus.ai</p>
            </li>
            <li className="sidebar-item">
                <img src={require( '../images/platform.png').default} alt="platform" />
                <p>AutoML Platform</p>
            </li>
            <li className="sidebar-item">
                <img src={require('../images/documentation.png').default} alt="documentation" />
                <p>Documentation</p>
            </li>
        </ul>
        <div className="main">
            <div className="bikes-demand">
            <div className='title'>
                  <Link to='/' className='btn'>Back</Link>
                  <h1>Bikes Demand Forecast</h1>
                  <label htmlFor="date" style={{marginLeft: 'auto', fontSize: '0.9rem', color: '#1F2E3C', fontWeight: 'bolder'}}>Select a day to predict demand on :</label>
                  <input type="date" id='date' className='date' />
              </div>
              <table className="table">
                  <tr>
                      <th>Date</th>
                      <th>Holiday</th>
                      <th>Weekday</th>
                      <th>Working Day</th>
                      <th>Weather Situation</th>
                      <th>Humidity Percent</th>
                      <th>Avg Temperature Celsius</th>
                      <th>Wind Speed K/m</th>
                      <th>Casual Users</th>
                      <th>Registered Users</th>
                      <th>Total Users</th>
                  </tr>
                  <tr>
                      <td>2012-11-23</td>
                      <td>0</td>
                      <td>5</td>
                      <td>5</td>
                  </tr>
                  <tr>
                      <td>2012-11-24</td>
                      <td>0</td>
                      <td>6</td>
                      <td>6</td>
                  </tr>
                  <tr>
                      <td>2012-11-25</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                  </tr>
                  <tr>
                      <td>2012-11-26</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                  </tr>
                  <tr>
                      <td>2012-11-27</td>
                      <td>0</td>
                      <td>2</td>
                      <td>2</td>
                  </tr>
                  <tr>
                      <td>2012-11-28</td>
                      <td>0</td>
                      <td>3</td>
                      <td>3</td>
                  </tr>
                  <tr>
                      <td>2012-11-29</td>
                      <td>0</td>
                      <td>4</td>
                      <td>4</td>
                  </tr>
                  <tr>
                      <td>2012-11-30</td>
                      <td>0</td>
                      <td>5</td>
                      <td>5</td>
                  </tr>
                  <tr>
                      <td>2012-12-01</td>
                      <td>0</td>
                      <td>6</td>
                      <td>6</td>
                  </tr>
                  <tr>
                      <td>2012-12-02</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                  </tr>
                  <tr>
                      <td>2012-12-03</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                  </tr>
              </table>
              <div className="pages">
                  <span className="page">&lt;</span>
                  <span className="page page--active">1</span>
                  <span className="page">2</span>
                  <span className="page">3</span>
                  <span className="page">&gt;</span>
              </div>
            </div>
        </div>
    </div>
   </>
    )
}


export default BikesDemand