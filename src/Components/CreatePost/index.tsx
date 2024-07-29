import React from 'react';

const CreatePost = () => {
    return (
        <>
            <div className="bg-bg-2 w-full rounded-lg px-5 pt-[24px] pb-2 mt-10 border-2 border-solid border-100">
                <div className="flex flex-col mb-4">
                    <h2 className="text-white-200 text-lg font-medium text-left">Create post</h2>
                    <div className="flex w-full bg-bg-3 px-4 py-4 gap-4 rounded-lg mt-4">
                        <div className="">
                            <div className="inline-block">
                                <div className="w-12 h-12 bg-bg-2 rounded-full flex items-center justify-center">
                                    <span role="img" aria-label="icon" className="text-lg">
                                        💬
                                    </span>
                                </div>
                            </div>
                        </div>
                        <input
                            type="text"
                            className="w-full bg-transparent  text-base font-normal"
                            placeholder="How are you feeling today?"
                            maxLength={400}
                        />
                    </div>
                    <div className="w-full flex  flex-row justify-end">
                        <button className="mt-4 text-white-100 py-2 px-4 hover:bg-blue-500 rounded text-base font-medium w-1/5 text-center font-inherit bg-blue-100">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePost;
