import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="find-handyman" options={{ headerShown: false }} />
      <Stack.Screen
        name="confirm-order"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="book-handyman"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
