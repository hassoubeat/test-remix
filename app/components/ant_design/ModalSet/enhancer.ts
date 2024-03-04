import { useState, useCallback } from "react";

export const useEnhancer = () => {
  const [isModalOpen, updateIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    updateIsModalOpen(true);
  }, [updateIsModalOpen]);

  const modalHandleOk = useCallback(() => {
    updateIsModalOpen(false);
  }, [updateIsModalOpen]);

  const modalHandleCancel = useCallback(() => {
    updateIsModalOpen(false);
  }, [updateIsModalOpen]);

  return { isModalOpen, showModal, modalHandleOk, modalHandleCancel }
}