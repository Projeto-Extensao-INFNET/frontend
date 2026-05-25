import { create } from 'zustand';

// ?? [ ] => criar possível método de logout e remover a rota de logout do backend?
// TODO [ ] => encontrar uma forma segura de acessar os dados presentes nos cookies
// ?? [ ] => implementar logout automático quando o token ficar inválido?
// !FIX [ ] => corrigir o recebimento dos dados do usuário vindos do backend

export interface User {
  username: string;
  sub: string;
  role: string;
}

interface Session {
  accessToken: string;
  refreshToken: string;
  data: {
    user: User;
  };
}

interface States {
  user: User | null;
}

interface Actions {
  setSession: (sessionData: Session) => void;
}

type AuthStore = States & Actions;

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,

  setSession: (sessionData) => set({ user: sessionData.data.user }),
}));
