import { fireEvent, render, screen } from "@testing-library/react"
import { FeedSourceItem } from "./FeedSourceItem"

test("the element has a button with the right style", () => {
    render(<FeedSourceItem index={0} onDelete={()=>{}} link="mylink" />);

    const buttonElement=screen.getByRole('button')
    expect(buttonElement).toHaveClass('btn', 'btn-secondary')
})

test("the button has the right behaviour", ()=>{
    const handler = jest.fn((i:number)=>{})
    render(<FeedSourceItem index={0} onDelete={handler} link="mylink" />);
    
    const buttonElement=screen.getByRole('button')
    fireEvent.click(buttonElement)
    expect(handler).toHaveBeenCalled()
    expect(handler).toHaveBeenCalledWith<number[]>(0)
})