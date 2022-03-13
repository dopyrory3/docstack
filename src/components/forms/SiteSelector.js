import React, { useState } from 'react'
import { Container, Dropdown, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function SiteSelector() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <h6
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            <FontAwesomeIcon icon={faChevronDown} fixedWidth className='ms-1' />
        </h6>
    ));

    // forwardRef again here!
    // Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <FormControl
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );

    return (
        <>
            <Container className='d-flex align-items-center justify-content-between align-items-start'>
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        example.com
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                        <Dropdown.Item eventKey="1" active>example.com</Dropdown.Item>
                        <Dropdown.Item eventKey="2">example.dev</Dropdown.Item>
                        <Dropdown.Item eventKey="3">example.cloud</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <FontAwesomeIcon icon={faGears} />
            </Container>
            <hr className='w-100'></hr>
        </>
    )
}

export default SiteSelector