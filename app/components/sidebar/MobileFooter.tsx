"use client";

import MobileItem from "./MobileItem";
import { useConversation } from "@/app/hooks/useConversation";
import { useRoutes } from "@/app/hooks/useRoutes";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) return null;

  return (
    <div className="fixed w-full bottom-0 z-40 flex justify-between items-center bg-white border-t lg:hidden">
      {routes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          icon={route.icon}
          active={route.active}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
