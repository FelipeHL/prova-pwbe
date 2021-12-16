import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Home({ navigation }) {
    return(
        <View style={style.pag}>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Listar Todos') }}>
                <Image style={style.icone} source={require('../../assets/favicon.png')}/>
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}>Todos os entregadores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entrega nova') }}>
                <Image style={style.icone} source={require('../../assets/favicon.png')}/>
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}>Entregar</Text>
            </TouchableOpacity>
            <Image style={style.img} source={{uri:'https://doutormultas.com.br/wp-content/uploads/2019/05/entregas-rapidas-935x614.jpg'}}/>
        </View>
    )
}