import { Image, Text, TouchableOpacity } from "react-native";

interface ActionButtonProps {
  title: string;
  icon?: any;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const ActionButton = ({
  title,
  icon,
  onPress,
  variant = "primary",
  className = "",
}: ActionButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center justify-center px-6 py-4 rounded-2xl ${
        variant === "primary"
          ? "bg-orange-500"
          : "bg-white border border-gray-200"
      } ${className}`}
    >
      {icon && <Image source={icon} className="w-5 h-5 mr-2" />}
      <Text
        className={`text-base font-JakartaSemiBold ${
          variant === "primary" ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
