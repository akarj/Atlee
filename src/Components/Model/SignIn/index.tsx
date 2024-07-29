import React from 'react';
import Model from '..';

const SignInModel: React.FC<SignInModelProps> = ({ show = true }) => {
    return (
        <>
            <Model>
                <Model.Container open={show}>
                    <Model.Header title="WELCOME BACK" subTitle="Log into your account" />
                    <Model.TextInput
                        placeholder="Enter your email or username"
                        type="text"
                        htmlFor="Email"
                        id="Email"
                        name="Email"
                        value="as"
                        onChange={() => {}}
                        label="Email or Username"
                    />
                    <Model.PasswordInput
                        placeholder="Enter your password"
                        type="password"
                        htmlFor="Password-input"
                        id="Password"
                        name="Password"
                        value=""
                        onChange={() => {}}
                        label="Password"
                    />
                    <button type="submit" className="rounded text-base font-medium w-full text-center mt-4 font-inherit bg-blue-100">
                        Login Now
                    </button>
                    <Model.Footer redirectText="Not registered yet? Register" redirectLink="/register" type="Register" />
                </Model.Container>
            </Model>
        </>
    );
};

export default SignInModel;
