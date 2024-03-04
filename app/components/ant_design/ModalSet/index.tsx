import { Button, Modal } from "antd";
import { useEnhancer } from "./enhancer";

export function ModalSet() {
  const { isModalOpen, showModal, modalHandleOk, modalHandleCancel } = useEnhancer();

  return (
    <>
      <Button type="primary" onClick={showModal}>open modal</Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={modalHandleOk} onCancel={modalHandleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
