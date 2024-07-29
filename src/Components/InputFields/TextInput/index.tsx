import React from 'react';

const TextInput: React.FC<TextInputProps> = ({ htmlFor, placeholder, label, type = 'text', name, id, value, onChange }) => {
    return (
        <>
            <div className="flex flex-col gap-2 mt-4">
                <label htmlFor={htmlFor} className="text-left w-full flex text-white-200 font-medium text-sm">
                    {label}
                </label>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className="bg-transparent rounded font-normal text-base border-1 border-solid border-100 w-full px-4 py-2 text-white-100"
                    required
                />
            </div>
        </>
    );
};

export default TextInput;
