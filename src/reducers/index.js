import {combineReducers} from 'redux';
const songsReducers =()=>{
    return [
        {title:"rise up",duration:"4:05"},
        {title:"thunder",duration:"3:00"},
        {title:"fireflies",duration:"3:06"},
        {title:"diamonds",duration:"5:00"}
    ]
}

const selectedSongReducer = (selectedSong=null,action)=>{
    if(action.type==='SELECTED_SONG')
        return action.payload;
    return selectedSong;
}

export default combineReducers({
    songs:songsReducers,
    selectedSong:selectedSongReducer
})