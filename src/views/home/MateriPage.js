import { Text, SafeAreaView, ScrollView, StyleSheet, View, Image, ImageBackground } from 'react-native'
import { COLORS, IMAGES, horizontalScale, verticalScale } from '../../constant'
import Styles from '../../styles/pageStyles/MateriPage.style'
import PRCard from '../../components/atoms/PRCard'
import MyStatusbar from '../../components/atoms/MyStatusbar'
import MateriCard from '../../components/atoms/MateriCard'

const MateriPage = () => {
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <MyStatusbar contentColor='dark-content' />
      <ScrollView style={Styles.container}>
        <View style={Styles.background}>
          <ImageBackground source={IMAGES.particle} style={Styles.backgroundImg}>
            <Text style={Styles.title}>Materi</Text>
          </ImageBackground>
        </View>
        <View style={Styles.content}>
          <MateriCard subject='Matematika' material='Aljabar Linear' date='12 Agustus 2023' backgroundColor='#003334' />
          <MateriCard subject='Bahasa Indonesia' material='Membuat Puisi' date='12 Agustus 2023' backgroundColor='#003334' />
          <MateriCard subject='Fisika' material='Kuantum Fisika' date='12 Agustus 2023' backgroundColor='#003334' />
          <MateriCard subject='PJOK' material='Bola Basket' date='12 Agustus 2023' backgroundColor='#003334' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MateriPage