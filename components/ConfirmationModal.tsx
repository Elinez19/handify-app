import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

interface ConfirmationModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: "success" | "warning" | "danger" | "info";
  icon?: string;
  showCancel?: boolean;
  loading?: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isVisible,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "info",
  icon,
  showCancel = true,
  loading = false,
}) => {
  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          iconColor: "#F97316",
          iconName: icon || "checkmark-circle",
          confirmBg: "bg-orange-500",
          confirmText: "text-white",
        };
      case "warning":
        return {
          iconColor: "#F97316",
          iconName: icon || "warning",
          confirmBg: "bg-orange-500",
          confirmText: "text-white",
        };
      case "danger":
        return {
          iconColor: "#F97316",
          iconName: icon || "alert-circle",
          confirmBg: "bg-orange-500",
          confirmText: "text-white",
        };
      default:
        return {
          iconColor: "#F97316",
          iconName: icon || "information-circle",
          confirmBg: "bg-orange-500",
          confirmText: "text-white",
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
          <TouchableOpacity
            onPress={onConfirm}
            disabled={loading}
            className={`${typeStyles.confirmBg} rounded-2xl py-4 items-center ${
              loading ? "opacity-70" : ""
            }`}
            style={{
              shadowColor: typeStyles.iconColor,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <View className="flex-row items-center">
              {loading && (
                <View className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              )}
              <Text className={`${typeStyles.confirmText} font-bold text-lg`}>
                {loading ? "Processing..." : confirmText}
              </Text>
            </View>
          </TouchableOpacity>

          {showCancel && (
            <TouchableOpacity
              onPress={onClose}
              disabled={loading}
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

export default ConfirmationModal;
