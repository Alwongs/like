<template>
    <div class="app-page">
        <h1 class="title">Register</h1>
        <div 
            v-if="error" 
            class="error"
        >
            {{ error }}
        </div>        
        <div 
            class="form"
            @submit.prevent="signup"            
        >

            <ul class="input-list">            
                <li class="form-item">
                    <input 
                        v-model="email"
                        type="text" 
                        placeholder="email"
                        required
                    >
                </li>
                <li class="form-item">
                    <input 
                        v-model="password"
                        type="text" 
                        placeholder="password"
                        required
                    >
                </li>
            </ul>

            <div class="btn-block">            
                <button
                    v-if="!processing" 
                    type="submit" 
                    class="btn btn-submit" 
                >
                    Сохранить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null
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
        signup() {
            if (this.email && this.password) {
                this.$store.dispatch('signUp',  {
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
    margin: 0 auto;
    width: 500px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 400px; 
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 70%; 
    }     
    @media (max-width: $mobile-max) {
        width: 100%; 
    } 
}
.title {
    font-size: 24px;
}
.input-list {
    margin-bottom: 16px;
}
.form-item > input {
    font-size: 18px;     
    width: 100%;
    height: 40px;
    margin-bottom: 16px;
    padding-left: 8px;
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(1, 67, 190);
    color: rgb(1, 67, 190);
    @media (max-width: $mobile-max) {
        font-size: 22px;        
        min-height: 50px;
    }     
}
.btn-block {
    text-align: end;
}
.btn-submit {
    background-color: rgb(20, 161, 102);
    font-size: 16px;
    color: white;
}
</style>