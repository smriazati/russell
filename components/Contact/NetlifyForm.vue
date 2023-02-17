<template>
    <form name="contact" method="POST" data-netlify="true" action="/contact/success"
        enctype="application/x-www-form-urlencoded" :class="hasError ? 'has-error' : 'no-error'">
        <input type="hidden" name="form-name" value="contact" />
        <!-- 
                                                                                        <div class="form-group">
                                                                                            <label for="name" class="visually-hidden">Name *</label>
                                                                                            <input type="text" name="name" placeholder="Your name *" v-model="nameInput"
                                                                                                :class="isNameValid ? 'is-valid' : 'is-not-valid'" />
                                                                                        </div> -->

        <div class="form-group">
            <label for="contact" class="visually-hidden">Email *</label>
            <input type="text" name="contact" placeholder="Your email *" :class="isEmailValid ? 'is-valid' : 'is-not-valid'"
                v-model="emailInput" />
        </div>



        <!-- <div class="form-group">
                                                                                            <label for="message" class="visually-hidden">Message *</label>
                                                                                            <textarea name="message" id="message" placeholder="Your message *" v-model="messageInput"
                                                                                                :class="isMessageValid ? 'is-valid' : 'is-not-valid'" />
                                                                                        </div> -->

        <button @click="(e) => onSubmitClick(e)">Check form</button>

        <div class="form-group">
            <button :disabled="!isFormValid" class="btn" type="submit">
                <span>Send</span>
            </button>
        </div>
        <div v-if="hasError" class="form-group error-group">
            <!-- <div v-if="!isNameValid">
                                                    <p>Please include your name.</p>
                                                </div> -->
            <div v-if="!isEmailValid">
                <p>Please include a valid email containing @.</p>
            </div>
            <!-- <div v-if="!isMessageValid">
                                                    <p>Please include a message.</p>
                                                </div> -->
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const emailInput = ref('')
const isEmailValid = ref(false)
const hasError = ref('')
const isFormValid = ref(false)

const validateEmail = (emailInput) => {
    const validation = emailInput.includes("@") && emailInput.input.includes('.');
    if (validation) {
        return true;
    } else {
        return false;
    }
}

const onSubmitClick = (e) => {
    e.preventDefault
    if (!isEmailValid) {
        hasError = true;
        console.log('invalid email input')
        return;
    }
    if (!isFormValid) {
        hasError = true;
    }
}

// export default {
//     data() {
//         return {
//             emailInput: null,
//             nameInput: null,
//             messageInput: null,
//             hasError: false,
//         };
//     },
//     computed: {
//         isNameValid() {
//             if (!this.name || !this.nameInput) {
//                 return false;
//             }
//             if (this.nameInput.length > 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//         },
//         isEmailValid() {
//             if (!this.email || !this.emailInput) {
//                 return false;
//             }
//             if (this.validateEmail(this.emailInput)) {
//                 return true;
//             } else {
//                 return false;
//             }
//         },
//         isMessageValid() {
//             if (!this.message || !this.messageInput) {
//                 return false;
//             }
//             if (this.messageInput.length > 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//         },
//         areFieldsValid() {
//             return {
//                 name: this.isNameValid,
//                 email: this.isEmailValid,
//                 message: this.isMessageValid,
//             };
//         },
//         isFormValid() {
//             if (!this.areFieldsValid) {
//                 return null;
//             }
//             const values = Object.values(this.areFieldsValid);
//             if (values.includes(false)) {
//                 return false;
//             } else {
//                 return true;
//             }
//         },
//     }
// };
</script>
