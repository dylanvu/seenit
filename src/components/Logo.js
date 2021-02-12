import logo from './logo.png'
import { Link } from 'react-router-dom'

// Logo size is 174 px x 166 px

function Logo(){
    return(
            <div className="heading">
                <div className="headingCol">
                    <Link to ="/"><img src = {logo} height="140"/></Link>
                    <h1 className="title">SeenIt</h1>
                    <p className="subheading">The Social Movie Network in React</p>
                </div>
                <div className="headingCol">
                    <p style={{textAlign: "right", marginRight: "10px", padding: "50px 0"}}>
                        <Link to = "/User">Go to User Page Test</Link>
                    </p>
                </div>
                <div className="headingCol">
                    <p style={{textAlign: "right", marginRight: "10px", padding: "50px 0"}}>
                        <Link to = "/Movie">Go to Movie Page Test</Link>
                    </p>
                </div>
            </div>
    )
}

export default Logo

