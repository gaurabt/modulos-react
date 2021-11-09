import {Link} from 'react-router-dom'

const galaxyList =  [
    {
        id : 1,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.z3HoA0B7tNVi8E_6MUypygAAAA%26pid%3DApi&f=1',
    },
    {
        id : 2,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DxkZdXEBslO1IoMnQ9tQMAAAAA%26pid%3DApi&f=1',
    },
    {
        id : 3,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mxs4LXdoQqlGYb6Ww6e1agAAAA%26pid%3DApi&f=1',
    },
    {
        id : 4,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cfRKL2E-0wpA7mRY5kX2uwAAAA%26pid%3DApi&f=1',
    },
    {
        id : 5,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.27bYSkMEUyD-Q3gPXyjCGgAAAA%26pid%3DApi&f=1',
    },
    {
        id : 6,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AjELLaVAJz9-HfkLWSlQMAAAAA%26pid%3DApi&f=1',
    },
    {
        id : 7,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5D8oMNH54yAjJhtOpgeNKwHaHa%26pid%3DApi&f=1',
    },
    {
        id : 8,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qcovKi-PZeeHZtwbLgHgRAAAAA%26pid%3DApi&f=1',
    },
    {
        id : 9,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.nG0ipi_mDIG4r86EkSqzLwHaE5%26pid%3DApi&f=1',
    },
    {
        id : 10,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1wP7WE12DXyCBSiSCvPT8gAAAA%26pid%3DApi&f=1',
    },
    {
        id : 11,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-R1CkyWzxNxzE8r0_JgJDgAAAA%26pid%3DApi&f=1',
    },
    {
        id : 12,
        img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.msCVX4tE8EAg1Rs5LzMERwAAAA%26pid%3DApi&f=1',
    },
]

const GalaxyType = () => {

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
            <div className="galaxy-type">
            <div className='title'>
                  <Link to='/' className='btn'>Back</Link>
                  <h1>Galaxy Type ID</h1>
              </div>
              <div className = 'galaxy-container'>
              {galaxyList.map((galaxy) => {
                  return (
                    <Galaxy {...galaxy}/>
                  )
              })}
              </div>
            </div>
        </div>
    </div>
   </>
    )
}

const Galaxy = (props) => {
    const {id, img} = props
    return (
            <article className='galaxy' key={id}>
                <img src={img} alt='galaxy-img'/>
            </article>
    )
}

export default GalaxyType