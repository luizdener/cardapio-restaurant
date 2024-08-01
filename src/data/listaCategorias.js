import listaCardapio from "@/data/listaCardapio";

const categorias = [...new Set(listaCardapio.map(item => item.categoria))]

export default categorias;