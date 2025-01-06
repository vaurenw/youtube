import React, { useState } from 'react';
    import axios from 'axios';

    function App() {
      const [url, setUrl] = useState('');
      const [response, setResponse] = useState(null);
      const [loading, setLoading] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const res = await axios.post(
            'https://n8n-e3v3.onrender.com/webhook-test/youtube',
            { url }
          );
          setResponse(res.data);
        } catch (error) {
          setResponse({ error: error.message });
        } finally {
          setLoading(false);
        }
      };

      return (
        <div className="container">
          <h1>SaaS URL Processor</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Processing...' : 'Submit'}
            </button>
          </form>
          
          {response && (
            <div className="response">
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
        </div>
      );
    }

    export default App;
