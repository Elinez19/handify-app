import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ActionButton from "@/components/ActionButton";
import FeeCard from "@/components/FeeCard";
import SearchBar from "@/components/SearchBar";
import StatCard from "@/components/StatCard";
import TabButton from "@/components/TabButton";
import { icons, images } from "@/constants";

const ProviderProfile = () => {
  const { id } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About", "Availability", "Experience", "Reviews"];

  const providerData = {
    id: Number(id) || 1,
    name: "Julian Marcu Elian",
    profession: "Painter • Builder",
    rate: "₹349/hrs",
    rating: "4.8",
    reviews: "5k+ Reviews",
    image: images.onboarding1,
    experience: "13 yrs Experience",
    customerCount: "2000+ Customers",
    description:
      "Julian Marcu Elian is a highly skilled, professional painter with over 13 years of experience in residential and commercial painting. His expertise includes interior and exterior finishing, color consultation, and surface preparation. Julian is known for his attention to detail, punctuality, and ability to deliver high-quality results that exceed client expectations.",
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const handleHire = () => {
    console.log("Hire provider:", providerData.name);
  };

  const handleChat = () => {
    console.log("Chat with provider:", providerData.name);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <View className="mb-6">
            <Text className="text-black text-lg font-JakartaBold mb-3">
              Description
            </Text>
            <Text className="text-gray-600 text-base font-JakartaMedium leading-6">
              {providerData.description}
            </Text>
            <TouchableOpacity className="mt-2">
              <Text className="text-[#8B4513] text-sm font-JakartaSemiBold">
                Read More
              </Text>
            </TouchableOpacity>
          </View>
        );
      case "Availability":
        return (
          <View className="mb-6">
            <Text className="text-black text-lg font-JakartaBold mb-3">
              Availability
            </Text>
            <Text className="text-gray-600 text-base font-JakartaMedium">
              Available Monday to Friday, 8 AM - 6 PM
            </Text>
          </View>
        );
      case "Experience":
        return (
          <View className="mb-6">
            <Text className="text-black text-lg font-JakartaBold mb-3">
              Experience
            </Text>
            <Text className="text-gray-600 text-base font-JakartaMedium">
              {providerData.experience} in residential and commercial painting
            </Text>
          </View>
        );
      case "Reviews":
        return (
          <View className="mb-6">
            <Text className="text-black text-lg font-JakartaBold mb-3">
              Reviews
            </Text>
            <Text className="text-gray-600 text-base font-JakartaMedium">
              {providerData.reviews} with an average rating of{" "}
              {providerData.rating}
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4">
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={icons.backArrow} className="w-6 h-6" />
          </TouchableOpacity>
          <View className="flex-1 mx-4">
            <SearchBar placeholder="Search..." />
          </View>
          <View className="flex-row items-center">
            <View className="bg-[#8B4513] px-3 py-1 rounded-full flex-row items-center mr-2">
              <Image source={icons.list} className="w-4 h-4 mr-1" />
              <Text className="text-white text-sm font-JakartaSemiBold">
                Painter ✓
              </Text>
            </View>
            <TouchableOpacity>
              <Image source={icons.search} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Provider Details */}
        <View className="px-6 mb-6">
          <Text className="text-gray-500 text-sm font-JakartaMedium mb-1">
            Best Top Painter
          </Text>
          <Text className="text-black text-2xl font-JakartaBold mb-1">
            {providerData.name}
          </Text>
          <Text className="text-gray-600 text-base font-JakartaMedium mb-2">
            {providerData.profession}
          </Text>
          <Text className="text-[#8B4513] text-2xl font-JakartaBold mb-2">
            {providerData.rate}
          </Text>
          <View className="flex-row items-center">
            <View className="flex-row">
              {[1, 2, 3].map((i) => (
                <View
                  key={i}
                  className="w-4 h-4 bg-gray-300 rounded-full -ml-1 border border-white"
                />
              ))}
            </View>
            <Text className="text-gray-600 text-sm font-JakartaMedium ml-2">
              {providerData.reviews}
            </Text>
          </View>
        </View>

        {/* Provider Image */}
        <View className="px-6 mb-6">
          <View className="bg-white rounded-2xl p-6 items-center">
            <Image
              source={providerData.image}
              className="w-32 h-32 rounded-full mb-4"
            />
          </View>
        </View>

        {/* Key Metrics */}
        <View className="px-6 mb-6">
          <View className="flex-row justify-between">
            <StatCard
              icon={icons.list}
              title="Experience"
              value={providerData.experience}
              className="flex-1 mr-2"
            />
            <StatCard
              icon={icons.star}
              title="Rating"
              value={`${providerData.rating} Rating`}
              className="flex-1 mx-1"
            />
            <StatCard
              icon={icons.person}
              title="Customers"
              value={providerData.customerCount}
              className="flex-1 ml-2"
            />
          </View>
        </View>

        {/* Navigation Tabs */}
        <View className="px-6 mb-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-3">
              {tabs.map((tab) => (
                <TabButton
                  key={tab}
                  title={tab}
                  isSelected={activeTab === tab}
                  onPress={() => handleTabPress(tab)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Tab Content */}
        <View className="px-6 mb-6">{renderTabContent()}</View>

        {/* Fee Details */}
        <View className="px-6 mb-6">
          <View className="flex-row justify-between">
            <FeeCard
              icon={icons.dollar}
              title="Hourly Fee"
              amount="₹349.00"
              className="flex-1 mr-2"
            />
            <FeeCard
              icon={icons.person}
              title="Team Works"
              amount="₹1049.00"
              description="(4 - 5hrs)"
              className="flex-1 ml-2"
            />
          </View>
        </View>

        {/* Bottom Spacing */}
        <View className="h-20" />
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <View className="flex-row items-center justify-between">
          <ActionButton
            title="Hire Julian"
            icon={icons.list}
            onPress={handleHire}
            variant="primary"
            className="flex-1 mr-3"
          />
          <TouchableOpacity
            onPress={handleChat}
            className="w-12 h-12 bg-white border border-gray-200 rounded-full items-center justify-center"
          >
            <Image source={icons.chat} className="w-6 h-6" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProviderProfile;
