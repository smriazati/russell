<script setup>
const query = groq`
*[_type == "videos" && isPublished == true]|order(orderRank){
  name, slug, id  
}
`;
const { data } = useSanityQuery(query);

useHead({
    title: 'Videos',
    bodyAttrs: {
        class: 'videos-page'
    }
})

</script>
<template>
    <div>
        <div v-if="data">
            <ul class="video-list">
                <li v-for="(item, index) in data" :key="index">
                    <VideoListItem :item="item" />
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
.video-list {
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    list-style: none;
}

@media (max-width: 1080px) {
    .video-list {
        max-width: 90%;
    }
}

.video-list>*:not(:last-child) {
    margin-bottom: 60px;
}

.video-list .video-list-item {
    max-height: 100vh;
}

.video-list .title-wrapper {
    font-size: 24px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 12px;
}
</style>