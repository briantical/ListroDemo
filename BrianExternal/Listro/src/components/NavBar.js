import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import { Header, Icon, Body, Left, Right, Drawer } from "native-base";
import SearchInput, { createFilter } from "react-native-search-filter";
import * as Animatable from "react-native-animatable";
import Tasks from "./Tasks";
const KEYS_TO_FILTERS = ["id", "Task"];

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      searchIt: true,
      searchTerm: "",
      searchItems: false
    };
  }
  showAnimation(theSa) {
    this.setState({ searchIt: false });
  }

  searchUpdated(term) {
    this.setState({ searchItems: true });
    this.setState({ searchTerm: term });
  }
  close() {
    this.setState({ searchItems: false });
    this.setState({ searchIt: true });
  }

  render() {
    var theSearch = (
      <Animatable.View
        animation="slideInDown"
        direction="alternate"
        style={styles.searchbar}
      >
        <SearchInput
          onChangeText={term => {
            this.searchUpdated(term);
          }}
          style={styles.searchInput}
          placeholder="Search"
        />
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => this.close()}
        >
          <Icon name="close" style={styles.closeIcon} />
        </TouchableOpacity>
      </Animatable.View>
    );
    let lists = Tasks.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <Header style={styles.navBar}>
        <Left>
          <TouchableOpacity style={styles.homeNav} onPress={this.props.pressMe}>
            <Icon name="menu" style={styles.homeIcon} />
          </TouchableOpacity>
        </Left>
        <View style={styles.userProfile}>
          {this.state.searchIt ? (
            <Icon
              name="search"
              style={styles.homeIcon}
              onPress={() => this.showAnimation(theSearch)}
            />
          ) : (
            theSearch
          )}
          {this.state.searchItems ? (
            <ScrollView>
              {lists.map(list => {
                return (
                  <TouchableOpacity key={list.id} style={styles.emailItem}>
                    <View>
                      <Text style={styles.searchListText}>{list.Task}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          ) : null}
        </View>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  searchListText: {
    color: "#FFF"
  },
  searchInput: {
    height: 30,
    padding: 0,
    width: 130
  },
  closeButton: {
    justifyContent: "center",
    height: 30,
    width: 20
  },
  closeIcon: {
    fontSize: 15,
    color: "#FFF",
    paddingLeft: 5,
    borderRadius: 15,
    backgroundColor: "#3F8EFC"
  },
  searchbar: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    borderRadius: 10,
    padding: 0,
    height: 30,
    width: 160
  },
  navBar: {
    height: 40,
    width: 100 + "%",
    backgroundColor: "#3F8EFC",
    borderColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    justifyContent: "space-between"
  },
  homeNav: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: 3
  },
  homeName: {
    fontSize: 15,
    color: "#F3EFF5",
    paddingLeft: 3
  },
  homeIcon: {
    color: "#FFF"
  },
  userProfile: {
    paddingRight: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  userImage: {
    height: 20,
    width: 20,
    tintColor: "#F7F9F9"
  }
});
