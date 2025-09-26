import { Text, TouchableOpacity } from "react-native";

interface TabButtonProps {
  title: string;
  isSelected?: boolean;
  onPress?: () => void;
  className?: string;
}

const TabButton = ({
  title,
  isSelected = false,
  onPress,
  className = "",
}: TabButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-2 rounded-full ${
        isSelected ? "bg-[#8B4513]" : "bg-gray-100"
      } ${className}`}
    >
      <Text
        className={`text-sm font-JakartaSemiBold ${
          isSelected ? "text-white" : "text-gray-600"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TabButton;
