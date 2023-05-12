import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const NotificationCard = ({ type, pic, title, desc, color }) => {
  const [onPress, setOnPress] = React.useState(false);

  return (
    <TouchableOpacity style={[styles.container, pic && pic.length > 1 && styles.whiteBackground]}>
      <View style={styles.leftCont}>
        <MaterialCommunityIcons name={type} size={25} color={color} />
      </View>

      <View style={styles.rightCont}>
        <View style={styles.picCont}>
          {pic &&
            pic.map((dat, index) => (
              <Image
                key={index}
                source={{ uri: dat }}
                style={[
                  styles.image,
                  index === 1 && pic.length > 1 && styles.whiteBackground,
                ]}
              />
            ))}
        </View>
        <View style={styles.titleCont}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    backgroundColor: '#d5ebfc',
  },
  leftCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 15,
    alignItems: 'center',
    flex: 1,
    paddingTop: 5,
  },
  rightCont: {
    flex: 4,
  },
  picCont: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  titleCont: {
    marginBottom: 10,
  },
  text: {
    color: 'black',
    paddingRight: 20,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  whiteBackground: {
    backgroundColor: '#FBFCFC',
  },
});
