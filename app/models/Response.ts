class Response {
    constructor(
        public isSuccess:boolean,
        public statusCode:number,
        public result:any,
        public message?:string
    ){

    }
}

export default Response