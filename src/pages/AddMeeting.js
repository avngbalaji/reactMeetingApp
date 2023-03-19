import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddMeeting(){
    let [loaderStatus, setLoaderStatus] = useState(false);
    let titleInput = useRef();
    let dateInput = useRef();
    let descInput = useRef();
    let navigate = useNavigate();
    function addMeetingHandler(){
        setLoaderStatus(true);
        let tempMeeting = {
            title: titleInput.current.value,
            date: dateInput.current.value,
            desc: descInput.current.value,
        }
        fetch('https://meet-51816-default-rtdb.firebaseio.com/meet.json', {
            method: 'post',
            body: JSON.stringify(tempMeeting)
        }).then(()=>{
            setLoaderStatus(false);
            navigate('/');
        })
    }
    return(
        <div className="add-container">
            <h1>Add New Meeting</h1>

            <input type='text' ref={titleInput} placeholder='Enter the Meeting Title' />
            <input type='datetime-local' ref={dateInput} placeholder='Enter the Time' />
            <input type='text' ref={descInput} placeholder='Enter the Description' />
            <button className="btn" onClick={addMeetingHandler}>{loaderStatus == true ? 'Loading' : 'Add Meeting'} <div className={loaderStatus == true ? "btn-loader" : ""}></div></button>
        </div>
    )
}
export default AddMeeting;

// https://meet-51816-default-rtdb.firebaseio.com/