import {Link} from 'react-router-dom'
import {useState} from 'react'

const ChurnPrediction = () => {

    ///////handle input fields

    const [charge,setCharge] = useState('54')
    const [tenure,setTenure] = useState('760')
    const [total,setTotal]= useState('254')

    const handleCharge = (oldValue) => {
        const newValue = oldValue.target.value
        return setCharge(newValue)
     }

     const handleTenure = (oldValue) => {
        const newValue = oldValue.target.value
        return setTenure(newValue)
     }

    const handleTotal = (oldValue) => {
       const newValue = oldValue.target.value
       return setTotal(newValue)
    }

    ///////handle popup

    const [isOpen, setIsOpen] = useState(false)

    const handlePopup = (e) =>{
        e.preventDefault()
        setIsOpen(!isOpen)
      }

      const [showDetail, setShowDetail] = useState(false)

      const handleDetail = (e) => { 
          e.preventDefault()
          setShowDetail(!showDetail)
      }

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
          <form className = "form">
              <div className='title'>
                  <Link to='/' className='btn'>Back</Link>
                  <h1>Churn Rate Predictor</h1>
                  <div>     
                  <em style={{fontFamily: 'Serif'}}>i</em>
                  <p onClick = {handleDetail} style={{cursor : 'pointer'}}>Model Details</p>
                  </div>
              </div>
              <div className='form-elements'>

              <div className = 'form-control'>
              <label htmlFor='gender'>Gender</label>
              <input type="radio" id="Male" value="Male" name='gender'/>
              <label htmlFor='Male'>Male</label>
              <input type="radio" id="Female" value="Female" name='gender'/>
              <label htmlFor='Female'>Female</label>                    
              </div>
              <div className = 'form-control'>
              <label htmlFor='dependents'>Dependents</label>
              <input type="radio" id="Yes" value="Yes" name='dependents'/>
              <label htmlFor='Yes'>Yes</label>
              <input type="radio" id="No" value="No" name='dependents'/>
              <label htmlFor='No'>No</label>                    
              </div>
              <div className = 'form-control'>
              <label htmlFor='device-protection'>Device Protection</label>
              <input type="radio" id="Yes" value="Yes" name='device-protection'/>
              <label htmlFor='Yes'>Yes</label>
              <input type="radio" id="No" value="No" name='device-protection'/>
              <label htmlFor='No'>No</label>                    
              </div>
              <div className='form-control'>
              <label htmlFor='lines'>Multiple Lines</label>
              <select id='multiple-lines'>
              <option value="No Internat Service">No Internet Service</option>
              <option value="No Internat Service">No Internet Service</option>
              <option value="No Internat Service">No Internet Service</option>
              </select>
              </div>
              <div className='form-control'>
              <label htmlFor='backup'>Online Backup</label>
              <select id='online-backup'>
              <option value="No Internat Service">No Internet Service</option>
              <option value="No Internat Service">No Internet Service</option>
              <option value="No Internat Service">No Internet Service</option>
              </select>  
              </div>
              <div className='form-control'>
              <label htmlFor='security'>Online Security</label>
              <select id='online-secutity'>
              <option value="No Internat Service">No Internet Service</option>
              <option value="No Internat Service">No Internet Service</option>
              <option value="No Internat Service">No Internet Service</option>
              </select>
              </div>
              <div className = 'form-control'>
              <label htmlFor='paperless-billing'>Paperless billing</label>
              <input type="radio" id="Yes" value="Yes" name='paperless-billing'/>
              <label htmlFor='Yes'>Yes</label>
              <input type="radio" id="No" value="No" name='paperless-billing'/>
              <label htmlFor='No'>No</label>                    
              </div>
              <div className = 'form-control'>
              <label htmlFor='partner'>Partner</label>
              <input type="radio" id="Yes" value="Yes" name='partner'/>
              <label htmlFor='Yes'>Yes</label>
              <input type="radio" id="No" value="No" name='partner'/>
              <label htmlFor='No'>No</label>                    
              </div>
              <div className = 'form-control'>
              <label htmlFor='phone-service'>Phone service active</label>
              <input type="radio" id="Yes" value="Yes" name='phone-service'/>
              <label htmlFor='Yes'>Yes</label>
              <input type="radio" id="No" value="No" name='phone-service'/>
              <label htmlFor='No'>No</label>                    
              </div>
              <div className='form-control'>
              <label htmlFor='movie-streaming'>Movie Streaming Service</label>
              <select id='movie-streaming'>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
              </div>
              <div className='form-control'>
              <label htmlFor='streaming'>Streaming TS</label>
              <select id='streaming'>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
              </div>
              <div className='form-control'>
              <label htmlFor='tech-support'>Tech support active</label>
              <select id='tech-support'>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
              </div>
              <div className='form-control'>
              <label htmlFor='monthly-charge'>Monthly Charges</label>     
                <input type='range' className='slider' id='monthly-charge' min='10' max='150' value={charge} onChange={handleCharge}/>
                <p>{charge}</p>
              </div>
              <div className = 'form-control'>
              <label htmlFor='senior-citizen'>Senior Citizen</label>
              <input type="radio" id="0" value="0" name='senior-citizen'/>
              <label htmlFor='0'>0</label>
              <input type="radio" id="1" value="1" name='senior-citizen'/>
              <label htmlFor='1'>1</label>                    
              </div>
              <div className='form-control'>
              <label htmlFor='tenure'>Tenure in months</label>     
                <input type='range' className='slider' id='tenure' min='500' max='1200' value={tenure} onChange={handleTenure}/>
                <p>{tenure}</p>
              </div>
              <div className='form-control'>
              <label htmlFor='total'>Total Charges</label>     
                <input type='range' className='slider' id='total' min='100' max='500' value={total} onChange={handleTotal}/>
                <p>{total}</p>
              </div>
              <div className = 'form-control'>
              <label htmlFor='type-of-contract'>Type of contract Density</label>
              <select id='type-of-contract'>
              <option value="Month-to-month">Month-to-month</option>
              <option value="Month-to-month">Month-to-month</option>
              <option value="Month-to-month">Month-to-month</option>
              </select>                     
              </div>
              <div className = 'form-control'>
              <label htmlFor='type-of-IS'>Type of Internt Service</label>
              <select id='type-of-Is'>
              <option value="Fiber Optic">Fiber Optic</option>
              <option value="Fiber Optic">Fiber Optic</option>
              <option value="Fiber Optic">Fiber Optic</option>
              </select>                     
              </div>
              <div className = 'form-control'>
              <label htmlFor='payment-method'>Payment Method</label>
              <select id='payment-method'>
              <option value="Bank transfer(automatic)">Bank transfer(automatic)</option>
              <option value="Bank transfer(automatic)">Bank transfer(automatic)</option>
              <option value="Bank transfer(automatic)">Bank transfer(automatic)</option>
              </select>                     
              </div>
              </div>

              <div className='button-class'>
              <button type= 'submit' className="submit" style={{backgroundColor : '#BFD7D0', color : '#334C63'}}>Random Values</button>
              <button type= 'submit' className="submit" onClick={handlePopup}>Predict</button>
              </div>

              {isOpen && <Popup/>}

              {showDetail && <Details/>}
          </form>
        </div>
    </div>
   </>
    )
}

const Popup = ()  => {
    return (
    <>
        <div classname='modal'>
          <div className='overlay'></div>
          <div className='modal-content'>
            <h2>CHURN RISK!!</h2>
                <h1>Not Detected</h1>
              <button type= 'submit' className="submit">Ok</button>
          </div>
        </div>
    </>
    )
}

const Details = () => {
    return (

        <div className='details'>
            <h1>MODEL DETAILS</h1>
        <table className='table table--detail'>
        <tr>
            <th colspan='5'>Permutation Feature Importance</th>
        </tr>
        <tr>
            <td>tenure month</td>
            <td></td>
            <td><div className='progress' style={{width: '100%'}}></div></td>
            <td><div className='progress' style={{width: '100%'}}></div></td>
            <td></td>
        </tr>
        <tr>
            <td>type of internet service</td>
            <td></td>
            <td><div className='progress' style={{width: '100%'}}></div></td>
            <td><div className='progress' style={{width: '80%'}}></div></td>
            <td></td>
        </tr>
        <tr>
            <td>monthly charges</td>
            <td></td>
            <td><div className='progress' style={{width: '100%'}}></div></td>
            <td><div className='progress' style={{width: '65%'}}></div></td>
            <td></td>
        </tr>
        <tr>
            <td>has multiple lines</td>
            <td></td>
            <td><div className='progress' style={{width: '100%'}}></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>tenure month</td>
            <td></td>
            <td><div className='progress' style={{width: '60%'}}></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>type of internet service</td>
            <td></td>
            <td><div className='progress' style={{width: '75%'}}></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>monthly charges</td>
            <td></td>
            <td><div className='progress' style={{width: '90%'}}></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>has multiple lines</td>
            <td></td>
            <td><div className='progress' style={{width: '50%'}}></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>tenure month</td>
            <td></td>
            <td><div className='progress' style={{width: '40%'}}></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>type of internet service</td>
            <td></td>
            <td><div className='progress' style={{width: '60%'}}></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>montly charge</td>
            <td></td>
            <td><div className='progress'></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>tenure month</td>
            <td></td>
            <td><div className='progress'></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>type of internet service</td>
            <td></td>
            <td><div className='progress'></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>monthly charge</td>
            <td></td>
            <td><div className='progress'></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>tenure month</td>
            <td></td>
            <td><div className='progress'></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>monthly charge</td>
            <td></td>
            <td><div className='progress'></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>tenure month</td>
            <td></td>
            <td><div className='progress'></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>type of internt service</td>
            <td></td>
            <td><div className='progress'></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        <tr>
            <td>tenure month</td>
            <td></td>
            <td><div className='progress'></div></td>
            <td><div className='progress'></div></td>
            <td></td>
        </tr>
        </table>

        <div style={{margin:'1rem'}}>
            <button className='submit' >Ok</button>
            <p className='formula'>err<sub>true</sub>-err<sub>permuted</sub></p>
        </div>        
        </div>

    )
}


export default ChurnPrediction