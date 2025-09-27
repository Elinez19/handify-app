import { Tabs } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/components/Icon";
import { icons } from "@/constants";

const TabIcon = ({
  icon,
  focused,
  label,
}: {
  icon: { name: string; library: any };
  focused: boolean;
  label: string;
}) => {
  return (
    <View className="w-[75px] items-center justify-center">
      <View
        className={`w-12 h-12 items-center justify-center rounded-2xl ${
          focused ? "bg-primary-400" : "bg-transparent"
        }`}
        style={{
          shadowColor: focused ? "#000" : "transparent",
          shadowOpacity: focused ? 0.08 : 0,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: focused ? 3 : 0,
        }}
      >
        <Icon icon={icon} size={32} color={focused ? "white" : "#FF5E0E"} />
      </View>
      <Text
        numberOfLines={1}
        className={`text-[12px] mt-1 font-JakartaMedium ${
          focused ? "text-primary-400" : "text-primary-400"
        }`}
      >
        {label}
      </Text>
    </View>
  );
};

const CenterTabIcon = ({ icon }: { icon: { name: string; library: any } }) => {
  return (
    <TouchableOpacity
      className="w-16 h-16 bg-primary-400 rounded-full items-center justify-center -mt-8"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 8,
        elevation: 6,
      }}
    >
      <Icon icon={icon} size={32} color="white" />
    </TouchableOpacity>
  );
};

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          height: 90,
          position: "absolute",
          bottom: 10,
          left: 0,
          right: 0,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 6,
          elevation: 3,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} focused={focused} label="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          headerShown: false,
          tabBarIcon: () => <CenterTabIcon icon={icons.target} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.chat} focused={focused} label="Chat" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.profile} focused={focused} label="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
