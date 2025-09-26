import { Tabs } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
  label,
}: {
  source: ImageSourcePropType;
  focused: boolean;
  label: string;
}) => (
  <View className="items-center">
    <View
      className={`w-8 h-8 items-center justify-center ${
        focused ? "bg-[#8B4513]" : "bg-transparent"
      } rounded-full`}
    >
      <Image
        source={source}
        tintColor={focused ? "white" : "#9CA3AF"}
        resizeMode="contain"
        className="w-5 h-5"
      />
    </View>
    <Text
      className={`text-xs font-JakartaMedium mt-1 ${
        focused ? "text-[#8B4513]" : "text-gray-500"
      }`}
    >
      {label}
    </Text>
  </View>
);

const CenterTabIcon = ({ source }: { source: ImageSourcePropType }) => (
  <TouchableOpacity className="w-14 h-14 bg-[#8B4513] rounded-full items-center justify-center shadow-lg">
    <Image
      source={source}
      tintColor="white"
      resizeMode="contain"
      className="w-7 h-7"
    />
  </TouchableOpacity>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#8B4513",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          paddingBottom: 0,
          paddingTop: 8,
          height: 80,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.search} focused={focused} label="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          headerShown: false,
          tabBarIcon: () => <CenterTabIcon source={icons.target} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Notification",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              source={icons.chat}
              focused={focused}
              label="Notification"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} label="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
