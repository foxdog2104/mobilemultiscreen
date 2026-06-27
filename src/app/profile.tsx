import { Text, View, StyleSheet, ScrollView, Image, ImageBackground, Button } from "react-native";
import Post from "../../components/post";
import PostHeader from "../../components/header";


export default function Profile() {


    return(
        <View style= {profile.main}>
            <View style= {profile.headermain}>
                <ImageBackground
                source={{uri:'https://64.media.tumblr.com/90558a1e8ff52af5d1ffb07574eb75c9/8aff8ff5f1cec66e-89/s2048x3072/6e76b2b572f3bd4d6b1a1590a3488e0e32d71066.jpg'}}
                style={profile.backgroundheader}
                >
                    <View style={profile.settingsHeader}>
                        <Text style={profile.bgname}>gayfoxgirl</Text>
                        <Button 
                        title='00'
                        color={'white'}
                        />
                    </View>
                    <Image 
                    style={profile.profilePicture}
                    source={{uri:'https://64.media.tumblr.com/1fdac79bf5c37f3c992c8b0a73e723a9/83c04d4c0bb02866-2a/s96x96u_c1/25ace097304beb43e4f6a7756f08ddc61e3ffd46.pnj'}}/>
                </ImageBackground>
                <View style={profile.colorheader}>
                    <Text style={profile.name}>nyx</Text>
                    <Text style={profile.bio}>She/Her 22</Text>
                    <View style={profile.selector}>
                        <Text style={profile.selection}>Posts</Text>
                        <Text style={profile.selection}>Likes</Text>
                        <Text style={profile.selection}>Following</Text>
                    </View>
                </View>
            </View>
            <View>
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
            
        </View>
    )
}

const profile = StyleSheet.create({
    main: {
        backgroundColor: 'black'
    },
    headermain: {
         height: 350,
         flexDirection: 'column'
    },
    backgroundheader: {
        height:175,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        
    },
    colorheader: {
        backgroundColor: 'black',
        height:175,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    bgname: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'semibold',
        paddingLeft: 10
    },
    profilePicture: {
        display: 'flex',
        height: 120,
        width: 120,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'black',
        alignSelf: 'center',
    },
    name: {
        color: '#B2A4D4',
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingBottom: 10,
        paddingTop: 25
    },
    bio: {
        color: '#877aa8',
        alignSelf: 'center',

    },
    selector: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    selection: {
        color: 'white',
        fontSize: 12 
    },
    settingsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    settings: {
        backgroundColor: 'white'
    }
})

