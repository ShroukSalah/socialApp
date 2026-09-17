import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { FeedComponent } from './features/feed/feed.component';
import { ProfileComponent } from './features/profile/profile.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { ChangePasswordComponent } from './features/change-password/change-password.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: 'login',
        pathMatch: "full"
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'login',
            component: LoginComponent,
            title: "Login page"
        },
        {

            path: 'register',
            component: RegisterComponent,
            title: "Register page"
        }
        ]
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [{
            path: 'feed',
            component: FeedComponent,
            title: "Feed page"
        },
        {

            path: 'profile',
            component: ProfileComponent,
            title: "Profile page"
        },

        {

            path: 'notifications',
            component: NotificationsComponent,
            title: "Not found page"
        },
        {

            path: 'ChangePassword',
            component: ChangePasswordComponent,
            title: " Change Password page"
        }
        ]
    },
    {


        path: '**',
        component: NotFoundComponent,
        title: "Page Not Found"

    }];
