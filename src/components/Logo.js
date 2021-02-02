import logo from './logo.png'
import { Link } from 'react-router-dom'

// Logo size is 174 px x 166 px

function Logo(){
    return(
            <div className="heading">
                <div className="headingCol">
                    <img src = {logo} height="140"/>
                    <h1 className="title">SeenIt</h1>
                    <p className="subheading">The Social Movie Network in React</p>
                </div>
                <div className="headingCol">
                    <p style={{textAlign: "right", marginRight: "10px"}}>
                        <Link to = "/User">Go to User Page Test</Link>
                    </p>
                </div>
            </div>
    )
}

export default Logo

