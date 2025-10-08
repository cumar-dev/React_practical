const Notifications = ({unReadMessages})=> {
return (
    <>
    <div>
        <h1>Hello</h1>
        {
           unReadMessages.length > 0 && (
            <p>You have {unReadMessages.length} unReadMessages</p>
           )
        }
    </div>
    </>
)
}
export default Notifications;