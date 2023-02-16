import AppStudy from "@/components/AppStudy";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import StudyGroup from "@/components/study/StudyGroup";
import AppRecord from "@/components/AppRecord";
import SignupForm from "@/components/login/SignupForm";
import CommunityPost from "@/components/study/group/CommunityPost";
import WritePost from "@/components/community/WritePost";

const routes = [
    {path: "/", name: "AppStudy", component: AppStudy},
    {path: "/record", name: "AppRecord", component: AppRecord},
    {path: "/group", name: "StudyGroup", component: StudyGroup},
    {path: "/signup", name: "SignupForm", component: SignupForm},
    {path: "/post", name: "CommunityPost", component: CommunityPost},
    {path: "/post/new", name: "WritePost", component: WritePost}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
