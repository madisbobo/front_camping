import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import ErrorView from "@/views/ErrorView.vue";
import ListingsView from "@/views/ListingsView.vue";
import SignupView from "@/views/SignupView.vue";
import SignupInfoView from "@/views/SignupInfoView.vue";
import MyListingsView from "@/views/MyListingsView.vue";
import MyProfileView from "@/views/MyProfileView.vue";
import MyBookingsView from "@/views/MyBookingsView.vue";
import BlogView from "@/views/BlogView.vue";
import ContactView from "@/views/ContactView.vue";
import AddListingView from "@/views/AddListingView.vue";
import editMyProfileView from "@/views/EditMyProfileView.vue";
import ListingView from "@/views/ListingView.vue";

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/error',
    name: 'errorRoute',
    component: ErrorView
  },
  {
    path: '/signup',
    name: 'signupRoute',
    component: SignupView
  },
  {
    path: '/signup-info',
    name: 'signupInfoRoute',
    component: SignupInfoView
  },
  {
    path: '/my-profile',
    name: 'myProfileRoute',
    component: MyProfileView
  },
  {
    path: '/edit-profile',
    name: 'editMyProfileRoute',
    component: editMyProfileView
  },
  {
    path: '/my-bookings',
    name: 'myBookingsRoute',
    component: MyBookingsView
  },
  {
    path: '/my-listings',
    name: 'myListingsRoute',
    component: MyListingsView
  },
  {
    path: '/add-listing',
    name: 'addListingRoute',
    component: AddListingView
  },
  {
    path: '/listing/:id',
    name: 'listingRoute',
    component: ListingView
  },
  {
    path: '/listings',
    name: 'listingsRoute',
    component: ListingsView
  },
  {
    path: '/blog',
    name: 'blogRoute',
    component: BlogView
  },
  {
    path: '/contact',
    name: 'contactRoute',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
