import { useState } from 'react';

interface ModalData {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  caption: string;
}

export const useImageModal = () => {
  const [modalData, setModalData] = useState<ModalData>({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    caption: ''
  });

  const openModal = (imageSrc: string, imageAlt: string, caption: string) => {
    setModalData({
      isOpen: true,
      imageSrc,
      imageAlt,
      caption
    });
  };

  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  return {
    modalData,
    openModal,
    closeModal
  };
}; 