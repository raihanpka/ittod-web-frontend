import React from "react";
import Button from "./Button";
import Input from "./Input";
import Alert from "./Alert"; // <--- Import Alert
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdEmail, MdKey } from "react-icons/md";

const FormLoginWithRouter = (props) => {
    const navigate = useNavigate();
    return <FormLogin {...props} navigate={navigate} />;
}

class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showPassword: false,
            errorMessage: ""
        };

        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.showPasswordHandler = this.showPasswordHandler.bind(this);
        this.forgetPasswordHandler = this.forgetPasswordHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onEmailChangeHandler(event) {
        this.setState({ email: event.target.value });
    }

    onPasswordChangeHandler(event) {
        this.setState({ password: event.target.value });
    }

    showPasswordHandler() {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    }

    handleRegisterClick() {
        this.props.navigate('/register');
    }

    forgetPasswordHandler(event) {
        event.preventDefault(); // <-- Prevent default behavior of the button
        this.props.navigate('/forget-password');
    }

    handleSubmit(event) {
        event.preventDefault();
        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ errorMessage: "Email dan Password harus diisi!" });
            this.errorTimeout = setTimeout(() => {
                this.setState({ errorMessage: "" });
            }, 3000);
        } else {
            this.setState({ errorMessage: "" });
        }
    }

    componentWillUnmount() {
        if (this.errorTimeout) {
            clearTimeout(this.errorTimeout);
        }
    }

    render() {
        const { email, password, showPassword, errorMessage } = this.state;

        return (
            <form
                onSubmit={this.handleSubmit} // <-- Tambahin onSubmit
                className="w-80 lg:w-96 font-dm-sans flex flex-col justify-center bg-[#3D2357] p-10 gap-3 rounded-md backdrop-blur-md [box-shadow:0_0_10px_5px_#AC6871,_0_0_20px_5px_#AC6871_inset]"
            >
                <Alert message={errorMessage} />

                <div className="relative">
                    <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3D2357] text-xl" />
                    <Input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={this.onEmailChangeHandler}
                    />
                </div>

                <div className="relative flex items-center">
                    <MdKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3D2357] text-xl" />
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        value={password}
                        onChange={this.onPasswordChangeHandler}
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3D2357]"
                        onClick={this.showPasswordHandler}
                    >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>

                <Button className="text-xs text-left cursor-pointer hover:underline" type="button" text="Lupa Password?" onClick={this.forgetPasswordHandler} />

                <div className="w-full flex flex-col gap-4">
                    <Button
                        className="w-full custom-button-bg p-2 text-white rounded-md transition-all duration-300 button-hover cursor-pointer"
                        type="submit"
                        text="Login"
                    />
                    <p className="text-center">or</p>
                    <button
                        type="button"
                        onClick={() => window.location.href = "http://localhost:5000/api/auth/google"}
                        className="w-full p-[2px] rounded-md bg-[length:200%_200%] custom-button-bg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[position:100%_0] button-hover "
                    >
                        <div className="flex items-center justify-center gap-2 w-full h-full bg-[#3D2357] text-white rounded-md p-2">
                            <img src="/google.svg" alt="Google Logo" className="w-5 h-5" />
                            Login dengan Google
                        </div>
                    </button>

                    <p className="text-center text-xs">
                        Belum punya akun?{" "}
                        <span
                            className="text-xs text-[#F97283] hover:underline font-bold cursor-pointer"
                            onClick={this.handleRegisterClick}
                        >
                            Registrasi
                        </span>
                    </p>
                </div>
            </form>
        );
    }
}

export default FormLoginWithRouter;
