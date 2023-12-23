<template>
  <v-app>
    <v-layout>
      <AppBar />

      <v-main>
        <v-container :fluid="false">
          <slot />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>
