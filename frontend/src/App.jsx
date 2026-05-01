import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Feed from "./pages/Feed";
import Competitions from "./pages/Competitions";
import CompetitionDetail from "./pages/CompetitionDetail";
import CreateTeam from "./pages/CreateTeam";
import Profile from "./pages/Profile";

// Styles
import "./styles/Global.css";
import "./App.css";

function AppContent() {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    return (
        <>
            {isLoggedIn && <Navbar />}
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Routes */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/feed"
                    element={
                        <ProtectedRoute>
                            <Feed />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/competitions"
                    element={
                        <ProtectedRoute>
                            <Competitions />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/competition/:id"
                    element={
                        <ProtectedRoute>
                            <CompetitionDetail />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/create-team"
                    element={
                        <ProtectedRoute>
                            <CreateTeam />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile/:userId"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            {location.pathname !== "/login" && <Footer />}
        </>
    );
}

export default function App() {
    return (
        <Router>
            <ThemeProvider>
                <AuthProvider>
                    <AppContent />
                </AuthProvider>
            </ThemeProvider>
        </Router>
    );
}
