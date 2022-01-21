import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminProvider from "./contexts/AdminProvider";
import AuthProvider from "./contexts/AuthProvider";
import ClientProvider from "./contexts/ClientProvider";
import NotFoundPage from "./pages/404";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <ClientProvider>
        <AdminProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/admin-panel" element={<AdminPage />} />
              <Route path="/admin-panel/add" element={<AddPage />} />
              <Route path="/admin-panel/edit/:id" element={<EditPage />} />
              <Route path="/product-detail/:id" element={<DetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </AdminProvider>
      </ClientProvider>
    </AuthProvider>
  );
};

export default MyRoutes;
