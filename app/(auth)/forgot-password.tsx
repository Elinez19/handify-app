import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons } from "@/constants";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSendOTP = () => {
    // TODO: Implement send OTP logic
    console.log("Send OTP to:", email);
    router.push("/(auth)/otp-verification");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        {/* Header */}
        <View className="flex-row items-center px-6 pt-4 pb-6">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <Image source={icons.backArrow} className="w-6 h-6" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Image source={icons.lock} className="w-8 h-8 mb-2" />
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
            <Text className="text-[#8B4513] text-3xl font-JakartaBold mb-2">
              Forgot Password?
            </Text>
            <Text className="text-[#666666] text-lg font-JakartaMedium">
              Don't worry! It happens. Please enter the email address associated
              with your account.
            </Text>
          </View>

          {/* Form Fields */}
          <View className="space-y-4 mb-6">
            <InputField
              label="Email Address"
              icon={icons.email}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="mb-8">
            <Text className="text-[#666666] text-base font-JakartaMedium text-center leading-6">
              We'll send you a verification code to reset your password
            </Text>
          </View>
        </ScrollView>

        {/* Fixed Footer (Button + Link) */}
        <View className="px-6 pb-6 bg-white border-t border-gray-200">
          <CustomButton
            title="SEND OTP"
            onPress={handleSendOTP}
            className="mb-4"
          />

          <View className="flex-row justify-center">
            <Text className="text-[#666666] text-lg font-JakartaMedium">
              Remember your password?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
              <Text className="text-[#8B4513] text-lg font-JakartaSemiBold">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
