<template>
    <div>
        <h1>Social Login</h1>
        <button @click="loginGoogle">Login with Google</button>
        <button>Login with Facebook</button>
        <button>Login with Twitter</button>
        <button>Login with Github</button>
    </div>
</template>

<script lang="ts" setup>

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            alert('Logged in!');
        })
        .catch((error) => {
            alert('Failed to login!');
        });

};



</script>