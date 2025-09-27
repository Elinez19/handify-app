import { LinearGradient } from "expo-linear-gradient";
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
    <LinearGradient
      colors={["#FFEDD5", "#FB923C", "#F97316", "#EA580C"]} // soft peach → bright orange → deep orange
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        {/* Skip Button */}
        <View className="flex-row justify-end items-center px-6 pt-4">
          <TouchableOpacity
            onPress={() => {
              router.replace("/(auth)/sign-up");
            }}
            className="px-4 py-2"
          >
            <Text className="text-white text-lg font-JakartaSemiBold">
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        {/* Swiper Container */}
        <View className="flex-1 -mt-14 justify-center">
          <Swiper
            ref={swiperRef}
            loop={false}
            showsPagination={true}
            paginationStyle={{
              bottom: 60,
            }}
            dot={<View className="w-4 h-2 mx-1 bg-white/40 rounded-full" />}
            activeDot={<View className="w-8 h-3 mx-1 bg-white rounded-full" />}
            onIndexChanged={(index) => setActiveIndex(index)}
          >
            {onboarding.map((item) => (
              <View
                key={item.id}
                className="flex-1 justify-center items-center px-8"
              >
                {/* Image Container */}
                <View className="w-full h-[300px] mb-8 justify-center items-center">
                  <Image
                    source={item.image}
                    className="w-full h-full"
                    resizeMode="contain"
                  />
                </View>

                {/* Text Content */}
                <View className="items-center mb-12">
                  <Text className="text-white text-3xl font-JakartaBold text-center mb-4 leading-10">
                    {item.title}
                  </Text>
                  <Text className="text-white/90 text-lg font-JakartaMedium text-center leading-7 px-4">
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
            bgVariant="onboarding"
            textVariant="secondary"
            className="shadow-lg rounded-lg"
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OnboardingScreen;
