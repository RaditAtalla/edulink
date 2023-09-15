import { Text, SafeAreaView, ScrollView, View } from 'react-native'
import LokerCard from '../../../components/atoms/LokerCard'
import { COLORS } from '../../../constant'
import Styles from '../../../styles/pageStyles/LokerPage.style'
import { useNavigation } from '@react-navigation/native'
import MyStatusbar from '../../../components/atoms/MyStatusbar'

const LokerPage = () => {
  const navigation = useNavigation()
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <MyStatusbar contentColor='dark-content' />
      <ScrollView>
        <View style={Styles.lokerContainer}>
          <LokerCard action={() => navigation.navigate('LokerDetail')} title='Business Development Executive' category='Full-Time' experience='1-3 Tahun' company='KGXpress & Logistics' location='Medan Baru, Medan, Sumatera Utara, Indonesia' lastUpdated='Diperbaharui 8 hari lalu' skills={['Target Oriented', 'Organization Skills', 'Strong Leadership Skills']} />
          <LokerCard title='Sales Executive' category='Full-Time' company='Yayasan Tadika Putri' location='Medan Baru, Medan, Sumatera Utara, Indonesia' lastUpdated='Diperbaharui 8 hari lalu' skills={['Senion Sales Executive', 'Sales Marketing', 'Sales Executive']} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LokerPage