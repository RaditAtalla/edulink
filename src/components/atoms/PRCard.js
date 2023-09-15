import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, ICONS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const PRCard = ({subject, grade, createdDate, submitDate}) => {
  return(
    <View style={Styles.container}>
      <View style={Styles.info}>
        <Text style={Styles.subject}>{subject} <Text style={Styles.grade}>{grade}</Text></Text>
        <View style={Styles.dateWrapper}>
          <Text style={Styles.subtitle}>Dibuat</Text>
          <Text style={Styles.date}>{createdDate}</Text>
        </View>
        <View style={Styles.dateWrapper}>
          <Text style={Styles.subtitle}>Pengumpulan</Text>
          <Text style={Styles.date}>{submitDate}</Text>
        </View>
      </View>
      <View style={Styles.lihatMateriWrapper}>
        <TouchableOpacity>
          <Image style={Styles.eye} source={ICONS.eyeWhite} />
        </TouchableOpacity>
        <Text style={Styles.lihatMateri}>Lihat Materi</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#003334',
    borderRadius: 12,
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(16),
  },
  info: {
    gap: verticalScale(12),
  },
  subject: {
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Bold',
    color: COLORS.white,
  },
  grade: {
    color: '#CFCFCF',
    fontSize: moderateScale(12),
    fontFamily: 'Satoshi-Medium',
  },
  dateWrapper: {
    gap: verticalScale(16),
  },
  subtitle: {
    color: '#CFCFCF',
    fontSize: moderateScale(12),
    fontFamily: 'Satoshi-Medium',
  },
  date: {
    color: COLORS.white,
    fontSize: moderateScale(12),
    fontFamily: 'Satoshi-Medium',
  },
  lihatMateriWrapper: {
    gap: verticalScale(12),
    alignItems: 'center',
  },
  eye: {
    width: horizontalScale(25),
    objectFit: 'contain',
  },
  lihatMateri: {
    fontSize: moderateScale(10),
    fontFamily: 'Satoshi-Medium',
    color: COLORS.white,
  }
})

export default PRCard