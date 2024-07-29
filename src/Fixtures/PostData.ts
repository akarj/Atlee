// export const postData = [
//     {
//         id: 'post-01',
//         profile:
//             'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//         profilePic: 'profile-one.jpg',
//         attribute:
//             'https://unsplash.com/photos/man-in-black-and-white-striped-crew-neck-t-shirt-yRlqKFirhsE?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
//         name: 'John Doe',
//         username: 'XXXXXXX',
//         location: 'New York, USA',
//         post: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//         likes: 100,
//         description: 'This is a description of the post',
//         comments: 10,
//         time: '1h',
//     },
//     {
//         id: 'post-02',
//         profile:
//             'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//         profilePic: 'profile-two.jpg',

//         attribute:
//             'https://unsplash.com/photos/woman-in-blue-and-brown-jacket-zar90MHyWYc?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
//         name: 'John Doe',
//         username: 'XXXXXXX',
//         location: 'New York, USA',
//         post: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//         likes: 100,
//         description: 'This is a description of the post',
//         comments: 10,
//         time: '1h',
//     },
//     {
//         id: 'post-03',
//         profile:
//             'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//         profilePic: 'profile-three.jpg',
//         attribute:
//             'https://unsplash.com/photos/man-in-blue-and-white-plaid-shirt-oCQSzJp5mVE?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
//         name: 'John Doe',
//         username: 'XXXXXXX',
//         location: 'New York, USA',
//         post: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//         likes: 100,
//         description: 'This is a description of the post',
//         comments: 10,
//         time: '1h',
//     },
// ];

export const postData: Post[] = [
    {
        id: '1',
        profilePic: 'src/assets/profile-one.jpg',
        name: 'Theresa Webb',
        reaction: '👋',
        attribute:
            'https://unsplash.com/photos/man-in-black-and-white-striped-crew-neck-t-shirt-yRlqKFirhsE?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
        content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        commentCount: 24,
        createdAt: new Date('2024-07-29T12:00:00Z'),
        updatedAt: new Date('2024-07-29T12:00:00Z'),
    },
    {
        id: '2',
        profilePic: 'src/assets/profile-two.jpg',
        name: 'John Doe',
        reaction: '😊',
        attribute:
            'https://unsplash.com/photos/woman-in-blue-and-brown-jacket-zar90MHyWYc?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
        content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        commentCount: 15,
        createdAt: new Date('2024-07-29T11:30:00Z'),
        updatedAt: new Date('2024-07-29T11:30:00Z'),
    },
    // Add more post objects as needed
];
export default {
    postData,
};
