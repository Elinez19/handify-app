import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/CustomButton";
import { Icon } from "@/components/Icon";
import { icons } from "@/constants";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef<TextInput[]>([]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = () => {
    const otpString = otp.join("");
    if (otpString.length === 6) {
      // TODO: Implement OTP verification logic
      console.log("Verify OTP:", otpString);
      router.push("/(auth)/reset-password");
    }
  };

  const handleResendOTP = () => {
    setIsResending(true);
    // TODO: Implement resend OTP logic
    console.log("Resend OTP");
    setTimer(60);
    setIsResending(false);
  };

  const isOTPComplete = otp.every((digit) => digit !== "");

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
              icon={icons.email}
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
              Verify OTP
            </Text>
            <Text className="text-[#666666] text-lg font-JakartaMedium">
              We've sent a 6-digit verification code to your email address
            </Text>
          </View>

          {/* OTP Input Fields */}
          <View className="flex-row justify-between mb-8">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  if (ref) inputRefs.current[index] = ref;
                }}
                className="w-12 h-12 border-2 border-[#E5E5E5] rounded-lg text-center text-xl font-JakartaBold text-primary-400"
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={({ nativeEvent }) =>
                  handleKeyPress(nativeEvent.key, index)
                }
                keyboardType="numeric"
                maxLength={1}
                selectTextOnFocus
              />
            ))}
          </View>

          {/* Timer and Resend */}
          <View className="items-center mb-8">
            {timer > 0 ? (
              <Text className="text-[#666666] text-base font-JakartaMedium">
                Resend code in {timer}s
              </Text>
            ) : (
              <TouchableOpacity
                onPress={handleResendOTP}
                disabled={isResending}
                className="opacity-80"
              >
                <Text className="text-primary-400 text-base font-JakartaSemiBold">
                  {isResending ? "Sending..." : "Resend Code"}
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View className="mb-8">
            <Text className="text-[#666666] text-base font-JakartaMedium text-center leading-6">
              Didn't receive the code? Check your spam folder or try resending
            </Text>
          </View>
        </ScrollView>

        {/* Fixed Footer (Button + Link) */}
        <View className="px-6 pb-6 bg-white border-t border-gray-200">
          <CustomButton
            title="VERIFY OTP"
            onPress={handleVerifyOTP}
            className="mb-4"
            bgVariant={isOTPComplete ? "primary" : "secondary"}
          />

          <View className="flex-row justify-center">
            <Text className="text-[#666666] text-lg font-JakartaMedium">
              Wrong email?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(auth)/forgot-password")}
            >
              <Text className="text-primary-400 text-lg font-JakartaSemiBold">
                Change Email
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTPVerification;
