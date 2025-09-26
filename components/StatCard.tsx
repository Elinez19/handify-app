import { Image, Text, View } from "react-native";

interface StatCardProps {
  icon: any;
  title: string;
  value: string;
  className?: string;
}

const StatCard = ({ icon, title, value, className = "" }: StatCardProps) => {
  return (
    <View className={`bg-white rounded-2xl p-4 shadow-sm ${className}`}>
      <View className="flex-row items-center mb-2">
        <Image source={icon} className="w-5 h-5 mr-2" />
        <Text className="text-gray-600 text-sm font-JakartaMedium">
          {title}
        </Text>
      </View>
      <Text className="text-black text-lg font-JakartaBold">{value}</Text>
    </View>
  );
};

export default StatCard;
