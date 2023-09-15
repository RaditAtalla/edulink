import { Text, SafeAreaView, ScrollView, View } from 'react-native'
import Styles from '../../../styles/pageStyles/LokerDetail.style'
import { COLORS, IMAGES, moderateScale, verticalScale } from '../../../constant'
import LokerDetailHeader from '../../../components/atoms/LokerDetailHeader'
import Border from '../../../components/atoms/Border'
import LokerDetailsInfo from '../../../components/atoms/LokerDetailsInfo'
import LokerDeskripsi from '../../../components/atoms/LokerDeskripsi'
import CtaButton from '../../../components/atoms/CtaButton'
import MyStatusbar from '../../../components/atoms/MyStatusbar'

const LokerDetail = () => {
  return(
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <MyStatusbar contentColor='dark-content' />
      <ScrollView>
        <View style={Styles.container}>
          <LokerDetailHeader title='Business Development Executive' company='KGXpress & Logistics' location='Medan Baru, Medan, Sumatera Utara, Indonesia' image={IMAGES.lokerDetailImg} />
          <Border />
          <LokerDetailsInfo position='Business Development & Sales' category='Full-Time' experience='1-3 tahun pengalaman' lastUpdated='Diperbaharui 8 hari lalu' />
          <Border />
          <LokerDeskripsi description={['Identifying opportunities for new business development through following up on leads and conducting research on target clients', 'Developing and executing sales and marketing strategies to grow business', 'New business generation by meeting potential clients to understand needs and providing relevant solutions', 'Building business relationships with current and potential clients']} />
          <CtaButton vPadding={verticalScale(12)} text='Lamar dan Hubungi' background={COLORS.primary} borderRadius={50} fFamily='Satoshi-Medium' fSize={moderateScale(16)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LokerDetail