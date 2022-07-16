import axios from "axios";
import { populargamesurl, newgamesurl, upcominggamesurl, searchgameurl } from "../api";

export const loadgames = () => async (dispatch) => {
    dispatch({
        type: "LOADING_NOW"
    });
    const populardata = await axios.get(populargamesurl())
    const upcomingdata = await axios.get(upcominggamesurl())
    const newdata = await axios.get(newgamesurl())
    dispatch({
        type: 'FETCH_GAMES',
        payload:{
            popular: populardata.data.results,
            upcoming: upcomingdata.data.results,
            newgames: newdata.data.results,
        },
    })
}

export const fetchsearched = (game_name) => async (dispatch) => {
    const searchedgames = await axios.get(searchgameurl(game_name))
    dispatch({
        type: 'FETCH_SEARCHED',
        payload:{
            searched: searchedgames.data.results,
        },
    })
}