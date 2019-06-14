import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class PowerRangerColorForm extends React.Component {
    render() {
        return (
          <Form onSubmit={this.props.handleSubmit}>
            <Form.Field>
                <label>Choose your Power Ranger color:</label>
                <input placeholder="Who's your favourite Power Ranger" onChange={this.props.handleChange}/>
            </Form.Field>
            <Button>Submit</Button>
          </Form>
        );
    }
}

export default PowerRangerColorForm;

