import { render, screen } from "@testing-library/react"
import { Input } from "./Input"

test("the input has the proper class", ()=>{
   render(<Input id="1"/>)
   expect(screen.getByRole('textbox')).toHaveClass('form-control') 
})

test("the input has the proper classes when error", ()=>{
   render(<Input id="1" error="invalid value"/>)
   expect(screen.getByRole('textbox')).toHaveClass('form-control', 'is-invalid') 
})

test("the input has a label", ()=>{
    render(<Input id="1" label="Text"/>)
    expect(screen.getByTestId("input-label")).toBeDefined()
    expect(screen.getByTestId("input-label")).toHaveTextContent("Text")
})