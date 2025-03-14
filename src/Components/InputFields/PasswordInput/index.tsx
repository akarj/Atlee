import React, { useState } from 'react';

const PasswordInput: React.FC<TextInputProps> = ({ htmlFor, placeholder, label, type = 'password', name, id, value, onChange }) => {
    const [passwordInputType, setPasswordInputType] = useState(type);
    return (
        <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between text-sm font-medium text-white-200">
                <label htmlFor={htmlFor}>{label}</label>
                <span className="cursor-pointer">Forgot password?</span>
            </div>
            <div className="relative passwordInputContainer">
                <input
                    type={passwordInputType}
                    name={name}
                    placeholder={placeholder}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className="bg-transparent rounded font-normal text-base border-1 border-solid border-100 w-full px-4 py-2 text-white-100"
                    required
                />
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent hover:border-transparent custom-svg-hover"
                    onClick={() => {
                        setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password');
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="toggle-password-icon">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.41667 10C2.41667 9.19329 2.93513 7.70472 4.18608 6.40565C5.40721 5.13755 7.29888 4.08334 10 4.08334C12.7011 4.08334 14.5928 5.13755 15.8139 6.40565C17.0649 7.70472 17.5833 9.19329 17.5833 10C17.5833 10.8067 17.0649 12.2953 15.8139 13.5944C14.5928 14.8624 12.7011 15.9167 10 15.9167C7.29888 15.9167 5.40721 14.8624 4.18608 13.5944C2.93513 12.2953 2.41667 10.8067 2.41667 10ZM10 2.58334C6.8678 2.58334 4.5928 3.82078 3.1056 5.36519C1.64822 6.87862 0.916672 8.72338 0.916672 10C0.916672 11.2766 1.64822 13.1214 3.1056 14.6348C4.5928 16.1792 6.8678 17.4167 10 17.4167C13.1322 17.4167 15.4072 16.1792 16.8944 14.6348C18.3518 13.1214 19.0833 11.2766 19.0833 10C19.0833 8.72338 18.3518 6.87862 16.8944 5.36519C15.4072 3.82078 13.1322 2.58334 10 2.58334ZM8.24993 10C8.24993 9.0335 9.03343 8.25 9.99993 8.25C10.9664 8.25 11.7499 9.0335 11.7499 10C11.7499 10.9665 10.9664 11.75 9.99993 11.75C9.03343 11.75 8.24993 10.9665 8.24993 10ZM9.99993 6.75C8.205 6.75 6.74993 8.20508 6.74993 10C6.74993 11.7949 8.205 13.25 9.99993 13.25C11.7949 13.25 13.2499 11.7949 13.2499 10C13.2499 8.20508 11.7949 6.75 9.99993 6.75Z"
                            className="fill-current text-gray-500"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;
