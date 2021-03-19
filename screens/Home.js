import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import {useSelector,useDispatch} from 'react-redux'

//Main User Interface
const App=()=> {
    const [text,setText]=useState("");
    const dispatch = useDispatch();
    const {height,weight,name,pokemonType,battle,img} = useSelector((state)=>{
      return state
    })
    //Function that checks calls pokemon api
    const getPokemon = (e)=>{
      let val=e;
      if(val!=""){
        
       fetch("https://pokeapi.co/api/v2/pokemon/"+(val.toLowerCase())).
         then(data=>data.json()).
         then(data=>{
           dispatch({type:"WEIGHT",payload:data.weight})
           dispatch({type:"NAME",payload:data.name})
           dispatch({type:"HEIGHT",payload:data.height})
           dispatch({type:"POKEMON_TYPE",payload:data.types[0].type.name})
           dispatch({type:"BATTLE_FOUGHT",payload:data.game_indices.length})
           dispatch({type:"IMAGE",payload:data.sprites.front_default})
         })
        }
      }
      //Function to display Pokemon details
      const show=()=>{
      if(pokemonType!=""){
        return(
          <View style={styles.container}>
             <Image style={styles.img}source={{uri:img}}/>
             <Text style={styles.text}>Name: {name}</Text>
             <Text style={styles.text}>Pokemon Type: {pokemonType}</Text>
             <Text style={styles.text}>Height: {height}</Text>
             <Text style={styles.text}>Weight: {weight}</Text>
             <Text style={styles.text}>Battle Fought: {battle}</Text>
          </View>
        )
      }else{
        <View></View>
      }
    }
    //output
    return (
      <View style={styles.view}>
       <Text style={styles.heading}>
          <Image source={require('../assets/pokemon-pokeball-game-go-34722.png')} 
          style= {{width:25,height:25}}/> 
           PokeDex
       </Text>
         <TextInput
            error={false}
            mode='outlined'
            label='Enter pokemon name'
            value={text}
            onChangeText={text=>setText(text)}
            style={styles.input}
         />
         <Button mode="contained" style={styles.button} onPress={getPokemon(text)}>Submit</Button>
         {show()}
         <StatusBar style="dark" />
      </View>
    );
  }

  //Stylesheet
  const styles = StyleSheet.create({
    button:{
      width:'40%',
      marginTop:15,
      marginLeft:'30%',
      
    },
    container:{
      justifyContent:'center',
      alignItems:'center',
    },
    text:{
      fontSize:20
    },
    img:{
      height:200,
      width:200 
    },
    view:{
      marginTop:20,
      justifyContent:'center',
    },
    input:{
        marginLeft:"5%",
        marginRight:"5%"
    },
    heading:{
        fontSize:30,
        fontWeight:700,
        marginBottom:12,
        textAlign:"center"
    },
  });

  export default App;