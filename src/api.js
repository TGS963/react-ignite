//Base URL
const base_url = "https://api.rawg.io/api/"

const getmonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10){
        return `0${month}`;
    }
    else{
        return month;
    }
}

const getday = () => {
    const day = new Date().getDate();
    if (day < 10){
        return `0${day}`;
    }
    else{
        return day;
    }
}

const key = process.env.REACT_APP_API_KEY;

const currentyear = new Date().getFullYear();
const currentmonth = getmonth();
const currentday = getday();

const currentdate = `${currentyear}-${currentmonth}-${currentday}`;

const lastyear = `${currentyear - 1}-${currentmonth}-${currentday}`;
const nextyear = `${currentyear + 1}-${currentmonth}-${currentday}`;

const populargames = `games?key=${key}&dates=${lastyear},${currentdate}&ordering=-rating&page_size=10`
const upcominggames = `games?key=${key}&dates=${currentdate},${nextyear}&ordering=-added&page_size=10`
const newgames = `games?key=${key}&dates=${lastyear},${currentdate}&ordering=-released&page_size=10`

export const populargamesurl = () => `${base_url}${populargames}`
export const upcominggamesurl = () => `${base_url}${upcominggames}`
export const newgamesurl = () => `${base_url}${newgames}`

//console.log(populargamesurl())
//game details
export const gamedetailsurl = (game_id) => `${base_url}games/${game_id}?key=${key}`
//game screenshots
export const gamescreenshotsurl = (game_id) => `${base_url}games/${game_id}/screenshots?key=${key}`
//searchedgame
export const searchgameurl = (game_name) => `${base_url}games?search=${game_name}&page_size=9&key=${key}`