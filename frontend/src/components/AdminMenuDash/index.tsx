import SidebarDash from "../SidebarDash";
import iconsSidebarDash from "@/assets/images/icons/icons-dash";

interface MenuItem {
  label: string;
  icon: string;
  iconSelected: string;
  value:string
}

interface AdminMenuDashProps {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}

const menuItems: MenuItem[] = [
  {
    label: "Geral",
    icon: iconsSidebarDash.generalIcon,
    iconSelected: iconsSidebarDash.generalIconFull,
    value:"general"
  },
  {
    label: "Categorias",
    icon: iconsSidebarDash.categories,
    iconSelected: iconsSidebarDash.categoriesFull,
    value:"categories"
  },
  {
    label: "Usuários",
    icon: iconsSidebarDash.userControl,
    iconSelected: iconsSidebarDash.userControlFull,
    value:"userControl"
  },
  {
    label: "Moedas",
    icon: iconsSidebarDash.quotation,
    iconSelected: iconsSidebarDash.quotationFull,
    value:"quotation"
  },
];

export default function AdminMenuDash({
  selectedMenu,
  setSelectedMenu,
}: AdminMenuDashProps) {
  return (
    <SidebarDash
      menuItems={menuItems}
      selectedMenu={selectedMenu}
      setSelectedMenu={setSelectedMenu}
    />
  );
}
