import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';
import {Component} from 'react';
import validate from "react-native-web/dist/exports/StyleSheet/validate";


class HttpExample extends Component{
  state = {
    data: []
  };

  componentDidMount = () => {
    fetch('https://mighty-ridge-36958.herokuapp.com/', {
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


  /**
   * returns a list of games inside of the state data array
   */
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



export default class App extends Component{

    searchGames = () => {
        console.log("hello world")
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>Please enter your search query: </Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', alignItems: 'center', borderWidth: 1 }}
                    placeholder={'Search games'}
                    placeholderTextColor="#202020"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.searchGames}
                >
                    <Text> Touch Here </Text>
                </TouchableOpacity>
                <HttpExample/>
            </View>
        );
    }


}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 10
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10
        },
        countContainer: {
            alignItems: 'center',
            padding: 10
        },
        countText: {
            color: '#FF00FF'
        }
    })
;
