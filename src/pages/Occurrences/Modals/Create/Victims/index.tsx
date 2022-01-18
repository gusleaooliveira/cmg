import { Formik } from 'formik'
import React, { useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import { RootState } from '../../../../../store'
import { IProps } from './index.types'

const Victims: React.FC<IProps> = ({}) => {
    const { age_group, places, genres, qualifications  } = useSelector((state: RootState) => state.clickState)


    const schemaHomans = Yup.object().shape({
        situation: Yup.string().required('Campo  é obrigatório'),
        type_person: Yup.string().required('Campo  é obrigatório'),
        qualification:  Yup.array().required('Campo  é obrigatório'),
        circumstances: Yup.array().required('Campo  é obrigatório'),
    })



    const [ partidos, setPartidos ] = useState([
        {label: "PARTIDO PÁTRIA LIVRE", value:"PARTIDO PÁTRIA LIVRE" },
        {label: "CIDADANIA", value:"CIDADANIA" },
        {label: "PARTIDO POPULAR SOCIALISTA", value:"PARTIDO POPULAR SOCIALISTA" },
        {label: "PARTIDO DEMOCRÁTICO TRABALHISTA", value:"PARTIDO DEMOCRÁTICO TRABALHISTA" },
        {label: "PARTIDO REPUBLICANO DA ORDEM SOCIAL", value:"PARTIDO REPUBLICANO DA ORDEM SOCIAL" },
        {label: "PODEMOS", value:"PODEMOS" },
        {label: "PARTIDO TRABALHISTA CRISTÃO", value:"PARTIDO TRABALHISTA CRISTÃO" },
        {label: "AVANTE", value:"AVANTE" },
        {label: "PARTIDO SOCIAL LIBERAL", value:"PARTIDO SOCIAL LIBERAL" },
        {label: "PARTIDO SOCIAL DEMOCRATICO", value:"PARTIDO SOCIAL DEMOCRATICO" },
        {label: "SOLIDARIEDADE", value:"SOLIDARIEDADE" },
        {label: "PARTIDO TRABALHISTA BRASILEIRO", value:"PARTIDO TRABALHISTA BRASILEIRO" },
        {label: "PARTIDO SOCIAL DEMOCRATA CRISTÃO", value:"PARTIDO SOCIAL DEMOCRATA CRISTÃO" },
        {label: "PARTIDO COMUNISTA DO BRASIL", value:"PARTIDO COMUNISTA DO BRASIL" },
        {label: "UNIDADE POPULAR", value:"UNIDADE POPULAR" },
        {label: "PARTIDO TRABALHISTA DO BRASIL", value:"PARTIDO TRABALHISTA DO BRASIL" },
        {label: "REDE SUSTENTABILIDADE", value:"REDE SUSTENTABILIDADE" },
        {label: "PARTIDO SOCIAL CRISTÃO", value:"PARTIDO SOCIAL CRISTÃO" },
        {label: "PARTIDO DA CAUSA OPERARIA", value:"PARTIDO DA CAUSA OPERARIA" },
        {label: "PROGRESSISTAS", value:"PROGRESSISTAS" },
        {label: "DEMOCRACIA CRISTÃ", value:"DEMOCRACIA CRISTÃ" },
        {label: "PARTIDO PATRIA LIVRE", value:"PARTIDO PATRIA LIVRE" },
        {label: "PARTIDO SOCIALISTA DOS TRABALHADORES UNIFICADO", value:"PARTIDO SOCIALISTA DOS TRABALHADORES UNIFICADO" },
        {label: "PARTIDO COMUNISTA DO BRASIL", value:"PARTIDO COMUNISTA DO BRASIL" },
        {label: "PARTIDO TRABALHISTA CRISTAO", value:"PARTIDO TRABALHISTA CRISTAO" },
        {label: "PARTIDO PROGRESSISTA", value:"PARTIDO PROGRESSISTA" },
        {label: "PARTIDO DA MULHER BRASILEIRA", value:"PARTIDO DA MULHER BRASILEIRA" },
        {label: "MOVIMENTO DEMOCRÁTICO BRASILEIRO", value:"MOVIMENTO DEMOCRÁTICO BRASILEIRO" },
        {label: "PARTIDO SOCIALISTA BRASILEIRO", value:"PARTIDO SOCIALISTA BRASILEIRO" },
        {label: "PARTIDO DA REPÚBLICA", value:"PARTIDO DA REPÚBLICA" },
        {label: "PARTIDO DO MOVIMENTO DEMOCRATICO BRASILEIRO", value:"PARTIDO DO MOVIMENTO DEMOCRATICO BRASILEIRO" },
        {label: "PARTIDO ECOLÓGICO NACIONAL", value:"PARTIDO ECOLÓGICO NACIONAL" },
        {label: "PARTIDO REPUBLICANO PROGRESSISTA", value:"PARTIDO REPUBLICANO PROGRESSISTA" },
        {label: "PARTIDO ECOLÓGICO NACIONAL", value:"PARTIDO ECOLÓGICO NACIONAL" },
        {label: "PARTIDO LIBERAL", value:"PARTIDO LIBERAL" },
        {label: "PARTIDO NOVO", value:"PARTIDO NOVO" },
        {label: "PATRIOTA", alue:"PATRIOTA" },
        {label: "REPUBLICANOS", value:"REPUBLICANOS" },
        {label: "PARTIDO DO MOVIMENTO DEMOCRÁTICO BRASILEIRO", value:"PARTIDO DO MOVIMENTO DEMOCRÁTICO BRASILEIRO" },
        {label: "PARTIDO SOCIAL CRISTAO", value:"PARTIDO SOCIAL CRISTAO" },
        {label: "PARTIDO DA MOBILIZAÇÃO NACIONAL", value:"PARTIDO DA MOBILIZAÇÃO NACIONAL" },
        {label: "PARTIDO DA REPUBLICA", value:"PARTIDO DA REPUBLICA" },
        {label: "PARTIDO HUMANISTA DA SOLIDARIEDADE", value:"PARTIDO HUMANISTA DA SOLIDARIEDADE" },
        {label: "PARTIDO VERDE", value:"PARTIDO VERDE" },
        {label: "PARTIDO TRABALHISTA NACIONAL", value:"PARTIDO TRABALHISTA NACIONAL" },
        {label: "PARTIDO DEMOCRATICO TRABALHISTA", value:"PARTIDO DEMOCRATICO TRABALHISTA" },
        {label: "PARTIDO DA CAUSA OPERÁRIA", value:"PARTIDO DA CAUSA OPERÁRIA" },
        {label: "PARTIDO RENOVADOR TRABALHISTA BRASILEIRO", value:"PARTIDO RENOVADOR TRABALHISTA BRASILEIRO" },
        {label: "PARTIDO SOCIALISMO E LIBERDADE", value:"PARTIDO SOCIALISMO E LIBERDADE" },
        {label: "PARTIDO DA SOCIAL DEMOCRACIA BRASILEIRA", value:"PARTIDO DA SOCIAL DEMOCRACIA BRASILEIRA" },
        {label: "PARTIDO COMUNISTA BRASILEIRO", value:"PARTIDO COMUNISTA BRASILEIRO" },
        {label: "PARTIDO REPUBLICANO BRASILEIRO", value:"PARTIDO REPUBLICANO BRASILEIRO" },
        {label: "SOLIDARIEDADE", value:"SOLIDARIEDADE" },
        {label: "PARTIDO DA MOBILIZACAO NACIONAL", value:"PARTIDO DA MOBILIZACAO NACIONAL" },
        {label: "PARTIDO DOS TRABALHADORES", value:"PARTIDO DOS TRABALHADORES" },
        {label: "PARTIDO SOCIAL DEMOCRÁTICO", value:"PARTIDO SOCIAL DEMOCRÁTICO" },
        {label: "DEMOCRATAS", value:"DEMOCRATAS" },
        {label: "PARTIDO TRABALHISTA DO BRASIL", value:"PARTIDO TRABALHISTA DO BRASIL" },
        {label: "PARTIDO SOCIAL DEMOCRATA CRISTAO", value:"PARTIDO SOCIAL DEMOCRATA CRISTAO" }
    ])
    


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
                                    <Col>
                                            <Form.Group>
                                                <Form.Label>Qualificação</Form.Label>
                                                <Form.Select
                                                    name="qualifications"
                                                    multiple
                                                    onChange={handleChange('qualifications')}
                                                    value={values.qualifications}
                                                >
                                                    {qualifications.map((chave: any)=>{
                                                        return <option value={chave.name}>{chave.name}</option>
                                                    })}
                                                </Form.Select>
                                            </Form.Group>

                                            {console.log(values.qualifications)}
                                    </Col>
                                </Row>
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