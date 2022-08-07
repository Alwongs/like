<template>
    <div class="signin-page">
        <div class="form">
            <h1>Login</h1>
            <div 
                v-if="error" 
                class="error"
            >
                {{ error }}
            </div>
            <div class="input">
                <input 
                    v-model="email"
                    type="text" 
                    placeholder="email"
                    required
                >
            </div>
            <div class="input">
                <input 
                    v-model="password"
                    type="text" 
                    placeholder="password"
                    required
                >
            </div>
            <button
                v-if="!processing" 
                type="submit" 
                @click.prevent="signin"
            >
                Войти
            </button>
            <button
                v-else
                class="disabled"
            >
                Войти
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: 'elena@like.ru',
            password: '12345678'
        }
    },
    computed: {
        error() {
            return this.$store.getters.getError
        },
        processing() {
            return this.$store.getters.getProcessing
        },
        isUserAuthenticated() {
            return this.$store.getters.isUserAuthenticated;
        }        
    },
    watch: {
        isUserAuthenticated(val) {
            if (val === true) {
                this.$router.push('/');
            }  
        }                
    },
    methods: {
        signin() {
            if (this.email && this.password) {
                this.$store.dispatch('signIn',  {
                    email: this.email, 
                    password: this.password
                });
            } else {
                alert('fill all fields please...')
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.form {
    width: 300px;
    margin-left: 128px;
}
h1 {
    margin-bottom: 32px;
}
.input {
    margin-bottom: 32px;
}
button {
    background: rgb(66, 118, 215);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &.disabled {
        background-color: rgb(215, 204, 204);
        cursor: none;
    }
}

</style>