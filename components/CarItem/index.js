import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import ButtonItem from "../ButtonItem";
function index(props) {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <ButtonItem
          type="primary"
          content={"custom order"}
          onPress={() => {
            console.warn("custom order was pressed");
          }}
        />
        <ButtonItem
          type="secondary"
          content={"existing inventory"}
          onPress={() => {
            console.warn("existing inventory was pressed");
          }}
        />
      </View>
    </View>
  );
}

export default index;
