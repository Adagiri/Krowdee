import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { MotionPreset } from "../types";
import { FC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick: boolean;
  motionPreset: MotionPreset;
};

const ContestModal: FC<Props> = ({
  isOpen,
  onClose,
  children,
  closeOnOverlayClick,
  motionPreset,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      closeOnOverlayClick={closeOnOverlayClick}
      onClose={onClose}
      motionPreset={motionPreset}
    >
      <ModalOverlay />
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};

export default ContestModal;
