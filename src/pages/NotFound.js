import NotfoundImage from '../images/filenotfound.avif'

function NotFound(){
    return(
        <div className="notfound">
            <img src={NotfoundImage} className="notfound-image" />
        </div>
    )
}
export default NotFound;