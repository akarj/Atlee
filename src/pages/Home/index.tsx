import { postData } from '../../Fixtures/PostData';
import CreatePost from '../../Components/CreatePost';
import React, { useState } from 'react';
import PostCard from '../../Components/Posts';
import SignInModel from '@components/Model/SignIn';

const HomePage: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    if (show) {
        console.log('show');
    } else {
        console.log('hide');
    }
    return (
        <>
            <section className="w-full h-full flex justify-center pt-8">
                {show ? <SignInModel show={show} setShow={setShow} /> : <></>}
                <div className="max-w-[900px] otl">
                    <header className="flex flex-col items-start">
                        <h1 className="text-white-200 text-28 leading-28 font-medium">Hello Jane</h1>
                        <div className="font-normal text-base text-gray-200 mt-3">
                            How are you doing today? Would you like to share something with the community 🤗
                        </div>
                    </header>
                    <CreatePost
                        userLoggedIn={() => {
                            setShow(true);
                        }}
                    />

                    {postData.map((post) => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomePage;
