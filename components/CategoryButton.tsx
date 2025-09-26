import { Text, TouchableOpacity, View } from "react-native";

interface CategoryButtonProps {
  title: string;
  isSelected?: boolean;
  onPress?: () => void;
  badge?: string;
  className?: string;
}

const CategoryButton = ({
  title,
  isSelected = false,
  onPress,
  badge,
  className = "",
}: CategoryButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-2 rounded-full flex-row items-center ${
        isSelected ? "bg-[#8B4513]" : "bg-white"
      } ${className}`}
    >
      <Text
        className={`text-base font-JakartaSemiBold ${
          isSelected ? "text-white" : "text-black"
        }`}
      >
        {title}
      </Text>
      {badge && (
        <View
          className={`ml-2 px-2 py-1 rounded-full ${
            isSelected ? "bg-white/20" : "bg-[#8B4513]"
          }`}
        >
          <Text
            className={`text-xs font-JakartaSemiBold ${
              isSelected ? "text-white" : "text-white"
            }`}
          >
            {badge}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CategoryButton;
