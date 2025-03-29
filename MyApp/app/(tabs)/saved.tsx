import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import { ScrollView } from 'react-native-gesture-handler'

const saved = () => {
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="absolute w-full z-0" />
      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      <ScrollView>
        
      </ScrollView>
    </View>
  )
}

export default saved