<template>
  <div class="resume-wrapper">
    <!-- Header Section -->
    <header class="resume-header bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-2">Иван Ефимов</h1>
        <h2 class="text-xl md:text-2xl">Frontend Developer</h2>
      </div>
    </header>

    <!-- Main Content -->
    <main class="resume-main container mx-auto px-4 py-12">
      <!-- Contacts Section -->
      <section class="resume-section mb-12">
        <h3 class="text-3xl font-semibold mb-4">Контакты</h3>
        <ul class="space-y-2">
          <li><strong>Email:</strong> ivan@example.com</li>
          <li><strong>Телефон:</strong> +7 999 123-45-67</li>
        </ul>
      </section>

      <!-- Skills Section -->
      <section class="resume-section mb-12">
        <h3 class="text-3xl font-semibold mb-4">Навыки</h3>
        <div class="skills flex flex-wrap gap-4">
          <span class="btn px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-pink-400 hover:to-purple-500">
            JavaScript
          </span>
          <span class="btn px-6 py-2 bg-gradient-to-r from-green-500 to-blue-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-blue-400 hover:to-green-500">
            TypeScript
          </span>
          <span class="btn px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-green-400">
            Vue.js
          </span>
          <span class="btn px-6 py-2 bg-gradient-to-r from-yellow-500 to-red-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-red-400 hover:to-yellow-500">
            Nuxt.js
          </span>
          <span class="btn px-6 py-2 bg-gradient-to-r from-gray-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-gray-500">
            HTML
          </span>
          <span class="btn px-6 py-2 bg-gradient-to-r from-gray-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-gray-500">
            CSS
          </span>
          <span class="btn px-6 py-2 bg-gradient-to-r from-gray-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-gray-500">
            SCSS
          </span>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="resume-section mb-12">
        <h3 class="text-3xl font-semibold mb-4">Опыт работы</h3>
        <ul class="space-y-4">
          <li class="border-l-4 border-blue-600 pl-4">
            <h4 class="text-xl font-medium">Frontend Developer</h4>
            <p class="text-gray-600">Компания "WebDev" | 2022–2025</p>
            <p class="mt-2">Разработка и поддержка веб-приложений на Vue.js и Nuxt.js. Взаимодействие с командой дизайнеров и бэкенд-разработчиков.</p>
          </li>
        </ul>
      </section>
    </main>

    <!-- Footer -->
    <footer class="resume-footer bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2025 Иван Ефимов. Все права защищены.</p>
    </footer>
  </div>
</template>

<style>
.resume-wrapper {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

.resume-header {
  animation: fadeIn 1s ease;
  opacity: 0;
  animation-fill-mode: forwards;
}

.resume-main {
  animation: fadeIn 1s ease;
  opacity: 0;
  animation-fill-mode: forwards;
}

.resume-section {
  margin-bottom: 2rem;
}

.skills .btn {
  display: inline-block;
  margin: 0.5rem 0;
}

.resume-footer {
  animation: fadeIn 1s ease;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>