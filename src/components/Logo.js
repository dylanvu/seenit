import logo from './logo.png'

function Logo(){
    return(
        <div>
            <p className="heading"><img src = {logo}/>
                <h1 className="title">SeenIt</h1>
                <p className="subheading">The Social Movie Network in React</p>
            </p>
        </div>
    )
}

export default Logo

