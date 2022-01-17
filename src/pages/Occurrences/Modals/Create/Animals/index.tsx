import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../../store"
import * as Yup from 'yup'
import { Card } from "react-bootstrap"
import { IProps } from "./intex.types"

const Animals: React.FC<IProps> = ({}) => {
    const { animals } = useSelector((state: RootState) => state.clickState)

    const schemaAnimals = Yup.object().shape({

    })    

    return (
        <Card body>
            <Card body>

            </Card>
        </Card>
    )
}

export default Animals