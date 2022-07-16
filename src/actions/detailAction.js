import axios from "axios";
import { gamedetailsurl, gamescreenshotsurl } from "../api";

const loaddetail = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_NOW"
    });
    const detaildata = await axios.get(gamedetailsurl(id));
    const screenshotdata = await axios.get(gamescreenshotsurl(id));
    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detaildata.data,
            screen: screenshotdata.data,
        }
    })
}

export default loaddetail;