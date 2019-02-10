import React from "react";
import { 
    View,
    Button,
    StyleSheet
} from "react-native";

export default class Splash extends React.Component {
    static navigationOption = {
        title: 'Splash',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button title='Login' onPress={()=>navigate('Login')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});