import {Link} from 'react-router-dom'
import {useState} from 'react'

const HousePrediction = () => {

  
  
  ///input field state
  
  const [lat,setLat] = useState('-45.334')
    const [long,setLong] = useState('97.39')
    const [age,setAge]= useState('2')
    const [room,setRoom] = useState('5')
    const [bedroom,setBedroom] = useState('3')

    const handleLat = (oldValue) => {
        const newValue = oldValue.target.value
        return setLat(newValue)
     }

     const handleLong = (oldValue) => {
        const newValue = oldValue.target.value
        return setLong(newValue)
     }

    const handleAge = (oldValue) => {
      const newValue = oldValue.target.value
        return setAge(newValue)
      }

    const handleRoom = (oldValue) => {
      const newValue = oldValue.target.value
      return setRoom(newValue)
    }
    
    const handleBedroom = (oldValue) => {
      const newValue = oldValue.target.value
      return setBedroom(newValue)
    }


    ////////Modal state
  
      const [isOpen, setIsOpen] = useState(false)


      const handleModal = (e) =>{
        e.preventDefault()
        setIsOpen(!isOpen)
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
                  <h1>Housing Price Prediction</h1>
                  <div>     
                  <em style={{fontFamily: 'Serif'}}>i</em>
                  <p>Model Details</p>
                  </div>
              </div>
              <div className='form-elements'>

              <div className = 'form-control'>
              <label htmlFor='areaType'>Area Type</label>
              <select id='areaType'>
              <option value="small village">small village</option>
              <option value="small village">small village</option>
              <option value="small village">small village</option>
              </select>                     
              </div>
              <div className = 'form-control'>
              <label htmlFor='areaIncome'>Area Income</label>
              <select id='areaIncome'>
              <option value="medium">medium</option>
              <option value="medium">medium</option>
              <option value="medium">medium</option>
              </select>                     
              </div>
              <div className='form-control'>
              <label htmlFor='latitude'>Latitude</label>     
                <input type='range' className='slider' id='latitude' min='-90' max='90' value={lat} onChange={handleLat}/>
                <p>{lat}</p>
              </div>
              <div className='form-control'>
              <label htmlFor='longitute'>Longitute</label>     
                <input type='range' className='slider' id='longitude' min='-180' max='180' value={long} onChange={handleLong}/>
                <p>{long}</p>
              </div>
              <div className = 'form-control'>
              <label htmlFor='householdDensity'>Households Density</label>
              <select id='householdDensity'>
              <option value="low">low</option>
              <option value="low">low</option>
              <option value="low">low</option>
              </select>                     
              </div>
              <div className='form-control'>
              <label htmlFor='houseage'>House Age</label>     
                <input type='range' className='slider' id='houseage' min='1' max='10' value={age} onChange={handleAge}/>
                <p>{age}</p>
              </div>
              <div className='form-control'>
              <label htmlFor='room'>Nr. of rooms</label>     
                <input type='range' className='slider' id='room' min='4' max='12' value={room} onChange={handleRoom}/>
                <p>{room}</p>
              </div>
              <div className='form-control'>
              <label htmlFor='bedroom'>Nr. of bedrooms</label>     
                <input type='range' className='slider' id='bedroom' min='2' max='4' value={bedroom} onChange={handleBedroom}/>
                <p>{bedroom}</p>
              </div>
              <div className = 'form-control'>
              <label htmlFor='ocean-proximity'>Ocean Proximity</label>
              <select id='ocean-proximity'>
              <option value="Near ocean">Near ocean</option>
              <option value="Near ocean">Near ocean</option>
              <option value="Near ocean">Near ocean</option>
              </select>                     
              </div>
              </div>

              <button className="submit" onClick={handleModal}>Predict</button>

              {isOpen && <Modal/>}
          </form>
        </div>
    </div>
   </>
    )
  }

  const Modal = ()  => {
    return (
    <>
        <div classname='modal'>
          <div className='overlay'></div>
          <div className='modal-content'>
            <h2>HOUSE ESTIMATED PRICE</h2>
                <h1>317'000 USD</h1>
              <button type= 'submit' className="submit">Use Case</button>
          </div>
        </div>
    </>
    )
}

  

export default HousePrediction