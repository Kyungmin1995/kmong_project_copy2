import Header from "@/components/Header";
import { height, screenWidth, width } from "@/globalDimension";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MesseageIcon from "@/assets/icon/message.svg";
import HeartIcon from "@/assets/icon/heart-2.svg";
import SendIcon from "@/assets/icon/send.svg";

import { useRoute } from "@react-navigation/native";
import { Key } from "react";
export default function Detail() {
  const insets = useSafeAreaInsets(); //상태바 정보
  const { top } = insets;
  const route = useRoute<any>();

  const data = route.params.data ? JSON.parse(route.params.data) : null;
  const { comment, content, date, heart, img, id, commentArray } = data;

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
          <View
            style={{
              gap: width * 10,
              paddingTop: height * 20,
              paddingBottom: height * 12,
              borderBottomWidth: width * 0.5,
              borderColor: "#D9D9D9",
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
                  width: width * 35,
                  height: width * 35,
                  borderRadius: width * 35,
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <ImageBackground
                  style={{
                    width: width * 35,
                    height: width * 35,
                    backgroundColor: "#F4F2F7",
                  }}
                  source={img}
                  resizeMode={"contain"}
                />
              </View>
              <Text style={styles.categoryText}>{id}</Text>
            </View>

            <View>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{
                  fontSize: width * 10,
                  height: height * 37,
                  marginBottom: height * 15,
                }}
              >
                {content}
              </Text>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ color: "#D9D9D9", fontSize: width * 10 }}>
                    {date}
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
                    <Text>{heart}</Text>
                    <HeartIcon />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Text style={styles.categoryText}>{comment}</Text>
                    <MesseageIcon />
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* 댓글 */}
          {commentArray.length > 0 &&
            commentArray.map((item: any, idx: Key | null | undefined) => {
              console.log(item);

              return (
                <View
                  key={idx}
                  style={[
                    styles.commentView,
                    {
                      marginLeft: idx !== 0 ? width * 40 : 0,
                    },
                  ]}
                >
                  <View
                    style={{
                      width: width * 35,
                      height: width * 35,
                      borderRadius: width * 35,
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: width * 35,
                        height: width * 35,
                        backgroundColor: "#F4F2F7",
                      }}
                      source={item.img}
                      resizeMode={"contain"}
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row", gap: width * 10 }}>
                      <Text style={styles.commentViewId}>{item.sender}</Text>
                      <Text style={styles.commentViewDate}>{item.date}</Text>
                    </View>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={[
                        styles.categoryText,
                        {
                          fontSize: width * 10,
                          width: width * 200,
                        },
                      ]}
                    >
                      {item.text}
                    </Text>
                  </View>
                </View>
              );
            })}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: height * 30,
            borderTopWidth: height * 1,
            width: screenWidth,
            paddingHorizontal: height * 18,
            paddingVertical: height * 12,
            borderColor: "#D9D9D9",
          }}
        >
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text
              style={{
                color: "#D9D9D9",
              }}
            >
              댓글추가
            </Text>
            <View
              style={{
                backgroundColor: "#FF6804",
                width: width * 44,
                height: height * 20,
                borderRadius: width * 5,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: width * 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: width * 10,
                }}
              >
                전송
              </Text>
              <SendIcon />
            </View>
          </View>
        </View>
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
  commentView: {
    marginTop: height * 39,
    flexDirection: "row",
    gap: width * 10,
    maxHeight: height * 105,
  },
  commentViewId: {},
  commentViewImg: {},
  commentViewText: {},
  commentViewDate: { color: "#D9D9D9", fontSize: width * 10 },
});
