import { Text, SafeAreaView, ScrollView, View, Image } from 'react-native'
import Styles from '../styles/pageStyles/Biaya.style'
import MyStatusbar from '../components/atoms/MyStatusbar'
import { IMAGES } from '../constant'
import CardBiaya from '../components/atoms/CardBiaya'

const Biaya = () => {
  return(
    <SafeAreaView style={Styles.container}>
      <MyStatusbar contentColor={'Dark-content'} />
      <ScrollView>
        <View style={Styles.header}>
          <Image source={IMAGES.particle} style={Styles.backgroundImage} />
          <View style={Styles.titleContainer}>
            <Text style={Styles.headerTitle}>Total Tagihan</Text>
            <Text style={Styles.headerTitle}>Rp 135.000</Text>
          </View>
        </View>
        <View style={Styles.contentContainer}>
          <CardBiaya title='SPP Semester 2 T.A 2023' biaya='Rp 135.000' isPaid={false} />
          <CardBiaya title='SPP Semester 1 T.A 2023' biaya='Rp 135.000' isPaid={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Biaya