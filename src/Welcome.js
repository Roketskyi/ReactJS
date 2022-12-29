import React from "react";

function WelcomeF(props) {
    return (
    <p>Hi! {props.user.firstName} {props.user.lastName}.</p>
)}

const names = [
    { firstName: 'Dima', lastName: 'Sova' },
    { firstName: 'Danya', lastName: 'Ivanov' },
    { firstName: 'Misha', lastName: 'Byrych' }
]

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <WelcomeF user={names[0]}/>
                <WelcomeF user={names[1]}/>
                <WelcomeF user={names[2]}/>
            </div>
        )
    }
}

export default Welcome;