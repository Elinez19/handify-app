import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputField from "@/components/InputField";
import NoticeBanner from "@/components/NoticeBanner";
import React, { useState } from "react";

const Profile = () => {
  const [showProfileOfferBanner, setShowProfileOfferBanner] = useState(true);

  return (
    <SafeAreaView className="flex-1">
      {/* Profile Special Offer Banner */}
      <NoticeBanner
        isVisible={showProfileOfferBanner}
        onClose={() => setShowProfileOfferBanner(false)}
        title="🎁 Profile Bonus!"
        message="Complete your profile and get 10% off your next booking plus priority customer support!"
        type="offer"
        actionText="Complete Profile"
        onAction={() => {
          setShowProfileOfferBanner(false);
          // Handle profile completion
        }}
        cancelText="Skip"
      />
      <ScrollView
        className="px-5"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text className="text-2xl font-JakartaBold my-5">My profile</Text>

        <View className="flex items-center justify-center my-5">
          <Image
            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
            className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
          />
        </View>

        <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
          <View className="flex flex-col items-start justify-start w-full">
            <InputField
              label="First name"
              placeholder={"Not Found"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Last name"
              placeholder={"Not Found"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Email"
              placeholder={"Not Found"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Phone"
              placeholder={"Not Found"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
