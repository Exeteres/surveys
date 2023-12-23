import { en } from "vuetify/locale"

export default {
  $vuetify: { ...en },
  appbar: {
    title: "gazprom blin",
    logout: "Logout",
  },
  login: {
    title: "Login",
    username: "Username",
    password: "Password",
    login: "Login",
    error: "Invalid username or password",
  },
  survey_session: {
    single_choice: "Choose one of the following",
    multiple_choice: "Choose one or more of the following",
    text: "Enter your answer",
  },
  home: {
    title: "Home",
  },
  users: {
    title: "Users",
    details_title: "User",
    username: "Username",
    email: "Email",
    role: "Role",
  },
  groups: {
    title: "Groups",
  },
  survey: {
    title: "Survey \"{id}\"",
    add_question: "Add question",
    add_answer: "Add answer",
    question_will_be_deleted: "This question will be deleted on save (click delete button again to undo)",
  },
  surveys: {
    title: "Surveys",
    not_found: "No survey found",
    create: "Create survey",
  },
  common: {
    id: "ID",
    actions: "Actions",
    title: "Title",
    create: "Create",
    cancel: "Cancel",
    description: "Description",
    unsaved_changes: "You have unsaved changes here",
    save: "Save",
  },
  question_type: {
    single: "Single choice",
    multiple: "Multiple choice",
    text: "Text answer",
  }
}