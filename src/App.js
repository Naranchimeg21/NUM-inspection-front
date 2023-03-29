import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Report from "./scenes/report";
import Inspection from "./scenes/inspection";
import InspectionAdd from "./scenes/inspection/add";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inspection" element={<Inspection />} />
              <Route path="/inspection/add" element={<InspectionAdd />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
