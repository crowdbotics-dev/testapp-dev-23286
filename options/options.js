import { StyleSheet } from "react-native"

export const globalOptions = {
  name: "testapp_dev_23286",
  url: "https://testapp_dev_23286.botics.co",
  api: "https://testapp_dev_23286.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": {
    copy: "Routes available!"
  },

  "@modules/login": {
    LOGO_URL:
      "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/cb-icon.png",
    BACKGROUND_URL:
      "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/halfbg.png",
    HOME_SCREEN_NAME: "Home Screen",
    validateEmail: "^[^\\s]+([.-]?\\w+)*@\\w+([.-]?\\w+)*(.\\w{2,3})+$",
    SignInNavText: "Sign In",
    SignUpNavText: "Sign Up",
    SignInButtonText: "Login",
    SignUpButtonText: "Sign Up"
  }
}
