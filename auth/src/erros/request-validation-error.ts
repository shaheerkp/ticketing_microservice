import { ValidationError } from "express-validator";
import { CustomError } from "./custum-error";

export class RequestValidationError extends CustomError{
    statusCode=400
    constructor(public errors:ValidationError[]){
        super("invalid creditial");

        //because using a build in class
        Object.setPrototypeOf(this,RequestValidationError.prototype)

    }
    serializeErrors(){
        return this.errors.map(err=>{
            return {message:err.msg,field:err.param}
        })
    }


}