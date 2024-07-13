// themes/darklight.js

import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 1. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false, // Optional: if you don't want to use system color mode
};

const colors = {
  light: {
    background: "#ffffff",
    text: "#666666",
    primary: "#1a202c",
    secondary: "#718096",
  },
  dark: {
    background: "#111111",
    text: "#ffffff",
    primary: "#2d3748",
    secondary: "#4a5568",
  },
};

// 2. Extend the theme
const theme = extendTheme({
  config,
  components: {
    IconButton: {
      baseStyle: {
        colorScheme: "red", // Set the default colorScheme for IconButton
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg:
          props.colorMode === "dark"
            ? colors.dark.background
            : colors.light.background,
        color:
          props.colorMode === "dark" ? colors.dark.text : colors.light.text,
      },
    }),
  },
  colors: {
    primary: {
      500: colors.light.primary, // You can add different shades if needed
    },
    secondary: {
      500: colors.light.secondary, // You can add different shades if needed
    },
    customYellow: {
      500: "#ffb400",
      200: "#ffb400",
    },
  },
});

export default theme;
