<script setup>
const query = groq`
*[_type=="homePage"]{
  contact_text
}[0]
`;
const { data } = useSanityQuery(query);

</script>

<template>
    <div class="contact-page-wrapper">
        <header>
            <div class="text-wrapper">
                <h1>About</h1>
                <div v-if="data?.contact_text">
                    <SanityContent :blocks="data.contact_text.rte"></SanityContent>
                </div>
            </div>
        </header>
    </div>
</template>
<style>
.contact-page-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
}

.contact-page-wrapper h1 {
    margin-bottom: 30px;
}

.contact-page-wrapper header {
    margin-bottom: 30px;
}
</style>