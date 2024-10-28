import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className=" container mx-auto px-5 pb-20">
      <Header />
      <Outlet />
    </div>
  )
}