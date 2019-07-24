import React, { Component } from "react";
import api from "../services/api";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";

import camera from "../assets/camera.png";
import more from "../assets/more.png";
import like from "../assets/like.png";
import comment from "../assets/comment.png";
import send from "../assets/send.png";
import { withNavigation, NavigationActions } from "react-navigation";

class Feed extends Component {
  constructor(props){
    super(props)
    this.navigaxion = props.navigation
    console.log(this.navigaxion)
  }
  static navigationOptions = (props) => {
    console.log(props)
    return ({
    headerRight: (
      <TouchableOpacity
        style={{ marginRight: 20 }}
        onPress={() => props.navigation.navigate("New")}
      >
        <Image source={camera} />
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => {
          props.navigation.navigate('SignedOut')
          
        }}
      >
        <Text>Sair</Text>
      </TouchableOpacity>
    )
  })}
  state = {
    feed: [],
    showBox: false
  };
  async componentDidMount() {
    //this.registerToSocket();
    //  api.get('posts').then(function(response){
    //    console.log(response)
    //    console.log(response.data);
    const response = await api.get("posts");
    this.setState({ feed: response.data });
    //   })

    //console.log(response.data);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={post => post._id}
          renderItem={({ item }) => (
            <View style={styles.feedItem}>
              <View style={styles.feedItemHeader}>
                <View style={styles.userInfo}>
                  <Text style={styles.name}>{item.author}</Text>
                  <Text style={styles.place}>{item.place}</Text>
                </View>

                <Image source={more} />
              </View>
              <Image
                style={styles.feedImage}
                source={{ uri: `http://172.16.1.109:3333/files/${item.image}` }}
              />
              <View style={styles.feedItemFooter}>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Image source={like} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Image source={comment} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Image source={send} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.likes}>{item.likes} curtidas</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.hashtags}>{item.hashtags}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Feed

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feedItem: {
    marginBottom: 20
  },
  feedItemHeader: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 0.2,
    borderTopColor: "#666"
  },
  name: {
    fontSize: 14,
    color: "#000"
  },
  place: {
    fontSize: 12,
    color: "#666",
    marginTop: 2
  },
  feedImage: {
    width: "100%",
    height: 400,
    marginVertical: 15
  },
  feedItemFooter: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: "row"
  },
  action: {
    marginRight: 8,
  },
  likes: {
    marginTop: 15,
    fontWeight: "bold",
    color: "#000"
  },
  description: {
    lineHeight: 18,
    color: "#000"
  },
  hashtags: {
    color: "#7159c1"
  },
  userInfo: {
    marginTop: 10
  },
});
