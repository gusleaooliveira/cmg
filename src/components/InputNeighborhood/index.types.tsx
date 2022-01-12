type List = {
    id: string
    name: string
}

export interface IProps {
    options: List[]
    value: string
    onChange: (e: any)=>void
    estado: string
}
