<template>
  <header class="bg-red-500 text-white shadow-lg">
    <div class="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
      <div class="flex items-center space-x-4">
        import logo from '../assets/logo.png';
        <h1 class="text-2xl font-bold">PLAYZONE</h1>
      </div>
      <div class="flex items-center space-x-6">
        <a href="#" class="text-lg hover:underline">Categorías</a>
        <button
          class="bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-100"
        >
          Iniciar Sesión
        </button>
        <button
          class="bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-100"
        >
          Registrarse
        </button>
        <div class="relative">
          <span
            class="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 rounded-full"
            >3</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h18l-2 12H5L3 3z"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>
