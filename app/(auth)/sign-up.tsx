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

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignUp = () => {
    // TODO: Implement sign up logic
    console.log("Sign up data:", formData);
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
            paddingBottom: 20, // space before fixed footer
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="mb-8">
            <Text className="text-primary-400 text-3xl font-JakartaBold mb-2">
              Create New Account
            </Text>
            <Text className="text-[#666666] text-lg font-JakartaMedium">
              Fill Your Details Or Continue With Social Media
            </Text>
          </View>

          {/* Form Fields */}
          <View className="space-y-4">
            <InputField
              label="Full name"
              icon={icons.person}
              placeholder="Enter here"
              value={formData.fullName}
              onChangeText={(value) => handleInputChange("fullName", value)}
            />

            <InputField
              label="Email"
              icon={icons.email}
              placeholder="Enter here"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(value) => handleInputChange("email", value)}
            />

            <InputField
              label="Phone No."
              icon={icons.person}
              placeholder="000 000 0000"
              keyboardType="phone-pad"
              value={formData.phone}
              onChangeText={(value) => handleInputChange("phone", value)}
            />

            <InputField
              label="Password"
              icon={icons.lock}
              placeholder="Password"
              secureTextEntry
              value={formData.password}
              onChangeText={(value) => handleInputChange("password", value)}
            />
          </View>
        </ScrollView>

        {/* Fixed Footer (Button + Link) */}
        <View className="px-6 pb-6 bg-white border-t border-gray-200">
          <CustomButton
            title="SIGN UP"
            onPress={handleSignUp}
            className="mb-4"
          />

          <View className="flex-row justify-center">
            <Text className="text-[#666666] text-lg font-JakartaMedium">
              Already Have Account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
              <Text className="text-primary-400 text-lg font-JakartaSemiBold">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
