<template>
  <v-navigation-drawer permanent :rail="$vuetify.display.mdAndDown">
    <v-list-item link prepend-icon="mdi-view-dashboard" :title="$t('home.title')" to="/" />
    <v-list-item link prepend-icon="mdi-account" :title="$t('users.title')" to="/admin/users" />
    <v-list-item link prepend-icon="mdi-account-group" :title="$t('groups.title')" to="/admin/groups" />
    <v-list-item link prepend-icon="mdi-ballot" :title="$t('surveys.title')" to="/admin/surveys" />
  </v-navigation-drawer>
</template>