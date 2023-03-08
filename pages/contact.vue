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
        <h1>Contact</h1>
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

.contact-page-wrapper h1 {
    margin-bottom: 30px;
}
</style>