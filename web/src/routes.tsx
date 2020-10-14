import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//switch faz com que apenas uma rota seja exibida em tela
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes(){ // exact comparação de igualdade, geralmente colocada na primeira rota "/" 

    return(        
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component= {Landing} /> 
                <Route path="/app" component={OrphanagesMap} />
            </Switch>   
        </BrowserRouter>
    );
}

export default Routes;