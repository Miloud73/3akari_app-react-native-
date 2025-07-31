import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
interface settingItemsProps{
  icon : ImageSourcePropType,
  title : string,
  onPress? : () => void,
  textStyle?:string,
  showArrow?:boolean
}
const SettingsItems= ({icon,title,onPress , textStyle,showArrow=true} : settingItemsProps ) =>{
    return(
        <TouchableOpacity onPress={onPress} className='flex flex-row items-center justify-between py-3'>
    <View className='flex flex-row gap-3 items-center'>
      <Image 
        source={icon}
        className='size-6'
      />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>{title}</Text>
    </View>
    {showArrow && <Image source={ icons.rightArrow} className='size-5'/>}
  </TouchableOpacity>
    )
}
export default SettingsItems




