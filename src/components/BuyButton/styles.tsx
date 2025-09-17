import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#01A6b3',
        padding: 15,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginBottom: 10,
    },
    button:{
        flexDirection: 'row',
    }, 
    icon:{
        marginRight: 10,
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});