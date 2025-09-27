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

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignIn = () => {
    // TODO: Implement sign in logic
    console.log("Sign in data:", formData);
    router.replace("/(root)/(tabs)/home");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        {/* Header */}
        <View className="flex-row items-center px-6 pt-4 pb-6">
          <TouchableOpacity
            onPress={() =>
              router.canGoBack()
                ? router.back()
                : router.replace("/(auth)/onboarding")
            }
            className="mr-4"
          >
            <Icon icon={icons.backArrow} size={24} color="#000" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Icon
              icon={icons.person}
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
            paddingBottom: 20, // space before footer
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="mb-8">
            <Text className="text-primary-400 text-3xl font-JakartaBold mb-2">
              Welcome back
            </Text>
            <Text className="text-[#666666] text-lg font-JakartaMedium">
              Sign in to continue
            </Text>
          </View>

          {/* Form Fields */}
          <View className="space-y-4 mb-6">
            <InputField
              label="Email Address"
              icon={icons.email}
              placeholder="Enter email"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(value) => handleInputChange("email", value)}
            />

            <InputField
              label="Password"
              icon={icons.lock}
              placeholder="Enter Password"
              secureTextEntry
              value={formData.password}
              onChangeText={(value) => handleInputChange("password", value)}
            />
          </View>

          {/* Remember Me & Forgot Password */}
          <View className="flex-row justify-between items-center mb-8 gap-2">
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              className="flex-row items-center"
            >
              <View
                className={`w-5 h-5 border-2 border-primary-400 rounded mr-2 ${
                  rememberMe ? "bg-primary-400" : "bg-transparent"
                }`}
              >
                {rememberMe && (
                  <Icon icon={icons.checkmark} size={16} color="white" />
                )}
              </View>
              <Text className="text-[#666666] text-lg font-JakartaMedium">
                Remember me
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/(auth)/forgot-password")}
            >
              <Text className="text-primary-400 text-lg font-JakartaSemiBold">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Fixed Footer (Button + Link) */}
        <View className="px-6 pb-6 bg-white border-t border-gray-200">
          <CustomButton title="LOGIN" onPress={handleSignIn} className="mb-4" />

          <View className="flex-row justify-center">
            <Text className="text-[#666666] text-lg font-JakartaMedium">
              Don&apos;t have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
              <Text className="text-primary-400 text-lg font-JakartaSemiBold">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
