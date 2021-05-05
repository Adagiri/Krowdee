import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Textarea } from "@chakra-ui/textarea";
import { FC } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  buttonTextRef: any;
};

const ContestDrawer: FC<Props> = ({ onClose, isOpen, buttonTextRef }) => {
  return (
    <Box>
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay>
          <DrawerContent>
            <Container maxW="container.md">
              <DrawerHeader>
                <DrawerCloseButton size="sm" />
                Create Contest
              </DrawerHeader>
              <DrawerBody>
                {buttonTextRef.current?.innerText === "Create Contest" ? (
                  <Box>
                    <FormControl mb={2}>
                      <FormLabel>Add question 01</FormLabel>
                      <Input placeholder="question" />
                    </FormControl>
                    <FormControl>
                      <Textarea
                        cols={4}
                        placeholder="add something"
                        size="lg"
                      />
                    </FormControl>
                  </Box>
                ) : (
                  <span>See</span>
                )}
              </DrawerBody>
            </Container>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default ContestDrawer;
