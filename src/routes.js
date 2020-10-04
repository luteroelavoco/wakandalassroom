import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import TeamView from 'src/views/employees/team';
import GalleryView from 'src/views/gallery/ProductListView';
import SpecGalleryView from 'src/views/specificgallery/ProductListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';

//specificgallery
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'conta', element: <AccountView /> },
      { path: 'entidades', element: <CustomerListView /> },
      { path: 'estatistica', element: <DashboardView /> },
      { path: 'servicos', element: <ProductListView /> },
      { path: 'galeria', element: <GalleryView /> },
      { path: 'galeria/:type', element: <SpecGalleryView /> },
      { path: 'team', element: <TeamView /> },
      { path: 'definicoes', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'novomembro', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
