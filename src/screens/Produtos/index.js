import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const produtos =  [

  {
    "idproduto":1,
    "categoria":"Geladeira",   
    "descricao":"Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V",
    "preco":2069.89,
    "precofinal":1969.89,
    "imagem":"Geladeira01_1.png"   
  },

  {
    "idproduto":2,
    "categoria":"geladeira",   
    "descricao":"Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Evox - 110v",
    "preco":2448.99,
    "precofinal":2348.99,
    "imagem":"Geladeira02_1.png"  
  },
    
  {
  
    "idproduto":3,
    "categoria":"geladeira",   
    "descricao":"Geladeira Brastemp Side Inverse BRO80 540 Litros Ice Maker Evox 110v",
    "preco":5258.99,
    "precofinal":5199.99,
    "imagem":"Geladeira03_1.png"  
  },
  
  {
  
    "idproduto":4,
    "categoria":"fogao",   
    "descricao":"Fogão Brastemp 5 Bocas BFS5N - Inox",
    "preco":1599.89,
    "precofinal":1499.89,
    "imagem":"Fogao01_1.png"  
  },
  
  {
    "idproduto":5,
    "categoria":"fogao",   
    "descricao":"Fogão de Piso Mesa de Vidro Electrolux 5",
    "preco":1848.89,
    "precofinal":1748.89,
    "imagem":"Fogao02_1.png"  
  },
  
  {
    "idproduto":6,
    "categoria":"microondas",   
    "descricao":"Microondas 25L Espelhado Pme25 Philco 127V",
    "preco":679.99,
    "precofinal":579.99,
    "imagem":"Microondas01_1.png"  
  },
  
  {
    "idproduto":7,
    "categoria":"microondas",   
    "descricao":"Micro-ondas Consul Espelhado 32 Litros - CMS45 240v",
    "preco":4100.00,
    "precofinal":4000.00,
    "imagem":"Microondas02_1.png"  
  },
  
  {
    "idproduto":8,
    "categoria":"microondas",   
    "descricao":"Micro-ondas Brastemp Espelhado Grill 32",
    "preco":1173.81,
    "precofinal":1073.81,
    "imagem":"Microondas03_1.png"  
  },
  
  {
    "idproduto":9,
    "categoria":"lavadoura",   
    "descricao":"Máquina De Lavar Roupas Midea Storm",
    "preco":3099.00,
    "precofinal":2999.00,
    "imagem":"Lavadoura01_1.png"  
  },
  
  {
    "idproduto":10,
    "categoria":"lavadoura",   
    "descricao":"Lavadora de Roupas Brastemp 12Kg",
    "preco":2099.99,
    "precofinal":1999.99,
    "imagem":"Lavadoura02_1.png"  
  },
  
  {
    "idproduto":11,
    "categoria":"lavaLoucas",   
    "descricao":"Lava-Louças Electrolux Inox 14 Serviços LV14X",
    "preco":4423.90,
    "precofinal":4323.90,
    "imagem":"Lava_louca01_1.png"  
  },
  
  {
    "idproduto":12,
    "categoria":"lavaLoucas",   
    "descricao":"Lava Louças Brastemp 10 Serviços BLF10 Branca 110V",
    "preco":3699.89,
    "precofinal":3599.89,
    "imagem":"Lava_louca02_1.png"  
  }
  ]

function Produtos() {
    return (
        <View>

          <View style={styles.title}>
            <Text style={styles.textTitle}>Nossos Produtos</Text>
          </View>

          <View style={styles.list}>
            {
                produtos.map((produto, index) =>
                    <Text style={styles.textList} key={index}>
                      {produto.descricao},<br />
                      {produto.preco},<br />
                      {produto.precofinal}
                      </Text>)
            }
          </View>

        </View>
    )
}

export default Produtos;