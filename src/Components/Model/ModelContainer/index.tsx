import React, { ReactNode } from 'react';

const FormContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <form className="wrapper w-full h-full bg-bg-2 rounded-lg px-4 py-8">{children}</form>
        </>
    );
};

const ModelContainer: React.FC<ModelContainerProps> = ({ children, type = 'dialog', open = true }) => {
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
            <dialog open={open} className="bg-card-gradient rounded-lg w-2/5 min-h-2/5 max-h-fit-content p-[2px]">
                <FormContainer>{children}</FormContainer>
            </dialog>
        </>
    );
};

export default ModelContainer;
