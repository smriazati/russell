<script setup>
const props = defineProps(['item'])
</script>

<template>
    <div class="video-list-item">
        <div v-if="props.item">
            <p class="title-wrapper">{{ props.item.name }}</p>
            <client>
                <vue-plyr>
                    <div class="plyr__video-embed embed-container">
                        <iframe
                            :src="`https://www.youtube.com/embed/${props.item.id}?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
                            allowfullscreen allowtransparency></iframe>
                    </div>
                </vue-plyr>
            </client>
        </div>
    </div>
</template>
