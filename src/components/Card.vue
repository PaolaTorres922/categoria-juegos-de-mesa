<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <Card
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :image="item.image"
      :description="item.description"
      :price="item.price"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  components: { Card },
  data() {
    return {
      items: [
        {
          title: 'Ajedrez',
          image: 'ruta/a/imagen1.jpg',
          description: 'Juego de estrategia',
          price: '$1,135',
        },
        {
          title: 'Damas',
          image: 'ruta/a/imagen2.jpg',
          description: 'Juego de mesa clásico',
          price: '$1,219',
        },
      ],
    };
  },
  methods: {
    addToCart(item) {
      console.log(`${item} agregado al carrito`);
    },
  },
};
</script>
