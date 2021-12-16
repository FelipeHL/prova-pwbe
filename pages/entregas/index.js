import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import style from './style.js'

export default function Create({ navigation }) {

    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [produto, setProduto] = useState('')
    const [erro, setErro] = useState('Preencha todos os campos')
    var entregador = {}

    const enviar = () => {
            if (nome !== '' && !isNaN(endereco) && !isNaN(produto)) {
            entregador = {
                "nome": nome,
                "endereco": endereco,
                "produto": produto,
            }

            let url = "http://10.87.202.135:8080/entregas/entregadores/:id', ";
        
            fetch(url, {
                method: "POST",
                "headers": { "Content-Type": "application/json" },
                body: JSON.stringify(entregador)
            })
                .then(resp => { return resp.status })
                .then(data => { if (data == 201) navigation.navigate('Home') })
        } else {
            setErro('Preecha conforme exemplo, não deixe em branco!')
        }
    }

    return (
        <View style={style.pag}>
            <TextInput style={style.input} placeholder='Nome' value={nome} onChange={(e) => { setNome(e.target.value) }} />
            <TextInput style={style.input} placeholder='Entrega' value={entrega} onChange={(e) => { setEndereco(e.target.value) }} />
            <TextInput style={style.input} placeholder='Produto' value={produto} onChange={(e) => { setProduto(e.target.value) }} />
            <TouchableOpacity style={style.botao} onPress={enviar}>
                <Text>Enviar</Text>
            </TouchableOpacity>
            <Text style={style.input}>{erro}</Text>
        </View>
    )
}