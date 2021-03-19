const initialState={
    height:"",
    weight:"",
    name:"",
    pokemonType:"",
    battle:"",
    img:"",
}

export const reducer = (state=initialState,action)=>{
    if(action.type=="WEIGHT"){
        return{
            ...state,
            weight:action.payload
        }
    }
    if(action.type=="NAME"){
        return{
            ...state,
            name:action.payload
        }
    }
    if(action.type=="HEIGHT"){
        return{
            ...state,
            height:action.payload
        }
    }
    if(action.type=="POKEMON_TYPE"){
        return{
            ...state,
            pokemonType:action.payload
        }
    }
    if(action.type=="BATTLE_FOUGHT"){
        return{
            ...state,
            battle:action.payload
        }
    }
    if(action.type=="IMAGE"){
        return{
            ...state,
            img:action.payload
        }
    }
    return state
}