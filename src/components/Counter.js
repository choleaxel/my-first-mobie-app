import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0);
    return(
        <View style={styles.counterContainer}>
            <Text style={styles.counterText}>You clicked the button {count} times.</Text>
            <Button title="+ 🐥" onPress={() => setCount(count + 1)}/>
            <Button title="Reset" onPress={() => setCount(0)}/>
            <Button title="- 🐥" onPress={() => setCount(Math.max(count - 1, 0))}/>
            <Button title="Ok, that's enough" onPress={() => setCount(count + 666)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
        width: '80%',
        margin: 14,
        padding: 14,
        backgroundColor: '#ccf0ab',
        borderColor: '#6a5678',
        borderWidth: 8,
        borderRadius: 16,
    },
    counterText: {
        fontSize: 30,
        textAlign: "center"
    },
    })

