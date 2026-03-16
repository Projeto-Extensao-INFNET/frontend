import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface User {
  userId: string;
  username: string;
}

type UpdateTokensParams = {
  accessToken: string | null;
};

interface States {
  user: User | null;
  accessToken: string | null;
}

interface Actions {
  logout: () => void;
  updateTokens: (updateTokensParams: UpdateTokensParams) => void;
}

type AuthStore = States & Actions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,

      logout: () =>
        set({
          user: null,
          accessToken: null,
        }),

      updateTokens: (updateTokensParams) => set({ ...updateTokensParams }),
    }),
    { name: 'auth', storage: createJSONStorage(() => localStorage) },
  ),
);
