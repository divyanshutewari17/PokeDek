import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Card, Title,TextInput,Button} from 'react-native-paper';
export default function App() {
  
  const [text,setText]=useState("");
  const [height, setHeight]=useState("");
  const [weight, setWeight]=useState("");
  const [name, setName]=useState("");
  const [pokemonType, setPokemonType]=useState("");
  const [battle, battleFought]=useState("");
  const [img,setImg]=useState("");
  const getPokemon = (e)=>{
    let val=e;
    if(val!=""){
      try{
     fetch("https://pokeapi.co/api/v2/pokemon/"+(val.toLowerCase())).
    then(data=>data.json()).
    then(data=>{
      setWeight(data.weight)
      setName(data.name)
      setHeight(data.height)
      setPokemonType(data.types[0].type.name)
      battleFought(data.game_indices.length)
      setImg(data.sprites.front_default)
      
    })
  }catch(err){

  }
  }
  }

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
    }
    else{
      <View>

      </View>
    }
  }
  
  return (
    
    <View style={styles.view}>
       <TextInput
       error={false}
         mode='outlined'
         label='Enter pokemon name'
         value={text}
         onChangeText={text=>setText(text)}
       />
       <Button mode="contained" style={styles.button} onPress={getPokemon(text)}>Submit</Button>
       {show()}
       <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    width:'40%',
    margin:10,
    marginLeft:'30%',
    alignItems:"center"
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
    marginTop:20
  }
});
