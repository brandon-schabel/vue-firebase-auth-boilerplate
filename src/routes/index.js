import HelloWorld from "../components/HelloWorld"
import SignIn from "../components/SignIn"
import CreateName from "../components/CreateName"
import Home from "../components/Home.vue"
import SignUp from "../components/SignUp.vue"
import Error404 from "../components/Error404.vue"
import Dashboard from "../components/Dashboard.vue"

// This is where you add all your site routes
// Each route is set as an obect in the array
// For a the most basic route just set
// the path & component to load
export const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld
  },
  {
    path: "/sign-in",
    name: "signIn",
    component: SignIn
  },
  {
    path: "/create-name",
    name: "createName",
    component: CreateName,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "",
    name: "home",
    component: Home
  },
  {
    path: "/sign-in",
    name: "signIn",
    component: SignIn
  },
  {
    path: "/sign-up",
    name: "signUp",
    component: SignUp
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/404",
    name: "404",
    component: Error404
  },
  {
    path: "*",
    redirect: "/404"
  }
]
