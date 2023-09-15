import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'
import { Shadow } from 'react-native-shadow-2';

const LokerCard = ({title, category, experience, skills, company, location, lastUpdated, action}) => {
  return(
    <Shadow distance={5} startColor='#5e5e5e36'>
      <TouchableOpacity style={Styles.container} onPress={action}>
        <Text style={Styles.title}>{title}</Text>
        <View style={Styles.categoryAndTime}>
          <Text style={Styles.category}>{category}</Text>
          <View style={Styles.dot} />
          <Text style={Styles.time}>{experience}</Text>
        </View>
        <View style={Styles.skills}>
          {skills.map(skill => {
            return(
              <View style={Styles.skillWrapper} key={skill}>
                <Text style={Styles.skill}>{skill}</Text>
              </View>
            )
          })}
        </View>
        <View style={Styles.companyContainer}>
          <View style={Styles.bar} />
          <View style={Styles.companyInfo}>
            <Text style={Styles.company}>{company}</Text>
            <Text style={Styles.location}>{location}</Text>
          </View>
        </View>
        <Text style={Styles.lastUpdated}>{lastUpdated}</Text>
      </TouchableOpacity>
    </Shadow>
  )
}

const Styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    // elevation: 10,
    gap: verticalScale(16),
    // backgroundColor: 'green'
  },
  title: {
    color: COLORS.textDark,
    fontSize: moderateScale(20),
    fontFamily: 'Satoshi-Bold',
  },
  categoryAndTime: {
    flexDirection: 'row',
    gap: horizontalScale(12),
    alignItems: 'center',
  },
  category: {
    color: COLORS.textDark,
    fontFamily: 'Satoshi-Regular',
  },
  dot: {
    width: horizontalScale(7),
    height: verticalScale(7),
    objectFit: 'contain',
    backgroundColor: COLORS.gray,
    borderRadius: 7/2,
  },
  time: {
    color: COLORS.textDark,
    fontFamily: 'Satoshi-Regular',
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: horizontalScale(12),
    columnGap: verticalScale(12),
  },
  skillWrapper: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(6),
  },
  skill: {
    color: COLORS.white,
    fontSize: moderateScale(12),
    fontFamily: 'Satoshi-Medium',
  },
  companyContainer: {
    flexDirection: 'row',
    gap: horizontalScale(8),
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
  },
  bar: {
    width: horizontalScale(4),
    height: verticalScale(49),
    backgroundColor: COLORS.primary,
    borderRadius: 50,
  },
  companyInfo: {
    gap: verticalScale(8),
  },
  company: {
    color: COLORS.textDark,
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium',
  },
  location: {
    color: COLORS.textDark,
    fontFamily: 'Satoshi-Regular',
  },
  lastUpdated: {
    color: COLORS.textDark,
    fontSize: moderateScale(12),
    fontFamily: 'Satoshi-Regular',
  }
})

export default LokerCard