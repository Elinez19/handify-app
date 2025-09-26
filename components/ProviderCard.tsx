import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants";

interface ProviderCardProps {
  name: string;
  profession: string;
  rate: string;
  rating: string;
  reviews: string;
  image: any;
  onPress?: () => void;
  onShare?: () => void;
  onHire?: () => void;
  className?: string;
}

const ProviderCard = ({
  name,
  profession,
  rate,
  rating,
  reviews,
  image,
  onPress,
  onShare,
  onHire,
  className = "",
}: ProviderCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-white rounded-2xl p-4 shadow-sm ${className}`}
    >
      <View className="flex-row items-start justify-between mb-3">
        <TouchableOpacity onPress={onShare} className="p-2">
          <Image source={icons.search} className="w-5 h-5" />
        </TouchableOpacity>
      </View>

      <View className="items-center mb-4">
        <Image source={image} className="w-20 h-20 rounded-full mb-3" />
        <Text className="text-black text-lg font-JakartaBold">{name}</Text>
        <Text className="text-gray-600 text-sm font-JakartaMedium mb-2">
          {profession}
        </Text>
      </View>

      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity
          onPress={onHire}
          className="bg-[#8B4513] px-4 py-2 rounded-full flex-row items-center"
        >
          <Text className="text-white text-sm font-JakartaSemiBold mr-1">
            {rate}
          </Text>
          <Image source={icons.checkmark} className="w-4 h-4" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image source={icons.star} className="w-4 h-4 mr-1" />
          <Text className="text-gray-600 text-sm font-JakartaMedium">
            {rating}
          </Text>
        </View>
        <Text className="text-gray-500 text-xs font-JakartaMedium">
          {reviews}
        </Text>
      </View>

      <View className="flex-row items-center mt-2">
        <Text className="text-gray-500 text-xs font-JakartaMedium mr-2">
          5+ Similar Experts
        </Text>
        <View className="flex-row">
          {[1, 2, 3].map((i) => (
            <View
              key={i}
              className="w-4 h-4 bg-gray-300 rounded-full -ml-1 border border-white"
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProviderCard;
