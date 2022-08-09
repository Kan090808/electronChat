import React from 'react';

export default function App(){
    const title = "hello world ";
    const enhancedTitle = title + ' - React App!';

    const sendNotification = ()=>{
        alert('Hello World');
        e_notification.sendNotification('e notification');
    }

    return (
        <>
            <h1>{enhancedTitle}</h1>
            <button onClick={sendNotification}>send notif</button>
        </>
    )
}