export interface Cliente {
    "telefono": string; 
    "clave": number;
}


export interface Resultado{
    "ErrorMessage": string;
    "Success": boolean;
    "CodeStatus": number;
    "Result": string;
}

export interface Informacion{
    "telefono": number;
    "mensaje": string;
}