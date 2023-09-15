import { Text, SafeAreaView, ScrollView, Image, View, TouchableOpacity } from 'react-native'
import { COLORS, ICONS, IMAGES, moderateScale, verticalScale } from '../../../constant'
import ProfilePageHeader from '../../../components/atoms/ProfilePageHeader'
import Styles from '../../../styles/pageStyles/ProfilePage.style'
import MateriCard from '../../../components/atoms/MateriCard'
import CtaButton from '../../../components/atoms/CtaButton'
import PRCard from '../../../components/atoms/PRCard'
import {useState} from 'react'
import MyStatusbar from '../../../components/atoms/MyStatusbar'
import { useNavigation } from '@react-navigation/native'

const ProfilePage = () => {
  const navigation = useNavigation()
  const [isExpanded, setIsExpanded] = useState(false)
  return(
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
    <MyStatusbar contentColor='dark-content' />
      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false} >
        <ProfilePageHeader name='Ibnu Rusyid Bayrizky' grade='XII - MM 2' profilePic={IMAGES.profilePicCircle} />
        <View style={Styles.contentContainer}>
          <View style={Styles.sectionContainer}>
            <View style={Styles.sectionHeader}>
              <Text style={Styles.sectionTitle}>Yuk! Baca Materi Hari Ini</Text>
              <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                <Image style={Styles.expandButton} source={isExpanded ? ICONS.shrink : ICONS.expand} />
              </TouchableOpacity>
            </View>
            <View style={{ gap: isExpanded ? verticalScale(16) : verticalScale(-55)}}>
              <MateriCard subject='Matematika' material='Aljabar Linear' date='12 Agustus 2023' backgroundColor={COLORS.primary} />
              <MateriCard subject='Matematika' material='Aljabar Linear' date='12 Agustus 2023' backgroundColor='#476FFF' />
              <MateriCard subject='Matematika' material='Aljabar Linear' date='12 Agustus 2023' backgroundColor='#003334' />
            </View>
            <CtaButton action={() => navigation.navigate('MateriPage')} vPadding={verticalScale(12)} text='Lihat materi lainnya...' background={COLORS.primary} borderRadius={12} fFamily='Satoshi-Medium' fSize={moderateScale(16)} />
          </View>
          <View style={[Styles.sectionContainer, {marginBottom: 40}]}>
            <Text style={Styles.sectionTitle}>PR Kamu Hari Ini</Text>
            <View style={{ gap: verticalScale(32)}}>
              <PRCard subject='Matematika' grade='XII MM 2' createdDate='01/05/23' submitDate='02/05/23' />
              <PRCard subject='Matematika' grade='XII MM 2' createdDate='01/05/23' submitDate='02/05/23' />
              <PRCard subject='Matematika' grade='XII MM 2' createdDate='01/05/23' submitDate='02/05/23' />
            </View>
            <CtaButton action={() => navigation.navigate('PRStack')} vPadding={verticalScale(12)} text='Lihat PR lainnya...' background={COLORS.primary} borderRadius={12} fFamily='Satoshi-Medium' fSize={moderateScale(16)} />
          </View>
        </View>
      </ScrollView> 
    </SafeAreaView>
  )
}

export default ProfilePage