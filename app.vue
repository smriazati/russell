<script setup>
const query = groq`
*[_type=="siteMetadata"]{
  siteTitle,
  siteDesc,
  "ogImg": {
     "url": ogImg.asset->url,
     "alt": ogImg.asset->altText
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