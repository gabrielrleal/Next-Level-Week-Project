import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//switch faz com que apenas uma rota seja exibida em tela
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';
function Routes(){ // exact comparação de igualdade, geralmente colocada na primeira rota "/" 

    return(        
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component= {Landing} /> 
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
                
                
            </Switch>   
        </BrowserRouter>
    );
}

export default Routes;