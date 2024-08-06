'use client'

import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

import styles from './Cardapio.module.scss'

import categorias from '@/data/listaCategorias';
import listaCardapio from '@/data/listaCardapio';

import ItemCategoria from '../ItemCategorias';
import CardComida from '../CardComida';

export default function Cardapio(){

    const [textoBusca, setTextoBusca] = useState('')
    const [listaComidas, setListaComidas] = useState(listaCardapio)

    const handleBuscarComida = (textoDigitado) => {
        setTextoBusca(textoDigitado)
        setListaComidas(listaCardapio.filter((comida) => comida.nome.toLowerCase().includes(textoDigitado.toLowerCase()) || comida.nome.toLowerCase().includes(textoDigitado.toLowerCase())))
    }

    const handleFiltrarComidaCategoria = (categoria) => {
        setListaComidas(listaCardapio.filter((comida) => comida.categoria === categoria))
        setTextoBusca('')
    }

    const handleLimparFiltros = () => {
        setListaComidas(listaCardapio)
        setTextoBusca('')
    }

    return(
        <div id='menu' className={styles.containerCardapio}>
            <section className={styles.containerCategorias}>
                {
                    categorias.map((categoria) => (
                        <ItemCategoria categoria={categoria} handleClick={() => handleFiltrarComidaCategoria(categoria)}/>
                    ))
                }
            </section>

            <div className={styles.barraPesquisa}>
                <CiSearch/>

                <input
                    type='text'
                    value={textoBusca}
                    onChange={(event) => handleBuscarComida(event.target.value)}
                    placeholder='Pesquise aqui um dos pratos do nosso cardápio'
                />
            </div>

            <button className={styles.titulo} onClick={handleLimparFiltros}><h2>Cardápio</h2></button>

            <section className={styles.containerItensCardapio}>
                {listaComidas.map((comida) => (
                    <CardComida
                        imagem={comida.imagem}
                        nome={comida.nome}
                        categoria={comida.categoria}
                        descricao={comida.descrição}
                        valor={comida.valor}
                    />
                ))}
            </section>
        </div>
    )
}