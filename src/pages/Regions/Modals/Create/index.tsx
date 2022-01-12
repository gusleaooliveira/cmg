import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { Button, Form, Modal } from "react-bootstrap"
import { InterfaceProps } from './index.types'
import { useForm } from 'react-hook-form'
import InputMask from "react-input-mask"
import { useDispatch, useSelector } from "react-redux"
import { ADD_REGIONS, RootState } from '../../../../store'
import { createRegions, getRegions } from '../../../../services'

const ModalCriar: React.FC<InterfaceProps> = ({ isModal, onHide }) => {
    const { token } = useSelector((state: RootState) => state.clickState)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            'region': '',
            'state': '',
            'enabled': false
        }
    })

    const onSubmit = (dados: any) => {  
        console.warn(dados)
        let resp = createRegions(token, dados)
            resp.then((resp)=>{
                onHide()
                let respStates = getRegions(token)
                    respStates.then((resposta) =>  {
                        dispatch({type: ADD_REGIONS, regions: resposta})
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
                Adicionar Região
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                            {...register('enabled')}
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

export default ModalCriar