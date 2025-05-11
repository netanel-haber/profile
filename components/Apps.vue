<template>
    <div>
        <section class="flex gap-2 p-1 flex-wrap justify-center">
            <button
                v-for="app in apps"
                :key="app.hash"
                :class="app.class"
                class="w-[135px] h-[135px] rounded-md focus:shadow-[rgba(0,_0,_0,_0.75)_3px_3px_6px_-1px]"
                @click="toggleIframe(app)"
                :aria-label="app.name"
                :style="{ backgroundImage: app.background }"
                :aria-pressed="isActive(app)"
            >
                <img :src="app.image" class="w-full h-full p-1 rounded-md" />
            </button>
        </section>
        <section v-if="activeApp">
            <iframe
                id="app"
                :key="activeApp.hash"
                class="w-full my-4 border"
                allow="clipboard-write"
                :style="{ height: activeApp.height }"
                :src="activeApp.href"
            ></iframe>
        </section>

    </div>
</template>

<script setup lang="ts">
const apps = Object.entries({
    checkers: {
        name: 'Vanilla TS Checkers',
        href: 'https://netanel-haber.github.io/checkers/',
        background: 'linear-gradient(rgba(115, 104, 122, 0.709), rgb(93, 20, 133))',
        image: '/checkers.webp',
        height: '775px',
    },
    localfiles: {
        name: 'Play Local Audio/Video [Mostly Mobile]',
        href: 'https://localfiles.stream',
        background: 'radial-gradient(circle at center, rgba(100, 108, 255, 0.2) 0%, rgb(0 0 0) 79%), radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)',
        image: 'https://localfiles.stream/icon.svg',
        height: '500px',
    },
    nyan: {
        name: 'Tiny React Infinite Scroll',
        href: 'https://codesandbox.io/embed/78wnx?view=preview&module=%2Fsrc%2Fuseinfinitescroll.js&hidenavigation=1',
        background: 'linear-gradient(60deg, #ff0084, #ffce00, #29adff, #ff77a8, #ffccaa)',
        image: '/nyan.gif',
        height: '500px',
        class: 'nyan',
    },
    chatgpt: {
        name: 'My ChatGPT Custom Instructions',
        href: 'https://netanel-haber.github.io/chatgpt-custom-instructions/',
        background: 'radial-gradient(circle, rgb(216, 200, 200) 0%, #00a67fae 100%)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
        height: '950px',
    },
    'thai-fruit': {
        name: 'Fruit I Ate in Thailand',
        href: '/thai-fruit.html',
        background: 'radial-gradient(circle, #f9e7ee 0%, #e7f9f2 100%)',
        image: '/mangosteen.png',
        height: '450px',
    },
    'mac-apps': {
        name: 'Suggested Mac Apps',
        href: '/mac-apps.html',
        background: 'linear-gradient(90deg, rgb(240 238 234) 46%, rgb(141, 167, 185) 54%, rgb(55 144 179) 100%)',
        image: '/mac-logo.png',
        height: '450px',
    },
    'ubuntu-apps': {
        name: 'Suggested Ubuntu Apps',
        href: '/ubuntu-apps.html',
        background: 'linear-gradient(90deg, rgb(221, 72, 20) 0%, rgb(252, 99, 25) 50%, rgb(255, 148, 86) 100%)',
        image: '/ubuntu-logo.png',
        height: '450px',
    },
    'vscode-extensions': {
        name: 'Awesome VSCode Extensions',
        href: '/vscode-extensions.html',
        background: 'linear-gradient(90deg, #4a9ce6 0%, #66c4fa 100%)',
        image: '/vscode-logo.png',
        height: '450px',
    },
}).map(([hash, properties]) => ({ ...properties, hash }));

type App = typeof apps[number];

const hash = ref(window?.location.hash.slice(1));
const activeApp = computed(() => apps.find(app => app.hash === hash.value));
const isActive = (app: App) => activeApp.value?.hash === app.hash;
const toggleIframe = (app: App) => {
    hash.value = isActive(app) ? '' : app.hash;
};

watch(hash, (newHash) => {
    window.location && (window.location.hash = newHash);
});

onMounted(() => {
    document.getElementById('app')?.scrollIntoView();
    window.addEventListener('hashchange', () => {
        document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
        hash.value = window.location.hash.slice(1);
    });
});
</script>

<style scoped>
@keyframes nyan-cat-animation {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}

.nyan {
    background-size: 600% 600%;
    animation: nyan-cat-animation 5s linear infinite;
}
</style>
