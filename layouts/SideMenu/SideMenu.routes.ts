import { IMenuItem } from './SideMenu.types'

// * INFO: Can add any logic here if you want.

/** INFO: list of menu items for side menu
 * !ALERT: The route name must be same with file name that you give add in Pages folder
 */
export const sideMenuRoutes: Array<IMenuItem> = [
  {
    name: 'Dashboard',
    route: '/dashboard', // You can also sub Routes by assigning subRoute object
  },
  {
    name: 'Account management',
    route: '/accounts',
  },
  {
    name: 'Career',
    route: '/career',
  },
  {
    name: 'Press',
    route: '/press',
  },
]
