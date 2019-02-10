import React from "react";
import { 
    View,
    Button,
    StyleSheet
} from "react-native";

export default class Login extends React.Component {
    static navigationOption = {
        title: 'Login',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button title='Splash' onPress={()=>navigate('Splash')}/>
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