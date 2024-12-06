import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { HomePage } from '@/pages/home';
import { PostPage } from '@/pages/post';
import { AboutPage } from '@/pages/about';
import { ThemeProvider } from '@/lib/theme-context';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;