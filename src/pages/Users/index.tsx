import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ModalCriar from './Modals/Create'

const Users: React.FC = ({ children }) => {
    const [ isModalCriar, setIsModalCriar ]  = useState(false)

    return (
        <>
            <Row>
                <Col >
                    <Container fluid>

                        <Button variant="warning" onClick={()=>setIsModalCriar(true)}>
                            Adicinar usuário
                        </Button>

                        <ModalCriar 
                            isModal={isModalCriar}
                            onHide={()=>setIsModalCriar(false)}
                        />
                    </Container>
                </Col>
            </Row>
        </>
    )
} 

export default Users