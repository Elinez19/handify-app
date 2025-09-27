import ConfirmationModal from "@/components/ConfirmationModal";
import NoticeBanner from "@/components/NoticeBanner";
import ServiceCard from "@/components/ServiceCard";
import {
  ongoingServices,
  serviceCards,
  serviceCategories,
  topRatedProviders,
  workCategories,
} from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState("Repair");
  const [searchText, setSearchText] = useState("");
  const [showHireModal, setShowHireModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<any>(null);
  const [isHiring, setIsHiring] = useState(false);
  const [showOfferBanner, setShowOfferBanner] = useState(true);
  const router = useRouter();

  const handleHire = (provider: any) => {
    setSelectedProvider(provider);
    setShowHireModal(true);
  };

  const confirmHire = async () => {
    setIsHiring(true);
    // Simulate API call
    setTimeout(() => {
      setIsHiring(false);
      setShowHireModal(false);
      setSelectedProvider(null);
      // Navigate to services page or show success message
      router.push("/(root)/(tabs)/services");
    }, 2000);
  };

  return (
    <LinearGradient
      colors={["#FFF5F0", "#FFFFFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        {/* Special Offer Banner */}
        <NoticeBanner
          isVisible={showOfferBanner}
          onClose={() => setShowOfferBanner(false)}
          title="🎉 Special Offer!"
          message="Get 20% off your first booking. Limited time offer! Don't miss out on this amazing deal."
          type="offer"
          actionText="Claim Now"
          onAction={() => {
            setShowOfferBanner(false);
            router.push("/(root)/(tabs)/services");
          }}
          cancelText="Maybe Later"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="flex-row items-center justify-between px-6 py-4">
            <Text className="text-black text-2xl font-bold">Handify</Text>
            <View className="flex-row items-center space-x-3">
              <TouchableOpacity className="w-10 h-10 bg-orange-400 rounded-full items-center justify-center">
                <Ionicons name="add" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 bg-orange-300 rounded-full items-center justify-center">
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="white"
                />
                <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Bar */}
          <View className="px-6 mb-4">
            <View className="flex-row items-center bg-[#FDEDE6] rounded-full px-4 py-3">
              <Ionicons name="search" size={20} color="#FF6A3D" />
              <TextInput
                placeholder="What service do you need?"
                value={searchText}
                onChangeText={setSearchText}
                className="flex-1 ml-3 text-gray-700"
              />
              <Ionicons name="options" size={20} color="#FF6A3D" />
            </View>
          </View>

          {/* Work Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-6 mb-6"
          >
            <View className="flex-row space-x-3 gap-3">
              {workCategories.map((category) => {
                const isSelected = selectedCategory === category.title;
                return (
                  <TouchableOpacity
                    key={category.id}
                    onPress={() => setSelectedCategory(category.title)}
                    className={`px-4 py-2 rounded-lg border border-primary-400 ${
                      isSelected ? "bg-orange-400" : "border-primary-400"
                    }`}
                  >
                    <Text
                      className={`${
                        isSelected ? "text-white" : "text-primary-400"
                      } font-medium`}
                    >
                      {category.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          {/* Ongoing Service Banner (Swiper) */}
          <View className="px-6 mb-6 h-44">
            <Swiper
              autoplay
              autoplayTimeout={4}
              showsPagination
              dotStyle={{
                backgroundColor: "#FFD1C1",
                width: 28,
                height: 8,
                marginBottom: -24,
              }}
              activeDotStyle={{
                backgroundColor: "#FF6A3D",
                width: 28,
                height: 8,
                marginBottom: -24,
              }}
              loop
            >
              {ongoingServices.map((service) => (
                <LinearGradient
                  key={service.id}
                  colors={["#FF7E5F", "#FD3A69"]}
                  className="rounded-3xl p-4"
                >
                  <View className="flex-row items-center justify-between">
                    <View>
                      <Text className="text-white text-lg font-bold">
                        {service.name}
                      </Text>
                      <Text className="text-white">{service.profession}</Text>
                      <Text className="text-white mt-1">{service.rate}</Text>
                    </View>
                    <Image
                      source={{ uri: service.image }}
                      className="w-16 h-16 rounded-full"
                    />
                  </View>

                  <View className="mt-4">
                    <View className="h-2 bg-white/40 rounded-full">
                      <View
                        className="h-2 bg-white rounded-full"
                        style={{ width: `${service.progress}%` }}
                      />
                    </View>
                    <Text className="text-white mt-2">
                      {service.progress}% {service.progressText}
                    </Text>
                  </View>
                </LinearGradient>
              ))}
            </Swiper>
          </View>

          {/* Our Services */}
          <View className="px-6 mb-6">
            <Text className="text-black text-xl font-bold mb-4">
              Our Services
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-4 gap-4">
                {serviceCategories.map((service) => {
                  const isSelected = selectedService === service.name;
                  return (
                    <TouchableOpacity
                      key={service.id}
                      onPress={() => {
                        setSelectedService(service.name);
                        // Navigate to services tab
                        router.push("/(root)/(tabs)/services");
                      }}
                      className={`w-20 h-20 rounded-2xl items-center justify-center gap-2 ${
                        isSelected ? "bg-orange-400" : "bg-white"
                      } shadow`}
                    >
                      <Ionicons
                        name={service.icon as any}
                        size={24}
                        color={isSelected ? "white" : "#FF6A3D"}
                      />
                      <Text
                        className={`mt-2 text-sm ${
                          isSelected ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {service.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>

          {/* Top Rated Works (Swiper with multiple cards per slide) */}
          <View className="px-6 mb-6 h-64">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-black text-xl font-bold">
                Top Rated Works
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/(root)/(tabs)/services")}
              >
                <Text className="text-orange-500 font-medium">See all</Text>
              </TouchableOpacity>
            </View>

            <Swiper
              autoplay
              autoplayTimeout={5}
              showsPagination
              dotStyle={{
                backgroundColor: "#FFD1C1",
                width: 8,
                height: 8,
                marginBottom: -6,
              }}
              activeDotStyle={{
                backgroundColor: "#FF6A3D",
                width: 8,
                height: 8,
                marginBottom: -6,
              }}
              loop
            >
              {topRatedProviders.map((item) => (
                <View
                  key={item.id}
                  className="bg-white rounded-3xl p-4 flex-row items-center mx-2"
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.08,
                    shadowRadius: 6,
                    elevation: 4, // Android shadow
                  }}
                >
                  {/* Left: Provider Image */}
                  <Image
                    source={{ uri: item.image }}
                    className="w-24 h-24 rounded-2xl"
                    resizeMode="cover"
                  />

                  {/* Right: Content */}
                  <View className="flex-1 ml-4">
                    <Text className="text-black font-bold text-lg">
                      {item.name}
                    </Text>
                    <Text className="text-gray-500">{item.profession}</Text>
                    <Text className="text-orange-500 mt-1 font-semibold">
                      {item.rate}
                    </Text>
                    <Text className="text-gray-400 text-xs mt-1">
                      ★ {item.rating}
                    </Text>

                    {/* Hire Button */}
                    <TouchableOpacity
                      onPress={() => handleHire(item)}
                      className="self-start mt-3 bg-orange-400 rounded-full px-5 py-2"
                    >
                      <Text className="text-white font-semibold text-sm">
                        Hire
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </Swiper>
          </View>

          {/* Service Cards */}
          <View className="px-6 mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-black text-xl font-bold">
                Popular Services
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/(root)/(tabs)/services")}
              >
                <Text className="text-orange-500 font-medium">See all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-4 gap-4 mb-4">
                {serviceCards.map((service) => (
                  <ServiceCard
                    key={service.id}
                    {...service}
                    onPress={() => {
                      // Navigate to services tab
                      router.push("/(root)/(tabs)/services");
                    }}
                  />
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Vertical Services Grid */}
          <View className="px-6 mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-black text-xl font-bold">All Services</Text>
              <TouchableOpacity
                onPress={() => router.push("/(root)/(tabs)/services")}
              >
                <Text className="text-orange-500 font-medium">See all</Text>
              </TouchableOpacity>
            </View>

            <View className="space-y-4">
              {serviceCards.map((service) => (
                <View key={`vertical-${service.id}`} className="w-full mb-4">
                  <View
                    className="bg-white rounded-3xl p-4 w-full"
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.08,
                      shadowRadius: 6,
                      elevation: 4,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        // Navigate to services tab
                        router.push("/(root)/(tabs)/services");
                      }}
                      activeOpacity={0.8}
                    >
                      {/* Service Image */}
                      <Image
                        source={{ uri: service.image }}
                        className="w-full h-40 rounded-2xl mb-3"
                        resizeMode="cover"
                      />

                      {/* Badge */}
                      <View className="absolute top-6 left-6">
                        <View className="bg-orange-400 px-3 py-1 rounded-full">
                          <Text className="text-white text-xs font-semibold">
                            {service.badge}
                          </Text>
                        </View>
                      </View>

                      {/* Category */}
                      <View className="absolute top-6 right-6">
                        <View className="bg-white/90 px-3 py-1 rounded-full">
                          <Text className="text-gray-600 text-xs font-medium">
                            {service.category}
                          </Text>
                        </View>
                      </View>

                      {/* Content */}
                      <View className="px-1">
                        <Text className="text-black font-bold text-lg mb-1">
                          {service.title}
                        </Text>
                        <Text className="text-gray-500 text-sm mb-3 leading-5">
                          {service.description}
                        </Text>

                        {/* Price and Rating */}
                        <View className="flex-row items-center justify-between mb-3">
                          <Text className="text-orange-500 font-bold text-lg">
                            {service.price}
                          </Text>
                          <View className="flex-row items-center">
                            <Ionicons name="star" size={16} color="#FFD700" />
                            <Text className="text-gray-600 text-sm ml-1">
                              {service.rating} ({service.reviewCount})
                            </Text>
                          </View>
                        </View>

                        {/* Review Avatars */}
                        <View className="flex-row items-center mb-4">
                          <View className="flex-row">
                            {service.reviewAvatars
                              .slice(0, 4)
                              .map((avatar, index) => (
                                <Image
                                  key={index}
                                  source={{ uri: avatar }}
                                  className="w-8 h-8 rounded-full border-2 border-white"
                                  style={{
                                    marginLeft: index > 0 ? -8 : 0,
                                    zIndex: 4 - index,
                                  }}
                                />
                              ))}
                            {service.reviewAvatars.length > 4 && (
                              <View
                                className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white items-center justify-center"
                                style={{
                                  marginLeft: -8,
                                  zIndex: 0,
                                }}
                              >
                                <Text className="text-gray-600 text-xs font-medium">
                                  +{service.reviewAvatars.length - 4}
                                </Text>
                              </View>
                            )}
                          </View>
                          <Text className="text-gray-500 text-xs ml-2">
                            Customer reviews
                          </Text>
                        </View>
                        <View className="bg-orange-500 rounded-md py-3 items-center">
                          <Text className="text-white font-semibold">
                            Book Now
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View className="h-20" />
        </ScrollView>
      </SafeAreaView>

      {/* Hire Confirmation Modal */}
      <ConfirmationModal
        isVisible={showHireModal}
        onClose={() => setShowHireModal(false)}
        onConfirm={confirmHire}
        title="Confirm Hire"
        message={`Are you sure you want to hire ${selectedProvider?.name}? This will create a service request.`}
        confirmText="Confirm Hire"
        cancelText="Cancel"
        type="success"
        icon="person-add"
        loading={isHiring}
      />
    </LinearGradient>
  );
};

export default Home;
