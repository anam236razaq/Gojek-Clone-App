import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Enquire from './Pages/Enquire';
import Pricing from './Pages/Pricing';
import GojekCloneApps from './Pages/GojekCloneApps';


export default function App() {
  const[settings, setSettings]= useState(null);
  const[isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('https://gojek.keydevsdemo.com/api/settings');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setSettings(data[0]);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  if (isLoading || error) {
    return null;
  }

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home settings={settings}/>} />
          <Route path="/enquire" element={<Enquire settings={settings}/>} />
          <Route path="/pricing" element={<Pricing settings={settings}/>} />
          <Route path="/gojek-clone-apps" element={<GojekCloneApps settings={settings}/>} />
        </Routes>
    </Router>
  )
}
