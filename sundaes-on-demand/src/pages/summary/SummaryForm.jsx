import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function SummaryForm() {
    const [tcChecked, setTcChecked] = useState(false)
    
    const popoverMessage = (
        <Popover id="popover-positioned-right" title="Popover right">
        no ice cream will actually be delivered
        </Popover>
    );

    const checkboxLabel =(
        <span>
            I agree to
            <OverlayTrigger trigger="hover" placement="right" overlay={popoverMessage}>
                 <span style={{color: 'blue'}}> Terms and Conditions</span>
            </OverlayTrigger>
        </span>
    )

    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    checked={tcChecked}
                    onChange={(e) => setTcChecked(e.target.checked)}
                    label={checkboxLabel}
                ></Form.Check>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!tcChecked}>
                Confirm order
            </Button>
        </Form>
    )
}