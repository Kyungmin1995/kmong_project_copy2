import React from "react";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import { Platform, SafeAreaView, View } from "react-native";

export default function StackLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          animation: "none",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "우리 마을 소식",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="boaderDetail"
          options={{
            title: "",
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
