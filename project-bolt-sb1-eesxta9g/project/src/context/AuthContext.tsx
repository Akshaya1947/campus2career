import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Role = 'guest' | 'doctor' | 'patient';

interface User {
  role: Role;
  username?: string;
  patientPhone?: string;
  village?: string;
}

interface AuthContextValue {
  user: User;
  isAuthenticated: boolean;
  loginDoctor: (username: string, password: string, village?: string) => boolean;
  loginPatient: (patientPhone: string, village?: string) => void;
  logout: () => void;
}

const STORAGE_KEY = 'healthapp-auth-user';

const allowedDoctors: Record<string, string> = {
  drpriya: 'doctor123',
  drrajesh: 'doctor123',
  drmeera: 'doctor123',
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({ role: 'guest' });

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const loginDoctor = (username: string, password: string, village?: string) => {
    const key = username.trim().toLowerCase();
    if (allowedDoctors[key] && allowedDoctors[key] === password) {
      setUser({ role: 'doctor', username: key, village });
      return true;
    }
    return false;
  };

  const loginPatient = (patientPhone: string, village?: string) => {
    setUser({ role: 'patient', patientPhone: patientPhone.trim(), village });
  };

  const logout = () => setUser({ role: 'guest' });

  const value = useMemo<AuthContextValue>(() => ({
    user,
    isAuthenticated: user.role !== 'guest',
    loginDoctor,
    loginPatient,
    logout,
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};


