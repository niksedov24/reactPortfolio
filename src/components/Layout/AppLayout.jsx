import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import "../css/Container.css";

export default function AppLayout() {
  return (
    <div className="container">
      {" "}
      <AppHeader />
      <AppContent />
    </div>
  );
}
