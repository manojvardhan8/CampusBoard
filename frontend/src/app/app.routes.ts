import { Routes } from '@angular/router';
import { Campusboard } from './components/campusboard/campusboard';
import { Noticelist } from './components/noticelist/noticelist';
import { Eventlist } from './components/eventlist/eventlist';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Noticecard } from './components/noticecard/noticecard';
import { Noticeform } from './components/noticeform/noticeform';
import { AddNoticeEvent } from './components/add-notice-event/add-notice-event';
import { authGuard } from './guards/auth-guard-guard';
export const routes: Routes = [
    {path:"",component:Campusboard},
    {path:"login",component:Login},
    {path:"signup",component:Signup},
    {path:"notices",component:Noticelist},
    {path:"events",component:Eventlist},
    {path:"add",canActivate:[authGuard],component:AddNoticeEvent},
   
];
