export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "dayBook" */ '@/modules/daybook/layouts/dayBookLayouts.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'Entry',
            component: () => import(/* webpackChunkName: "EntryView" */ '@/modules/daybook/views/EntryView.vue'),

        }
    ]
}