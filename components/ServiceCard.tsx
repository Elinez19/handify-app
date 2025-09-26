import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants";

interface ServiceCardProps {
  name: string;
  profession: string;
  rate: string;
  progress?: number;
  progressText?: string;
  onPress?: () => void;
  className?: string;
}

const ServiceCard = ({
  name,
  profession,
  rate,
  progress,
  progressText,
  onPress,
  className = "",
}: ServiceCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-orange-500 rounded-2xl p-4 ${className}`}
    >
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center">
          <View className="w-12 h-12 bg-white/20 rounded-full items-center justify-center mr-3">
            <Image source={icons.person} className="w-6 h-6" />
          </View>
          <View>
            <Text className="text-white text-lg font-JakartaBold">{name}</Text>
            <Text className="text-white/80 text-sm font-JakartaMedium">
              {profession}
            </Text>
          </View>
        </View>
        <Text className="text-white text-lg font-JakartaBold">{rate}</Text>
      </View>

      {progress !== undefined && (
        <View>
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-white text-sm font-JakartaMedium">
              {progress}% {progressText}
            </Text>
            <Image source={icons.checkmark} className="w-4 h-4" />
          </View>
          <View className="w-full bg-white/20 rounded-full h-2">
            <View
              className="bg-white rounded-full h-2"
              style={{ width: `${progress}%` }}
            />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ServiceCard;
