import { StyleSheet, Text, View } from "react-native"

const ScreenOne = () => {
    return (
        <View style={Styles.container}>
            <Text>
                Box
            </Text>
        </View>
    )
}

export default ScreenOne

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    }
})