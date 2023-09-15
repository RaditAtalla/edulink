import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, ICONS, horizontalScale, moderateScale, verticalScale } from '../../constant'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const ProfilePageHeader = ({name, grade, profilePic}) => {
  const navigation = useNavigation()
  return(
    <View style={Styles.container}>
      <LinearGradient style={Styles.imageContainer} colors={['#FFB472', COLORS.primary]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <Image source={ICONS.hollowCircle} style={Styles.logo} />
        <Image style={Styles.profilePic} source={profilePic} />
      </LinearGradient>
      <View style={Styles.infoContainer}>
        <Text style={Styles.name} numberOfLines={2}>{name}</Text>
        <Text style={Styles.grade}>{grade}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}>
          <Text style={Styles.detailButton}>Lebih Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: horizontalScale(32),
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  imageContainer: {
    flexDirection: 'row',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    gap: -25,
    paddingVertical: verticalScale(28),
    paddingLeft: horizontalScale(8),
    paddingRight: horizontalScale(24),
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
  },
  infoContainer: {
    gap: verticalScale(12),
  },
  name: {
    color: COLORS.textDark,
    fontSize: moderateScale(20),
    fontFamily: 'Satoshi-Bold',
    width: '60%',
    flexWrap: 'wrap',
  },
  grade: {
    color: COLORS.textDark,
    fontFamily: 'Satoshi-Medium',
    fontSize: moderateScale(16),
  },
  detailButton: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium',
  }
})

export default ProfilePageHeader