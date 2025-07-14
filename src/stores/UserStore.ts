import { create } from "zustand";

type User = {
    name: string,
    email: string,
    password: number | string
}

type UserType = {
    users: User
    getUser: () => void,
    setUser: (newUser: User) => void
};


const useUserStore = create<UserType>((set) => ({
    users: {
        name: '',
        email: '',
        password: ""
    },
    getUser: () => set(state => ({ users: state.users })),
    setUser: (newUser) => set(() => ({ users: newUser }))

}));

export default useUserStore;