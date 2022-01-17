import { Formik } from 'formik'
import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import { RootState } from '../../../../../store'
import { IProps } from './index.types'

const Victims: React.FC<IProps> = ({}) => {
    const { age_group, places, genres  } = useSelector((state: RootState) => state.clickState)


    const schemaHomans = Yup.object().shape({
        situation: Yup.string().required('Campo  é obrigatório'),
        type_person: Yup.string().required('Campo  é obrigatório'),
        qualification:  Yup.array().required('Campo  é obrigatório'),
        circumstances: Yup.array().required('Campo  é obrigatório'),
    })

    return (
            <Formik
                initialValues={
                    {
                        occurrence: "",
                        type: "Person",
                        situation: "Wounded",
                        type_person: "Civilian",
                        death_date: "",
                        name: "",
                        age: 0,
                        genre: "",
                        genre_s: "",
                        circumstances_s: "",
                        circumstances: [
                        ""
                        ],
                        place: "",
                        age_group: "",
                        age_group_s: "",
                        general_observation: "",
                        qualifications: [
                            ""
                        ],
                        service_status: "",
                        agent_status: "",
                        coorporation: "",
                        agent_position: "",
                        unit: "",
                        political_status: "",
                        political_position: "",
                        political_party: "",
                        political_observation: ""
                    }
                }
                onSubmit={(dados: any)=>{

                }}
                validationSchema={schemaHomans}
            >
                {({ handleBlur, handleChange, handleSubmit, values, touched, errors, isValid, setFieldValue })=>(
                    <form onSubmit={handleSubmit}>
                        <Card body>
                            <Card body>
                                <Form.Group>
                                    <label>
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
                                    </label>
                                    <label>
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
                                    </label>
                                </Form.Group>
                            </Card> 
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Nome:</Form.Label>
                                            <Form.Control 
                                                name="name"
                                                onChange={handleChange('name')}
                                                onBlur={handleBlur('name')}
                                            />
                                        </Form.Group>
                                    </Col>  
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Idade:</Form.Label>
                                            <Form.Control 
                                                name="age"
                                                onChange={handleChange('age')}
                                                onBlur={handleBlur('age')}
                                                type="number"
                                                min={0}
                                                max={120}
                                            />
                                        </Form.Group>
                                    </Col>    
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Faixa etária</Form.Label>
                                            <Form.Select
                                                name="age_group"
                                                onChange={(e: any)=>{
                                                    setFieldValue('age_group', e.target.value)
                                                }}
                                            >
                                                {age_group.map((chave: any, value: any)=> {
                                                    return <option value={chave.id}>{chave.name}</option>
                                                })}                                          
                                            </Form.Select>                                        
                                        </Form.Group>
                                    </Col>     
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Local</Form.Label>
                                            <Form.Select
                                                name="place"
                                                multiple
                                                onChange={handleChange('place')}
                                                value={values.place}
                                            >
                                                {places.map((chave: any, value: any)=>{
                                                    return <option value={chave.id}>{chave.name}</option>
                                                })}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>                         
                                </Row>
                                
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Gênero</Form.Label>
                                            <Form.Select
                                                name="genre"
                                                onChange={(e: any) => {
                                                    setFieldValue('genre', e.target.value)
                                                }}
                                            >
                                                {genres.map((chave: any, valor: any)=>{
                                                    return <option value={chave.id}>{chave.name}</option>  
                                                })}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Observações</Form.Label>
                                            <Form.Control 
                                                name="general_observation"
                                                onChange={handleChange('general_observation')}
                                                onBlur={handleBlur('general_observation')}
                                            />
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
                    </form>
                )}
            </Formik>
    )
}

export default Victims