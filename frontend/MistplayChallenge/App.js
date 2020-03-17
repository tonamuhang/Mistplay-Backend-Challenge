import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import {Component} from 'react';
import validate from "react-native-web/dist/exports/StyleSheet/validate";


class HttpExample extends Component{
  state = {
    data: []
  };

  componentDidMount = () => {
    fetch('http://localhost:5000/', {
      method:'GET'
    })
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson);
          this.setState({
              data: [...this.state.data, ...resJson]
          });
          console.log(this.state.data);
        })

        .catch((err) => {
          console.error(err);
        })
  };


  renderGames(){
      return this.state.data.map((game, index) =>(
          <Text key={index}>{game.title}</Text>
      ));
  }


  render() {


    return(
        <View>
            {this.renderGames()}
        </View>
    )
  }



}



export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text>Please enter your search query: </Text>*/}
      {/*<TextInput*/}
      {/*    style={{ height: 40, borderColor: 'gray', alignItems: 'center', borderWidth: 1 }}*/}
      {/*    placeholder={'Search games'}*/}
      {/*    placeholderTextColor="#202020"*/}
      {/*  />*/}
      <HttpExample/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
