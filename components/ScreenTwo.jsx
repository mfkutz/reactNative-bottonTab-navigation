import { StyleSheet, Text, View } from "react-native"

const ScreenTwo = () => {
    return (
        <View style={Styles.container}>
            <Text>
                Maps
            </Text>
        </View>
    )
}

export default ScreenTwo

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    }
})