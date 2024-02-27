<template>
    <div>
        <section class="grid grid-cols-2 sm:grid-cols-4 gap-1 p-2">
            <button v-for="app in apps" :key="app.name" class="flex flex-1 flex-col w-full rounded-md p-1 justify-between"
                @click="toggleIframe(app)" :aria-label="app.name" :style="{ backgroundImage: app.background }"
                :aria-pressed="isActive(app)">
                <img :src="app.image" class="w-full h-auto p-1"
                    :style="{ boxShadow: isActive(app) ? 'rgba(0, 0, 0, 0.75) 3px 3px 6px -1px' : 'unset' }" />
            </button>
        </section>
        <section class="border py-2 my-1" v-if="activeApp">
            <h4 class="mb-2 text-center">{{ activeApp.name }}</h4>
            <iframe class="w-full" allow="clipboard-write" :style="{ height: activeApp.height }"
                :src="activeApp.href"></iframe>
        </section>
    </div>
</template>

<script setup lang="ts">
const apps = [
    {
        name: 'Vanilla TS Checkers',
        href: 'https://netanel-haber.github.io/checkers/',
        background: 'linear-gradient(rgba(115, 104, 122, 0.709), rgb(93, 20, 133))',
        image: '/checkers.webp',
        height: "90vh"
    },
    {
        name: 'My ChatGPT Custom Instructions',
        href: 'https://netanel-haber.github.io/chatgpt-custom-instructions/',
        background: 'radial-gradient(circle, rgb(216, 200, 200) 0%, #00a67fae 100%)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
        height: "950px"
    },
    {
        name: 'Chrome Strong Password Generator',
        href: 'https://netanel.dev/pwd',
        background: 'radial-gradient(circle at 20% 4%, #4A90E2 0%, #4A90E2 25%, #DB4437 50%, #DB4437 75%, #F4B400 100%), radial-gradient(circle at 4% 4%, #4A90E2 0%, #4A90E2 25%, #0F9D58 50%, #F4B400 75%, #F4B400 100%)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
        height: "300px"
    },
    {
        name: 'Friend Reaches 500 Wiki Edits',
        href: 'https://www.netanel.dev/talor-wiki',
        background: 'radial-gradient(circle, #d6cab9 20%, #8da7b9 60%, #2d5f73 100%)',
        image: '/globe.webp',
        height: '850px'
    }
];
if (new Set(apps.map(a => a.name)).size < apps.length)
    throw new Error("App names must be unique")

type App = typeof apps[number];
const activeApp = ref<App>()
const isActive = (app: App) => activeApp.value?.name === app.name;
const toggleIframe = (app: App) => {
    activeApp.value = isActive(app) ? undefined : app;
    document.getElementById("app")?.scrollIntoView();
}

</script>
  