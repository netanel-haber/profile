<template>
    <section class="flex flex-wrap gap-4 p-2">
        <button v-for="(app, index) in apps" :key="index"
            class="flex flex-1 flex-col w-30 rounded-md p-1 justify-between shadow-inner" @click="toggleIframe(index)"
            :style="{ backgroundImage: app.background }">
            <span class="text-white mb-2 text-center">{{ app.name }}</span>
            <img :src="app.image" class="w-full h-auto p-2" style="box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);" />
        </button>
        <iframe id="app" :style="{height: apps[activeIframe].height}" v-if="activeIframe !== null" :src="apps[activeIframe].href"></iframe>
    </section>
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
                    image: '/checkers.png',
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
                    image: '/globe.png',
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
            if(frame) {
                frame.scrollIntoView({behavior:'smooth'})
            } 
        }
    }
};
</script>
<style scoped>
iframe {
    border: 1px solid green;
    width: 100%;
}
</style>
  