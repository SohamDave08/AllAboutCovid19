import Blog from './components/Blog';
import Guidelines from './components/Guidelines';
import Home from './components/Home';
import News from './components/News';
import India from './components/India';

export const routes = [
    { path: '/guidelines', component: Guidelines },
    { path: '/news', component: News },
    { path: '/india', component: India },
    { path: '/', component: Home },
    { path: '/blog', component: Blog }
  ];