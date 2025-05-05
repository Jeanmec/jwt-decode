import { create } from "zustand";
import { persist } from "zustand/middleware";

import { type IDecodedJWT } from "../pages/interfaces/jwt";

interface JwtState {
  jwt: string | null;
  jwtDecoded: IDecodedJWT | null;
  loading: boolean;
  setJwt: (jwt: string) => void;
  setJwtDecoded: (jwtDecoded: IDecodedJWT) => void;
  setLoading: (loading: boolean) => void;
}

export const useJwtStore = create<JwtState>()(
  persist(
    (set) => ({
      jwt: null,
      jwtDecoded: null,
      loading: false,

      setLoading: (loading: boolean) => set({ loading }),

      setJwtDecoded: (jwtDecoded: IDecodedJWT) => {
        set((state) => ({ ...state, jwtDecoded, loading: false }));
      },
      setJwt: (jwt: string) => {
        set({
          jwt,
        });
      },
    }),
    {
      name: "jwt-store",
      partialize: (state) => ({
        jwt: state.jwt,
      }),
    },
  ),
);
