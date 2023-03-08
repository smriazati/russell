<template>
    <div>
        <div>
            <div v-if="!showThanks && !showError" class="form-wrapper">
                <form id="contact" name="contact" method="post" netlify netlify-honeypot="bot-field" data-netlify="true"
                    @submit.prevent="onFormSubmit">
                    <input type="hidden" name="form-name" value="contact">
                    <label for="name">Name *</label>
                    <input type="text" name="name" required>
                    <label for="email">Email *</label>
                    <input type="email" name="email" required>
                    <label for="message">Message *</label>
                    <textarea name="message" rows="5"></textarea>
                    <button class="btn">Submit</button>
                </form>
            </div>
            <div v-if="showThanks" class="confirmation-wrapper">
                <p>Thanks for reaching out! Your message has been submitted.</p>
            </div>
            <div v-if="showError" class="error-wrapper">
                <p>Sorry, something has gone wrong. Please try again later, or send an email to sarahriazati@gmail.com.</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const showThanks = ref(false)
const showError = ref(false)

const onFormSubmit = (e) => {
    let myForm = document.getElementById("contact");
    let formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(result => showThanks.value = true)
        .catch((error) => {
            console.log(error);
            showError.value = true
        });
}
useHead({
    title: 'Contact',
})
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;

}

input {
    height: 32px;
}

input,
textarea {
    outline: none;
    border: 1px solid black;
    padding: 5px;
    border-radius: 0;
    margin-bottom: 30px;
}

;
</style>