import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import { IProps } from "./index.types"
import { useDispatch, useSelector } from "react-redux"
import { createCities, getByState, getCities, getState } from "../../services"
import { ADD_CITIES, RootState } from "../../store"


const InputCity: React.FC<IProps> = ({
    value, onChange, options, estado
}) => {
    const { token, cities } = useSelector((state: RootState) => state.clickState)
    const dispatch = useDispatch()

    const [valor, setValor ] = useState(value)

    useEffect(()=>{
        getCities(token).then((resp)=>{ dispatch({type: ADD_CITIES, cities: resp }) })
    }, [])


    const [opcoes, setOpcoes ] = useState([{ }])
    const [isCidades, setIsCidade] = useState(false)

    function isInCities(valor: any){
        cities.forEach((chave: any)=>{
            if(chave.name === valor){
                onChange(chave.id)
                console.log(chave.id)
                setIsCidade(true)
            }
        })

        if(isCidades === true){
            console.log('achei a cidade')
        }
        else {
            createCities(token, {
                name: valor 
            })
                .then((resp)=>{
                    console.log('Cadastrado')
                    getCities(token)
                        .then((resp)=>{
                            dispatch({type: ADD_CITIES, cities: resp})
                        })
                })
        }
        
    }

    useEffect(()=>{
        getState()
            .then((resp)=>{
                resp.data.forEach((chave: any) => {
                    if(chave.nome === estado){
                        getByState(chave.sigla)
                            .then((cidades)=>{
                                setOpcoes(cidades)
                            })
                    }
                })
            })
    }, [estado])

    return (
        <>
            <Form.Select 
                value={valor}
                onChange={(e)=>{
                    setValor(e.target.value)
                    isInCities(e.target.value)
                }}
            >
                {opcoes.map((chave: any, valor: any)=> {
                    return <option value={chave.nome}>{chave.nome}</option>
                })}
            </Form.Select>
        </>
    )
}

export default InputCity