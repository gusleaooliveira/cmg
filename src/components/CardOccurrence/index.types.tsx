export interface IProps {
    id?: number,
    user?: string,
    date?: string,
    address?: string,
    civiliansWounded?: number,
    civiliansDead?: number,
    agentDead?: number,
    agentWounded?: number,
    description?: string,
    reprove?: () => void;
    aprove?: () => void;
}