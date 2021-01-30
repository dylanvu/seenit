import logo from './logo.png'

// Logo size is 174 px x 166 px

function Logo(){
    return(
            <p className="heading"><img src = {logo} height="140"/>
                <h1 className="title">SeenIt</h1>
                <p className="subheading">The Social Movie Network in React</p>
            </p>
    )
}

export default Logo

