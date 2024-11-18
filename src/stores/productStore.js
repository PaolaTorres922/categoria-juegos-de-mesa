import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    categories: [
      {
        name: 'Juegos de Estrategia',
        color: 'bg-yellow-200 border-yellow-500 text-yellow-900',
        products: [
          { name: 'Ajedrez', price: '$1,135', image: '/ajedrez.png' },
          { name: 'Damas', price: '$1,219', image: '/damas.png' },
          { name: 'Monopoly', price: '$1,658', image: '/monopoly.png' },
          { name: 'Jumanji', price: '$1,079', image: '/jumanji.png' },
          { name: '4 en Línea', price: '$1,318', image: '/4enlinea.png' },
        ],
      },
      {
        name: 'Juegos de Cartas',
        color: 'bg-green-200 border-green-500 text-green-900',
        products: [
          { name: 'Hedbanz', price: '$998', image: '/hedbanz.png' },
          { name: 'Uno Flip', price: '$1,120', image: '/unoflip.png' },
          { name: 'Cartas Royal', price: '$1,346', image: '/royal.png' },
          { name: 'Baraja Española', price: '$185', image: '/baraja.png' },
          { name: 'Virus', price: '$638', image: '/virus.png' },
        ],
      },
      // Agrega las demás categorías aquí
    ],
  }),
});
