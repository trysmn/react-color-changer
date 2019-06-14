import React from 'react';
import { Image } from 'semantic-ui-react';

class PowerRangerColorBox extends React.Component {
    render() {
        if (this.props.color === "red") {
            return <Image src={require('../images/redfire.jpg')} />
        } else if (this.props.color === "black") {
            return <Image src={require('../images/coal.jpg')} />
        } else {
            return <h1>This image is not black or red</h1>
        }
    }
}

export default PowerRangerColorBox;