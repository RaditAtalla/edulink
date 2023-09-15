import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { horizontalScale, verticalScale } from '../../constant'

const Item = ({ image, action }) => {
  return(
    <TouchableOpacity onPress={action}>
      <Image source={image} style={{ width: horizontalScale(382), height: verticalScale(191), borderRadius: 4, objectFit: 'cover' }} />
    </TouchableOpacity>
  )
}

const Gap = () => {
  return(
    <View style={{ width: horizontalScale(12) }} />
  )
}

const HCarousel = ({data}) => {
  return(
    <FlatList
      data={data}
      renderItem={({item}) => <Item image={item.image} action={item.action} />}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={<Gap />}
      snapToAlignment='start'
      decelerationRate={'fast'}
      snapToInterval={horizontalScale(382)}
      style={{
        paddingHorizontal: 10,
      }}
    />
  )
}

export default HCarousel