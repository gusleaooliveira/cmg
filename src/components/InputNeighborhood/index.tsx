import { useEffect, useState } from "react"
import { IProps } from "./index.types"
import { Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { ADD_NEIGHBORHOODS, RootState } from "../../store"
import { createNeighborhoods, getNeighborhoods } from "../../services"

const InputNeighborhood: React.FC<IProps> = ({
    value, onChange, options, estado
}) => {
    const { token, neighborhoods } = useSelector((state: RootState) => state.clickState)
    const dispatch = useDispatch()

    const [valor, setValor ] = useState(value)
    const [isNeighborhood, setIsNeighborhood] = useState(false)

    useEffect(()=>{
        getNeighborhoods(token).then((resp)=>{ dispatch({type: ADD_NEIGHBORHOODS, neighborhoods: resp }) })
    }, [])

    function isInNeighborhood(valor: any){
        neighborhoods.forEach((chave) => {
            if(chave.name === valor){
                onChange(chave.id)
                console.log(chave.id)
                setIsNeighborhood(true)
            }
        })
        if(isNeighborhood === true){
            console.log('achei o bairro')
        }
        else{
            createNeighborhoods(token, {
                name: valor
            })
                .then((respI: any)=>{
                    
                    getNeighborhoods(token)
                        .then((resp)=>{
                            dispatch({type: ADD_NEIGHBORHOODS, neighborhoods: resp})
                        })
                    onChange(respI.id)
                    console.log('cadastrado')
                })
        }
    }

    return (
        <>
            <Form.Control 
                value={valor}
                onChange={(e)=>{
                    setValor(e.target.value)
                }}
                onBlur={(e)=>{
                    isInNeighborhood(e.target.value)
                }}
                list="list"
            />

            <datalist id="list">
                {options.map((chave, valor)=> {
                    return <option value={chave.name}>{chave.name}</option>
                })}
            </datalist>
        </>
    )
}

export default InputNeighborhood