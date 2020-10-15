import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup' //verifica se erro é do tipo de validação

interface ValidationErrors{
    [key: string]: string[];
}

const errorHandler : ErrorRequestHandler = (error, request, response, next) => {
    console.error(error);


    if(error instanceof ValidationError){
        let errors: ValidationErrors ={};

        error.inner.forEach(err => {//retorna
            errors[err.path] = err.errors;
        })
        return response.status(400).json({message: 'Validation fails', errors});
    };

    


    return response.status(500).json({ message: 'Internal server error' });
    //será retornado status 500 com um json com mensagem 'internal server error'


};

export default errorHandler;