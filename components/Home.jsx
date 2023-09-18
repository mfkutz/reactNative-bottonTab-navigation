import { StyleSheet, Text, View } from "react-native"

const Home = () => {
    return (
        <View style={Styles.container}>
            <Text>
                Home
            </Text>
        </View>
    )
}

export default Home

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center"
    }
})