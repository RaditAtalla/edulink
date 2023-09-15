import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, ICONS, horizontalScale, moderateScale, verticalScale } from '../../constant'
import {useState} from 'react'

const InputField = ({ label, placeholder, icon, isPassword, value, setValue}) => {
  const [showPassword, setShowPassword] = useState(true)
  if(isPassword) {
    return(
      <View style={Styles.container}>
        <Text style={Styles.label}>{label}</Text>
        <View style={Styles.inputField}>
          <View style={Styles.leftSide}>
            <Image style={Styles.icon} source={icon} />
            <View style={Styles.border} />
            <TextInput style={Styles.input} placeholder={placeholder} placeholderTextColor={COLORS.gray} secureTextEntry={showPassword} onChangeText={setValue} value={value} />
          </View>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image style={Styles.eye} source={showPassword ? ICONS.eyeInactive : ICONS.eyeActive} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return(
      <View style={Styles.container}>
        <Text style={Styles.label}>{label}</Text>
        <View style={Styles.inputField}>
          <View style={Styles.leftSide}>
            <Image style={Styles.icon} source={icon} />
            <View style={Styles.border} />
            <TextInput style={Styles.input} placeholder={placeholder} placeholderTextColor={COLORS.gray} onChangeText={setValue} value={value} />
          </View>
        </View>
      </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    gap: verticalScale(16)
  },
  label: {
    color: COLORS.textDark,
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium'
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: COLORS.gray,
    paddingHorizontal: horizontalScale(24),
  },
  leftSide: {
    flexDirection: 'row',
    gap: horizontalScale(16),
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    width: horizontalScale(24),
    height: verticalScale(24),
    objectFit: 'contain',
  },
  border: {
    width: horizontalScale(2),
    height: verticalScale(24),
    backgroundColor: COLORS.gray,
    borderRadius: 50,
  },
  input: {
    color: COLORS.textDark,
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium',
    width: '80%',
    flex: 1,
  },
  eye: {
    width: horizontalScale(24),
    height: verticalScale(24),
    objectFit: 'contain',
  }
})

export default InputField