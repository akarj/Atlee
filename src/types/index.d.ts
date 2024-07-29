import { ReactNode, FC } from 'react';
import ModelContainer from '@components/Model/ModelContainer';
import ModelHeader from '@components/Model/ModelHeader';

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

// ========================================

declare type SignUpParams = {
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
    email: string;
    password: string;
};

declare type LoginUser = {
    email: string;
    password: string;
};

declare type User = {
    $id: string;
    email: string;
    userId: string;
    userName: string;
};

declare type NewUserParams = {
    userId: string;
    email: string;
    userName: string;
    password: string;
};

declare type Post = {
    $id: string;
    userId: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
};

declare type FooterType = 'Register' | 'Login';

// ========================================
//              Interface
// ========================================

declare global {
    interface ModelContainerProps {
        children: ReactNode;
        type?: 'dialog' | 'section';
    }
    interface ModelComponentProps {
        children: ReactNode;
        onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    }
    interface ModelHeaderProps {
        title: string;
        subTitle: string;
    }
    interface ModelFooterProps {
        type: FooterType;
        redirectText: string;
        redirectLink: string;
    }

    interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>, React.LabelHTMLAttributes<HTMLLabelElement> {
        label: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }

    interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
        children: React.ReactNode;
        to: string;
    }

    interface Post {
        id: string;
        profilePic: string;
        attribute: string;
        name: string;
        reaction: string;
        content: string;
        commentCount: number;
        createdAt: Date;
        updatedAt: Date;
    }

    interface PostProps extends Post {
        children?: ReactNode;
    }

    interface ModelComponent {
        Container: FC<ModelContainerProps>;
        Header: FC<ModelHeaderProps>;
        TextInput: FC<TextInputProps>;
        PasswordInput: FC<TextInputProps>;
        Footer: FC<ModelFooterProps>;
    }
}
