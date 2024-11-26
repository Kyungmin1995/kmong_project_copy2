import Header from "@/components/Header";
import { height, screenHeight, screenWidth, width } from "@/globalDimension";
import { useState } from "react";
import {
  FlatList,
  ImageBackground,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Announcementdata,
  AnnouncementdataType,
  NoticeBoardData,
  NoticeBoardDataType,
} from "../lib/data";
import VolumeIcon from "@/assets/icon/volume-high.svg";
import MesseageIcon3 from "@/assets/icon/messages-3.svg";
import MesseageIcon from "@/assets/icon/message.svg";
import HeartIcon from "@/assets/icon/heart-2.svg";
import { useRouter } from "expo-router";

// 공지사항
const AnnouncementComponent = () => {
  const renderItem = ({ item }: { item: AnnouncementdataType }) => {
    return (
      <Pressable>
        <View
          style={{
            flexDirection: "row",
            gap: width * 10,
            paddingVertical: height * 20,
            borderBottomWidth: width * 0.5,
            borderColor: "#D9D9D9",
          }}
        >
          <ImageBackground
            style={{
              width: width * 165,
              height: height * 110,
              backgroundColor: "#F4F2F7",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            source={item.img}
            resizeMode={"cover"}
          >
            {item.essential && (
              <View
                style={{
                  zIndex: 3,
                }}
              >
                <Text style={[styles.categoryText, { color: "#fff" }]}>
                  {item.discripte}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#D9D9D9",
                    fontSize: width * 10,
                  }}
                >
                  필독바람
                </Text>
              </View>
            )}
          </ImageBackground>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: width * 2,
                alignItems: "center",
              }}
            >
              <VolumeIcon />
              <Text style={styles.categoryText}>{item.title}</Text>
            </View>
            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={{ flex: 1, width: width * 160, fontSize: width * 10 }}
            >
              {item.content}
            </Text>
            <Text style={{ color: "#D9D9D9", fontSize: width * 10 }}>
              {item.date}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <FlatList
      data={Announcementdata}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      decelerationRate="fast"
      keyExtractor={(item) => item.id.toString()}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};
// 게시판
const NoticeBoardCommentComponent = () => {
  const navigate = useRouter();

  const navigation = (data: any) => {
    navigate.push({
      pathname: "/boaderDetail",
      params: {
        data: JSON.stringify(data),
      },
    });
  };
  const renderItem = ({ item }: { item: NoticeBoardDataType }) => {
    return (
      <Pressable onPress={() => navigation(item)}>
        <View
          style={{
            gap: width * 10,
            paddingTop: height * 20,
            paddingBottom: height * 12,
            borderBottomWidth: width * 0.5,
            borderColor: "#D9D9D9",
            width: screenWidth - width * 36,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              gap: width * 7,
            }}
          >
            <View
              style={{
                width: width * 25,
                height: width * 25,
                borderRadius: width * 25,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <ImageBackground
                style={{
                  width: width * 25,
                  height: width * 25,
                  backgroundColor: "#F4F2F7",
                }}
                source={item.img}
                resizeMode={"contain"}
              />
            </View>
            <Text style={styles.categoryText}>{item.id}</Text>
          </View>

          <View
            style={{
              gap: 10,
            }}
          >
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                width: width * 300,
                fontSize: width * 10,
                paddingBottom: height * 17,
              }}
            >
              {item.content}
            </Text>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <View>
                <Text style={{ color: "#D9D9D9", fontSize: width * 10 }}>
                  {item.date}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  alignContent: "flex-start",
                  gap: width * 17,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Text>{item.heart}</Text>
                  <HeartIcon />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",

                    gap: 6,
                  }}
                >
                  <Text>{item.comment}</Text>
                  <MesseageIcon />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <FlatList
      data={NoticeBoardData}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default function Post() {
  const insets = useSafeAreaInsets(); //상태바 정보
  const { top, left, right, bottom } = insets;
  const [selectedTab, setSelectedTab] = useState("Nomal");

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 헤더 */}
      <View
        style={{
          flex: 1,
          top: Platform.OS === "android" ? top : null,
        }}
      >
        <Header />
        <View style={styles.content}>
          {/* 탭 버튼 섹션 */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={[
                styles.tabButton,
                selectedTab === "Nomal" && styles.tabButtonActive,
              ]}
              onPress={() => setSelectedTab("Nomal")}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedTab === "Nomal"
                    ? { color: "#fff" }
                    : { color: "#000" },
                ]}
              >
                공지사항
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.tabButton,
                selectedTab === "Comment" && styles.tabButtonActive,
              ]}
              onPress={() => setSelectedTab("Comment")}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedTab === "Comment"
                    ? { color: "#fff" }
                    : { color: "#000" },
                ]}
              >
                게시판
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              height: screenHeight - height * (height * 110 + height * top),
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selectedTab === "Nomal" ? (
              <AnnouncementComponent />
            ) : (
              <NoticeBoardCommentComponent />
            )}
          </View>
        </View>
        <Pressable style={styles.button}>
          <MesseageIcon3 />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingVertical: height * 16,
    paddingHorizontal: width * 18,
  },
  item: {
    flexDirection: "row",
    gap: width * 11,
    borderBottomWidth: width * 1,
    paddingBottom: height * 20,
    borderColor: "#D9D9D9",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  mainCategoryText: {
    fontFamily: "Pretendard",
    fontSize: width * 24,
    fontWeight: "bold",
  },
  titleText: {
    fontFamily: "Pretendard",
    fontSize: width * 16,
    fontWeight: "bold",
  },
  subtitleText: {
    fontFamily: "Pretendard",
    fontSize: width * 15,
    fontWeight: "semibold",
  },
  categoryText: {
    fontFamily: "Pretendard",
    fontSize: width * 12,
    fontWeight: "semibold",
  },
  text: {
    fontFamily: "Pretendard",
    fontSize: width * 12,
    fontWeight: "medium",
  },
  tabButton: {
    width: width * 165,
    height: height * 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 5,
    backgroundColor: "#fff",
    elevation: 5, // 안드로이드에서 그림자
    shadowColor: "#000", // iOS에서    그림자
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  tabButtonActive: {
    backgroundColor: "#FF6840",
  },
  button: {
    position: "absolute",
    bottom: height * 28,
    right: width * 18,
    width: width * 50,
    height: width * 50,
    borderRadius: width * 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    // 안드로이드 그림자
    elevation: 5,
    // iOS 그림자
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.27,
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
