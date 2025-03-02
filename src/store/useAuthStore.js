import {create} from 'zustand';
import {mountStoreDevtool} from 'simple-zustand-devtools';

const useAuthStore = create((get, set) => ({
    allUserData: null,
    loading: false,

    user: () => ({
        user_id: get().allUserData?.user_id || null,
        username: get().allUserData?.username || null,
    }),

    setUser: (user) => ({
        allUserData: user,
    }),

    setLoading: (loading) => set({loading}),

    loggedIn: () => get().allUserData !== null,

}));

if (import.meta.env.DEV){
    mountStoreDevtool("Store", useAuthStore);
}

export{useAuthStore};

