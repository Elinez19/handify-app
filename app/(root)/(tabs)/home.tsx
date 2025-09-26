import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CategoryButton from "@/components/CategoryButton";
import ProviderCard from "@/components/ProviderCard";
import SearchBar from "@/components/SearchBar";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import ServiceCategory from "@/components/ServiceCategory";
import { icons, images } from "@/constants";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState("Repair");
  const [searchText, setSearchText] = useState("");

  const workCategories = [
    { id: "all", title: "All", isSelected: true },
    { id: "ongoing", title: "On Going Works", badge: "16" },
    { id: "completed", title: "Completed Works" },
  ];

  const serviceCategories = [
    { id: "repair", name: "Repair", icon: icons.list, isSelected: true },
    { id: "cleaning", name: "Cleaning", icon: icons.list },
    { id: "painting", name: "Painting", icon: icons.list },
    { id: "plumbing", name: "Plumbing", icon: icons.list },
    { id: "laundry", name: "Laundry", icon: icons.list },
  ];

  const topRatedProviders = [
    {
      id: 1,
      name: "Antony Jose",
      profession: "Professional Painter",
      rate: "₹349/hrs",
      rating: "★ 4.7 (5k)",
      reviews: "5+ Similar Experts",
      image: images.onboarding1,
    },
    {
      id: 2,
      name: "David Michel",
      profession: "Professional Painter",
      rate: "₹349/hrs",
      rating: "★ 4.8 (3k)",
      reviews: "5+ Similar Experts",
      image: images.onboarding2,
    },
    {
      id: 3,
      name: "Sarah Wilson",
      profession: "Professional Cleaner",
      rate: "₹299/hrs",
      rating: "★ 4.9 (2k)",
      reviews: "5+ Similar Experts",
      image: images.onboarding3,
    },
  ];

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const handleServicePress = (service: string) => {
    setSelectedService(service);
  };

  const handleProviderPress = (providerId: number) => {
    router.push({
      pathname: "/(root)/provider-profile/[id]",
      params: { id: providerId.toString() },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4">
          <Text className="text-black text-2xl font-JakartaBold">Handify.</Text>
          <View className="flex-row items-center">
            <TouchableOpacity className="w-10 h-10 bg-red-500 rounded-full items-center justify-center mr-3">
              <Text className="text-white text-xl font-bold">+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={icons.chat} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View className="px-6 mb-6">
          <SearchBar
            placeholder="What service do you need?"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Work Categories */}
        <View className="px-6 mb-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-3">
              {workCategories.map((category) => (
                <CategoryButton
                  key={category.id}
                  title={category.title}
                  badge={category.badge}
                  isSelected={selectedCategory === category.title}
                  onPress={() => handleCategoryPress(category.title)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Ongoing Service Card */}
        <View className="px-6 mb-6">
          <ServiceCard
            name="David Michel"
            profession="Professional Painter"
            rate="₹349/hrs"
            progress={75}
            progressText="Almost done!"
            onPress={() => handleProviderPress(2)}
          />
        </View>

        {/* Ongoing Services Section */}
        <View className="px-6 mb-6">
          <SectionHeader
            title="➤ Ongoing Services"
            badge="16"
            showSeeAll
            onSeeAllPress={() => console.log("See all ongoing services")}
          />
        </View>

        {/* Our Services Section */}
        <View className="px-6 mb-6">
          <Text className="text-black text-xl font-JakartaBold mb-4">
            Our Services
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-4">
              {serviceCategories.map((service) => (
                <ServiceCategory
                  key={service.id}
                  name={service.name}
                  icon={service.icon}
                  isSelected={selectedService === service.name}
                  onPress={() => handleServicePress(service.name)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Top Rated Works Section */}
        <View className="px-6 mb-6">
          <SectionHeader
            title="Top Rated Works"
            showSeeAll
            onSeeAllPress={() => console.log("See all top rated works")}
          />
          <FlatList
            data={topRatedProviders}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="mr-4">
                <ProviderCard
                  name={item.name}
                  profession={item.profession}
                  rate={item.rate}
                  rating={item.rating}
                  reviews={item.reviews}
                  image={item.image}
                  onPress={() => handleProviderPress(item.id)}
                  onShare={() => console.log("Share provider")}
                  onHire={() => console.log("Hire provider")}
                />
              </View>
            )}
          />
        </View>

        {/* Bottom Spacing */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
