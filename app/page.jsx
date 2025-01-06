'use client';
    import { useState } from 'react';
    import axios from 'axios';
    import { Input } from '@/components/ui/input';
    import { Button } from '@/components/ui/button';
    import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
    import { Loader2 } from 'lucide-react';

    export default function Home() {
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
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              URL Processor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter URL to process"
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Process URL'
                )}
              </Button>
            </form>
          </CardContent>
          {response && (
            <CardFooter>
              <pre className="w-full p-4 bg-muted rounded-md overflow-auto">
                {JSON.stringify(response, null, 2)}
              </pre>
            </CardFooter>
          )}
        </Card>
      );
    }
