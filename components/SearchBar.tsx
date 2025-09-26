import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onFilterPress?: () => void;
  className?: string;
}

const SearchBar = ({
  placeholder = "What service do you need?",
  value,
  onChangeText,
  onFilterPress,
  className = "",
}: SearchBarProps) => {
  return (
    <View
      className={`flex-row items-center bg-white rounded-2xl px-4 py-3 shadow-sm ${className}`}
    >
      <Image source={icons.search} className="w-5 h-5 mr-3" />
      <TextInput
        className="flex-1 text-base font-JakartaMedium text-gray-800"
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onFilterPress} className="ml-2">
        <Image source={icons.list} className="w-5 h-5" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
