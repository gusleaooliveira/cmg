import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../../store"
import * as Yup from 'yup'
import { Card, Col, Form, Row } from "react-bootstrap"
import { IProps } from "./intex.types"
import { Formik } from "formik"

const Animals: React.FC<IProps> = ({}) => {
    const { animals, circumstances } = useSelector((state: RootState) => state.clickState)

    const schemaAnimals = Yup.object().shape({

    })    

    return (
        <Formik
            initialValues={
                {
                    type: "Animal",
                    death_date: "",
                    situation: "Wounded",
                    animal_type: "",
                    name: "",
                    circumstances: [
                        ""
                    ]
                }
            }
            onSubmit={(dados: any)=>{

            }}
            validationSchema={schemaAnimals}
        >
            {({ handleBlur, handleChange, handleSubmit, values, touched, errors, isValid, setFieldValue  })=>(
                <Card body>
                    <Card body>
                        <Row>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    name="situation"
                                    value="Wounded"
                                    onChange={()=>{
                                        setFieldValue('situation', 'Wounded')
                                    }}
                                    checked={values.situation == "Wounded"}
                                    label="Ferido"
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    name="situation"
                                    value="Dead"
                                    onChange={()=>{
                                        setFieldValue('situation', 'Dead')
                                    }}
                                    checked={values.situation == "Dead"}
                                    label="Morto"
                                />
                            </Col>
                        </Row>
                    </Card>


                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Tipo de animal</Form.Label>
                                <Form.Select
                                    name="animal_type"
                                    onChange={(e: any)=>{
                                        setFieldValue('animal_type', e.target.value)
                                    }}
                                >
                                    {animals.map((chave: any, value: any)=>{
                                        return <option value={chave.id}>{chave.type}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control 
                                    name="name"
                                    onChange={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Circunstância</Form.Label>
                                <Form.Select
                                    name="circumstances"
                                    multiple
                                    onChange={handleChange('circumstances')}
                                    value={values.circumstances}
                                >
                                    {circumstances.map((chave: any, value: any) => {
                                        return <option value={chave.id}>{chave.name}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    {values.situation == 'Dead' &&
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Data da morte</Form.Label>
                                    <Form.Control 
                                        type="date"
                                        name="death_date"
                                        onChange={handleChange('death_date')}
                                        onBlur={handleBlur('death_date')}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>}


                        
                        
                </Card>
                )}
        </Formik>
    )
}

export default Animals