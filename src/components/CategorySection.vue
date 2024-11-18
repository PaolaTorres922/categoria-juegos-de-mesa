<template>
  <section :class="category.color + ' border rounded-lg shadow-lg mb-8 p-6'">
    <h2 class="text-xl font-bold mb-4">{{ category.name }}</h2>
    <div class="grid grid-cols-5 gap-4">
      <Card
        v-for="(product, index) in category.products"
        :key="index"
        :product="product"
      />
    </div>
  </section>
</template>

<script>
import Card from './Card.vue';

export default {
  props: {
    category: Object,
  },
  components: {
    Card,
  },
};
</script>
<style scoped>
/* Contenedor principal */
.container {
  max-width: 1200px; /* Limita el ancho del catálogo a 1200px */
}

/* Estilos para las tarjetas de productos */
.product-card {
  @apply bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300;
}

/* Estilo para la imagen del producto */
.product-image {
  @apply w-full h-56 object-cover rounded-t-lg;
}

/* Título de la tarjeta */
.product-title {
  @apply text-xl font-semibold text-gray-800;
}

/* Descripción del producto */
.product-description {
  @apply text-gray-500 mt-2;
}

/* Precio del producto */
.product-price {
  @apply text-lg font-semibold text-gray-900;
}

/* Estilo del botón de compra */
.product-button {
  @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300;
}

/* Responsive design para el catálogo */
@media (max-width: 640px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* En pantallas más pequeñas, se muestran 2 columnas */
  }
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* En pantallas medianas, 3 columnas */
  }
}

@media (min-width: 1280px) {
  .grid {
    grid-template-columns: repeat(
      4,
      1fr
    ); /* En pantallas grandes, 4 columnas */
  }
}
</style>
