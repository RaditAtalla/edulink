import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, ICONS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const MateriCard = ({subject, material, date, backgroundColor}) => {
  return(
    <View style={[Styles.container, {backgroundColor: backgroundColor}]}>
      <View style={Styles.detail}>
        <Text style={Styles.subject}>{subject}</Text>
        <Text style={Styles.material}>{material}</Text>
        <View style={Styles.dateWrapper}>
          <Image style={Styles.clock} source={ICONS.clock} />
          <Text style={Styles.date}>{date}</Text>
        </View>
      </View>
      <View style={Styles.downloadWrapper}>
        <TouchableOpacity>
          <Image style={Styles.downloadBtn} source={ICONS.download} />
        </TouchableOpacity>
        <Text style={Styles.text}>Unduh Materi</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(24),
  },
  detail: {
    gap: verticalScale(12),
  },
  subject: {
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Bold',
    color: COLORS.white,
  },
  material: {
    fontSize: moderateScale(12),
    fontFamily: 'Satoshi-Medium',
    color: COLORS.white,
  },
  dateWrapper: {
    flexDirection: 'row',
    gap: horizontalScale(8),
    alignItems: 'center',
  },
  clock: {
    height: verticalScale(13),
    objectFit: 'contain',
  },
  date: {
    fontSize: moderateScale(10),
    fontFamily: 'Satoshi-Medium',
    color: COLORS.white,
  },
  downloadWrapper: {
    gap: verticalScale(12),
    alignItems: 'center',
  },
  downloadBtn: {
    width: horizontalScale(25),
    objectFit: 'contain',
  },
  text: {
    fontSize: moderateScale(10),
    fontFamily: 'Satoshi-Medium',
    color: COLORS.white,
  }
})

export default MateriCard