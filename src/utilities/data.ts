import { IItem, ISettingAlerts } from "../shared/interface";

export const generalData: IItem[] = [
    { id: 1, title: 'Case Management', },
    { id: 2, title: 'Map Timeline' },
    { id: 3, title: 'Views Briefings' },
    { id: 4, title: 'Notifications' },
    { id: 5, title: 'Mass communications' },
    { id: 6, title: 'Traffic Cameras' },
];

export const settingsAlerts: ISettingAlerts[] = [
    { id: 1, title: 'Settings', lists: [
        { id: 2, title: 'Audit log', dropdown: false },
        { id: 3, title: 'Users', dropdown: false, subLists: [
            { id: 4, title: 'User add' },
            { id: 5, title: 'User delete' },
            { id: 6, title: 'User edit' },
            { id: 7, title: 'Max Users', dropdown: true }            
        ] }    
    ] },
    { id: 8, title: 'Alerts', lists: [
        { id: 9, title: 'Alert Manager', dropdown: false, subLists: [] },
        { id: 10, title: 'Alert Rules', dropdown: true, subLists: [] }
    ] }
];