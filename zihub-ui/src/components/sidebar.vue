<template>
    <aside class="h-screen border-2 rounded-2xl border-zihub-border bg-zihub-background mr-3 w-64 p-4">
        <div class="h-full">
            <ul class="space-y-2 font-medium">
                <p class="text-sm text-gray-500 font-bold">USE CASES</p>
                <li>
                    <router-link to="/use-case-1" class="side-bar-text group">
                    <font-awesome-icon icon="fa-regular fa-circle" />
                    <span class="mx-3">Use Case 1</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/use-case-2" class="side-bar-text group">
                    <font-awesome-icon icon="fa-regular fa-circle" />
                    <span class="mx-3">Use Case 2</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/use-case-3" class="side-bar-text group">
                    <font-awesome-icon icon="fa-regular fa-circle" />
                    <span class="mx-3">Use Case 3</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/use-case-4" class="side-bar-text group">
                    <font-awesome-icon icon="fa-regular fa-circle" />
                    <span class="mx-3">Use Case 4</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/use-case-5" class="side-bar-text group">
                    <font-awesome-icon icon="fa-regular fa-circle" />
                    <span class="mx-3">Use Case 5</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/use-case-6" class="side-bar-text group">
                    <font-awesome-icon icon="fa-regular fa-circle" />
                    <span class="mx-3">Use Case 6</span>
                    </router-link>
                </li>
            </ul>
            <ul class="space-y-2 font-medium border-t border-gray-700 pt-4 mt-4 ">
                <p class="text-sm text-gray-500 font-bold">MASTER DATA</p>
                <li>
                    <router-link to="/use-case-location" class="side-bar-text group">
                    <font-awesome-icon class="w-5 h-5" icon="fa-solid fa-location-dot" />
                    <span class="mx-3">Location</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/use-case-organization" class="side-bar-text group">
                    <font-awesome-icon class="w-5 h-5" icon="fa-solid fa-people-group" />
                    <span class="mx-3">Organization</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/use-case-patient" class="side-bar-text group">
                    <font-awesome-icon class="w-5 h-5" icon="fa-solid fa-user-group" />
                    <span class="mx-3">Patient</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/use-case-practitioner" class="side-bar-text group">
                    <font-awesome-icon class="w-5 h-5" icon="fa-solid fa-user" />
                    <span class="mx-3">Practitioner</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<style scoped>

</style>