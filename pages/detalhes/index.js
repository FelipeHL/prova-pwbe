import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import style from './style.js'

export default function Detalhes({ navigation, route }) {

    const { id } = route.params
    const [entregador, setEntregador] = useState({
        "id": id,
        "nome": "",
        "cliente": 0,
        "endereco": 0,
        "valor": 0,
        "produto": ""
    })
    const [nome, setNome] = useState(entregador.nome)
    const [cliente, setCliente] = useState(entregador.cliente)
    const [endereco, setEndereco] = useState(entregador.endereco)
    const [valor, setValor] = useState(entregador.valor)
    const [produto,setProduto] =useState(entregador.produto)
    const [erro, setErro] = useState('Se desejar, pode alterar os dados')
    const uri = 'http://localhost:3000/entrega/entregador/endereco/' + id

    useEffect(() => {
        fetch(uri, {
            "method": "GET",
            "headers": {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            return resp.json()
        }).then(data => {
            setEntregador(data)
            if (nome == "") {
                setNome(entregador.nome)
                setCliente(entregador.cliente)
                setEndereco(entregador.endereco)
                setValor(entregador.valor)
                setProduto(entregador.produto)
            }
        })
    }, [entregador])

    const excluir = () => {
        let url = 'http://localhost:3000/academia/aluno/delete/' + id
        fetch(url, {
            method: "DELETE"
        })
            .then(resp => { return resp.status })
            .then(data => {
                if (data == 200) navigation.navigate("Listar Todos");
            })
    }

    return (
        <View style={style.pag}>
            <View style={style.out}><Text>Id:</Text><Text>{entregador.id}</Text></View>
            <View style={style.inp}><Text>Nome:</Text><TextInput value={nome} onChange={(e) => { setNome(e.target.value) }} /></View>
            <View style={style.inp}><Text>Cliente:</Text><TextInput value={cliente} onChange={(e) => { setCliente(e.target.value) }} /></View>
            <View style={style.inp}><Text>Endereco:</Text><TextInput value={endereco} onChange={(e) => { setEndereco(e.target.value) }} /></View>
            <View style={style.inp}><Text>Valor:</Text><TextInput value={valor} onChange={(e) => { setValor(e.target.value) }} /></View>
            <View style={style.inp}><Text>Produto:</Text><TextInput value={produto} onChange={(e) => { setProduto(e.target.value) }} /></View>
            <View style={style.out}><Text>Classificação:</Text><Text>{entregador.status}</Text></View>
            <View style={style.botoes}>
                <TouchableOpacity style={style.botao} onPress={alterar}>
                    <Text>Atualizar Dados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.botao} onPress={excluir}>
                    <Text>Excluir Entrega</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.inp}>{erro}</Text>
        </View>
    )
}