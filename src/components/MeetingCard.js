import Running from '../images/running.jpg';

function MeetingCard(props){
    return(
        <div className='container'>
            <div className="meeting-card"> 
                <img src={props.img} alt={props.title+ " " + "image"} className="meeting-card-img" />
                <p>{props.date}</p>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
                <button className="link-btn">Join Meeting</button>
            </div>
        </div>
    )
}

export default MeetingCard;