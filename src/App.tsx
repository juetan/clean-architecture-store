import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Products } from "./ui/Products";
import {
  useCartStorageService,
  useUserStorageService,
} from "./services/storageAdapter";
import { Login } from "./ui/Login";
import { Cart } from "./ui/Cart";
import { useLogout } from "./application/logout";
import { User } from "./ui/User";

function App() {
  const { user, updateUser } = useUserStorageService();
  const { cart } = useCartStorageService();
  const { logout } = useLogout();

  return (
    <BrowserRouter basename="/clean-architecture-store/">
      <div className="max-w-[1280px] mx-auto pb-6">
        <header className="h-14 flex items-center justify-between  text-sm text-slate-500">
          <Link to={"/"}>
            <h2 className="font-bold text-base text-slate-700 hover:text-blue-500">饼干商店</h2>
          </Link>
          <div className="space-x-4">
            {user ? (
              <>
                <Link
                  to={"/user"}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {user.name}
                </Link>
                <Link
                  to={"/cart"}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  购物车({cart.products.length})
                </Link>
                <span
                  onClick={logout}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  退出
                </span>
              </>
            ) : (
              <Link to={"/login"}>登录</Link>
            )}
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
