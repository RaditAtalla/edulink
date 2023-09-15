import { Text, View, StyleSheet } from 'react-native'
import { COLORS, moderateScale, verticalScale } from '../../constant'
const PersonalDetail = () => {
  return(
    <View style={Styles.container}>
      <View style={Styles.qs}>
        <Text style={Styles.q}>Tanggal Penerimaan</Text>
        <Text style={Styles.q}>Tanggal Lahir</Text>
        <Text style={Styles.q}>Kategori</Text>
        <Text style={Styles.q}>No Telepon</Text>
        <Text style={Styles.q}>Gelar</Text>
        <Text style={Styles.q}>Email</Text>
        <Text style={Styles.q}>Alamat Tinggal</Text>
        <Text style={Styles.q}>Alamat Permanen</Text>
        <Text style={Styles.q}>Golongan Darah</Text>
        <Text style={Styles.q}>Tinggi</Text>
        <Text style={Styles.q}>Berat</Text>
        <Text style={Styles.q}>Tertanggal</Text>
      </View>
      <View style={Styles.as}>
        <Text style={Styles.a}>17 - 03 - 2020</Text>
        <Text style={Styles.a}>17 - 11 - 2006</Text>
        <Text style={Styles.a}>-</Text>
        <Text style={Styles.a}>0895327533900</Text>
        <Text style={Styles.a}>Mr</Text>
        <Text style={Styles.a}>ibnurusyid17@gmail.com</Text>
        <Text style={Styles.a}>Medan</Text>
        <Text style={Styles.a}>Medan</Text>
        <Text style={Styles.a}>AB</Text>
        <Text style={Styles.a}>173 cm</Text>
        <Text style={Styles.a}>60 Kg</Text>
        <Text style={Styles.a}>17 - 03 - 2020</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qs: {
    gap: verticalScale(24)
  },
  as: {
    gap: verticalScale(24),
  },
  q: {
    color: COLORS.textDark,
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium'
  },
  a: {
    color: COLORS.gray,
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium'
  },
})

export default PersonalDetail