import LoginForm from "@/app/(auth)/login/loginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Đăng nhập</h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
