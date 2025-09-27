import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/CustomButton";
import { Icon } from "@/components/Icon";
import InputField from "@/components/InputField";
import { icons } from "@/constants";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleResetPassword = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      // TODO: Show error message
      console.log("Passwords don't match");
      return;
    }

    if (formData.newPassword.length < 8) {
      // TODO: Show error message
      console.log("Password must be at least 8 characters");
      return;
    }

    // TODO: Implement reset password logic
    console.log("Reset password data:", formData);
    router.replace("/(auth)/sign-in");
  };

  const isFormValid =
    formData.newPassword.length >= 8 &&
    formData.confirmPassword.length >= 8 &&
    formData.newPassword === formData.confirmPassword;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        {/* Header */}
        <View className="flex-row items-center px-6 pt-4 pb-6">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <Icon icon={icons.backArrow} size={24} color="#000" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Icon
              icon={icons.lock}
              size={32}
              color="#FF5E0E"
              style={{ marginBottom: 8 }}
            />
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="mb-8">
            <Text className="text-primary-400 text-3xl font-JakartaBold mb-2">
              Reset Password
            </Text>
            <Text className="text-[#666666] text-lg font-JakartaMedium">
              Create a new password for your account
            </Text>
          </View>

          {/* Form Fields */}
          <View className="space-y-4 mb-6">
            <View>
              <InputField
                label="New Password"
                icon={icons.lock}
                placeholder="Enter new password"
                secureTextEntry={!showNewPassword}
                value={formData.newPassword}
                onChangeText={(value) =>
                  handleInputChange("newPassword", value)
                }
              />
              <TouchableOpacity
                onPress={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-12"
              >
                <Icon icon={icons.eyecross} size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            <View>
              <InputField
                label="Confirm Password"
                icon={icons.lock}
                placeholder="Confirm new password"
                secureTextEntry={!showConfirmPassword}
                value={formData.confirmPassword}
                onChangeText={(value) =>
                  handleInputChange("confirmPassword", value)
                }
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-12"
              >
                <Icon icon={icons.eyecross} size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Password Requirements */}
          <View className="mb-8">
            <Text className="text-[#666666] text-sm font-JakartaMedium mb-2">
              Password requirements:
            </Text>
            <View className="space-y-1">
              <Text
                className={`text-sm font-JakartaMedium ${
                  formData.newPassword.length >= 8
                    ? "text-green-600"
                    : "text-[#666666]"
                }`}
              >
                • At least 8 characters
              </Text>
              <Text
                className={`text-sm font-JakartaMedium ${
                  formData.newPassword === formData.confirmPassword &&
                  formData.confirmPassword.length > 0
                    ? "text-green-600"
                    : "text-[#666666]"
                }`}
              >
                • Passwords match
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Fixed Footer (Button + Link) */}
        <View className="px-6 pb-6 bg-white border-t border-gray-200">
          <CustomButton
            title="RESET PASSWORD"
            onPress={handleResetPassword}
            className="mb-4"
            bgVariant={isFormValid ? "primary" : "secondary"}
          />

          <View className="flex-row justify-center">
            <Text className="text-[#666666] text-lg font-JakartaMedium">
              Remember your password?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
              <Text className="text-primary-400 text-lg font-JakartaSemiBold">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetPassword;
