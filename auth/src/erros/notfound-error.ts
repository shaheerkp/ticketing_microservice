import { CustomError } from "./custum-error";


export class NotFoundError extends CustomError{
    statusCode=404;
    constructor(){
        super("not found ");
        Object.setPrototypeOf(this,NotFoundError.prototype)

    }
    serializeErrors(){
        return [{message:"Not found"}]
    }
        
    

}