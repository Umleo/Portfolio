
import { create } from "zustand";

interface SiteModal {
    title: string;
    setTitle: (value: string) => void;
}

export const useSiteTitle = create<SiteModal>()((set) => ({
    title: '',
    setTitle: (value) => set({ title: value }),
}));    