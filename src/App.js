import logo from './logo.svg';
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyForm from './pages/MyForm';
import MultiInputForm from './pages/MultiInputForm';
import WithoutMemo from './pages/WithoutMemo';
import WithMemo from './pages/WithMemo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='myform' element={<MyForm/>}/>
          <Route path='multiinputform' element={<MultiInputForm/>}/>
          <Route path='withoutmemo' element={<WithoutMemo/>}/>
          <Route path='withmemo' element={<WithMemo/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
