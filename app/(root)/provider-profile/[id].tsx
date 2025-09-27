import ConfirmationModal from "@/components/ConfirmationModal";
import NoticeBanner from "@/components/NoticeBanner";
import { images, serviceProfessionals } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
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

const ServiceDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("About");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [showExitBanner, setShowExitBanner] = useState(false);

  // Get professional data based on service ID
  const serviceId = parseInt(id as string) || 1;
  const professional =
    serviceProfessionals[serviceId as keyof typeof serviceProfessionals] ||
    serviceProfessionals[1];

  const tabs = ["About", "Availability", "Experience", "Reviews"];

  const handleBooking = () => {
    setShowBookingModal(true);
  };

  const confirmBooking = async () => {
    setIsBooking(true);
    // Simulate API call
    setTimeout(() => {
      setIsBooking(false);
      setShowBookingModal(false);
      // Navigate to success page or show success message
      router.back();
    }, 2000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <View className="px-6">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              About {professional.name.split(" ")[0]}
            </Text>
            <Text className="text-gray-600 leading-6 mb-4">
              {professional.description}
            </Text>
            <View className="mb-4">
              <Text className="text-gray-900 font-semibold mb-2">
                Specialties
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {professional.specialties.map((specialty, index) => (
                  <View
                    key={index}
                    className="bg-orange-100 px-3 py-1 rounded-full"
                  >
                    <Text className="text-orange-600 text-sm font-medium">
                      {specialty}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View className="mb-4">
              <Text className="text-gray-900 font-semibold mb-2">
                Languages
              </Text>
              <Text className="text-gray-600">
                {professional.languages.join(", ")}
              </Text>
            </View>
            <View>
              <Text className="text-gray-900 font-semibold mb-2">
                Service Area
              </Text>
              <Text className="text-gray-600">{professional.location}</Text>
            </View>

            <View className="mt-6">
              <Text className="text-lg font-semibold text-gray-900 mb-3">
                Pricing Details
              </Text>

              <View className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center mr-3">
                      <Ionicons name="cash" size={20} color="#F97316" />
                    </View>
                    <Text className="text-gray-900 font-medium">
                      Service Fee
                    </Text>
                  </View>
                  <Text className="text-orange-500 font-bold text-lg">
                    {professional.hourlyFee}
                  </Text>
                </View>
              </View>

              <View className="bg-white rounded-2xl p-4 shadow-sm">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center mr-3">
                      <Ionicons name="people" size={20} color="#F97316" />
                    </View>
                    <Text className="text-gray-900 font-medium">
                      Team Service
                    </Text>
                  </View>
                  <Text className="text-orange-500 font-bold text-lg">
                    {professional.teamWorks}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      case "Availability":
        return (
          <View className="px-6">
            <View className="bg-gray-50 rounded-2xl p-4 mb-4">
              <Text className="text-gray-900 font-semibold mb-2">
                Current Availability
              </Text>
              <Text className="text-green-600 font-medium mb-2">
                {professional.availability}
              </Text>
              <Text className="text-gray-600 text-sm">
                Response time: {professional.responseTime}
              </Text>
            </View>

            <Text className="text-lg font-semibold text-gray-900 mb-4">
              Available Time Slots
            </Text>
            <View className="space-y-3">
              {["Today", "Tomorrow", "This Week"].map((day, index) => (
                <View key={day} className="bg-white rounded-2xl p-4 shadow-sm">
                  <Text className="text-gray-900 font-medium mb-2">{day}</Text>
                  <View className="flex-row flex-wrap gap-2">
                    {["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"].map(
                      (time) => (
                        <TouchableOpacity
                          key={time}
                          className="bg-orange-100 px-3 py-2 rounded-lg"
                        >
                          <Text className="text-orange-600 font-medium text-sm">
                            {time}
                          </Text>
                        </TouchableOpacity>
                      )
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>
        );
      case "Experience":
        return (
          <View className="px-6">
            <Text className="text-lg font-semibold text-gray-900 mb-4">
              Professional Experience
            </Text>
            <View className="space-y-4">
              <View className="bg-gray-50 rounded-2xl p-4">
                <Text className="text-gray-900 font-semibold mb-1">
                  {professional.profession.split(" • ")[0]} Specialist
                </Text>
                <Text className="text-gray-500 text-sm mb-2">
                  {professional.experience} • {professional.customers}
                </Text>
                <Text className="text-gray-600 text-sm">
                  • {professional.experience} in the field
                </Text>
                <Text className="text-gray-600 text-sm">
                  • {professional.customers} served
                </Text>
                <Text className="text-gray-600 text-sm">
                  • {professional.rating}/5 average rating
                </Text>
              </View>

              <View className="bg-gray-50 rounded-2xl p-4">
                <Text className="text-gray-900 font-semibold mb-1">
                  Quality Assurance
                </Text>
                <Text className="text-gray-500 text-sm mb-2">
                  Customer Satisfaction Guarantee
                </Text>
                <Text className="text-gray-600 text-sm">
                  • {professional.reviewCount} with positive feedback
                </Text>
                <Text className="text-gray-600 text-sm">
                  • {professional.rating}/5 average customer rating
                </Text>
                <Text className="text-gray-600 text-sm">
                  • 100% satisfaction guarantee
                </Text>
              </View>
            </View>
          </View>
        );
      case "Reviews":
        return (
          <View className="px-6">
            <Text className="text-lg font-semibold text-gray-900 mb-4">
              Customer Reviews
            </Text>
            <View className="space-y-4">
              {[
                {
                  name: `${professional.name.split(" ")[0]}'s Customer`,
                  rating: 5,
                  date: "2 days ago",
                  comment: `${professional.name} provided excellent service. Professional, punctual, and the quality of work exceeded our expectations. Highly recommended for ${professional.profession.split(" • ")[0].toLowerCase()} services!`,
                  avatar: professional.reviewAvatars[0],
                },
                {
                  name: "Satisfied Customer",
                  rating: 5,
                  date: "1 week ago",
                  comment: `Outstanding service! ${professional.name} was professional, arrived on time, and completed the work efficiently. The ${professional.profession.split(" • ")[0].toLowerCase()} service was exactly what we needed. Will definitely hire again!`,
                  avatar: professional.reviewAvatars[1],
                },
                {
                  name: "Happy Client",
                  rating: 4,
                  date: "2 weeks ago",
                  comment: `Good quality work and reasonable pricing. ${professional.name} delivered exactly what was promised. Will hire again for future projects.`,
                  avatar:
                    professional.reviewAvatars[2] ||
                    professional.reviewAvatars[0],
                },
              ].map((review, index) => (
                <View
                  key={index}
                  className="bg-white rounded-2xl p-4 shadow-sm"
                >
                  <View className="flex-row items-center mb-3">
                    <Image
                      source={{ uri: review.avatar }}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <View className="flex-1">
                      <Text className="text-gray-900 font-medium">
                        {review.name}
                      </Text>
                      <View className="flex-row items-center">
                        {[...Array(5)].map((_, i) => (
                          <Ionicons
                            key={i}
                            name="star"
                            size={14}
                            color={i < review.rating ? "#FFD700" : "#E5E7EB"}
                          />
                        ))}
                        <Text className="text-gray-500 text-sm ml-2">
                          {review.date}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text className="text-gray-600">{review.comment}</Text>
                </View>
              ))}
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Exit Notice Banner */}
      <NoticeBanner
        isVisible={showExitBanner}
        onClose={() => setShowExitBanner(false)}
        title="👋 Leaving So Soon?"
        message="Don't miss out! This professional has excellent ratings and is available now. Book now to secure your spot!"
        type="exit"
        actionText="Book Now"
        onAction={() => {
          setShowExitBanner(false);
          handleBooking();
        }}
        cancelText="Continue Browsing"
      />

      {/* Header */}
      <View className="bg-white px-4 py-3 border-b border-gray-200">
        <View className="flex-row items-center justify-between mb-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>

          <View className="flex-1 mx-3">
            <TextInput
              placeholder="Search..."
              className="bg-gray-100 rounded-full px-4 py-2 text-gray-700"
            />
          </View>

          <View className="flex-row items-center space-x-2">
            <View className="bg-gray-100 rounded-lg px-3 py-2 flex-row items-center">
              <Ionicons name="brush" size={16} color="#F97316" />
              <Text className="text-orange-500 font-medium ml-1">Painter</Text>
              <Ionicons name="chevron-down" size={16} color="#F97316" />
            </View>
            <TouchableOpacity className="p-2">
              <Ionicons name="share-outline" size={20} color="#374151" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Professional Details */}
        <View className="bg-white px-6 py-6">
          <View className="flex-row items-start mb-6">
            {/* Left Side - Text Content */}
            <View className="flex-1 pr-4">
              <View className="bg-orange-100 px-3 py-1 rounded-full mb-2 self-start">
                <Text className="text-orange-600 text-sm font-medium">
                  {professional.badge}
                </Text>
              </View>

              <Text className="text-2xl font-bold text-gray-900 mb-1">
                {professional.name}
              </Text>

              <Text className="text-gray-600 mb-2">
                {professional.profession}
              </Text>

              <Text className="text-orange-500 font-bold text-lg mb-4">
                {professional.rate}
              </Text>

              <View className="flex-row items-center">
                <View className="flex-row">
                  {professional.reviewAvatars.map((avatar, index) => (
                    <Image
                      key={index}
                      source={{ uri: avatar }}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      style={{
                        marginLeft: index > 0 ? -8 : 0,
                        zIndex: 3 - index,
                      }}
                    />
                  ))}
                </View>
                <Text className="text-gray-600 text-sm ml-2">
                  {professional.reviewCount}
                </Text>
              </View>
            </View>

            {/* Right Side - Image */}
            <View className="mr-4">
              <Image
                source={images.onboarding1}
                className="w-48 h-48 rounded-3xl"
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Three Cards Below Hero Section */}
          <View className="flex-row justify-between">
            <View
              className="bg-white rounded-2xl p-4 flex-1 mr-1 border border-gray-200"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 5,
              }}
            >
              <View className="items-center">
                <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center mb-2">
                  <Ionicons name="briefcase" size={20} color="#F97316" />
                </View>
                <Text className="text-gray-900 font-semibold text-center text-sm">
                  {professional.experience}
                </Text>
              </View>
            </View>

            <View
              className="bg-white rounded-2xl p-4 flex-1 mx-1 border border-gray-200"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 5,
              }}
            >
              <View className="items-center">
                <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center mb-2">
                  <Ionicons name="star" size={20} color="#F97316" />
                </View>
                <Text className="text-gray-900 font-semibold text-center text-sm">
                  {professional.rating} Rating
                </Text>
              </View>
            </View>

            <View
              className="bg-white rounded-2xl p-4 flex-1 ml-1 border border-gray-200"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 5,
              }}
            >
              <View className="items-center">
                <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center mb-2">
                  <Ionicons name="people" size={20} color="#F97316" />
                </View>
                <Text className="text-gray-900 font-semibold text-center text-sm">
                  {professional.customers}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View className="bg-white px-6 py-4 border-b border-gray-200">
          <View className="flex-row space-x-1">
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 rounded-lg ${
                  activeTab === tab ? "bg-orange-500" : "bg-gray-100"
                }`}
              >
                <Text
                  className={`text-center font-medium ${
                    activeTab === tab ? "text-white" : "text-gray-700"
                  }`}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tab Content */}
        <View className="py-6">{renderTabContent()}</View>

        {/* Bottom Spacing */}
        <View className="h-24" />
      </ScrollView>

      {/* Action Buttons */}
      <View className="bg-white px-6 py-4 border-t border-gray-200">
        <View className="flex-row space-x-3">
          <TouchableOpacity
            onPress={handleBooking}
            className="flex-1 bg-orange-500 rounded-2xl py-4 flex-row items-center justify-center"
          >
            <Ionicons name="construct" size={20} color="white" />
            <Text className="text-white font-bold text-lg ml-2">
              Hire {professional.name.split(" ")[0]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-14 h-14 bg-gray-100 rounded-2xl items-center justify-center">
            <Ionicons name="chatbubble" size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Booking Confirmation Modal */}
      <ConfirmationModal
        isVisible={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        onConfirm={confirmBooking}
        title="Confirm Booking"
        message={`Are you sure you want to hire ${professional.name} for your service? This will create a booking request.`}
        confirmText="Confirm Booking"
        cancelText="Cancel"
        type="success"
        icon="construct"
        loading={isBooking}
        showCancel={true}
      />
    </SafeAreaView>
  );
};

export default ServiceDetails;
