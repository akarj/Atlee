import CreatePost from '../../Components/CreatePost';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <>
            <section className="w-full h-full flex justify-center pt-8">
                <div className="max-w-[900px]">
                    <header className="flex flex-col items-start">
                        <h1 className="text-white-200 text-28 leading-28 font-medium">Hello Jane</h1>
                        <div className="font-normal text-lg text-gray-200 mt-3">
                            How are you doing today? Would you like to share something with the community 🤗
                        </div>
                    </header>
                    <CreatePost />
                </div>
            </section>
        </>
    );
};

export default HomePage;
