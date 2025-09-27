import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  badge: string;
  price: string;
  category: string;
  image: string;
  reviewAvatars: string[];
  rating: string;
  reviewCount: string;
  onPress?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  badge,
  price,
  category,
  image,
  reviewAvatars,
  rating,
  reviewCount,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-3xl p-4 w-80"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 4,
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Service Image */}
      <Image
        source={{ uri: image }}
        className="w-full h-40 rounded-2xl mb-3"
        resizeMode="cover"
      />

      {/* Badge */}
      <View className="absolute top-6 left-6">
        <View className="bg-orange-400 px-3 py-1 rounded-full">
          <Text className="text-white text-xs font-semibold">{badge}</Text>
        </View>
      </View>

      {/* Category */}
      <View className="absolute top-6 right-6">
        <View className="bg-white/90 px-3 py-1 rounded-full">
          <Text className="text-gray-600 text-xs font-medium">{category}</Text>
        </View>
      </View>

      {/* Content */}
      <View className="px-1">
        <Text className="text-black font-bold text-lg mb-1">{title}</Text>
        <Text className="text-gray-500 text-sm mb-3 leading-5">
          {description}
        </Text>

        {/* Price and Rating */}
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-orange-500 font-bold text-lg">{price}</Text>
          <View className="flex-row items-center">
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text className="text-gray-600 text-sm ml-1">
              {rating} ({reviewCount})
            </Text>
          </View>
        </View>

        {/* Review Avatars */}
        <View className="flex-row items-center mb-4">
          <View className="flex-row">
            {reviewAvatars.slice(0, 4).map((avatar, index) => (
              <Image
                key={index}
                source={{ uri: avatar }}
                className="w-8 h-8 rounded-full border-2 border-white"
                style={{
                  marginLeft: index > 0 ? -8 : 0,
                  zIndex: 4 - index,
                }}
              />
            ))}
            {reviewAvatars.length > 4 && (
              <View
                className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white items-center justify-center"
                style={{
                  marginLeft: -8,
                  zIndex: 0,
                }}
              >
                <Text className="text-gray-600 text-xs font-medium">
                  +{reviewAvatars.length - 4}
                </Text>
              </View>
            )}
          </View>
          <Text className="text-gray-500 text-xs ml-2">Customer reviews</Text>
        </View>
        <CustomButton
          title="Book Now"
          onPress={onPress}
          className="rounded-md"
        />
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
