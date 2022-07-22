export default {
    state: {
        userInfo: "info",
    },
    mutations: {
        changeInfo(state) {
            state.userInfo = "123";
        },
    },
};
