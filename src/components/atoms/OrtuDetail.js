import { View, Text, StyleSheet } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'
import Border from './Border'

const OrtuDetail = () => {
  return(
    <View style={Styles.container}>
      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Ayah</Text>
        <View style={Styles.info}>
          <View style={Styles.qs}>
            <Text style={Styles.q}>Nama</Text>
            <Text style={Styles.q}>No Telepon</Text>
            <Text style={Styles.q}>Pekerjaan</Text>
          </View>
          <View style={Styles.as}>
            <Text style={Styles.a}>John Doe</Text>
            <Text style={Styles.a}>0895327533900</Text>
            <Text style={Styles.a}>Wiraswasta</Text>
          </View>
        </View>
      </View>
      <Border />
      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Ibu</Text>
        <View style={Styles.info}>
          <View style={Styles.qs}>
            <Text style={Styles.q}>Nama</Text>
            <Text style={Styles.q}>No Telepon</Text>
            <Text style={Styles.q}>Pekerjaan</Text>
          </View>
          <View style={Styles.as}>
            <Text style={Styles.a}>Jane Doe</Text>
            <Text style={Styles.a}>0895327533900</Text>
            <Text style={Styles.a}>Ibu Rumah Tangga</Text>
          </View>
        </View>
      </View>
      <Border />
      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Wali Murid</Text>
        <View style={Styles.info}>
          <View style={Styles.qs}>
            <Text style={Styles.q}>Nama</Text>
            <Text style={Styles.q}>No Telepon</Text>
            <Text style={Styles.q}>Pekerjaan</Text>
          </View>
          <View style={Styles.as}>
            <Text style={Styles.a}>Jane Doe</Text>
            <Text style={Styles.a}>0895327533900</Text>
            <Text style={Styles.a}>Ibu Rumah Tangga</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    gap: verticalScale(32),
  },
  borderContainer: {
    paddingHorizontal: horizontalScale(24),
  },
  border: {
    width: '100%',
    height: verticalScale(3),
    backgroundColor: COLORS.gray,
  },
  section: {
    gap: verticalScale(24),
  },
  sectionTitle: {
    color: COLORS.textDark,
    fontSize: moderateScale(20),
    fontFamily: 'Satoshi-Bold',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qs: {
    gap: verticalScale(24),
  },
  as: {
    gap: verticalScale(24)
  },
  q: {
    color: COLORS.textDark,
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium',
  },
  a: {
    color: COLORS.gray,
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium',
  },
})

export default OrtuDetail