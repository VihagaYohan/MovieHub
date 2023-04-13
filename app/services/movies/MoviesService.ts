// constants
import {UTILS} from '../../constants';

// models
import {Response,MovieResponse,ErrorResponse} from '../../models';

// API
import App from '../../api/api';

// endpoints
import Endpoints from '../../api/endpoints';

// get list of top rated movies
export const getTopMovies = async (page: number = 1) => {
  try {
    let url: string = `${Endpoints.movieList}?page=${page}`;

    let response = await App.get<any>(url);
    if(response.status == 200){
      return new Response(
        true,
        200,
        new MovieResponse(
          response.data.page,
          response.data.results,
          response.data.total_pages,
          response.data.total_results
        )
      )
    }else{
     console.log(response)
    }
  } catch (e: any) {
    UTILS.showConsole(e);
  }
};


