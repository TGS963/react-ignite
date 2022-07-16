const initState = {
    popular : [],
    newgames : [],
    upcoming : [],
    searched : [],
    isLoading: true,
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {...state, 
                popular: action.payload.popular,
                newgames : action.payload.newgames,
                upcoming : action.payload.upcoming,
            }
        case 'LOADING_NOW':
            return {...state, 
                isLoading: true,
            }
        case 'CLEAR_SEARCHED':
            return {
                ...state,
                searched: [],
            }
        case 'FETCH_SEARCHED':
            return {...state, 
                searched: action.payload.searched,
            }
        default:
            return {...state}
    }
}

export default gamesReducer;