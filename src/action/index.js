// action creator
export const selectSong = (song)=>{
    // return an action
    return{
        type:"SELECTED_SONG",
        payload:song
    }
}