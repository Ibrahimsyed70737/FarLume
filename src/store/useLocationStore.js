import { create } from 'zustand'

export const useLocationStore = create((set) => ({
  location: null, // { lat, lon, label }
  setLocation: (location) => set({ location }),
}))
