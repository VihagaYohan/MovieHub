// models
import {Movie} from '.'

class MovieListResult {
    constructor(
        public page:number,
        public results:Movie[],
        public total_pages:number,
        public total_results:number
    ){

    }
}

export default MovieListResult