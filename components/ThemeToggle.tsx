import React from "react"
import { useColorMode } from "@chakra-ui/color-mode"
import { IconButton } from "@chakra-ui/button"
import { BiMoon, BiSun } from "react-icons/bi"
import { Box } from "@chakra-ui/layout"

const ThemeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <div>
      <Box w="100%" pt="3" textAlign="right" h="7vh">
        <IconButton
          onClick={toggleColorMode}
          aria-label="toggle-dark-mode-button"
          size="sm"
          icon={colorMode === "light" ? <BiMoon /> : <BiSun />}
        />
      </Box>
    </div>
  )
}

export default ThemeToggle
