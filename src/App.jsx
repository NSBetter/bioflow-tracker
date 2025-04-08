import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QPCRExtractionCellPage from "./pages/qPCRExtractionCellPage";
import QPCRPage from "./pages/QPCRPage";
import QPCRExtractionPage from "./pages/qPCRExtractionPage";
import Layout from "./components/Layout";
import WBPage from "./pages/WBPage"
//在这里import新的页面
//例子：import 文件名 from "./pages/文件名";

export default function App() {
  return (
    <Router>
      <Layout>
        <nav className="mb-4">
          <Link className="btn btn-outline-primary me-2" to="/qPCRExtractionCell">提取 RNA（细胞）</Link>
          <Link className="btn btn-outline-primary me-2" to="/qPCR">RNA提取实验流程</Link>
          <Link className="btn btn-outline-success me-2" to="/qPCRExtraction">qPCR实验流程</Link>
          <Link className="btn btn-outline-warning me-2" to="/wb">蛋白提取实验流程</Link>
          <Link className="btn btn-outline-warning me-2" to="/wb">WB第一天流程</Link>
        </nav>
        <Routes>
          <Route path="/qPCRExtractionCell" element={<QPCRExtractionCellPage />} />
          <Route path="/qPCR" element={<QPCRPage />} />
          <Route path="/qPCRExtraction" element={<QPCRExtractionPage />} />
          <Route path="/wb" element={<WBPage />} /> 
          <Route path="/WBday1" element={<WBday1Page />} />
        </Routes>
      </Layout>
    </Router>
  );
}
//Link部分添加导航按钮
//例子：<Link className="btn btn-outline-warning me-2" to="/文件名-Page">按钮文本</Link>
//Route平行位置添加同样格式的一句话，注册新页面
//例子：<Route path="/文件名-Page" element={<文件名 />} /> 