import { postData } from '../../Fixtures/PostData';
import CreatePost from '../../Components/CreatePost';
import React from 'react';
// import Post from '../../Components/Posts';
import PostCard from '../../Components/Posts';

const HomePage: React.FC = () => {
    return (
        <>
            <section className="w-full h-full flex justify-center pt-8">
                <div className="max-w-[900px] otl">
                    <header className="flex flex-col items-start">
                        <h1 className="text-white-200 text-28 leading-28 font-medium">Hello Jane</h1>
                        <div className="font-normal text-base text-gray-200 mt-3">
                            How are you doing today? Would you like to share something with the community 🤗
                        </div>
                    </header>
                    <CreatePost />
                    {/* {postData.map((post) => (
                        <Post key={post.id}>{post.post}</Post>
                    ))} */}

                    {postData.map((post) => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomePage;
