class ErrorResponse {
    constructor(
        public isSuccess:boolean,
        public statusCode:number,
        public message?:string,
        public data?:any,
    ){

    }
}

export default ErrorResponse