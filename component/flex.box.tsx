import { StyleSheet, Text, View } from "react-native"

const FlexBox = () => {
    return (
        <View style={styles.flex}>
            <Text>this is a flex box</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    flex: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: 'red',
        flexDirection: 'row'
    }
})
export default FlexBox