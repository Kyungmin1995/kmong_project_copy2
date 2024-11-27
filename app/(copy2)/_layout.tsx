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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="boarder"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="watchlist"
          options={{
            title: "관심 목록",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="post"
          options={{
            title: "내가 쓴 글/댓글",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="chat"
          options={{
            title: "채팅",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            title: "프로필 설정",
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
