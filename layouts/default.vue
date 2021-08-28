<template>
  <div :dir="$dir()" class="bg-gray-100 w-full min-h-screen">
    <div>
      <Header />
      <div class="p-6 bg-white max-w-2xl mx-auto my-5 rounded">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%; /*both html and body*/
}
</style>
