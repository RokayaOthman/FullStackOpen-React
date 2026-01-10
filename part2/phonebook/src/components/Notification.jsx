const Notification = ({ notifymessage, errorMessage }) => {
    const notifyStyle = {
        color : 'green',
        fontStyle : 'italic',
        
    }

    const errorStyle = {
        color: 'red',
        fontStyle: 'italic'
    }

    return(
        <div>
            {errorMessage ? <div style={errorStyle}>{errorMessage}</div> : null}
            {notifymessage ? <div style={notifyStyle}>{notifymessage}</div> : null }
        </div>
    );
   
}

export default Notification