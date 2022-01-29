export interface IItem{
    id: number; 
    title: string;
}

export interface IListItem{
    id: number; 
    title: string;
    dropdown?: boolean;
}

export interface ISettingAlerts extends IItem{
    lists: {
        id: number; 
        title: string;
        dropdown: boolean;
        subLists?: IListItem[]
    }[]
}
