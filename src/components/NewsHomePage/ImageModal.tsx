import React from 'react';
import { Modal } from 'react-bootstrap';

import { useNews } from '@/context';

const ImageModal: React.FC = () => {
  const { imageUrl, showImageModal, setShowImageModal } = useNews();

  return (
    <Modal size='lg' show={showImageModal} onHide={() => setShowImageModal(false)}>
      <Modal.Header 
        closeButton 
        onHide={() => setShowImageModal(false)}
      >
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {
            imageUrl && <img style={{ maxWidth: '100%' }} src={imageUrl} alt="news" />
          }
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ImageModal;
