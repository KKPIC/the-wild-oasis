import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Booking from "./pages/Booking";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
}); //for React Query

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {/* This <StyleSheetManager/ > componnent removes the yellow error from console log npm i @emotion/is-prop-valid comes from comment */}
        <StyleSheetManager
          shouldForwardProp={(propName, elementToBeRendered) => {
            return typeof elementToBeRendered === "string"
              ? isPropValid(propName)
              : true;
          }}
        >
          <GlobalStyles />
          {/* GlobalStyles For styling usisng styeld component */}
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={<Navigate replace to="dashboard" />}
                ></Route>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="Bookings" element={<Bookings />}></Route>
                <Route path="Bookings/:bookingId" element={<Booking />}></Route>
                <Route path="checkin/:bookingId" element={<Checkin />}></Route>
                <Route path="cabins" element={<Cabins />}></Route>
                <Route path="users" element={<Users />}></Route>
                <Route path="settings" element={<Settings />}></Route>
                <Route path="account" element={<Account />}></Route>
              </Route>

              <Route path="login" element={<Login />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </BrowserRouter>
          {/* Toaster gives toast ui which is like a alert element */}
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </StyleSheetManager>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
