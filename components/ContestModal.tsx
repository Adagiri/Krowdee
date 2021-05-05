import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { MotionPreset } from "../types";
import { FC } from "react";
import { MdUpdate } from "react-icons/md";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  modalHeader: string;
  hasCloseButton: boolean;
  hasFooter: boolean;
  closeOnOverlayClick: boolean;
  motionPreset: MotionPreset;
};

const ContestModal: FC<Props> = ({
  isOpen,
  onClose,
  modalHeader,
  hasCloseButton,
  children,
  hasFooter,
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
      <ModalContent>
        <ModalHeader> {modalHeader} </ModalHeader>
        {hasCloseButton && <ModalCloseButton size="sm" />}
        <ModalBody pb={6}>{children}</ModalBody>

        {hasFooter && (
          <ModalFooter>
            <Button
              leftIcon={<MdUpdate size="20px" />}
              colorScheme="brand"
              mr={3}
              size="sm"
            >
              update profile
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ContestModal;
