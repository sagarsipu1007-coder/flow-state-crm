import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type AuthMode = "signin" | "signup";

export type DemoUser = { name: string; email: string };

type AuthContextValue = {
  user: DemoUser | null;
  ready: boolean;
  modalOpen: boolean;
  mode: AuthMode;
  openAuth: (mode?: AuthMode) => void;
  closeAuth: () => void;
  setMode: (mode: AuthMode) => void;
  signIn: (user: DemoUser) => void;
  signOut: () => void;
};

const STORAGE_KEY = "northpeak.demo-user";

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [ready, setReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>("signin");

  // Hydrate after mount so SSR markup and first client render match.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw) as DemoUser);
    } catch {
      /* ignore malformed storage */
    }
    setReady(true);
  }, []);

  // Signed out (initially, or right after logout) -> the sign-in modal pops up.
  useEffect(() => {
    if (!ready) return;
    if (user) {
      setModalOpen(false);
      return;
    }
    setMode("signin");
    const t = window.setTimeout(() => setModalOpen(true), 450);
    return () => window.clearTimeout(t);
  }, [ready, user]);

  const openAuth = useCallback((next: AuthMode = "signin") => {
    setMode(next);
    setModalOpen(true);
  }, []);

  const closeAuth = useCallback(() => setModalOpen(false), []);

  const signIn = useCallback((next: DemoUser) => {
    setUser(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    setModalOpen(false);
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({ user, ready, modalOpen, mode, openAuth, closeAuth, setMode, signIn, signOut }),
    [user, ready, modalOpen, mode, openAuth, closeAuth, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}