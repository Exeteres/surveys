<template>
  <v-divider class="mb-2" />
  <div class="text-h6 mb-2">1. Сколько вы работаете в газпроме?</div>
  <div class="text-subtitle mb-2">{{ $t("survey_session.single_choice") }}</div>
  <v-radio-group row>
    <v-radio label="Меньше года" value="a"></v-radio>
    <v-radio label="1-3 года" value="b"></v-radio>
    <v-radio label="3-5 лет" value="c"></v-radio>
    <v-radio label="Больше 5 лет" value="d"></v-radio>
  </v-radio-group>
</template>