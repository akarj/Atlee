import React from 'react';

const ModelHeader: React.FC<ModelHeaderProps> = ({ title, subTitle }) => {
    return (
        <>
            <header className="mb-8 gap-1 flex flex-col">
                <h2 className="text-gray-100 uppercase text-sm font-medium">{title}</h2>
                <h3 className="text-white-100 capitalize text-lg font-semibold">{subTitle}</h3>
            </header>
        </>
    );
};

export default ModelHeader;
