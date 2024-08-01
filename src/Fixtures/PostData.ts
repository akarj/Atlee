export const postData: Post[] = [
    {
        id: '1',
        profilePic: '/assets/profile-one.jpg',
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
        profilePic: '/assets/profile-two.jpg',
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
