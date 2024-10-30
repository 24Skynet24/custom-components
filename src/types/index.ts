export interface LinkRouteType {
    url: string
    name: string
}

export interface ComponentCardType {
    link: LinkRouteType
    title: string
    img: string
}

export interface ComponentsListType {
    groupName: string,
    groupList: LinkRouteType[]
}