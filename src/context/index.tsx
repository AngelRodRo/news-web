import { createContext, useContext, useState } from 'react';

type NewsContextProps = {
  imageUrl: string;
  setImageUrl: (imageUrl: string) => void;
  showImageModal: boolean;
  setShowImageModal: (showImageModal: boolean) => void;
}

const NewsContext = createContext<NewsContextProps>({
  imageUrl: '',
  setImageUrl: () => {},
  showImageModal: false,
  setShowImageModal: () => {},
});

export const NewsProvider: React.FC<{ children: React.ReactNode} > = ({ children }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [show, setShow] = useState(false);

  return (
    <NewsContext.Provider value={{ 
      imageUrl, 
      setImageUrl, 
      showImageModal: show, 
      setShowImageModal: setShow 
    }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
