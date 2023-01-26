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
    }

    return (
        <form onSubmit={submitForm}>
            <Input
                id="title"
                type="text"
                label="Title"
                value={title.value}
                onChange={title.onChangeHandler}
            />
            <Input
                id="source"
                type="text"
                label="Source"
                value={source.value}
                onChange={source.onChangeHandler}
            />
            <Input
                id="date"
                type="text"
                label="Date"
                value={date.value}
                onChange={date.onChangeHandler}
            />
            <button type="submit">Filter</button>
        </form>

    )
}
