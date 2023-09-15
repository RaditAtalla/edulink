import { Text, View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'
import MyStatusbar from '../atoms/MyStatusbar'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'
import LinearGradient from 'react-native-linear-gradient'

const NewsDetailLayout = ({data}) => {
  return(
    <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
      <MyStatusbar contentColor={'dark-content'} />
      <View style={Styles.imageContainer}>
        <Image source={data.image} style={Styles.image} />
        <View style={Styles.textContainer}>
          <Text style={Styles.title}>{data.title}</Text>
          <View style={Styles.newsDataWrapper}>
            <Text style={Styles.newsData}>{data.author}</Text>
            <View style={{ width: 6, height: 5, backgroundColor: COLORS.white, borderRadius: 5/2 }} />
            <Text style={Styles.newsData}>{data.date}</Text>
          </View>
        </View>
      </View>
      <View style={Styles.contentContainer}>
        <Text style={Styles.content}>{data.content}</Text>
      </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: Dimensions.get('window').width,
    height: verticalScale(350),
    objectFit: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: verticalScale(32),
    paddingHorizontal: horizontalScale(26),
    gap: verticalScale(8)
  },
  title: {
    color: COLORS.white,
    fontSize: moderateScale(24),
    fontFamily: 'Satoshi-Bold',
  },
  newsDataWrapper: {
    flexDirection: 'row',
    gap: horizontalScale(24),
    alignItems: 'center',
  },
  newsData: {
    color: COLORS.white,
    fontSize: moderateScale(12),
  },
  contentContainer: {
    flex: 1,
    paddingVertical: verticalScale(48),
    paddingHorizontal: horizontalScale(24),
    backgroundColor: COLORS.white,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  content: {
    color: COLORS.textDark,
    fontFamily: 'Satoshi-Medium',
  }
})

export default NewsDetailLayout