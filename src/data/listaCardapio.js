import Carpaccio from '/public/carppacio.jpg'
import Bruschetta from '/public/bruschetaa.jpg'
import Cheesecake from '/public/cheesecake.jpg'
import Gyoza from '/public/gyoza.jpg'
import Temaki from '/public/temaki.jpg'
import Hosomaki from '/public/hosomaki.jpg'
import Uramaki from '/public/uramaki.jpg'
import Tempura from '/public/tempura.jpg'
import Sake from '/public/sake.jpg'
import Vinho from '/public/vinho.jpg'
import Cerveja from '/public/cerveja.jpg'
import Whisky from '/public/whisky.jpg'
import Yakissoba from '/public/yakissoba.jpg'
import Karaage from '/public/karaage.jpg'
import Tonkatsu from '/public/tonkatsu.jpg'


const listaCardapio = [
    {
        nome: 'Bruschetta',
        categoria: 'Entradas',
        descrição: 'Pão italiano crocante coberto com tomates frescos, manjericão e azeite de oliva.',
        valor: 'R$ 9,20',
        imagem: Bruschetta
    },
    {
        nome: 'Carpaccio',
        categoria: 'Entradas',
        descrição: 'Fatias finas de carne bovina crua, servidas com molho de mostarda e alcaparras.',
        valor: 'R$ 32,00',
        imagem: Carpaccio
    },
    {
        nome: 'Cheesecake',
        categoria: 'Sobremesas',
        descrição: 'Deliciosa torta de queijo com base de biscoito e cobertura de frutas vermelhas.',
        valor: 'R$ 8,99',
        imagem: Cheesecake
    },
    {
        nome: 'Temaki de Salmão',
        categoria: 'Pratos Frios',
        descrição: 'Cone de alga recheado com arroz e salmão fresco.',
        valor: 'R$ 18,00',
        imagem: Temaki
    },
    {
        nome: 'Hosomaki',
        categoria: 'Pratos Frios',
        descrição: 'Pequenos rolos de sushi com recheio de peixe ou legumes.',
        valor: 'R$ 12,00',
        imagem: Hosomaki
    },
    {
        nome: 'Uramaki',
        categoria: 'Pratos Frios',
        descrição: 'Rolos de sushi com alga por dentro e arroz por fora, recheados com peixe ou legumes.',
        valor: 'R$ 15,00',
        imagem: Uramaki
    },
    {
        nome: 'Tempurá',
        categoria: 'Pratos Quentes',
        descrição: 'Legumes e camarões empanados e fritos.',
        valor: 'R$ 22,00',
        imagem: Tempura
    },
    {
        nome: 'Yakissoba',
        categoria: 'Pratos Quentes',
        descrição: 'Macarrão frito com legumes, carne e molho especial.',
        valor: 'R$ 20,00',
        imagem: Yakissoba
    },
    {
        nome: 'Tonkatsu',
        categoria: 'Pratos Quentes',
        descrição: 'Costeleta de porco empanada e frita, servida com molho tonkatsu.',
        valor: 'R$ 28,00',
        imagem: Tonkatsu
    },
    {
        nome: 'Karaage',
        categoria: 'Pratos Quentes',
        descrição: 'Frango frito japonês marinado em molho de soja, gengibre e alho.',
        valor: 'R$ 18,00',
        imagem: Karaage
    },
    {
        nome: 'Sakê',
        categoria: 'Bebidas',
        descrição: 'Tradicional bebida japonesa feita de arroz fermentado.',
        valor: 'R$ 25,00',
        imagem: Sake
    },
    {
        nome: 'Vinho',
        categoria: 'Bebidas',
        descrição: 'Vinho tinto ou branco, servido em taça.',
        valor: 'R$ 15,00',
        imagem: Vinho
    },
    {
        nome: 'Whisky',
        categoria: 'Bebidas',
        descrição: 'Bebida destilada de malte ou grãos envelhecida em barris de carvalho.',
        valor: 'R$ 30,00',
        imagem: Whisky
    },
    {
        nome: 'Cerveja',
        categoria: 'Bebidas',
        descrição: 'Cerveja artesanal ou comercial, servida gelada.',
        valor: 'R$ 10,00',
        imagem: Cerveja
    },
    {
        nome: 'Gyoza',
        categoria: 'Entradas',
        descrição: 'Pasteizinhos recheados com carne de porco e legumes, servidos com molho de soja.',
        valor: 'R$ 14,00',
        imagem: Gyoza
    }
];


export default listaCardapio;