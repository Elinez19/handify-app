import { Text, TouchableOpacity, View } from "react-native";

interface SectionHeaderProps {
  title: string;
  badge?: string;
  showSeeAll?: boolean;
  onSeeAllPress?: () => void;
  className?: string;
}

const SectionHeader = ({
  title,
  badge,
  showSeeAll = false,
  onSeeAllPress,
  className = "",
}: SectionHeaderProps) => {
  return (
    <View className={`flex-row items-center justify-between mb-4 ${className}`}>
      <View className="flex-row items-center">
        <Text className="text-[#8B4513] text-lg font-JakartaBold mr-2">
          {title}
        </Text>
        {badge && (
          <View className="bg-[#8B4513] px-2 py-1 rounded-full">
            <Text className="text-white text-xs font-JakartaSemiBold">
              {badge}
            </Text>
          </View>
        )}
      </View>
      {showSeeAll && (
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text className="text-gray-500 text-sm font-JakartaMedium">
            See all &gt;
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
