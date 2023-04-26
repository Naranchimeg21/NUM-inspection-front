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
import User from "./scenes/user";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <main
            className="content"
            style={{ marginLeft: isCollapsed ? "80px" : "270px" }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inspection" element={<Inspection />} />
              <Route path="/inspection/add" element={<InspectionAdd />} />
              <Route path="/report" element={<Report />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
