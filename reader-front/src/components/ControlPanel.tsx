import { useEffect, useState } from 'react'
import useInput from '../hooks/useInput'
import { FeedSourceItem } from './FeedSourceItem'
import { Input } from './Input'

interface ControlPanelProps {
    onChangeFeed: (feeds: string[]) => void
}

function urlInvalid(url: string): boolean {
    return !/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.?[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(url)
}

export const ControlPanel = ({ onChangeFeed }: ControlPanelProps) => {
    const feed = useInput("", "The value must not be empty", urlInvalid)
    const [feeds, setFeeds] = useState<string[]>([])

    const addFeed = () => {
        if (feed.error || !feed.touched) { return }
        setFeeds(feeds => [...feeds, feed.value])
    }

    const deleteFeed = (index: number) => {
        setFeeds(feeds => { feeds.splice(index, 1); return [...feeds] })
    }

    useEffect(() => { onChangeFeed(feeds) }, [feeds, onChangeFeed])

    const feeedList = feeds.map((feed, index) => (
        <FeedSourceItem
            key={index}
            link={feed}
            index={index}
            onDelete={deleteFeed}
        />
    ))

    return (
        <div className='py-3'>
            <h4>Add your Feeds</h4>
            <div className="row align-items-center mb-2">
                <div className="col-10">
                    <Input
                        id="feed"
                        type="text"
                        label='Enter feed source'
                        className='form-floating'
                        placeholder='https://yoursource.com/rss'
                        value={feed.value}
                        error={feed.error}
                        onChange={feed.onChangeHandler}
                        onBlur={feed.onBlurHandler}
                    />
                </div>
                <button className='btn btn-dark col-auto' disabled={!!feed.error || !feed.touched} onClick={addFeed}>Add</button>
            </div>
            <ul className='list-group'>{feeedList}</ul>
        </div>
    )
}
