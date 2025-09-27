import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="provider-profile"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="provider-profile/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
