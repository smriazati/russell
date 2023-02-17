<script setup>
import { ref } from 'vue'

const nameInput = ref('')
const emailInput = ref('')
const messageInput = ref('')

const validateName = () => {
    if (!nameInput) { return false }
    if (nameInput.value.length < 1) { return false }
    return true
}
const validateEmail = () => {
    if (!emailInput) { return false }
    const validation = emailInput.value.includes("@") && emailInput.value.includes('.');
    if (validation) {
        return true;
    } else {
        return false;
    }
}
const validateMessage = () => {
    if (!messageInput) { return false }
    if (messageInput.value.length < 1) { return false }
    return true
}

const checkForm = () => {
    const isFormValid = validateName() && validateEmail() && validateMessage()
    console.log(isFormValid);
    return isFormValid ? true : false
}

</script>

<template>
    <form name="contact" data-netlify="true" action="/contact/success">
        <input type="hidden" name="contact" value="contact" />
        <label>Name</label>
        <input v-model="nameInput" type="text" name="name" placeholder="Your name *" />
        <label>Email</label>
        <input v-model="emailInput" type="text" name="email" placeholder="Your email *" />
        <label>Message</label>
        <textarea v-model="messageInput" name="message" placeholder="Your message *"></textarea>
        <button :disabled="!validateName() || !validateEmail() || !validateMessage()" :class="`btn`" type="submit"
            @click="checkForm()">Submit</button>
        <div v-if="!validateName() || !validateEmail() || !validateMessage()">
            <p v-if="!validateName()">Include your name.</p>
            <p v-if="!validateEmail()">Include a valid email address.</p>
            <p v-if="!validateMessage()">Include a valid message.</p>
        </div>
    </form>
</template>

<style>
form {
    display: flex;
    flex-direction: column;
}

input,
textarea {
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

input:focus,
textarea:focus {
    background: #000;
    color: #fff;
}

label {
    font-weight: bold;
    margin-bottom: 4px;
}

input,
textarea,
button {
    margin-bottom: 18px;
}
</style>