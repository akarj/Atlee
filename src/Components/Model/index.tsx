import React, { FC } from 'react';
import ModelContainer from './ModelContainer';
import ModelHeader from './ModelHeader';
import TextInput from '../InputFields/TextInput';
import PasswordInput from '../InputFields/PasswordInput';
import ModelFooter from './ModelFooter';

const Model: FC<ModelComponentProps> & ModelComponent = ({ children }) => {
    return (
        <>
            <>{children}</>
        </>
    );
};

Model.Container = ModelContainer;
Model.Header = ModelHeader;
Model.TextInput = TextInput;
Model.PasswordInput = PasswordInput;
Model.Footer = ModelFooter;

export default Model;

export { Model };
