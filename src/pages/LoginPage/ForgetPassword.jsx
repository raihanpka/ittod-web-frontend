import React from "react";
import FormForgetPasswordWithRouter from "../../components/Login/FormForgetPassword";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col lg:flex-row lg:m-0 m-10 gap-10 h-screen items-center justify-center bg-cover bg-center" >
              <img
                className="w-70 lg:w-96 object-cover rounded-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                src="/LOGO_ITTODAY_2025.webp"
                alt="Logo ITTODAY"
                onClick={() => navigate("/")}
            />
            <FormForgetPasswordWithRouter />
        </div>
    )
}

export default ForgetPassword;