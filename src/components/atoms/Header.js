import { Image, StyleSheet, TouchableOpacity, View, } from 'react-native'
import { COLORS, ICONS, IMAGES, horizontalScale, verticalScale } from '../../constant'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigation = useNavigation()
  return(
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.drawerButton}>
        <Image style={Styles.drawerIcon} source={ICONS.drawer} />
      </TouchableOpacity>
      <View style={Styles.rightSection}>
        <TouchableOpacity>
          <Image style={Styles.themeIcon} source={ICONS.theme} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Image style={Styles.profileButton} source={IMAGES.profilePicCircle} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(15),
    paddingTop: verticalScale(57),
    width: '100%',
  },
  drawerButton: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    elevation: 10,
    shadowColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  drawer: {
    height: verticalScale(16),
    objectFit: 'contain',
  },
  rightSection: {
    flexDirection: 'row',
    gap: horizontalScale(35),
    alignItems: 'center',
  },
  themeButton: {
    height: verticalScale(32),
    objectFit: 'contain',
  },
  profileButton: {
    width: 48,
    height: 48,
    objectFit: 'cover',
    borderRadius: 48/2,
  }
})

export default Header