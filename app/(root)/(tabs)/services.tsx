import ConfirmationModal from "@/components/ConfirmationModal";
import NoticeBanner from "@/components/NoticeBanner";
import SearchBar from "@/components/SearchBar";
import ServiceCard from "@/components/ServiceCard";
import { serviceCards, serviceCategories } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

interface FilterState {
  category: string;
  priceRange: [number, number];
  minRating: number;
  sortBy: "price" | "rating" | "popularity";
  sortOrder: "asc" | "desc";
}

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [showEntryBanner, setShowEntryBanner] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    priceRange: [0, 10000],
    minRating: 0,
    sortBy: "popularity",
    sortOrder: "desc",
  });
  const router = useRouter();

  const cardWidth = width * 0.8; // 80% of screen width
  const cardSpacing = 16;
  const sliderRef = useRef<FlatList>(null);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = serviceCards.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        filters.category === "all" ||
        service.category.toLowerCase() === filters.category.toLowerCase();

      const price = parseInt(service.price.replace(/[₹₦,]/g, ""));
      const matchesPrice =
        price >= filters.priceRange[0] && price <= filters.priceRange[1];

      const matchesRating = parseFloat(service.rating) >= filters.minRating;

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });

    // Sort services
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (filters.sortBy) {
        case "price":
          const priceA = parseInt(a.price.replace(/[₹₦,]/g, ""));
          const priceB = parseInt(b.price.replace(/[₹₦,]/g, ""));
          comparison = priceA - priceB;
          break;
        case "rating":
          comparison = parseFloat(a.rating) - parseFloat(b.rating);
          break;
        case "popularity":
          comparison = parseInt(a.reviewCount) - parseInt(b.reviewCount);
          break;
      }

      return filters.sortOrder === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [searchQuery, filters]);

  // Navigation logic
  const totalSlides = filteredServices.length;

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollToIndex({ index, animated: true });
    }
  };

  const handleBooking = (service: any) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  const confirmBooking = async () => {
    setIsBooking(true);
    // Simulate API call
    setTimeout(() => {
      setIsBooking(false);
      setShowBookingModal(false);
      setSelectedService(null);
      // Navigate to service details or show success message
      router.push(`/(root)/provider-profile/${selectedService?.id}`);
    }, 2000);
  };

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentIndex(0); // Reset to first slide when filters change
  };

  const clearFilters = () => {
    setFilters({
      category: "all",
      priceRange: [0, 10000],
      minRating: 0,
      sortBy: "popularity",
      sortOrder: "desc",
    });
    setCurrentIndex(0);
  };

  const FilterModal = () => (
    <Modal
      visible={showFilters}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row items-center justify-between p-4 border-b border-gray-200">
          <Text className="text-xl font-bold text-gray-900">Filters</Text>
          <TouchableOpacity
            onPress={() => setShowFilters(false)}
            className="p-2"
          >
            <Ionicons name="close" size={24} color="#374151" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 p-4">
          {/* Category Filter */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Category
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {[{ id: "all", name: "All" }, ...serviceCategories].map(
                (category) => (
                  <TouchableOpacity
                    key={category.id}
                    onPress={() => handleFilterChange("category", category.id)}
                    className={`px-4 py-2 rounded-full border ${
                      filters.category === category.id
                        ? "bg-orange-500 border-orange-500"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <Text
                      className={`text-sm font-medium ${
                        filters.category === category.id
                          ? "text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>

          {/* Price Range Filter */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Price Range
            </Text>
            <View className="flex-row items-center space-x-4">
              <View className="flex-1">
                <Text className="text-sm text-gray-600 mb-1">Min Price</Text>
                <TextInput
                  value={filters.priceRange[0].toString()}
                  onChangeText={(text) =>
                    handleFilterChange("priceRange", [
                      parseInt(text) || 0,
                      filters.priceRange[1],
                    ])
                  }
                  className="border border-gray-300 rounded-lg px-3 py-2"
                  keyboardType="numeric"
                  placeholder="0"
                />
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-600 mb-1">Max Price</Text>
                <TextInput
                  value={filters.priceRange[1].toString()}
                  onChangeText={(text) =>
                    handleFilterChange("priceRange", [
                      filters.priceRange[0],
                      parseInt(text) || 10000,
                    ])
                  }
                  className="border border-gray-300 rounded-lg px-3 py-2"
                  keyboardType="numeric"
                  placeholder="10000"
                />
              </View>
            </View>
          </View>

          {/* Rating Filter */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Minimum Rating
            </Text>
            <View className="flex-row space-x-2">
              {[0, 3, 4, 4.5].map((rating) => (
                <TouchableOpacity
                  key={rating}
                  onPress={() => handleFilterChange("minRating", rating)}
                  className={`px-4 py-2 rounded-full border ${
                    filters.minRating === rating
                      ? "bg-orange-500 border-orange-500"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <Text
                    className={`text-sm font-medium ${
                      filters.minRating === rating
                        ? "text-white"
                        : "text-gray-700"
                    }`}
                  >
                    {rating === 0 ? "Any" : `${rating}+`}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Sort Options */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Sort By
            </Text>
            <View className="space-y-2">
              {[
                { key: "popularity", label: "Popularity" },
                { key: "rating", label: "Rating" },
                { key: "price", label: "Price" },
              ].map((option) => (
                <TouchableOpacity
                  key={option.key}
                  onPress={() => handleFilterChange("sortBy", option.key)}
                  className={`p-3 rounded-lg border ${
                    filters.sortBy === option.key
                      ? "bg-orange-50 border-orange-500"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <Text
                    className={`font-medium ${
                      filters.sortBy === option.key
                        ? "text-orange-600"
                        : "text-gray-700"
                    }`}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Sort Order */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Sort Order
            </Text>
            <View className="flex-row space-x-2">
              <TouchableOpacity
                onPress={() => handleFilterChange("sortOrder", "desc")}
                className={`px-4 py-2 rounded-full border ${
                  filters.sortOrder === "desc"
                    ? "bg-orange-500 border-orange-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <Text
                  className={`text-sm font-medium ${
                    filters.sortOrder === "desc"
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  High to Low
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleFilterChange("sortOrder", "asc")}
                className={`px-4 py-2 rounded-full border ${
                  filters.sortOrder === "asc"
                    ? "bg-orange-500 border-orange-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <Text
                  className={`text-sm font-medium ${
                    filters.sortOrder === "asc" ? "text-white" : "text-gray-700"
                  }`}
                >
                  Low to High
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View className="p-4 border-t border-gray-200">
          <View className="flex-row space-x-3">
            <TouchableOpacity
              onPress={clearFilters}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-lg"
            >
              <Text className="text-center font-medium text-gray-700">
                Clear All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowFilters(false)}
              className="flex-1 py-3 px-4 bg-orange-500 rounded-lg"
            >
              <Text className="text-center font-medium text-white">
                Apply Filters
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );

  const SliderIndicators = () => (
    <View className="flex-row items-center justify-center space-x-2 py-4">
      <TouchableOpacity
        onPress={() => scrollToIndex(Math.max(0, currentIndex - 1))}
        disabled={currentIndex === 0}
        className={`p-2 rounded-lg ${
          currentIndex === 0 ? "bg-gray-100" : "bg-white border border-gray-300"
        }`}
      >
        <Ionicons
          name="chevron-back"
          size={20}
          color={currentIndex === 0 ? "#9CA3AF" : "#374151"}
        />
      </TouchableOpacity>

      <View className="flex-row space-x-2">
        {Array.from({ length: Math.min(5, totalSlides) }, (_, i) => {
          let indicatorIndex;
          if (totalSlides <= 5) {
            indicatorIndex = i;
          } else if (currentIndex <= 2) {
            indicatorIndex = i;
          } else if (currentIndex >= totalSlides - 3) {
            indicatorIndex = totalSlides - 5 + i;
          } else {
            indicatorIndex = currentIndex - 2 + i;
          }

          return (
            <TouchableOpacity
              key={indicatorIndex}
              onPress={() => scrollToIndex(indicatorIndex)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === indicatorIndex
                  ? "bg-orange-500"
                  : "bg-gray-300"
              }`}
            />
          );
        })}
      </View>

      <TouchableOpacity
        onPress={() =>
          scrollToIndex(Math.min(totalSlides - 1, currentIndex + 1))
        }
        disabled={currentIndex === totalSlides - 1}
        className={`p-2 rounded-lg ${
          currentIndex === totalSlides - 1
            ? "bg-gray-100"
            : "bg-white border border-gray-300"
        }`}
      >
        <Ionicons
          name="chevron-forward"
          size={20}
          color={currentIndex === totalSlides - 1 ? "#9CA3AF" : "#374151"}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Entry Notice Banner */}
      <NoticeBanner
        isVisible={showEntryBanner}
        onClose={() => setShowEntryBanner(false)}
        title="👋 Welcome to Services!"
        message="Discover our wide range of professional services. Use filters to find exactly what you need. All services come with quality guarantee!"
        type="entry"
        actionText="Start Exploring"
        onAction={() => {
          setShowEntryBanner(false);
          // Focus on search or filters
        }}
        cancelText="Got It"
      />

      {/* Header */}
      <View className="bg-white px-4 py-3 border-b border-gray-200">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-2xl font-bold text-gray-900">Services</Text>
          <TouchableOpacity
            onPress={() => setShowFilters(true)}
            className="p-2 bg-gray-100 rounded-lg"
          >
            <Ionicons name="filter" size={20} color="#374151" />
          </TouchableOpacity>
        </View>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search services..."
        />
      </View>

      {/* Results Info */}
      <View className="px-4 py-3 bg-white border-b border-gray-200">
        <Text className="text-gray-600">
          {filteredServices.length} services found
          {searchQuery && ` for "${searchQuery}"`}
        </Text>
      </View>

      {/* Services Display */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Horizontal Slider Section */}
        <View className="bg-white">
          <View className="px-4 py-3">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Featured Services
            </Text>
          </View>
          <FlatList
            ref={sliderRef}
            data={filteredServices}
            keyExtractor={(item) => `slider-${item.id}`}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardWidth + cardSpacing}
            snapToAlignment="center"
            decelerationRate="fast"
            contentContainerStyle={{
              paddingHorizontal: (width - cardWidth) / 2,
              paddingVertical: 10,
            }}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(
                event.nativeEvent.contentOffset.x / (cardWidth + cardSpacing)
              );
              setCurrentIndex(index);
            }}
            renderItem={({ item }) => (
              <View
                style={{
                  width: cardWidth,
                  marginRight: cardSpacing,
                }}
              >
                <ServiceCard
                  {...item}
                  onPress={() => {
                    // Navigate to service details
                    router.push(`/(root)/provider-profile/${item.id}`);
                  }}
                />
              </View>
            )}
          />
          {/* Slider Indicators */}
          {totalSlides > 1 && <SliderIndicators />}
        </View>

        {/* Vertical Grid Section */}
        <View className="bg-gray-50">
          <View className="px-4 py-3">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              All Services
            </Text>
          </View>
          <View className="px-4">
            {filteredServices.map((item) => (
              <View key={`grid-${item.id}`} className="w-full mb-4">
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
                      // Navigate to service details
                      router.push(`/(root)/provider-profile/${item.id}`);
                    }}
                    activeOpacity={0.8}
                  >
                    {/* Service Image */}
                    <Image
                      source={{ uri: item.image }}
                      className="w-full h-40 rounded-2xl mb-3"
                      resizeMode="cover"
                    />

                    {/* Badge */}
                    <View className="absolute top-6 left-6">
                      <View className="bg-orange-400 px-3 py-1 rounded-full">
                        <Text className="text-white text-xs font-semibold">
                          {item.badge}
                        </Text>
                      </View>
                    </View>

                    {/* Category */}
                    <View className="absolute top-6 right-6">
                      <View className="bg-white/90 px-3 py-1 rounded-full">
                        <Text className="text-gray-600 text-xs font-medium">
                          {item.category}
                        </Text>
                      </View>
                    </View>

                    {/* Content */}
                    <View className="px-1">
                      <Text className="text-black font-bold text-lg mb-1">
                        {item.title}
                      </Text>
                      <Text className="text-gray-500 text-sm mb-3 leading-5">
                        {item.description}
                      </Text>

                      {/* Price and Rating */}
                      <View className="flex-row items-center justify-between mb-3">
                        <Text className="text-orange-500 font-bold text-lg">
                          {item.price}
                        </Text>
                        <View className="flex-row items-center">
                          <Ionicons name="star" size={16} color="#FFD700" />
                          <Text className="text-gray-600 text-sm ml-1">
                            {item.rating} ({item.reviewCount})
                          </Text>
                        </View>
                      </View>

                      {/* Review Avatars */}
                      <View className="flex-row items-center mb-4">
                        <View className="flex-row">
                          {item.reviewAvatars
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
                          {item.reviewAvatars.length > 4 && (
                            <View
                              className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white items-center justify-center"
                              style={{
                                marginLeft: -8,
                                zIndex: 0,
                              }}
                            >
                              <Text className="text-gray-600 text-xs font-medium">
                                +{item.reviewAvatars.length - 4}
                              </Text>
                            </View>
                          )}
                        </View>
                        <Text className="text-gray-500 text-xs ml-2">
                          Customer reviews
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => handleBooking(item)}
                        className="bg-orange-500 rounded-md py-3 items-center"
                      >
                        <Text className="text-white font-semibold">
                          Book Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <View className="items-center justify-center py-20">
              <Ionicons name="search" size={64} color="#9CA3AF" />
              <Text className="text-xl font-semibold text-gray-500 mt-4">
                No services found
              </Text>
              <Text className="text-gray-400 text-center mt-2">
                Try adjusting your search or filters
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Filter Modal */}
      <FilterModal />

      {/* Booking Confirmation Modal */}
      <ConfirmationModal
        isVisible={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        onConfirm={confirmBooking}
        title="Confirm Booking"
        message={`Are you sure you want to book ${selectedService?.title}? This will create a service request.`}
        confirmText="Confirm Booking"
        cancelText="Cancel"
        type="success"
        icon="calendar"
        loading={isBooking}
      />
    </SafeAreaView>
  );
};

export default Services;
