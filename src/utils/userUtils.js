export const getUserName = (userId, users) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown User';
};
