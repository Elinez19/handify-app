import { Image, Text, TouchableOpacity, View } from "react-native";

interface ServiceCategoryProps {
  name: string;
  icon: any;
  isSelected?: boolean;
  onPress?: () => void;
  className?: string;
}

const ServiceCategory = ({
  name,
  icon,
  isSelected = false,
  onPress,
  className = "",
}: ServiceCategoryProps) => {
  return (
    <TouchableOpacity onPress={onPress} className={`items-center ${className}`}>
      <View
        className={`w-16 h-16 rounded-full items-center justify-center mb-2 ${
          isSelected ? "bg-[#8B4513]" : "bg-blue-100"
        }`}
      >
        <Image source={icon} className="w-8 h-8" />
      </View>
      <Text
        className={`text-xs font-JakartaMedium ${
          isSelected ? "text-[#8B4513]" : "text-gray-600"
        }`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ServiceCategory;
