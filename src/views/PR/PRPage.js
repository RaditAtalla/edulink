import { Text, SafeAreaView, ScrollView, StyleSheet, View, Image, ImageBackground } from 'react-native'
import { COLORS, IMAGES, horizontalScale, verticalScale } from '../../constant'
import Styles from '../../styles/pageStyles/PRPage.style'
import PRCard from '../../components/atoms/PRCard'
import MyStatusbar from '../../components/atoms/MyStatusbar'

const PRPage = () => {
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <MyStatusbar contentColor='dark-content' />
      <ScrollView style={Styles.container}>
        <View style={Styles.background}>
          <ImageBackground source={IMAGES.particle} style={Styles.backgroundImg}>
            <Text style={Styles.title}>Pekerjaan Rumah</Text>
          </ImageBackground>
        </View>
        <View style={Styles.content}>
          <PRCard subject='Matematika' grade='XII MM 2' createdDate='01/05/2023' submitDate='02/05/2023' />
          <PRCard subject='Matematika' grade='XII MM 2' createdDate='01/05/2023' submitDate='02/05/2023' />
          <PRCard subject='Matematika' grade='XII MM 2' createdDate='01/05/2023' submitDate='02/05/2023' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PRPage