import profileReducer, {createPost, deletePost} from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: 'Hi, what\'s your name?', likesCount: 16},
        {id: 2, message: 'Hi', likesCount: 90},
        {id: 3, message: 'I am Artem', likesCount: 0},
        {id: 4, message: 'I am Vlados', likesCount: 0},
        {id: 5, message: 'I am Lukaa', likesCount: 10},
    ]
}
it('should post be added', function () {
    let action = createPost('Artikus');
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(6);
});
it('should message of post be correct', function () {
    let action = createPost('Artikus');
    let newState = profileReducer(state, action);
    expect(newState.postsData[5].message).toBe('Artikus');
});
it('delete', function () {
    let action = deletePost(2);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4);
});
it('dont delete', function () {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(5);
});
