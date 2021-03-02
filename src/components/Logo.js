import logo from './logo.png'
import { Link } from 'react-router-dom'

// Logo size is 174 px x 166 px

function Logo(props){
    return (
            <div className="heading">
                <div className="headingColimg">
                    <Link to ="/" className="link"><img className="Logo" src={logo} height="140"/></Link>
                </div>
                <div className="headingCol">
                    <h1 className="title">SeenIt</h1>
                    <p className="subheading">The Social Movie Network in React</p>
                </div>
                <div className="headingCol">
                    <p className="headingText">
                        <Link to = "/Movie" className="link">Go to Movie Page Test</Link>
                    </p>
                </div>
                <div className="headingCol">
                    <p className="headingText">
                        <Link to = "/Search" className="link">Search for a movie</Link>
                    </p>
                </div>
                <div className="headingCol">
                    {props.status ? 
                    <p className="headingText">
                        <Link to = "/User" className="link">View Profile</Link>
                    </p>
                    : 
                    <p className="headingText">
                        Log in to view profile
                    </p>
                    }
                </div>
            </div>
    )
}

export default Logo

