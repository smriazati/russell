<script setup>
const query = groq`
    *[_type=="homePage"]{
      text, subtext, 
        "image": {
          "url": image.asset->url
        }
    }[0]
    `;
const { data } = useSanityQuery(query);

useHead({
    title: 'Home',
    bodyAttrs: {
        class: 'index-page'
    }
})

definePageMeta({
    layout: "home",
});
</script>
<template>
    <div>
        <div v-if="data" class="home-page-wrapper">
            <div class="text-wrapper">
                <h1 v-if="data.text">{{ data.text }}</h1>
                <h2 v-if="data.subtext">{{ data.subtext }}</h2>
                <nav>
                    <ul>
                        <li>
                            <NuxtLink to="/watch" class="btn">Watch</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about" class="btn">About</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div v-if="data.image.url" class="image-wrapper">
                <figure v-if="data.image.url">
                    <img :src="data.image.url" alt="">
                </figure>
            </div>
        </div>
    </div>
</template>
<style>
.home-page-wrapper {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}

@media (min-width: 780px) {
    .home-page-wrapper {
        min-height: 100vh;
    }
}

@media (max-width: 780px) {
    .home-page-wrapper {
        flex-direction: column-reverse;
        text-align: center;
    }
}

.home-page-wrapper .text-wrapper {
    flex: 0 0 40%;
    font-weight: 700;
    text-align: left;
    padding: 30px;
}

.home-page-wrapper .text-wrapper nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin-top: 30px;
}

@media (max-width: 780px) {
    .home-page-wrapper .text-wrapper nav ul {
        justify-content: center;
    }
}

.home-page-wrapper .text-wrapper nav ul li {
    margin-right: 30px;
}


.home-page-wrapper .text-wrapper h1 {
    font-size: 60px;
    line-height: 64px;
    margin-bottom: 16px;
}

.home-page-wrapper .text-wrapper h2 {
    font-size: 36px;
    line-height: 42px;
    margin: 0;
    margin-bottom: 60px;
}

.home-page-wrapper .image-wrapper {
    flex: 0 0 60%;
    position: relative;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 30px;
}

.home-page-wrapper .image-wrapper figure {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
}

.home-page-wrapper .image-wrapper figure img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}
</style>