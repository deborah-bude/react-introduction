import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Error404Page from "./pages/404";
import Header from "./componants/Header";
import Footer from "./componants/Footer";

export default function App() {
  return (
    <section className="min-h-screen p-6 bg-gradient-to-br from-blue-200 via-purple-100 to-teal-200">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results/:id" element={<SearchResults />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <Footer />
    </section>
  )
}
