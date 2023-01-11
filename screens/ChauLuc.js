import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  Dimensions,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Fonts from '../constant/Fonts';
import bg from '../assets/image/bg.jpg';

const ChauLuc = () => {
  const {chau_luc, image, Nation_Images, name_chau} = useRoute().params;
  console.log(name_chau);
  if (name_chau == 'chau_nam_cuc') {
    return (
      <ImageBackground style={styles.container} source={bg}>
        <Text style={[styles.text, {backgroundColor: '#de4fe3'}]}>
          🙋‍♂️ Mình là {chau_luc.title} 🙋
        </Text>
        <Image style={{width: 200, height: 200}} source={image} />
        <View>
          <Text style={[styles.text, {backgroundColor: '#003cb3'}]}>
            Diện tích: {chau_luc.dien_tich}.
          </Text>
          <Text style={[styles.text, {backgroundColor: '#046f8c'}]}>
            Số nước: Chắc là 0 🥶🥶.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              Fonts.h4,
              {paddingHorizontal: 50, color: '#000000', textAlign: 'justify'},
            ]}>
            Lạnh quá ai mà sống được 🥶🥶🥶🥶. Cái này là mình nghĩ ra, còn thực
            tế như nào mình không rõ nha !!!
          </Text>
          <Text style={Fonts.h3}>😅😅😅</Text>
        </View>
      </ImageBackground>
    );
  }
  // console.log(chau_luc);

  const NationsView = ({item}) => {
    return (
      <View style={styles.nations} key={item.name}>
        <Text style={styles.nationText}>{item.name}</Text>
        <Image style={styles.img} source={Nation_Images[item.image]} />
      </View>
    );
  };

  return (
    <ImageBackground style={styles.container} source={bg}>
      <Text style={[styles.text, {backgroundColor: '#de4fe3'}]}>
        🙋‍♂️ Mình là {chau_luc.title} 🙋
      </Text>
      <Image style={{width: 200, height: 200}} source={image} />
      <View>
        <Text style={[styles.text, {backgroundColor: '#003cb3'}]}>
          Diện tích: {chau_luc.dien_tich}.
        </Text>
        <Text style={[styles.text, {backgroundColor: '#046f8c'}]}>
          Số nước: {chau_luc.so_nuoc}.
        </Text>
      </View>

      <FlatList
        data={chau_luc.nations}
        renderItem={NationsView}
        keyExtractor={item => item.name}
        horizontal
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').width}
      />
      <Text style={Fonts.h4}>Lướt sang phải còn nữa nha 👉👉👉</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'black',
  },
  img: {
    width: Dimensions.get('window').width - 20,
    height: 190,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  text: [
    Fonts.h4,
    {
      padding: 5,
      backgroundColor: 'white',
      // color: 'black',
      borderRadius: 7,
      marginVertical: 5,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
  ],
  nations: {
    width: Dimensions.get('window').width,
    marginTop: 20,
    borderWidth: 5,
    padding: 5,
    left: -5,
    borderColor: 'gray',
  },
  nationText: [
    Fonts.h4,
    {
      textAlign: 'center',
      color: 'black',
      width: '70%',
      alignSelf: 'center',
      borderRadius: 30,
      backgroundColor: 'whitesmoke',
      padding: 5,
      backgroundColor: '#31bd72',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
  ],
});

export default ChauLuc;
