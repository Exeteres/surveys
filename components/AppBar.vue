<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>{{ $t("appbar.title") }}</v-app-bar-title>
    <v-spacer />
    <UserMenu />
  </v-app-bar>
</template>