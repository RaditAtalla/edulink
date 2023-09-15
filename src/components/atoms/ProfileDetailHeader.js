import { Dimensions, Image, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, ICONS, IMAGES, horizontalScale, verticalScale } from '../../constant'

const ProfileDetailHeader = () => {
  return(
    <LinearGradient style={Styles.container} colors={['#FFB472', COLORS.primary]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
      <Image style={Styles.logo} source={ICONS.hollowCircle} />
      <Image style={Styles.profilePic} source={IMAGES.profilePicCircle} />
      <Image style={Styles.logo} source={ICONS.hollowCircle} />
    </LinearGradient>
  )
}

const Styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    gap: horizontalScale(-30),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(28),
  },
  logo: {
    height: verticalScale(90),
    objectFit: 'contain',
  },
  profilePic: {
    width: 96,
    height: 96,
    objectFit: 'contain',
    borderWidth: 6,
    borderColor: COLORS.white,
    borderRadius: 96/2,
    zIndex: 2,
  }
})

export default ProfileDetailHeader