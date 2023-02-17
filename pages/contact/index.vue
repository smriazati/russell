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
        <ContactHeader />
        <NetlifyContactForm />
    </div>
</template>
<style>
.contact-page-wrapper form {
    display: flex;
    flex-direction: column;
}

.contact-page-wrapper form>*:not(:last-child) {
    margin-bottom: 12px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group input,
.form-group textarea {
    outline: 0;
    border: 1px solid #000;
    border-radius: 0;
    padding: 8px;
    font-family: inherit;
    font-size: 16px;
    background: #fff;
    color: #000;
    transition: .3s ease all;
    max-width: 100%;
}

.form-group input:focus,
.form-group textarea:focus {
    background: #000;
    color: #fff;
}

.form-group *:not(:last-child) {
    margin-bottom: 4px;
}
</style>