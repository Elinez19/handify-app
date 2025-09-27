import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

interface NoticeBannerProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: "entry" | "exit" | "offer" | "info";
  icon?: string;
  actionText?: string;
  onAction?: () => void;
  showCancel?: boolean;
  cancelText?: string;
}

const NoticeBanner: React.FC<NoticeBannerProps> = ({
  isVisible,
  onClose,
  title,
  message,
  type = "info",
  icon,
  actionText,
  onAction,
  showCancel = true,
  cancelText = "Dismiss",
}) => {
  const getTypeStyles = () => {
    switch (type) {
      case "entry":
        return {
          iconColor: "#F97316",
          iconName: icon || "enter",
          primaryBg: "bg-orange-500",
          primaryText: "text-white",
          secondaryBg: "bg-orange-100",
          secondaryText: "text-orange-700",
        };
      case "exit":
        return {
          iconColor: "#F97316",
          iconName: icon || "exit",
          primaryBg: "bg-orange-500",
          primaryText: "text-white",
          secondaryBg: "bg-orange-100",
          secondaryText: "text-orange-700",
        };
      case "offer":
        return {
          iconColor: "#F97316",
          iconName: icon || "gift",
          primaryBg: "bg-orange-500",
          primaryText: "text-white",
          secondaryBg: "bg-orange-100",
          secondaryText: "text-orange-700",
        };
      default:
        return {
          iconColor: "#F97316",
          iconName: icon || "information-circle",
          primaryBg: "bg-orange-500",
          primaryText: "text-white",
          secondaryBg: "bg-orange-100",
          secondaryText: "text-orange-700",
        };
    }
  };

  const typeStyles = getTypeStyles();

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      backdropOpacity={0.5}
      animationIn="zoomIn"
      animationOut="zoomOut"
      animationInTiming={300}
      animationOutTiming={300}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
      }}
    >
      <View className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl">
        {/* Icon */}
        <View className="items-center mb-4">
          <View
            className="w-16 h-16 rounded-full items-center justify-center mb-3"
            style={{ backgroundColor: `${typeStyles.iconColor}15` }}
          >
            <Ionicons
              name={typeStyles.iconName as any}
              size={32}
              color={typeStyles.iconColor}
            />
          </View>
        </View>

        {/* Title */}
        <Text className="text-xl font-bold text-gray-900 text-center mb-2">
          {title}
        </Text>

        {/* Message */}
        <Text className="text-gray-600 text-center leading-6 mb-6">
          {message}
        </Text>

        {/* Buttons */}
        <View className="space-y-3">
          {actionText && onAction && (
            <TouchableOpacity
              onPress={onAction}
              className={`${typeStyles.primaryBg} rounded-2xl py-4 items-center`}
              style={{
                shadowColor: typeStyles.iconColor,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 6,
              }}
            >
              <Text className={`${typeStyles.primaryText} font-bold text-lg`}>
                {actionText}
              </Text>
            </TouchableOpacity>
          )}

          {showCancel && (
            <TouchableOpacity
              onPress={onClose}
              className="bg-gray-100 rounded-2xl py-4 items-center"
            >
              <Text className="text-gray-700 font-semibold text-lg">
                {cancelText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default NoticeBanner;
