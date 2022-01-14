import { IProps } from "./indes.types"
import { Formik } from 'formik'
import { Modal } from "react-bootstrap"
import * as Yup from 'yup'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../store"
import { createCities, getByState, getCities, getState, getStates, getStatesById } from "../../../../services"


const ModalCriar : React.FC<IProps> = ({
    isModal, onHide
}) =>{
    const { occurrences, token, states, regions, cities, sources, reasons, clippings, transports } = useSelector((state: RootState) => state.clickState)

    const [cidades, setCidades] = useState<any>([])
    const [idCidade, setIdCidade] = useState('')
    const [idEstado, setIdEstado] = useState('')
    
    let [ latitudeCoord, setLatitudeCoord ] = useState(0)
    let [ longitudeCoord, setLongitudeCoord ] = useState(0)

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitudeCoord(position.coords.latitude)
            setLongitudeCoord(position.coords.longitude)
        })  
        console.log(
            {
                'lat': latitudeCoord,
                'lng': longitudeCoord
            }
        )
    }, [setLatitudeCoord, setLongitudeCoord, latitudeCoord, longitudeCoord])


    const schemaOccurrence = Yup.object().shape({
        address: Yup.string().required('Campo  é obrigatório'),
        state_s: Yup.string().required('Campo  é obrigatório'),
        city_s: Yup.string().required('Campo  é obrigatório'),
        country: Yup.string().required('Campo  é obrigatório'),
        neighborhood: Yup.string().required('Campo  é obrigatório'),
        date: Yup.string().required('Campo  é obrigatório'),
        source_s: Yup.string().required('Campo  é obrigatório'),
        police_action: Yup.string().required('Campo  é obrigatório'),
        agent_presence: Yup.string().required('Campo  é obrigatório'),
        main_reason: Yup.string().required('Campo  é obrigatório'),
        massacre: Yup.string().required('Campo  é obrigatório'),
        clippings: Yup.array().required('Campo  é obrigatório'),
        interrupted_transport: Yup.string().required('Campo  é obrigatório'),
    })
    

    function getCidades(state: string){
        getStates(token)
            .then((resp)=>{
                resp.forEach((chave: any, valor: any)=>{
                    if(chave.name == state){
                        setIdEstado(chave.id)
                    }
                })
            })
        getState()
            .then((resp)=>{
                resp.data.forEach((chave: any, valor: any) => {
                    if(chave.nome == state){
                        getByState(chave.sigla)
                            .then((resp)=>{
                                setCidades(resp)
                            })
                    }
                })
            })
    }

    function getCidade(city: string){
        getCities(token)
            .then((resp)=>{
                resp.forEach((chave: any, valor: any)=>{
                    if(chave.name == city){
                        setIdCidade(chave.id)
                    }
                })
                console.log(idCidade, 'id')
                if(idCidade == ''){
                    createCities(token, {
                        name: city
                    })
                        .then((resp)=>{
                            setIdCidade(resp.id)
                            console.log('cidade cadastrada')
                        })
                }
            })
    }

    return (
        <Modal
            show={isModal}
            onHide={onHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            fullscreen
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={
                        {
                            address: "",
                            country: "",
                            state: "",
                            state_s: "",
                            city: "",
                            city_s: "",
                            neighborhood: "",
                            latitude: latitudeCoord,
                            longitude: longitudeCoord,
                            date: "",
                            agent_presence: 'true',
                            police_action: 'true',
                            number_civilians_dead: 0,
                            number_civilians_wounded: 0,
                            number_agent_dead: 0,
                            number_agent_wounded: 0,
                            description: "",
                            source: "",
                            source_s: "",
                            related_record: "",
                            region: "",
                            main_reason: "",
                            main_reason_s: "",
                            complementary_reasons: [
                              ""
                            ],
                            massacre: 'true',
                            police_unit: "",
                            interrupted_transport: 'true',
                            related_news: "",
                            clippings: [
                                ""
                            ],
                            observations: "",
                            transports: [
                                ""
                            ],
                            date_interruption: "",
                            release_date: "",
                            transport_description: "",
                            status: "Waiting"
                          }
                    }
                    onSubmit={(dados: any)=>{
                        alert('cheguei')
                    }}
                    validationSchema={schemaOccurrence}
                >
                    {({
                       handleBlur,
                       handleChange,
                       handleSubmit,
                       values,
                       touched,
                       errors,
                       isValid, 
                       setFieldValue
                    })=>(
                        <form onSubmit={handleSubmit}>  

                            <div>
                                <button
                                    onClick={()=>{
                                        console.log(values)
                                        console.log(errors)
                                    }}
                                    >
                                    Cadastrar
                                </button>
                                
                            </div>

                            <div>
                                <label htmlFor="address">Local*</label>
                                <input 
                                    type="text"
                                    name="address"
                                    onChange={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    value={values.address}
                                />  
                                {(errors.address && touched.address) &&
                                <p>{errors.address}</p>}
                            </div>

                            <div>
                                <label htmlFor="country">País*</label>
                                <input 
                                    name="country"
                                    type="text"
                                    onChange={handleChange('country')}
                                    onBlur={handleBlur('country')}
                                    value={values.country}
                                />  
                                {(errors.country && touched.country) &&
                                <p>{errors.country}</p>}
                            </div>
                                
                            <div>
                                <label htmlFor="state_s">Estado*</label>
                                <select
                                    name="state_s"
                                    onChange={(e: any)=>{
                                        console.log(e.target.value)
                                        setFieldValue('state_s', e.target.value)
                                        getCidades(e.target.value)
                                    }}
                                    onBlur={handleBlur('state_s')}
                                    value={values.state_s}
                                >
                                    {regions.map((chave, valor) => {
                                        if(chave.enabled == true){
                                            return <option value={chave.state}>{chave.state}</option>
                                        }
                                    })}
                                </select>
                                {(errors.state_s && touched.state_s) &&
                                <p>{errors.state_s}</p>}
                            </div>
                           
                            
                            <div>
                                <label htmlFor="city_s">Cidade*</label>
                                <select
                                    name="city_s"
                                    onChange={(e: any)=>{
                                        console.log(e.target.value)
                                        setFieldValue('city_s', e.target.value)
                                        getCidade(e.target.value)
                                    }}
                                    onBlur={handleBlur('city_s')}
                                    value={values.city_s}
                                    >
                                    {cidades.map((chave: any, valor: any) => {
                                        return <option value={chave.nome}>{chave.nome}</option>
                                    })}
                                </select>
                                {(errors.city_s && touched.city_s) &&
                                <p>{errors.city_s}</p>}
                            </div>

                            
                            <div>
                                <label htmlFor="neighborhood">Bairro*</label>
                                <input 
                                    name="neighborhood"
                                    type="text"
                                    onChange={handleChange('neighborhood')}
                                    onBlur={handleBlur('neighborhood')}
                                    value={values.neighborhood}
                                />  
                                {(errors.neighborhood && touched.neighborhood) &&
                                <p>{errors.neighborhood}</p>}
                            </div>
                            
                            <div>
                                <label htmlFor="date">Data da ocorrência*</label>
                                <input
                                    type="datetime-local"
                                    name="date"
                                    onChange={handleChange('date')}
                                    onBlur={handleBlur('date')}
                                    value={values.date}
                                />
                                {(errors.date && touched.date) &&
                                <p>{errors.date}</p>}
                            </div>

                            <div>
                                <label htmlFor="source_s">Fonte de registro*</label>
                                <select
                                    name="source_s"
                                    onChange={(e: any)=>{
                                        console.log(e.target.value, e.currentTarget.selectedOptions[0].label)
                                        setFieldValue('source_s', e.currentTarget.selectedOptions[0].label)
                                        setFieldValue('source_s', e.target.value)
                                    }}
                                    onBlur={handleBlur('source_s')}
                                    value={values.source_s}
                                    >
                                    {sources.map((chave: any, valor: any) => {
                                        return <option value={chave.id}>{chave.name}</option>
                                    })}
                                </select>
                                {(errors.source_s && touched.source_s) &&
                                <p>{errors.source_s}</p>}
                            </div>


                            <div>
                                <label htmlFor="description">Descrição da ocorrência</label>
                                <textarea
                                    name="description"
                                    onChange={handleChange('description')}
                                    onBlur={handleBlur('description')}
                                    value={values.description}
                                ></textarea>
                                {(errors.description && touched.description) &&
                                <p>{errors.description}</p>}
                            </div>

                            <div>
                                <label htmlFor="related_record">Registro relacionado</label>
                                <textarea
                                    name="related_record"
                                    onChange={handleChange('related_record')}
                                    onBlur={handleBlur('related_record')}
                                    value={values.related_record}
                                ></textarea>
                                {(errors.related_record && touched.related_record) &&
                                <p>{errors.related_record}</p>}
                            </div>
                            
                            <div>
                                <label htmlFor="police_action">Houve ação policial*</label>
                                <label>
                                    <input
                                        type="radio"
                                        name="police_action"
                                        value="true"
                                        onChange={()=> {
                                            setFieldValue('police_action', 'true')
                                            setFieldValue('agent_presence', 'true')
                                        }}
                                        checked={values.police_action == 'true'}
                                    />
                                    Sim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="police_action"
                                        value="false"
                                        onChange={()=> {
                                            setFieldValue('police_action', 'false')
                                            setFieldValue('agent_presence', 'false')
                                        }}
                                        checked={values.police_action == 'false'}
                                    />
                                    Não
                                </label>
                                {(errors.police_action && touched.police_action) &&
                                <p>{errors.police_action}</p>}
                            </div>

                            <div>                            
                                <label htmlFor="agent_presence">Presença de agentes*</label>
                                <label>
                                    <input
                                        type="radio"
                                        name="agent_presence"
                                        value="true"
                                        onChange={()=> {
                                            setFieldValue('police_action', 'true')
                                            setFieldValue('agent_presence', 'true')
                                        }}
                                        checked={values.agent_presence == 'true'}
                                    />
                                    Sim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="agent_presence"
                                        value="false"
                                        onChange={()=> {
                                            setFieldValue('police_action', 'false')
                                            setFieldValue('agent_presence', 'false')
                                        }}
                                        checked={values.agent_presence == 'false'}
                                    />
                                    Não
                                </label>
                                {(errors.agent_presence && touched.agent_presence) &&
                                <p>{errors.agent_presence}</p>}
                            </div>

                            <div>
                                <label htmlFor="main_reason_s">Motivo principal*</label>
                                <select
                                    name="main_reason_s"
                                    onChange={(e: any)=>{
                                        console.log(e.target.value, e.currentTarget.selectedOptions[0].label)
                                        setFieldValue('main_reason_s', e.currentTarget.selectedOptions[0].label)
                                        setFieldValue('main_reason', e.target.value)
                                    }}
                                    onBlur={handleBlur('main_reason_s')}
                                    value={values.main_reason}
                                    >
                                    {reasons.map((chave: any, valor: any) => {
                                        return <option value={chave.id}>{chave.name}</option>
                                    })}
                                </select>
                                {(errors.main_reason_s && touched.main_reason_s) &&
                                <p>{errors.main_reason_s}</p>}
                            </div>

                            <div >
                                <label htmlFor="complementary_reasons">Motivos complementares</label>
                                <select
                                    name="complementary_reasons"
                                    onChange={handleChange('complementary_reasons')}
                                    value={values.complementary_reasons}
                                    multiple
                                    disabled={values.interrupted_transport == 'false'}
                                    >
                                    {reasons.map(chave => {
                                        return <option value={chave.id}>{chave.name}</option>
                                    })}
                                </select>
                                {(errors.complementary_reasons && touched.complementary_reasons) &&
                                <p>{errors.complementary_reasons}</p>}
                            </div>

                            <div>                            
                                <label htmlFor="massacre">Chacina*</label>
                                <label>
                                    <input
                                        type="radio"
                                        name="massacre"
                                        value="true"
                                        onChange={()=> {
                                            setFieldValue('massacre', 'true')
                                        }}
                                        checked={values.massacre == 'true'}
                                    />
                                    Sim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="massacre"
                                        value="false"
                                        onChange={()=> {
                                            setFieldValue('massacre', 'false')
                                        }}
                                        checked={values.massacre == 'false'}
                                    />
                                    Não
                                </label>
                                {(errors.massacre && touched.massacre) &&
                                <p>{errors.massacre}</p>}
                            </div>

                            <div>
                                <label htmlFor="police_unit">Unidades policiais presentes</label>
                                <input 
                                    name="police_unit"
                                    type="text"
                                    onChange={handleChange('police_unit')}
                                    onBlur={handleBlur('police_unit')}
                                    value={values.police_unit}
                                />  
                                {(errors.police_unit && touched.police_unit) &&
                                <p>{errors.police_unit}</p>}
                            </div>


                            <div>
                                <label htmlFor="related_news">Links de notícias relacionadas</label>
                                <textarea
                                    name="related_news"
                                    onChange={handleChange('related_news')}
                                    onBlur={handleBlur('related_news')}
                                    value={values.related_news}
                                ></textarea>
                                {(errors.related_news && touched.related_news) &&
                                <p>{errors.related_news}</p>}
                            </div>


                            <div>
                                <label htmlFor="clippings">outros recortes*</label>
                                <select
                                    name="clippings"
                                    onChange={handleChange('clippings')}
                                    onBlur={handleBlur('clippings')}
                                    value={values.clippings}
                                    multiple
                                    >
                                    {clippings.map(chave => {
                                        return <option value={chave.id}>{chave.name}</option>
                                    })}
                                </select>
                                {(errors.clippings && touched.clippings) &&
                                <p>{errors.clippings}</p>}
                            </div>
                            
                            <div>
                                <label htmlFor="observations">Observação</label>
                                <textarea
                                    name="observations"
                                    onChange={handleChange('observations')}
                                    onBlur={handleBlur('observations')}
                                    value={values.observations}
                                ></textarea>
                                {(errors.observations && touched.observations) &&
                                <p>{errors.observations}</p>}
                            </div>

                            <div>                            
                                <label htmlFor="interrupted_transport">O transporte foi interrompido?*</label>
                                <label>
                                    <input
                                        type="radio"
                                        name="interrupted_transport"
                                        value="true"
                                        onChange={()=> {
                                            setFieldValue('interrupted_transport', 'true')
                                        }}
                                        checked={values.interrupted_transport == 'true'}
                                    />
                                    Sim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="interrupted_transport"
                                        value="false"
                                        onChange={()=> {
                                            setFieldValue('interrupted_transport', 'false')
                                            setFieldValue('transports', [''])
                                            setFieldValue('date_interruption', '')
                                            setFieldValue('release_date', '')
                                            setFieldValue('transport_description', '')
                                            
                                            
                                        }}
                                        checked={values.interrupted_transport == 'false'}
                                    />
                                    Não
                                </label>
                                {(errors.interrupted_transport && touched.interrupted_transport) &&
                                <p>{errors.interrupted_transport}</p>}
                            </div>

                            
                            <div >
                                <label htmlFor="transports">tipo de transporte</label>
                                <select
                                    name="transports"
                                    onChange={handleChange('transports')}
                                    value={values.transports}
                                    multiple
                                    disabled={values.interrupted_transport == 'false'}
                                    >
                                    {transports.map(chave => {
                                        return <option value={chave.id}>{chave.name}</option>
                                    })}
                                </select>
                                {(errors.transports && touched.transports) &&
                                <p>{errors.transports}</p>}
                            </div>


                            <div>
                                <label htmlFor="date_interruption">Data da interrupção</label>
                                <input
                                    type="datetime-local"
                                    name="date_interruption"
                                    onChange={handleChange('date_interruption')}
                                    onBlur={handleBlur('date_interruption')}
                                    value={values.date_interruption}
                                    disabled={values.interrupted_transport == 'false'}
                                />
                                {(errors.date_interruption && touched.date_interruption) &&
                                <p>{errors.date_interruption}</p>}
                            </div>

                            <div>
                                <label htmlFor="release_date">Data da interrupção</label>
                                <input
                                    type="datetime-local"
                                    name="release_date"
                                    onChange={handleChange('release_date')}
                                    onBlur={handleBlur('release_date')}
                                    value={values.release_date}
                                    disabled={values.interrupted_transport == 'false'}
                                />
                                {(errors.release_date && touched.release_date) &&
                                <p>{errors.release_date}</p>}
                            </div>

                            <div>
                                <label htmlFor="transport_description">Descrição do transporte</label>
                                <textarea
                                    name="transport_description"
                                    onChange={handleChange('transport_description')}
                                    onBlur={handleBlur('transport_description')}
                                    value={values.transport_description}
                                    disabled={values.interrupted_transport == 'false'}
                                ></textarea>
                                {(errors.transport_description && touched.transport_description) &&
                                <p>{errors.transport_description}</p>}
                            </div>

                        </form>
                    )}
                </Formik> 
            </Modal.Body>
        </Modal>
    )
}

export default ModalCriar