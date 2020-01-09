export default interface INavItem {
  children: JSX.Element[] | JSX.Element | string;
  href: string;
  active?: boolean;
}
