import { useState } from 'react';
import './App.css';
import { ControlPanel } from './components/ControlPanel';
import { MainPanel } from './components/MainPanel';
import { API_URL } from './config';
import { RSSItem } from './types/RSSItem';

function App() {
    const [feeds, setFeeds] = useState<RSSItem[]>([])
    const [error, setError] = useState("")

    const searchFeeds = async (urls: string[]) => {
        if (urls.length === 0) {
            return
        }

        const query = urls
            .map(url => `urls=${url}`)
            .join("&")
        let response;
        try {
            response = await fetch(`${API_URL}?${query}`)
        } catch (error) {
            setError("Te connection failed")
            return
        }


        if (!response.ok) {
            setError(`The server responded: ${response.statusText}`)
            return
        }

        const data: { items: RSSItem[] } = await response.json()
        console.log(data);

        setFeeds(data.items)


    }

    return (
        <div>
            <ControlPanel onChangeFeed={searchFeeds} />
            <MainPanel feeds={feeds} onFilter={(filter) => { console.log(filter) }} />
            {error && (<div>{error}</div>)}
        </div>
    );
}

export default App;
