import React, { ReactNode } from 'react';

const FormContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <form className="wrapper w-full h-full bg-bg-2 rounded-lg px-4 py-8">{children}</form>
        </>
    );
};

const ModelContainer: React.FC<ModelContainerProps> = ({ children, type = 'dialog', open = true, closeHandler }) => {
    if (type === 'section') {
        return (
            <>
                <div className="bg-card-gradient rounded-lg p-[2px] md:w-[600px]">
                    <FormContainer>{children}</FormContainer>
                </div>
            </>
        );
    }

    return (
        <>
            <dialog
                open={open}
                className="bg-card-gradient rounded-lg w-2/5 min-h-2/5 max-h-fit-content p-[2px] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
                <div role="button" className="absolute right-4 top-4" onClick={closeHandler}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#131319" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.5754 12.3086C20.8194 12.0645 20.8194 11.6688 20.5754 11.4247C20.3313 11.1807 19.9355 11.1807 19.6915 11.4247L16.0001 15.1161L12.3087 11.4247C12.0646 11.1807 11.6689 11.1807 11.4248 11.4247C11.1807 11.6688 11.1807 12.0645 11.4248 12.3086L15.1162 16L11.4248 19.6914C11.1807 19.9355 11.1807 20.3312 11.4248 20.5753C11.6689 20.8194 12.0646 20.8194 12.3087 20.5753L16.0001 16.8839L19.6915 20.5753C19.9355 20.8194 20.3313 20.8194 20.5754 20.5753C20.8194 20.3312 20.8194 19.9355 20.5754 19.6914L16.884 16L20.5754 12.3086Z"
                            fill="white"
                        />
                    </svg>
                </div>

                <FormContainer>{children}</FormContainer>
            </dialog>
        </>
    );
};

export default ModelContainer;
