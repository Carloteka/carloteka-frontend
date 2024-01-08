import { useEffect } from 'react';
import { Backdrop, ModalBox } from './Modal.styled';

interface ModalProps {
  children: React.ReactNode[];
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.nodeName === 'DIV' && target?.className.includes('overlay')) {
      onClose();
    }
  };

  return (
    <Backdrop className="overlay" onMouseDown={handleBackdropClick}>
      <ModalBox>{children}</ModalBox>
    </Backdrop>
  );
};
