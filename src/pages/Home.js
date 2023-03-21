import MeetingCard from "../components/MeetingCard";
import { useState, useEffect } from "react";

function Home(){
    const options = {weekday : 'long', year: 'numeric', month : 'long', day : 'numeric'};
    let [load, setload] = useState(true);
    const [meetings, setMeetings] = useState([]);

    //fetch the meeting
    useEffect(()=>{
            fetch('https://meet-51816-default-rtdb.firebaseio.com/meet.json')
            .then(response => response.json())
            .then(data=>{
            let tempMeetings = [];
            for(const key in data){
                let meeting = {
                    id: key,
                    ...data[key]
                }
                tempMeetings.push(meeting);
            }
            setMeetings(tempMeetings);
            setload(false);
            })
    }, []);
    useEffect(()=>{
        console.log(meetings);
    }, [meetings]);

    return(
        <div className="home">
            <div className={load == true ? "loader" : ""}></div>
            <div className="home-page container">

                {
                    meetings.map((meeting)=>{
                        let date = new Date(meeting.date);
                        let fDate = date.toLocaleDateString('en', options);
                        let time = date.toLocaleTimeString('en', {hour: "2-digit", minute: "2-digit"});
                        let meetingTime = time + " -> " + fDate;
                        let img = "http://source.unsplash.com/1600x900/?" + meeting.title;
                        return <MeetingCard img={img} date={meetingTime} title={meeting.title} desc={meeting.desc}/>
                    })
                }
            </div>
        </div>
    )
}
export default Home;


// these four lines used to arrange the meetings by date
// shows only the meeting which is after real time
// .filter((meeting)=>{
// let today = new Date();
// return (new Date(meeting.date) > today)
// })