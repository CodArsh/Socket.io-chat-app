import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import homeImage from '../assets/home-image.jpg';
import {GlobalContext} from '../context';
const Home = () => {
  const {
    showLogin,
    setShowLogin,
    currneUser,
    setCurrentUser,
    activeUser,
    setActiveUser,
    allUsers,
    setAllUsers,
  } = useContext(GlobalContext);

  function handleRegisterAndSignin(isLogin) {
    if (currneUser.trim() != '') {
      if (isLogin) {
      } else {
      }
    } else {
      Alert.alert('Alert', 'Please enter username');
    }
  }
  return (
    <View style={styles.main}>
      <ImageBackground source={homeImage} style={styles.img} />
      <View style={styles.content}>
        {showLogin ? (
          <View style={styles.infoBlock}>
            <View>
              <Text style={styles.heading}>Enter your username</Text>
              <TextInput
                autoCorrect={false}
                placeholder="example: Arsil Malek"
                style={styles.loginInput}
                onChangeText={val => setCurrentUser(val)}
                value={currneUser}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Pressable
                style={styles.button}
                onPress={() => handleRegisterAndSignin(false)}>
                <View>
                  <Text style={styles.buttonText}>Register</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleRegisterAndSignin(true)}>
                <View>
                  <Text style={styles.buttonText}>Login</Text>
                </View>
              </Pressable>
            </View>
          </View>
        ) : (
          <View style={styles.infoBlock}>
            <Text>Connect, Grow & Inspire</Text>
            <Text>Connect, People around the world for free</Text>
            <Pressable style={styles.button} onPress={() => setShowLogin(true)}>
              <View>
                <Text style={styles.buttonText}>Get Started</Text>
              </View>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  img: {
    height: '100%',
    justifyContent: 'center',
    flex: 3,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff',
  },
  infoBlock: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 15,
    color: '#acacac',
    marginBottom: 15,
  },
  loginInput: {
    borderRadius: 50,
    borderWidth: 1,
    padding: 8,
  },
  button: {
    backgroundColor: '#703efe',
    padding: 15,
    marginVertical: 10,
    width: '34%',
    elevation: 1,
    borderRadius: 50,
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
