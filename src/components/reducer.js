export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token : 'BQAULQNGRyc1iesYGIPaD_4pfS7yJSFpM1tr25thrG_b3OIrVdQpDdy3XAefRx9JFpQNe6VWhcuSsSSPFu6a9L9vqWxJYrzmAs3gPiHJwO2mtyMVUtDWdKgG_8h9Wkyp2iH0wgN3IaSElv7pU',
    playlists: [],
    getPlayList: [],
    dynList: '',
    track: [],
    search: '',
    searchData: [],
    searchAlbum: [],
    featurePlayList: [],
}

const reducer = (state, action) => {
    // console.log(action);

    switch(action.type){
        case 'Set_User': 
        return{
            ...state,
            user: action.user
        }

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLIST':
            return{
                ...state,
                playlists: action.playlists,
            }

            case 'SET_TRACK':
                return{
                    ...state,
                    track: action.setTrack,
                }

            case 'GET_PLAYLIST':
                return{
                    ...state,
                    getPlayList: action.getPlayList,
                }
                case 'DNY_List':
                return{
                    ...state,
                    dynList: action.dynamicList,
                }
                case 'SET_SEARCH':
                return{
                    ...state,
                    search: action.search,
                }
                case 'SEARCH_DATA':
                return{
                    ...state,
                    searchData: action.searchData,
                }
                case 'SEARCH_ALBUM':
                return{
                    ...state,
                    searchAlbum: action.searchAlbum,
                }
                case 'GET_FEATURE_PLAYLIST':
                return{
                    ...state,
                    featurePlayList: action.getFeaturePlayList,
                }

        default:
            return state;
    }
}

export default reducer;