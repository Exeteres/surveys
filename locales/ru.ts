import { ru } from "vuetify/locale"

export default {
  $vuetify: { ...ru },
  appbar: {
    title: "газпром блин",
    logout: "Выйти",
  },
  login: {
    title: "Вход",
    username: "Имя пользователя",
    password: "Пароль",
    login: "Войти",
    error: "Неверное имя пользователя или пароль",
  },
  survey_session: {
    single_choice: "Выберите один вариант ответа",
    multiple_choice: "Выберите один или несколько вариантов ответа",
    text: "Ответьте в свободной форме",
  },
  home: {
    title: "Главная",
  },
  users: {
    title: "Пользователи",
    details_title: "Пользователь",
    username: "Имя пользователя",
    email: "Email",
    role: "Роль",
  },
  groups: {
    title: "Группы",
  },
  survey: {
    title: "Опрос \"{id}\"",
    add_question: "Добавить вопрос",
    add_answer: "Добавить ответ",
    question_will_be_deleted: "Этот вопрос будет удален при сохранении (нажмите кнопку удалить еще раз, чтобы отменить)",
  },
  surveys: {
    title: "Опросы",
    not_found: "Опрос не найден",
    create: "Создание опроса",
  },
  common: {
    id: "ID",
    actions: "Действия",
    title: "Название",
    create: "Создать",
    cancel: "Отмена",
    description: "Описание",
    unsaved_changes: "Есть несохраненные изменения",
    save: "Сохранить",
  },
  question_type: {
    single: "Один вариант ответа",
    multiple: "Несколько вариантов ответа",
    text: "Текстовый ответ",
  },
}