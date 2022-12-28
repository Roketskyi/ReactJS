

function WelcomeF(props) {
    return (
    <p>Hello, {props.userName}!</p>
)}

function Welcome(props) {
    return (
    <div>
        <WelcomeF userName='Roman' />
        <WelcomeF userName='Dima' />
        <WelcomeF userName='Ivan' />
    </div>
)}

export default Welcome;