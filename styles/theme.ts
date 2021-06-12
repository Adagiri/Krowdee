import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const FontFamily: string = "Sora";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: "Alata",
    heading: "Alata",
    mono: FontFamily,
  },
  colors: {
    success: {
      50: "#ddfff6",
      100: "#b4f9e8",
      200: "#88f4d9",
      300: "#5cf0ca",
      400: "#33ebbb",
      500: "#1dd2a1",
      600: "#0fa37d",
      700: "#03755a",
      800: "#004735",
      900: "#001911",
    },
    error: {
      50: "#ffe6e6",
      100: "#f7bdbd",
      200: "#ec9494",
      300: "#e2696b",
      400: "#d93f40",
      500: "#c02627",
      600: "#961d1d",
      700: "#6b1315",
      800: "#43090a",
      900: "#1d0000",
    },
    brand: {
      50: "#dcfcff",
      100: "#b3f1fd",
      200: "#87e5f8",
      300: "#5bdbf4",
      400: "#37d0f0",
      500: "#25b6d6",
      600: "#168fa7",
      700: "#076678",
      800: "#003d49",
      900: "#00161c",
    },
  },
});

export default theme;
