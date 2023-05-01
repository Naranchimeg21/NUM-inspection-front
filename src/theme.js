import { useContext, useState, useMemo, createContext } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#fff",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#F2F0F0",
          400: "#30334e",
          500: "#282a42",
          600: "#101624",
          700: "#0c101b",
          800: "#2f4b8d",
          900: "#2c365e",
          10: "#0140a0",
          11: "#1B4588",
          12: "#1B4588",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#000",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#ffffff", // manually changed
          500: "#f3f3f3",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
          10: "#0140a0",
          11: "#1B4588",
          12: "#1B4588",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              main: colors.grey[500],
              dark: colors.grey[700],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              main: colors.grey[500],
              dark: colors.grey[700],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },

    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    text: {
      primary: "green",
    },
    overrides: {
      MuiTab: {
        selected: {
          color: "#040509",
        },
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            padding: "5px 0",
            ":hover": {
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            },
          },
        },
      },
      MuiBox: {
        styleOverrides: {
          root: {
            backgroundColor: colors.primary[400],
            color: colors.primary[400],
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "#1e69c5",
            },
            backgroundColor: colors.primary[10],
            color: "#fff",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: colors.primary[400],
            color: colors.grey[400],
          },
        },
      },

      MuiIconButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: colors.primary[800],
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            color: colors.grey[400],
            "&.MuiTab-root.Mui-selected": {
              color: colors.grey[400],
              borderColor: colors.grey[400],
            },
            "& .MuiTabs-indicator": {
              backgroundColor: colors.primary[10],
              height: 3,
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            "&.MuiTab-root.Mui-selected": {
              color: colors.grey[400],
            },
            "&$selected": {
              backgroundColor: "#004C9B",
              color: "white",
              // fontWeight: theme.typography.fontWeightMedium,
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: "#fff", // your desired color here
          },
        },
      },
      // MuiTab: {
      //   styleOverrides: {
      //     textColorInherit: {
      //       color: colors.grey[400],
      //     },
      //     color: colors.grey[400],
      //     "&:active": {
      //       background: "green",
      //     },
      //   },
      //   action: {
      //     selected: "#ff0000", // set selected/active tab color to red
      //   },
      // },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
