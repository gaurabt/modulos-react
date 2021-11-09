import {Link } from 'react-router-dom'

const menuList = [
    {
        id : 1,
        img : require('./images/menu/pricing.png').default,
        title : 'Housing Price Prediction',
        description : 'Tabular regression',
        link : '/houseprediction'
    },
    {
        id : 2,
        img : require('./images/menu/Group.png').default,
        title : 'Galaxy Type ID',
        description : 'Image classification',
        link : '/galaxytype'
    },
    {
        id : 3,
        img : require('./images/menu/analytics.png').default,
        title : 'Churn Rate Predictor',
        description : 'Tabular classification',
        link : '/churnprediction'
    },
    {
        id : 4,
        img : require('./images/menu/bikes.png').default,
        title : 'Bikes Demand Forecast',
        description : 'Time series',
        link : '/bikesdemandforecast'
    },
    {
        id : 5,
        img : require('./images/menu/cancer-cell.png').default,
        title : 'Histopthological Cancer Detection Data',
        description : 'Image, binary classification',
    },
    {
        id : 6,
        img : require('./images/menu/medical.png').default,
        title : 'Bioreactor Yield Prediction Or Health Care Costs',
        description : 'Tabular regression',
    },
    {
        id : 7,
        img : require('./images/menu/medical-research.png').default,
        title : 'Biomarker Candidates For Tumors',
        description : 'Tabular multi-class',
    },
    {
        id: 8,
        img : require('./images/menu/coronavirus.png').default,
        title : 'Covid Hospitalizations',
        description : 'Tabular, time series regression',
    },

]

const Home = () => {
        return (
        <>
            <div className="header">
            <img src= {require('./images/logo.png').default} alt="logo" />
            </div>
            <div className="container">
                <ul className="sidebar">
                    <li className="sidebar-item">
                        <img src={require('./images/demo.png').default} alt="demo" />
                        <p>Demo</p>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('./images/modulos.png').default} alt="modulos" />
                        <p>Modulus.ai</p>
                    </li>
                    <li className="sidebar-item">
                        <img src={require( './images/platform.png').default} alt="platform" />
                        <p>AutoML Platform</p>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('./images/documentation.png').default} alt="documentation" />
                        <p>Documentation</p>
                    </li>
                </ul>
                <div className="main">

                  { menuList.map((menu) => {
                      return(
                          <Menu {...menu}/>
                          )
                  })}
                </div>
            </div>
        </>
    )
}

const Menu = (props) => {
    const {id, link,img, title, description} = props
    return (
        <Link to={link}>
        <article className='menu' key= {id}>
            <img src={img} alt={title} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
        </Link>
    )
}

export default Home