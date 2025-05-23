import React from "react";
import Button from "./Button";
import Input from "./Input";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { MdKey } from "react-icons/md";

const FormRegisterWithRouter = (props) => {
    const navigate = useNavigate();
    return <FormRegister {...props} navigate={navigate} />;
}

class FormRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            showPassword: false,
            showConfirmPassword: false,
            errorMessage: ""
        };

        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onConfirmPasswordChangeHandler = this.onConfirmPasswordChangeHandler.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.showPasswordHandler = this.showPasswordHandler.bind(this);
        this.showConfirmPasswordHandler = this.showConfirmPasswordHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    onEmailChangeHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }

    onPasswordChangeHandler(event) {
        this.setState(() => {
            return {
                password: event.target.value
            }
        })
    }

    onConfirmPasswordChangeHandler(event) {
        this.setState(() => {
            return {
                confirmPassword: event.target.value
            }
        })
    }

    showPasswordHandler() {
        this.setState((prevState) => {
            return {
                showPassword: !prevState.showPassword
            }
        })
    }

    showConfirmPasswordHandler() {
        this.setState((prevState) => {
            return {
                showConfirmPassword: !prevState.showConfirmPassword
            }
        })
    }

    handleLoginClick() {
        this.props.navigate('/login');
    }


    handleSubmit(event) {
        event.preventDefault();
        const { email, password, confirmPassword } = this.state;

        if (!email || !password || !confirmPassword) {
            this.setState({ errorMessage: "Semua kolom harus diisi!" });
            setTimeout(() => {
                this.setState({ errorMessage: "" });
            }, 3000);
        } else if (password !== confirmPassword) {
            this.setState({ errorMessage: "Password tidak cocok!" });
            setTimeout(() => {
                this.setState({ errorMessage: "" });
            }, 3000);
        } else if (password.length < 8) {
            this.setState({ errorMessage: "Password minimal 8 karakter!" });
            setTimeout(() => {
                this.setState({ errorMessage: "" });
            }, 3000);
        } 
        else {
            this.setState({ errorMessage: "" });
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="w-80 lg:w-96 text-sm font-dm-sans flex flex-col justify-center bg-[#3D2357] p-10 gap-3 rounded-md backdrop-blur-md [box-shadow:0_0_10px_5px_#AC6871,_0_0_20px_5px_#AC6871_inset]">
                <Alert message={this.state.errorMessage} />
                <div className="relative">
                    <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3D2357] text-xl" />
                    <Input
                        type="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.onEmailChangeHandler}
                    />
                </div>
                <div className="relative flex items-center">
                    <MdKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3D2357] text-xl" />
                    <Input
                        type={this.state.showPassword ? "text" : "password"}
                        placeholder="minimal 8 karakter"
                        value={this.state.password}
                        onChange={this.onPasswordChangeHandler}
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3D2357]"
                        onClick={this.showPasswordHandler}
                    >
                        {this.state.showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>

                <div className="relative flex items-center">
                    <MdKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3D2357] text-xl" />
                    <Input
                        type={this.state.showConfirmPassword ? "text" : "password"}
                        placeholder="confirm password"
                        value={this.state.confirmPassword}
                        onChange={this.onConfirmPasswordChangeHandler}
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3D2357]"
                        onClick={this.showConfirmPasswordHandler}>
                        {this.state.showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <Button
                        className=" w-full custom-button-bg p-2 text-white rounded-md transition-all duration-300 button-hover cursor-pointer"
                        type="submit"
                        text="Registrasi" />

                    <p className="text-center">or</p>

                    <button
                        type="button"
                        className="w-full p-[2px] rounded-md bg-[length:200%_200%] custom-button-bg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[position:100%_0] button-hover"
                    >
                        <div className="flex items-center justify-center gap-2 w-full h-full bg-[#3D2357] text-white rounded-md p-2">
                            <img src="/google.svg" alt="Google Logo" className="w-5 h-5" />
                            Login dengan Google
                        </div>
                    </button>
                    <p className="text-center text-xs">Sudah punya akun? <span className="text-xs text-[#F97283] hover:underline font-bold cursor-pointer" onClick={this.handleLoginClick}>Login</span></p>
                </div>
            </form>
        );
    }
}

export default FormRegisterWithRouter;