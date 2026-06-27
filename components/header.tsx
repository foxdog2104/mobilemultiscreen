import { Text, View, StyleSheet, Image } from "react-native";

function PostHeader(props) {

    var repostData = ''
    if (props.reposter) {
        console.log("Exists!")
        repostData = ("reblogged " + props.reposter)
    } else {
        console.log("No reposter")
    }

    return(
        <View style={headerStyles.postContainer}>
            <Image source={{uri: props.image}} style={headerStyles.profilepic}/>
            <Text style={headerStyles.posterText}>{props.name}</Text>
            <Text style={headerStyles.reposterText}>{repostData}</Text>
        </View>
    )
}
const headerStyles = StyleSheet.create({
    postContainer: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: '#4C4E52',
        paddingInline: 20,
        paddingBlock: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    profilepic: {
        height: 50,
        width: 50,
        borderRadius: 5
    },
    posterText: {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    },
    reposterText: {
        padding: 5,
        color: 'lightgray'
    },
    
})



export default PostHeader