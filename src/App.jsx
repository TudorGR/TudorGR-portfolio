import "./App.css";
import "./index.css";
import { SidebarDemo } from "@/components/ui/SidebarDemo";

function App() {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`min-h-screen relative transition-opacity duration-700 bg-black text-gray-200 dark`}
      >
        {/* Sidebar layout */}
        <div className="relative z-10 min-h-screen flex">
          <SidebarDemo />
        </div>
      </div>
    </>
  );
}

export default App;
