import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HousePrediction from './components/housePrediction'
import ChurnPrediction from './components/churnPrediction'
import GalaxyType from './components/galaxyType'
import BikesDemand from './components/bikesDemand'
import Error from './components/Error'

import Home from './Home'


const App = () => {
    return (
    <Router>
    <Switch>
        <Route exact path = '/'><Home /></Route>
        <Route path='/houseprediction'><HousePrediction/></Route>
        <Route path='/churnprediction'><ChurnPrediction/></Route>
        <Route path='/galaxytype'><GalaxyType/></Route>
        <Route path='/bikesdemandforecast'><BikesDemand/></Route>
        <Route path='*'><Error/></Route>
    </Switch>
    </Router>
    )
}

export default App