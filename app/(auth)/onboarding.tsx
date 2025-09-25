import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";

const OnboardingScreen = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Skip Button */}
      <View className="flex-row justify-end items-center px-6 pt-4">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/sign-up");
          }}
          className="px-4 py-2"
        >
          <Text className="text-[#8B4513] text-lg font-JakartaSemiBold">
            Skip
          </Text>
        </TouchableOpacity>
      </View>

      {/* Swiper Container */}
      <View className="flex-1 justify-center">
        <Swiper
          ref={swiperRef}
          loop={false}
          showsPagination={true}
          paginationStyle={{
            bottom: 60,
          }}
          dot={<View className="w-3 h-3 mx-1 bg-[#E5E5E5] rounded-full" />}
          activeDot={
            <View className="w-8 h-3 mx-1 bg-[#8B4513] rounded-full" />
          }
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {onboarding.map((item, index) => (
            <View
              key={item.id}
              className="flex-1 items-center justify-center px-8"
            >
              {/* Image Container */}
              <View className="flex-1 justify-center items-center mb-8">
                <Image
                  source={item.image}
                  className="w-full h-80"
                  resizeMode="contain"
                  onError={(error) => console.log("Image load error:", error)}
                  onLoad={() => console.log("Image loaded successfully")}
                />
              </View>

              {/* Text Content */}
              <View className="items-center mb-12">
                <Text className="text-[#8B4513] text-3xl font-JakartaBold text-center mb-4 leading-10">
                  {item.title}
                </Text>
                <Text className="text-[#666666] text-lg font-JakartaMedium text-center leading-7 px-4">
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </Swiper>
      </View>

      {/* Bottom Button */}
      <View className="px-6 pb-8">
        <CustomButton
          title={isLastSlide ? "Get Started" : "Next"}
          onPress={() =>
            isLastSlide
              ? router.replace("/(auth)/sign-up")
              : swiperRef.current?.scrollBy(1)
          }
          bgVariant="primary"
          className="shadow-lg"
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
