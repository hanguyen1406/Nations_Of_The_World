import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Easing,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Images from '../constant/Images';
import {Animated} from 'react-native';
import Fonts from '../constant/Fonts';
import {useNavigation} from '@react-navigation/native';
import chau_luc from '../assets/database/database.json';
import RNExitApp from 'react-native-exit-app';
import Chau_a from '../assets/image/chau_a/ExportImages';
import Chau_au from '../assets/image/chau_au/ExportImages';
import Chau_phi from '../assets/image/chau_phi/ExportImages';
import Chau_dai_duong from '../assets/image/chau_dai_duong/ExportImages';
import Chau_my from '../assets/image/chau_my/ExportImages';

const Home = () => {
  let spinValue = new Animated.Value(0);
  let turnning = true;
  const animation = Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  );
  animation.start();
  const navigator = useNavigation();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const onPress = item => {
    const Nation_Images = {
      chau_a: Chau_a,
      chau_au: Chau_au,
      chau_phi: Chau_phi,
      chau_dai_duong: Chau_dai_duong,
      chau_my: Chau_my,
    };

    // console.log(Nation_Images.chau_phi);
    animation.stop();
    turnning = false;
    navigator.navigate('ChauLuc', {
      chau_luc: item,
      image: Images[item.name + '_1'],
      Nation_Images: Nation_Images[item.name],
      name_chau: item.name,
    });
  };

  const Chau = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          height: 100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 5,
        }}
        key={item.name}
        onPress={() => onPress(item)}>
        <Image style={styles.img} source={Images[item.name]} />
        <Text
          style={[
            Fonts.h4,
            {
              color: 'black',
              width: '40%',
              textAlign: 'center',
              textDecorationLine: 'underline',
            },
          ]}>
          👉{item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const onPressEarth = () => {
    if (turnning) {
      Alert.alert('', 'Đừng có chạm vào tôi 😠😤😡🤬', [
        {
          text: 'KO đấy làm sao 😏',
          onPress: () => {
            // BackHandler.exitApp();
            Alert.alert('', 'Thế đừng trách bạn vô tình nhé 😠😠', [
              {
                text: 'Xin lỗi được chưa',
                onPress: () => {},
                style: 'cancel',
              },
              {
                text: 'Định làm gì 😏😏',
                onPress: () => {
                  RNExitApp.exitApp();
                },
              },
            ]);
          },
          style: 'cancel',
        },
        {text: 'Được thôi 😑'},
      ]);
    } else {
      Alert.alert('', '...', [
        {
          text: 'Dỗi à',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Quay tiếp đê',
          onPress: () => {
            animation.reset();
            animation.start();
            turnning = true;
          },
        },
      ]);
    }
  };

  return (
    <ImageBackground source={Images.vu_tru} style={styles.container}>
      <Text style={Fonts.title2}>Chào bạn!</Text>
      <Text style={Fonts.title3}>Mình là Trái Đất</Text>
      <Text style={Fonts.title4}>Hãy cùng mình khám phá nhé!!!</Text>
      <TouchableOpacity onPress={() => onPressEarth()}>
        <Animated.Image
          source={Images.earth}
          style={[styles.earth, {transform: [{rotate: spin}]}]}
        />
      </TouchableOpacity>
      <View style={styles.footer}>
        <FlatList data={chau_luc} renderItem={Chau} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  earth: {
    width: 200,
    height: 200,
    marginVertical: 15,
  },
  footer: {
    flex: 1,
    width: '100%',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 10,
  },
  img: {
    width: '60%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    elevation: 14,
  },
});

export default Home;
