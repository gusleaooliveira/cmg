import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { InterfaceProps } from "./index.types";
import Select from 'react-select'
import { useFormik } from 'formik'
import { RadioText } from '../../../../../components/index'
import { createOccurrences, createVictims, getAgeGroup, getAnimals, getCircumstances, getCities, getCitiesById, getClippings, getCoorporations, getGenres, getNeighborhoods, getPlaces, getPositions, getQualifications, getReasons, getRegions, getSourcers, getStates, getStatesById, getStatus, getTransports } from '../../../../../services'
import { ADD_AGE_GROUP, ADD_ANIMALS, ADD_CIRCUMSTANCES, ADD_CITIES, ADD_CLIPPINGS, ADD_COORPORATIONS, ADD_DESTROY_VICTIMS, ADD_GENRES, ADD_NEIGHBORHOODS, ADD_PLACES, ADD_POSITIONS, ADD_QUALIFICATIONS, ADD_REASONS, ADD_REGIONS, ADD_SOURCES, ADD_STATES, ADD_STATUS, ADD_TRANSPORTS, RootState } from '../../../../../store'



const Animais: React.FC<InterfaceProps>= ({
    idOcurrence, idVictim
})=> {
    
    const { token, animals, places, qualifications, age_group, genres, circumstances, status, positions, coorporations } = useSelector((state: RootState) => state.clickState)
    const dispatch = useDispatch()
    
 
    useEffect(()=>{
        getQualifications(token).then((resp) =>  { dispatch({type: ADD_QUALIFICATIONS, qualifications: resp}) })
        getStatus(token).then((resp) => { dispatch({type: ADD_STATUS, status: resp}) })
        getGenres(token).then((resp) => { dispatch({type: ADD_GENRES, genres: resp}) })
        getAgeGroup(token).then((resp) => { dispatch({type: ADD_AGE_GROUP, age_group: resp}) })
        getCircumstances(token).then((resp) => { dispatch({type: ADD_CIRCUMSTANCES, circumstances: resp}) })
        getPositions(token).then((resp) => { dispatch({type: ADD_POSITIONS, positions: resp}) })
        getCoorporations(token).then((resp) => { dispatch({type: ADD_COORPORATIONS, coorporations: resp}) })
        getPlaces(token).then((resp) => { dispatch({type: ADD_PLACES, places: resp}) })
        getAnimals(token).then((resp) => { dispatch({type: ADD_ANIMALS, animals: resp}) })

        console.log(idOcurrence)
    }, [idOcurrence])


    const formik = useFormik({
        initialValues: {
            occurrence: idOcurrence,
            type: "Animal",
            name: "",
            situation: 'Wounded',
            circumstances: [
                { id: "" }
            ],
            animal_type: ""
        },
        onSubmit: (dados: any) => {
            console.log(dados)

            createVictims(token, dados)
            .then((resp)=>{ 
                console.log(resp, 'executo')
            })
        }
    })
  

    const [ situation, setSituation ] =useState(false)
    const [ circunstances, setCircunstances] = useState([])

    return <>
        <Form onSubmit={formik.handleSubmit}>
            <Card 
                body
                style={{
                    backgroundColor: '#ccc',
                    marginTop: '20px',
                    marginBottom: '20px'                    
                }}

            >
                <Row>
                    <RadioText 
                        value={formik.values.situation}
                        label1="Ferido"
                        value1="Wounded"
                        label2="Morto"
                        value2="Dead"
                        color1="#FF9F43"
                        color2="#EA5455"
                        onChange={(e)=>{
                            formik.setFieldValue(
                                'situation',
                                e
                            )                                 
                        }}
                    />
                </Row>


            </Card>

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Tipo de animal</Form.Label>
                            <Form.Select
                                value={formik.values.animal_type}
                                onChange={(e)=>{ 
                                    formik.setFieldValue('animal_type', e.target.value)
                                }}
                            >
                                {animals.map((chave:any, valor:any) => {
                                    return <option value={chave.id}>{chave.type}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nome do animal</Form.Label>
                            <Form.Control  
                                type="text" 
                                placeholder=""
                                min={0}
                                id="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>                        
                    </Col>
                    <Col>
                            <Form.Group>
                                <Form.Label>Circunstâncias</Form.Label>
                                
                                <Select
                                    options={
                                        circumstances.map((chave:any, valor:any)=>{
                                            return {
                                                value: chave.id,
                                                label: chave.name
                                            }
                                        })
                                    } 
                                    isMulti
                                    onChange={(e: any)=>{
                                        console.log(e)
                                        let aux: any = []
                                        let aux2: any = []
                                        e.map((chave:any) =>{
                                            aux.push({ id: chave.value })
                                            aux2.push({ id:  chave.value })
                                        })
                                        setCircunstances(aux)
                                        formik.setFieldValue(
                                            'circumstances',
                                            [...aux2]
                                        )
                                    }}                          
                                />
                            </Form.Group>                        
                        </Col>
                    </Row>
            

            <Button type="submit" variant="warning">
                Salvar vítima
            </Button>

            
        </Form>
    </>
}

export default Animais