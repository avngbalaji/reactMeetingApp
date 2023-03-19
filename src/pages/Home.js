import MeetingCard from "../components/MeetingCard";
import { useState, useEffect } from "react";

function Home(){
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
                setMeetings(tempMeetings);
                console.log(meeting);
                setload(false);
            }
            })
    }, []);
    return(
        <div className="home">
            <div className={load == true ? "loader" : ""}></div>
            <div className="home-page">
                <MeetingCard />
                <MeetingCard />
            </div>
        </div>
    )
}
export default Home;