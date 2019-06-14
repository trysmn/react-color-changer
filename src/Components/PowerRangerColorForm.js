import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

class PowerRangerColorForm extends React.Component {
    render() {
        return (
          <Form error>
            <Form.Input label='Choose your Power Ranger color:' placeholder="Who's your favourite Power Ranger" onChange={this.props.handleColorChange}/>
            <Button>Submit</Button>
          </Form>
        );
    }
}

export default PowerRangerColorForm;

