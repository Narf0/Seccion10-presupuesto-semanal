import React, {Fragment} from 'react';
import { revisarPresupuesto } from '../helpers';

const ControlPresupuesto = ({presupuesto, restante}) => (
    <Fragment>
        <div className="alert alert-rpimary">
            Presupuesto : $ {presupuesto}
        </div>
        <div className={revisarPresupuesto(presupuesto, restante)}>
            Restante : $ {restante}
        </div>
    </Fragment>

);

export default ControlPresupuesto;