import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <>
        <div className="header">
            <img src= {require('../images/logo.png').default} alt="logo" />
        </div>
        <div className='error'>
            <div>
            <h1>ERROR...</h1>
            <h3>Page Not Found</h3>
            </div>

            <Link to='/'><button className='submit' style={{marginTop: '2rem'}}>go back</button></Link>
        </div>
        </>
    )
}

export default Error
