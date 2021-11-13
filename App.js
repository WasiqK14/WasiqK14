import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
  const [getCurrentPage,setCurrentPage] = React.useState(0)
  var RandomNumber = Math.floor(Math.random() * 100) + 0
  const [getScore,setScore] = React.useState(0)
  const [getRound,setRound] = React.useState(1)
  const [getTries,setTries] = React.useState(0)
  const [getRandom,setRandom] = React.useState(RandomNumber)
  const [getHint,setHint] = React.useState(0)
  const [getCorrectGuess,setCorrectGuess] = React.useState(0)
  const [getnumber,setnumber] = React.useState("")
  
  const Reset_1 = () => {
    var RandomNumber = Math.floor(Math.random() * 100) + 0
    setScore(0)
    setRound(1)
    setTries(0)
    setRandom(RandomNumber)
    setHint(0)
    setCorrectGuess(0)
    setCurrentPage(0)
    setnumber("")
  }

  const Reset_2 = () => {
    var RandomNumber = Math.floor(Math.random() * 100) + 0
    setScore(0)
    setRound(1)
    setTries(0)
    setRandom(RandomNumber)
    setHint(0)
    setCorrectGuess(0)
    setCurrentPage(1)
    setnumber("")
  }
  function Hint(){
    setHint(getHint + 1)
    var before = getRandom - 5
    var after = getRandom + 5

    alert("The number is between"+before+"and"+after)

    setScore(getScore - 2)
  }

  function Compare(){
    setTries(getTries+1)
    if(getTries == 5){
      setRound(getRound + 1)
    }
    if(getnumber == getRandom){
      setCorrectGuess(getCorrectGuess + 1)
      setScore(getScore+10)
      setCurrentPage(2)
    }
    else{
      setnumber("")
    }
    
  }

  if (getCurrentPage==0){
    return (
      <View style={styles.container}>
        <Text style = {{fontSize: 25,fontFamily: 'sans-serif-condensed'}}>Welcome to the Guess Game</Text>
        <View style={{marginTop:50}}>
          <Button title ="Start Game" color='green' onPress={()=>setCurrentPage(1)}></Button>
        </View>
      </View>
    );
  }
  else if(getCurrentPage == 1){
    return(
      <View style = {styles.container}>
        <Text style = {{fontSize: 25,fontFamily: 'sans-serif-condensed'}}>Score: {getScore}</Text>
        <Text style = {{fontSize: 25,fontFamily: 'sans-serif-condensed'}}>Round: {getRound}</Text>
        <Text style = {{fontSize: 25,fontFamily: 'sans-serif-condensed'}}>Tries: {getTries}</Text>
        <Text style = {{fontSize: 25,fontFamily: 'sans-serif-condensed'}}>Random: {getRandom}</Text>
        <Text style = {{fontSize: 25,fontFamily: 'sans-serif-condensed'}}>Guess: {getnumber}</Text>
  
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"1")}>
            <Text style={styles.text}>1</Text>
          </Pressable>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"2")} >
            <Text style={styles.text}>2</Text>
          </Pressable>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"3")}>
            <Text style={styles.text}>3</Text>
          </Pressable>
        </View>
  
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"4")}>
            <Text style={styles.text}>4</Text>
          </Pressable>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"5")}>
            <Text style={styles.text}>5</Text>
          </Pressable>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"6")}>
            <Text style={styles.text}>6</Text>
          </Pressable>
        </View>
  
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"7")}>
            <Text style={styles.text}>7</Text>
          </Pressable>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"8")}>
            <Text style={styles.text}>8</Text>
          </Pressable>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"9")}>
            <Text style={styles.text}>9</Text>
          </Pressable>
        </View>
  
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"0")}>
            <Text style={styles.text}>0</Text>
          </Pressable>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"0")}>
            <Text style={styles.text}>0</Text>
          </Pressable>
          <Pressable style = {styles.pressable} onPress ={()=>setnumber(getnumber+"0")}>
            <Text style={styles.text}>0</Text>
          </Pressable>
        </View>
  
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
          <Button title = "DONE" color = "green" onPress={()=>setCurrentPage(2)}></Button>
          <Button title = "HINT" color = "orange" onPress = {Hint}></Button>
          <Button title = "Guess" color = "blue" onPress = {Compare}></Button>
        </View>
        
      </View>
  
    )
  }
  else{
    return(
      <View style = {styles.container}>
  
        <Text style = {{fontSize: 25,fontFamily: 'sans-serif-condensed'}}>Score: {getScore} </Text>
        <Text style = {{fontSize: 25,fontFamily: 'sans-serif-condensed'}}>Round: {getRound}</Text>
        <Text style = {{fontSize: 25,fontFamily: 'sans-serif-condensed'}}>Tries: {getTries}</Text>
        <Text style = {{fontSize: 25,fontFamily: 'sans-serif-condensed'}}>Hints: {getHint}</Text>
        <Text style = {{fontSize: 25,fontFamily: 'sans-serif-condensed'}}>Correct Guesses: {getCorrectGuess}</Text>
  
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            <Button title = "FINISH" color = "green" onPress={Reset_1}></Button>
            <Button title = "PLAYAGAIN" color = "purple" onPress={Reset_2}></Button>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 10,
    backgroundColor: 'black',
    marginRight:10,
    marginTop: 20
  },
  text: {
    fontSize: 25,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color : 'white'
  },
});
