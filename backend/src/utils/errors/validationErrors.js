import { StatusCodes } from "http-status-codes";

class validationErrors extends Error {
    constructor(errorDetails,message){
        super(message);
        this.name='validationErrors';
        let explanations = [];
        Object.keys(errorDetails.errors).forEach((key)=>{
            explanations.push(errorDetails.errors[key])
        })
        this.explanations=explanations;
        this.statusCode=StatusCodes.BAD_REQUEST;
        this.details=errorDetails;
        this.message=message;
    }
}
export default validationErrors;