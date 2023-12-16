<template>
  <v-app>
    <v-layout>
      <v-app-bar :elevation="2">
        <v-app-bar-title>{{ $t("appbar.title") }}</v-app-bar-title>
        <v-spacer />
        <UserMenu />
      </v-app-bar>

      <v-main>
        <v-container :fluid="true">
          <slot />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
</script>