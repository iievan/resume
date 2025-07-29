<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header Section -->
    <header class="bg-blue-600 text-white py-16 animate-fade-in">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-2">Имя</h1>
        <p class="text-xl md:text-2xl">Должность</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-12">
      <!-- Experience Section -->
      <section class="mb-12 animate-fade-in delay-100">
        <h2 class="text-3xl font-semibold mb-4">Опыт работы</h2>
        <div class="space-y-6">
          <div class="border-l-4 border-blue-600 pl-4">
            <h3 class="text-xl font-medium">Должность в компании</h3>
            <p class="text-gray-600">Название компании, Город | Годы работы</p>
            <p class="mt-2">Краткое описание обязанностей и достижений.</p>
          </div>
          <div class="border-l-4 border-blue-600 pl-4">
            <h3 class="text-xl font-medium">Должность в компании</h3>
            <p class="text-gray-600">Название компании, Город | Годы работы</p>
            <p class="mt-2">Краткое описание обязанностей и достижений.</p>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="mb-12 animate-fade-in delay-200">
        <h2 class="text-3xl font-semibold mb-4">Закрытые проекты/кейсы</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-start">
            <h3 class="text-xl font-medium mb-2">Название проекта</h3>
            <p class="text-gray-600 mb-4">Краткое описание проекта и результатов.</p>
            <button class="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-green-400 hover:to-blue-500 hover:scale-105 hover:shadow-2xl">
              Подробнее
            </button>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-start">
            <h3 class="text-xl font-medium mb-2">Название проекта</h3>
            <p class="text-gray-600 mb-4">Краткое описание проекта и результатов.</p>
            <button class="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-green-400 hover:to-blue-500 hover:scale-105 hover:shadow-2xl">
              Подробнее
            </button>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="mb-12 animate-fade-in delay-300">
        <h2 class="text-3xl font-semibold mb-4">Навыки</h2>
        <div class="flex flex-wrap gap-4">
          <button class="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-pink-400 hover:to-purple-500 hover:scale-110 hover:shadow-2xl">
            JavaScript
          </button>
          <button class="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-blue-400 hover:to-green-500 hover:scale-110 hover:shadow-2xl">
            Vue.js
          </button>
          <button class="px-6 py-2 bg-gradient-to-r from-yellow-500 to-red-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-red-400 hover:to-yellow-500 hover:scale-110 hover:shadow-2xl">
            Tailwind CSS
          </button>
          <button class="px-6 py-2 bg-gradient-to-r from-gray-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-gray-500 hover:scale-110 hover:shadow-2xl">
            Nuxt.js
          </button>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="animate-fade-in delay-400">
        <h2 class="text-3xl font-semibold mb-4">Контакты</h2>
        <div class="space-y-2">
          <p><strong>Email:</strong> example@email.com</p>
          <p><strong>Телефон:</strong> +1234567890</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/your-profile</p>
          <p><strong>GitHub:</strong> github.com/your-profile</p>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4 text-center animate-fade-in delay-500">
      <p>&copy; 2025 Имя. Все права защищены.</p>
    </footer>
  </div>
</template>

<style>
.animate-fade-in {
  animation: fadeIn 1s ease;
  opacity: 0;
  animation-fill-mode: forwards;
}
.animate-fade-in.delay-100 { animation-delay: 0.1s; }
.animate-fade-in.delay-200 { animation-delay: 0.2s; }
.animate-fade-in.delay-300 { animation-delay: 0.3s; }
.animate-fade-in.delay-400 { animation-delay: 0.4s; }
</style>