<template>
  <div :dir="$dir()" class="bg-gray-100 w-screen h-screen">
    <div>
      <Header />
      <div class="p-6 bg-white max-w-4xl m-auto my-2">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
