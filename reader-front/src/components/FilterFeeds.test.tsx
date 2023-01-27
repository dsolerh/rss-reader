import { fireEvent, render, screen } from "@testing-library/react"
import { FilterFeeds } from "./FilterFeeds"

test("the onFilter should be called on submiting the form", ()=>{
    const handler = jest.fn()
    render(<FilterFeeds onFilter={handler}/>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handler).toHaveBeenCalled()
})