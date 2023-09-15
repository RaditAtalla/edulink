import { View, Text, StyleSheet } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'
import {useState} from 'react'

const CardBiaya = ({title, biaya, isPaid}) => {
  status = isPaid ? 'Belum Bayar' : 'Lunas'
  return(
    <View style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.subtitle}>Jumlah SPP</Text>
      <Text style={Styles.biaya}>{biaya}</Text>
      <View style={Styles.statusContainer}>
        <Text styles={[Styles.status, {backgroundColor: isPaid ? COLORS.green : COLORS.red}]}>{status}</Text>
      </View>
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
  statusContainer: {
    width: '100%',
    paddingVertical: verticalScale(12),
    alignItems: 'center'
  }, 
  status: {
    // textAlign: 'center',
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium',
    color: COLORS.white,
  }
})

export default CardBiaya