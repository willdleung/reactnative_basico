import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Produtos from '../screens/Produtos';

const Rotas = {
    Login: {
        nome: "Login",
        screen: Login
    },
    Produtos: {
        nome: "Produtos",
        screen: Produtos
    }
}

// Cria as rotas
const Navegacao = createSwitchNavigator(Rotas);

// Insere no App
export default createAppContainer(Navegacao);