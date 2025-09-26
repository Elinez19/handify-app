import { Image, Text, View } from "react-native";

interface FeeCardProps {
  icon: any;
  title: string;
  amount: string;
  description?: string;
  className?: string;
}

const FeeCard = ({
  icon,
  title,
  amount,
  description,
  className = "",
}: FeeCardProps) => {
  return (
    <View className={`bg-white rounded-2xl p-4 shadow-sm ${className}`}>
      <View className="flex-row items-center mb-2">
        <Image source={icon} className="w-5 h-5 mr-2" />
        <Text className="text-gray-600 text-sm font-JakartaMedium">
          {title}
        </Text>
      </View>
      <Text className="text-black text-lg font-JakartaBold mb-1">{amount}</Text>
      {description && (
        <Text className="text-gray-500 text-xs font-JakartaMedium">
          {description}
        </Text>
      )}
    </View>
  );
};

export default FeeCard;
