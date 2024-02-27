<template>
    <div>
        <section class="grid grid-cols-2 sm:grid-cols-4 gap-1 p-2">
            <button v-for="(app, index) in apps" :key="index"
                class="flex flex-1 flex-col w-full rounded-md p-1 justify-between" @click="toggleIframe(index)"
                :aria-label="app.name" :style="{ backgroundImage: app.background }"
                :aria-pressed="activeIframe === index ? true : false">
                <img :src="app.image" class="w-full h-auto p-1"
                    :style="{ boxShadow: activeIframe === index ? 'rgba(0, 0, 0, 0.75) 3px 3px 6px -1px' : 'unset' }" />
            </button>
        </section>
        <div class="border py-2 my-1" v-if="activeIframe !== null">
            <h4 class="mb-2 text-center">{{ apps[activeIframe].name }}</h4>
            <iframe class="w-full" allow="clipboard-write" :style="{ height: apps[activeIframe].height }"
                :src="apps[activeIframe].href"></iframe>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            apps: [
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
            ],
            activeIframe: null
        };
    },
    methods: {
        toggleIframe(index) {
            this.activeIframe = this.activeIframe === index ? null : index;
            const frame = document.getElementById("app");
            if (frame) {
                frame.scrollIntoView(true)
            }
        }
    }
};
</script>
  