import React, { useState } from 'react'
import { Stack, Form, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

function ButtonToggle(props) {
    const radios = [
        { value: '1' }, // enabled
        { value: '0' }, // disabled
    ];

    let initialState = null
    { props.enabled ? initialState = 1 : initialState = 0 }

    const [radioValue, setRadioValue] = useState(initialState);

    return (
        <>
            <Stack>
                <Form.Label>{props.title}</Form.Label>
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${props.name}-${idx}`}
                            type="radio"
                            variant={idx == 0 ? 'outline-success' : 'outline-danger'}
                            name={`radio-${props.name}`}
                            value={radio.value}
                            checked={radioValue == radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.value == 0 ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faCheck} />}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </Stack>
        </>
    )
}

export default ButtonToggle