import { Text, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native'
import Styles from '../../../styles/pageStyles/ProfileDetail.style'
import ProfileDetailHeader from '../../../components/atoms/ProfileDetailHeader'
import { COLORS, verticalScale } from '../../../constant'
import {useState} from 'react'
import PersonalDetail from '../../../components/atoms/PersonalDetail'
import OrtuDetail from '../../../components/atoms/OrtuDetail'
import MyStatusbar from '../../../components/atoms/MyStatusbar'

const ProfileDetail = () => {
  const [personalActive, setPersonalActive] = useState(true)
  const [ortuActive, setOrtuActive] = useState(false)

  const ActiveComponent = () => {
    if(ortuActive) {
      return(
        <OrtuDetail />
      )
    }
    return(
      <PersonalDetail />
    )
  }

  return(
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
    <MyStatusbar contentColor='dark-content' />
      <ScrollView style={Styles.container}>
        <ProfileDetailHeader />
        <View style={Styles.contentContainer}>
          <View style={Styles.buttonContainer}>
            <TouchableOpacity style={Styles.buttonWrapper} onPress={() => {setPersonalActive(true); setOrtuActive(false)}}>
              <Text style={[Styles.buttonTitle, {color: personalActive ? COLORS.textDark : COLORS.gray}]}>Personal</Text>
              <View style={Styles.buttonUnderlineContainer}>
                <View style={[Styles.buttonUnderline, {backgroundColor: personalActive ? COLORS.primary : COLORS.white}]} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonWrapper} onPress={() => {setPersonalActive(false); setOrtuActive(true)}}>
              <Text style={[Styles.buttonTitle, {color: ortuActive ? COLORS.textDark : COLORS.gray }]}>Orang Tua</Text>
              <View style={Styles.buttonUnderlineContainer}>
                <View style={[Styles.buttonUnderline, {backgroundColor: ortuActive ? COLORS.primary : COLORS.white}]} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: verticalScale(10)}}>
            <ActiveComponent />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileDetail