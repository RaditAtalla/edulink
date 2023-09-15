import { StatusBar } from 'react-native'

const MyStatusbar = ({contentColor}) => {
  return(
    <StatusBar translucent backgroundColor='transparent' barStyle={contentColor} />
  )
}

export default MyStatusbar