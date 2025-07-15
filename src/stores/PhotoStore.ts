import { create } from "zustand";

interface Photo {
    albumId: number | string,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
};

interface PhotoStore {
    photos: Photo[],
    searchQuery: string,
    setPhotos: (photos: Photo[]) => void,
    setQuery: (query: string) => void,
};

const usePhotoStore = create<PhotoStore>((set) => ({
    photos: [],
    searchQuery: '',
    setPhotos: (photos: Photo[]) => set(state => ({ photos: [...state.photos, ...photos] })),
    setQuery: (query: string) =>
        set(state => ({ photos: state.photos.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) }))

}));

export default usePhotoStore;