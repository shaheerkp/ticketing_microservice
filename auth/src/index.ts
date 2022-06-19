import express from "express"
import "express-async-errors"
const app=express();



import { signupRouter } from "./routes/signup";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { currentuserRouter } from "./routes/current-user";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./erros/notfound-error";



app.use(express.json({limit:'50mb'}));
 

app.use(signupRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(currentuserRouter)

app.all('*',async()=>{
    throw new NotFoundError
})

app.use(errorHandler)

app.listen(3000,()=>{
    console.log("Listening on 3000!!");
    
})

