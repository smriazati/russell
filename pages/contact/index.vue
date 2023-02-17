<template>
    <div class="contact-page-wrapper">
        <h1>Contact</h1>
        <NetlifyContactForm />
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