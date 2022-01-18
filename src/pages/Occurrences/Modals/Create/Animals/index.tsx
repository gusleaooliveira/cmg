import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADD_ANIMALS_LIST, ADD_VICTMS_LIST, RootState } from "../../../../../store"
import * as Yup from 'yup'
import { Button, Card, Col, Form, Row } from "react-bootstrap"
import { IProps } from "./intex.types"
import { Formik } from "formik"
import { listenerCount } from "process"

const Animals: React.FC<IProps> = ({}) => {
    const { animals, circumstances, animalsList } = useSelector((state: RootState) => state.clickState)
    
    const dispatch = useDispatch()

    const schemaAnimals = Yup.object().shape({
        situation: Yup.string().required('Campo  é obrigatório'),
        animal_type: Yup.string().required('Campo  é obrigatório'),
        name: Yup.string().required('Campo  é obrigatório'),
        circumstances: Yup.array().required('Campo  é obrigatório'),
    })    

    const referencia = useRef<any>()
   
    

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
                console.log('===================================')

                if(dados.situation == 'Wounded'){
                    console.log('Ferido')

                    let lista: any[] = []
                    dados.circumstances.forEach((id: any)=>{
                        lista.push({ id: id })
                    })
                    
                    let aux = {
                        type: dados.type,
                        situation: dados.situation,
                        animal_type: dados.animal_type,
                        name: dados.name,
                        circumstances: lista
                    }

                    let temp = [...animalsList]
                        temp.push(aux)

                    dispatch({
                        type: ADD_ANIMALS_LIST,
                        victimsList: temp
                    })
                }
                else if(dados.situation == 'Dead'){
                    console.log('Morto')

                    let lista: any[] = []
                    dados.circumstances.forEach((id: any)=>{
                        lista.push({ id: id })
                    })
                    
                    let aux = {
                        type: dados.type,
                        situation: dados.situation,
                        animal_type: dados.animal_type,
                        name: dados.name,
                        circumstances: lista,
                        death_date: dados.death_date
                    }

                    let temp = [...animalsList]
                        temp.push(aux)

                    dispatch({
                        type: ADD_ANIMALS_LIST,
                        victimsList: temp
                    })
                    
                }
                
                console.log('===================================')
            }}
            validationSchema={schemaAnimals}
        >
            {({ handleBlur, handleChange, handleSubmit, values, touched, errors, isValid, setFieldValue  })=>(
                <Form onSubmit={handleSubmit}>  
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
                                            onBlur={()=>{
                                                handleBlur('circumstances')
                                                referencia.current.click()
                                            }}
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
                                                type="datetime-local"
                                                name="death_date"
                                                onChange={handleChange('death_date')}
                                                onBlur={()=>{
                                                    handleBlur('death_date')
                                                    referencia.current.click()
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>}

                        <Button
                            type="submit"
                            ref={referencia}
                            style={{display: 'none'}}
                        >
                            Ok
                        </Button>
                                
                        </Card>
                    </Form>
                )}
        </Formik>
    )
}

export default Animals