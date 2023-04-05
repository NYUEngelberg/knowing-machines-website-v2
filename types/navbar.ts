export type NavbarInternalLink = {
    text: string
    href: string
}
export type NavbarExternalLink = {
    text: string
    href: string
}
export type NavbarSubmenu = {
    text: string
    children?: NavbarMenuItem[]
}
export type NavbarMenuItem =
    NavbarInternalLink | NavbarExternalLink | NavbarSubmenu
