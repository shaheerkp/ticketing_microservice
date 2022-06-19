import { ValidationError } from "express-validator";
import { CustomError } from "./custum-error";


export class DatabaseConnectionError extends CustomError{
    statusCode=500
    reason="Error Connecting database"
    constructor(){
        super("Erron conn db");

        //because using a build in class
        Object.setPrototypeOf(this,DatabaseConnectionError.prototype)
         
    }
    serializeErrors(){
        return[
            {message:this.reason}
        ]
    }
}