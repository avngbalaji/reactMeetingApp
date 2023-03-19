import {Link} from "react-router-dom";
function Navigation(){
    return(
        <nav>
            <h2>Meeting App</h2>
            <div className="link-div">
                <Link to='/' className="links">Home</Link>
                <Link to='/add-meeting' className="links">Add Meeting</Link>
                <Link to='/my-meeting' className="links">My Meetings</Link>
            </div>

        </nav>
    )
}

export default Navigation;