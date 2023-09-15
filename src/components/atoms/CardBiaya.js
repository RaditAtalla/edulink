import { View, Text, StyleSheet } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const CardBiaya = ({title, biaya, isPaid}) => {
  status = isPaid ? 'Lunas' : 'Belum bayar'
  return(
    <View style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.subtitle}>Jumlah SPP</Text>
      <Text style={Styles.biaya}>{biaya}</Text>
      <Text style={[Styles.status, {backgroundColor: isPaid ? COLORS.green : COLORS.red}]}>{status}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(24),
    backgroundColor: '#003334',
    borderRadius: 12,
    gap: verticalScale(12),
  },
  title: {
    fontSize: moderateScale(16),
    color: COLORS.white,
    fontFamily: 'Satoshi-Family',
  },
  subtitle: {
    fontSize: moderateScale(12),
    fontFamily: 'Satoshi-Medium',
    color: COLORS.white,
  },
  biaya: {
    color: COLORS.white,
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium',
  },
  status: {
    textAlign: 'center',
    width: '100%',
    paddingVertical: verticalScale(12),
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium',
    color: COLORS.white,
    borderRadius: 6,
  },
})

export default CardBiaya