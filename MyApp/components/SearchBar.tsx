import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { icons } from '@/constants/icons';

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, value, onPress, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Pressable onPress={onPress}>
        <Image
          source={icons.search}
          className="size-5"
          resizeMode="contain"
          tintColor="#ab8bff"
        />
      </Pressable>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#ab8bff"
        value= {value}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
