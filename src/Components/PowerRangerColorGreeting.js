import React from 'react';

class PowerRangerColorGreeting extends React.Component {
    render() {
        if (this.props.color === "red" || this.props.color === "black") {
            return (
                <div>
                    <h2>You've chosen the {this.props.color} Power Ranger! See your colour below!</h2>
                </div>
            )
        } else {
            return (<h2>This is not a valid color!</h2>)
        }
    }
}

export default PowerRangerColorGreeting;