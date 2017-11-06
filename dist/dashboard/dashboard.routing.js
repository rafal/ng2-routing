"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_users_component_1 = require("./users/dashboard-users.component");
var dashboard_users_home_component_1 = require("./users/dashboard-users-home.component");
var dashboard_user_details_component_1 = require("./users/dashboard-user-details.component");
var auth_guard_service_1 = require("../shared/guards/auth-guard.service");
exports.dashboardRoutes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                canActivate: [auth_guard_service_1.AuthGuard],
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: 'users',
                component: dashboard_users_component_1.DashboardUsersComponent,
                canActivateChild: [auth_guard_service_1.AuthGuard],
                children: [
                    {
                        path: '',
                        component: dashboard_users_home_component_1.DashboardUsersHomeComponent
                    },
                    {
                        path: ':username',
                        component: dashboard_user_details_component_1.DashboardUserDetailsComponent
                    }
                ]
            }
        ]
    }
];
exports.dashboardRouting = router_1.RouterModule.forChild(exports.dashboardRoutes);
//# sourceMappingURL=dashboard.routing.js.map