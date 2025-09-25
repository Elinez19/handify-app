import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/CustomButton";
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
          <Image source={icons.backArrow} className="w-6 h-6" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Image source={icons.person} className="w-8 h-8 mb-2" />
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 px-6">
        <View className="mb-8">
          <Text className="text-[#8B4513] text-3xl font-JakartaBold mb-2">
            Welcome back
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
        <View className="flex-row justify-between items-center mb-8">
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            className="flex-row items-center"
          >
            <View
              className={`w-5 h-5 border-2 border-[#8B4513] rounded mr-2 ${rememberMe ? "bg-[#8B4513]" : "bg-transparent"}`}
            >
              {rememberMe && (
                <Image source={icons.checkmark} className="w-3 h-3" />
              )}
            </View>
            <Text className="text-[#666666] text-lg font-JakartaMedium">
              Remember me
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-[#8B4513] text-lg font-JakartaSemiBold">
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <CustomButton title="LOGIN" onPress={handleSignIn} className="mb-6" />

        {/* Sign Up Link */}
        <View className="flex-row justify-center">
          <Text className="text-[#666666] text-lg font-JakartaMedium">
            Don&apos;t have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
            <Text className="text-[#8B4513] text-lg font-JakartaSemiBold">
              sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
