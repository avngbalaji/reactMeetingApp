import Running from '../images/running.jpg';

function MeetingCard(){
    return(
        <div className='container'>
            <div className="meeting-card"> 
                <img src={Running} alt="running-image" className="meeting-card-img" />
                <h3>why you need to exercise to be a good developer?</h3>
                <p>12 CSS spinners with CSS animation optimized in size, speed and dev-friendly for your next web project.</p>
                <button className="link-btn">Join Meeting</button>
            </div>
        </div>
    )
}

export default MeetingCard;