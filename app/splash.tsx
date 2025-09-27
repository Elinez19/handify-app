import { router } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";

const SplashScreen = () => {
  useEffect(() => {
    // Navigate to onboarding after 3 seconds
    const timer = setTimeout(() => {
      router.replace("/(auth)/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-primary-400">
      <View className="flex-1 items-center justify-center px-8">
        {/* App Logo */}
        <View className="items-center mb-12">
          <Image
            source={images.splashIcon}
            className="w-28 h-28 mb-8"
            resizeMode="contain"
          />
          <Text className="text-white text-5xl font-JakartaBold mb-3">
            Handify
          </Text>
          <Text className="text-white/90 text-xl font-JakartaMedium text-center">
            Your Trusted Handyman Service
          </Text>
        </View>

        {/* Loading Indicator */}
        <View className="flex-row items-center space-x-3">
          <View className="w-4 h-4 bg-white/70 rounded-full" />
          <View className="w-4 h-4 bg-white/80 rounded-full" />
          <View className="w-4 h-4 bg-white rounded-full" />
        </View>

        {/* Version Text */}
        <View className="absolute bottom-8">
          <Text className="text-white/60 text-sm font-JakartaMedium">
            Version 1.0.0
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
