import React from "react";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="mx-auto px-40 py-7 bg-display h-dvh overflow-y-auto">
      <Outlet />
    </main>
  );
}
export default Layout;
