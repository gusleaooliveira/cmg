import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { Button, Form, Modal } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { editRegions, getRegions } from '../../../../services'
import { ADD_REGIONS, RootState } from '../../../../store'
import { InterfaceProps } from "../Create/index.types"

const ModalEditar: React.FC<InterfaceProps> = ({ isModal, onHide }) => {
    const { regions, token } = useSelector((state: RootState) => state.clickState)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            'id': '',
            'region': '',
            'state': '',
            'enabled': false
        }
    })

    const onSubmit = (dados: any) => {
        console.log(dados)

        let resp = editRegions(token, dados.id, dados)
        resp.then((resp) => {
            let resposta = getRegions(token)
            resposta.then((respostaStates)=> {
                dispatch({type: ADD_REGIONS, regions: respostaStates})
                onHide()
            })
        })
    }

    useEffect(()=>{
        let resp = getRegions(token)
        resp.then((resp) =>  {
            dispatch({type: ADD_REGIONS, regions: resp})
        })
    }, [])

    return (
        <Modal
            show={isModal}
            onHide={onHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                Editar Região
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Região:</Form.Label>
                        <Form.Select {...register('id')}>
                            {regions.map((chave, valor) => {
                                return <option value={chave.id}>{chave.region+'|'+chave.state}</option>
                            })}
                        </Form.Select>
                        {errors.id && <p style={{color: 'red'}}> Selecione o Região a ser apagado</p>}
                     </Form.Group>

                     <Form.Group>
                        <Form.Label>Nome da Região</Form.Label>
                        <Form.Control  
                            type="text" 
                            placeholder="Digite o nome da Região"
                            {...register('region', {required: true})}
                        />
                        {errors.region && <p style={{color: 'red'}}> Digite o nome da Região</p>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Estado</Form.Label>
                        <Form.Control  
                            type="text" 
                            placeholder="Digite a estado"
                            {...register('state', {required: true})}
                        />
                        {errors.state && <p style={{color: 'red'}}> Digite a estado</p>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ativado</Form.Label>
                        <Form.Check  
                            type="switch" 
                            label="Ativo"
                            {...register('enabled' )}
                        />
                        {/* {errors.enabled && <p style={{color: 'red'}}> Digite a Ativado</p>} */}
                    </Form.Group>
                    
                    <br/>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Button variant="outline-danger" onClick={onHide}>
                            Cancelar
                        </Button>
                        <Button type="submit">
                            Finalizar
                        </Button>
                    </div>
                </Form>

            </Modal.Body>
        </Modal>
    )
}

export default ModalEditar