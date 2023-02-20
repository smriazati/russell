<script setup>
useHead({
    title: 'About'
})
const query = groq`
*[_type=="homePage"]{
  "content": about_text
}[0]
`;
const { data } = useSanityQuery(query);

const serializers = {
    marks: {
        // You can also just pass a string for a custom serializer if it's an HTML element
        internalLink: 'a'
    }
}
</script>

<template>
    <div class="wrapper">
        <div class="text-wrapper">
            <h1>About</h1>
            <div v-if="data">
                <div v-if="data.content?.rte" class="text-wrapper">
                    <SanityContent :blocks="data.content.rte" :serializers="serializers" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    max-width: 680px;
    margin: 0 auto;
    text-align: left;
}


.wrapper h1 {
    margin-bottom: 30px;
}
</style>