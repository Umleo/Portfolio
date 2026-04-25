
import { create } from "zustand";

interface SiteModal {
    title: string;
    dev: boolean;
    setTitle: (value: string) => void;
    setDev: (value: boolean) => void;
}

export const useSiteTitle = create<SiteModal>()((set) => ({
    title: '',
    dev: false,
    setTitle: (value) => set({ title: value }),
    setDev: (value) => set({ dev: value }),
}));    