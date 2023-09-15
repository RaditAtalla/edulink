import { View, Image, Text, StyleSheet } from 'react-native'
import { COLORS, ICONS, horizontalScale, verticalScale } from '../../constant'

const LokerDetailsInfo = ({position, category, experience, lastUpdated}) => {
  return(
    <View style={Styles.container}>
      <View style={Styles.wrapper}>
        <Image style={Styles.icon} source={ICONS.building} />
        <Image style={Styles.icon} source={ICONS.clockOrange} />
        <Image style={Styles.icon} source={ICONS.briefCase} />
        <Image style={Styles.icon} source={ICONS.clockFill} />
      </View>
      <View style={Styles.wrapper}>
        <Text style={Styles.requirement}>{position}</Text>
        <Text style={Styles.requirement}>{category}</Text>
        <Text style={Styles.requirement}>{experience}</Text>
        <Text style={Styles.requirement}>{lastUpdated}</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: horizontalScale(12),
    alignItems: 'center',
  },
  wrapper: {
    gap: verticalScale(16),
  },
  icon: {
    width: horizontalScale(15),
    objectFit: 'contain',
  },
  requirement: {
    color: COLORS.black,
  }
})

export default LokerDetailsInfo