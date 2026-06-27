import { Text, Image, View, StyleSheet } from "react-native";

export default function Post(props) {

    return (
        <View style = {postStyles.postContainer}>
            <Image source={{uri:props.image}} style = {postStyles.postImage}/>
            <Text style = {postStyles.postText}>{props.text}</Text>
        </View>
    )
}

const postStyles = StyleSheet.create({
    postContainer: {
        flexDirection: 'column',
        backgroundColor: '#4C4E52',
        width: '100%'
    }, 
    postImage: {
        width: '100%',
        height: 338
    },
    postText: {
        color: 'white'
    }
})