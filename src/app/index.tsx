import { Text, View, StyleSheet, ScrollView } from "react-native";
import Post from "../../components/post";
import PostHeader from "../../components/header";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'flex-start'}}>
        <Text style={styles.logo}>t</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerOptions}>Following</Text>
        <Text style={styles.headerOptions}>For you</Text>
        <Text style={styles.headerOptions}>Your tags</Text>
      </View>
      <ScrollView>
        <PostHeader
            name = "insomniac-arrest"
            reposter = "sunflowerbutch"
            image = "https://64.media.tumblr.com/7a7abc313ad58957e094fa206e58158d/47392ab35b7e40c7-70/s64x64u_c1/a39aa38823a03ff4096848e3a636daff24fe0924.pnj"
        />
        <PostHeader
            name = "bugshroom"
            reposter = ""
            image = "https://64.media.tumblr.com/ce9a90c30bd177e5cc7bb91e9b9851c2/58d1864a3d78c539-a4/s64x64u_c1/2824cdf0e1c588f430f8ecef2bddf3423224b087.pnj"
        />
        <Post
          text = 'you have only experienced one singular lame as fuck blunt rotation in your life or what… “safety tips” is killing me Who does that.  ykw actually everyone in this blunt rotation is my nightmare blunt rotation. '
          image= 'https://64.media.tumblr.com/4cf668f12f6a9256a01f440a228e07cb/a21a99de80232398-95/s540x810/29edd00aac06bad94235f1d66c8fc9c47f463365.jpg'
        />
        <PostHeader
            name = "untitledrockshow"
            reposter = ""
            image = "https://64.media.tumblr.com/89586abdb4a006f861a3d05ae344fa48/dfaf237998e2523f-14/s64x64u_c1/49ed5d609401fc29ae63902840eb2c91d4c17354.pnj"
        />
        <Post
          text = 'dream blunt rotation '
          image= 'https://64.media.tumblr.com/32dcf3284f92933db9e2bc93a4edac4c/9d20c91ab6f62b45-7a/s540x810/57bdf80bf7b38a1453476735d6b2f962936e924b.pnj'
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor:'black'
  },
  logo: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: 25
  },
  headerContainer: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  headerOptions: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'semibold',
    paddingInline: 15,
    paddingBlock: 15
  }
});
