<template>
    <div>
        <h1>AWS</h1>
        <authenticator>
            <template v-slot="{user, signOut}">
                <h1>Hello {{ user.username }}</h1>
                <button @click="signOut">Sign out</button>  
            </template>
        </authenticator>
    </div>
</template>

<script lang="ts" setup>

import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';


</script>