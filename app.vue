<script setup>
const query = groq`
*[_type=="homePage"]{
  "seo": {
    "desc": seo.description_short,
    "img": {
      "url": seo.featured.asset->url
    }
  }
}[0]
`;
const { data } = useSanityQuery(query)
useHead({
  titleTemplate: `%s - Russell Favret`,
})

</script>
<template>
  <div>

    <Head>
      <Meta name="description" :content="data?.seo?.desc" />
      <Meta name="og:image" :content="data?.seo?.img?.url" />
    </Head>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>