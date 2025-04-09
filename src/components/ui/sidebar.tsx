import {
    Menu,
    Home,
    ShoppingCart,
    ClipboardList,
    CalendarCheck,
    FileText,
    Users,
    Car,
    Settings,
    HelpCircle,
    User,
  } from "lucide-react";
  
  import { useState } from "react";
  import { NavLink } from "react-router-dom";
  import logo from "../../assets/logo.svg";
  
  export default function Sidebar() {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
  
    const toggleSidebar = () => {
      setSidebarVisible(!isSidebarVisible);
    };
  
    return (
      <>
        {/* Ícone do menu fixo no canto superior esquerdo */}
        {!isSidebarVisible && (
          <div className="fixed top-4 left-4 z-50">
            <Menu
              size={35}
              className="text-[#707FDD] cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        )}
  
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen bg-[#F4F5FB] shadow-lg transform transition-transform duration-500 ${
            isSidebarVisible ? "translate-x-0" : "-translate-x-full"
          } w-72 flex flex-col gap-6 px-6 py-8`}
        >
          <div>
            {/* Ícone do menu dentro da sidebar */}
            <Menu
              size={35}
              className="absolute top-4 right-4 text-[#707FDD] cursor-pointer"
              onClick={toggleSidebar}
            />
  
            {/* Logo centralizada */}
            <div className="flex flex-col items-center mt-8">
              <img src={logo} alt="AutoFinance Logo" className="w-30 h-30" />
            </div>
          </div>
  
          <nav className="space-y-1">
            <p className="text-xs text-gray-500 mb-1">MENU</p>
            <SidebarItem to="/home" icon={<Home size={18} />} label="Início" />
            <SidebarItem
              to="/budgets"
              icon={<ShoppingCart size={18} />}
              label="Orçamentos"
            />
            <SidebarItem
              to="/orders"
              icon={<ClipboardList size={18} />}
              label="Ordem de Serviço"
            />
            <SidebarItem
              to="/schedules"
              icon={<CalendarCheck size={18} />}
              label="Agendamentos"
            />
            <SidebarItem
              to="/services"
              icon={<FileText size={18} />}
              label="Serviços"
            />
            <SidebarItem
              to="/clients"
              icon={<Users size={18} />}
              label="Clientes"
            />
            <SidebarItem to="/vehicles" icon={<Car size={18} />} label="Veículos" />
  
            <p className="text-xs text-gray-500 mt-6 mb-1">OUTROS</p>
            <SidebarItem
              to="/settings"
              icon={<Settings size={18} />}
              label="Configurações"
            />
            <SidebarItem to="/users" icon={<User size={18} />} label="Usuários" />
            <SidebarItem to="/help" icon={<HelpCircle size={18} />} label="Ajuda" />
          </nav>
        </div>
      </>
    );
  }
  
  type SidebarItemProps = {
    to: string;
    icon: React.ReactNode;
    label: string;
  };
  
  function SidebarItem({ to, icon, label }: SidebarItemProps) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 py-2 px-2 rounded-md text-sm ${
            isActive ? "bg-[#e4e8f8] text-[#707FDD]" : "text-gray-700"
          } hover:bg-[#e4e8f8] cursor-pointer transition-all`
        }
      >
        <span className="text-[#B7B8C9]">{icon}</span>
        <span className="font-medium">{label}</span>
      </NavLink>
    );
  }