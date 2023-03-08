<script setup>
useHead({
    title: 'Contact',
    bodyAttrs: {
        class: 'contact-page'
    }
})
</script>
<template>
    <div class="contact-page-wrapper">
        <ContactHeader></ContactHeader>
        <ContactForm></ContactForm>
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
</style>