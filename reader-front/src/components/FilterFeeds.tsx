import { FormEvent } from "react"
import useInput from "../hooks/useInput"
import { RSSFeedFilter } from "../types/RSSFeedFilter"
import { Input } from "./Input"


interface FilterFeedsProps {
    onFilter: (filter: RSSFeedFilter) => void
}
export const FilterFeeds = ({ onFilter }: FilterFeedsProps) => {
    const title = useInput("", "", () => false)
    const source = useInput("", "", () => false)
    const date = useInput("", "", () => false)

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        onFilter({
            title: title.value,
            source: source.value,
            publish_date: date.value,
        })
        title.reset()
        source.reset()
        date.reset()
    }

    return (
        <form className="d-flex flex-column" onSubmit={submitForm}>
            <Input
                id="title"
                type="text"
                label="Title"
                placeholder="Title"
                className='form-floating my-1'
                value={title.value}
                onChange={title.onChangeHandler}
            />
            <Input
                id="source"
                type="text"
                label="Source"
                placeholder="Source"
                className='form-floating my-1'
                value={source.value}
                onChange={source.onChangeHandler}
            />
            <Input
                id="date"
                type="text"
                label="Date"
                placeholder="Date"
                className='form-floating my-1'
                value={date.value}
                onChange={date.onChangeHandler}
            />
            <button className="btn btn-dark my-2" type="submit">Filter</button>
        </form>

    )
}
