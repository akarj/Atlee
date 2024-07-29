import React from 'react';

const PostCard: React.FC<PostProps> = ({ profilePic, name, reaction, content, commentCount, createdAt }) => {
    const timeAgo = (date: Date) => {
        const now = new Date();
        const diffInMinutes = Math.abs(Math.floor((now.getTime() - date.getTime()) / (60000 * 24)));
        return `${diffInMinutes} mins ago`;
    };

    return (
        <div className="bg-bg-2 w-full rounded-lg px-5 pt-[24px] pb-5 mt-4 border-2 border-solid border-100">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                    <img src={profilePic} alt={name} className="w-11 h-11 rounded-[50%] mr-3 object-cover" />
                    <div>
                        <h3 className="text-white-200 font-medium text-base">{name}</h3>
                        <p className="text-gray-200 text-sm font-medium text-left">{timeAgo(createdAt)}</p>
                    </div>
                </div>
                <div className="text-gray-200">
                    <span className="sr-only">More options</span>
                    •••
                </div>
            </div>
            <div className="flex w-full bg-bg-3 px-4 py-4 gap-4 rounded-lg mt-4">
                <div className="">
                    <div className="inline-block">
                        <div className="w-12 h-12 bg-bg-2 rounded-full flex items-center justify-center">
                            <span role="img" className="text-lg" aria-label="reaction">
                                {reaction}
                            </span>
                        </div>
                    </div>
                </div>
                <p className="text-gray-200 inline text-left">{content}</p>
            </div>
            <div className="flex items-center text-gray-200 mt-3">
                <svg className="w-5 h-5 mr-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3333 3.83333L2.66662 3.83336C1.8382 3.83336 1.16663 4.50493 1.16663 5.33336V13.3334C1.16663 14.1618 1.8382 14.8334 2.66662 14.8334H10C10.1326 14.8334 10.2598 14.886 10.3536 14.9798L13.5 18.1262V15.3334C13.5 15.0572 13.7238 14.8334 14 14.8334H17.3333C18.1617 14.8334 18.8333 14.1618 18.8333 13.3334V5.33333C18.8333 4.5049 18.1617 3.83333 17.3333 3.83333ZM2.66662 2.83336L17.3333 2.83333C18.714 2.83333 19.8333 3.95262 19.8333 5.33333V13.3334C19.8333 14.7141 18.714 15.8334 17.3333 15.8334H14.5V19.3333C14.5 19.5356 14.3781 19.7179 14.1913 19.7953C14.0045 19.8727 13.7894 19.8299 13.6464 19.6869L9.79289 15.8334H2.66662C1.28591 15.8334 0.166626 14.7141 0.166626 13.3334V5.33336C0.166626 3.95265 1.28591 2.83336 2.66662 2.83336Z"
                        fill="#C5C7CA"
                    />
                </svg>

                <span className="text-sm ml-2 font-medium">{commentCount} comments</span>
            </div>
        </div>
    );
};
export default PostCard;
