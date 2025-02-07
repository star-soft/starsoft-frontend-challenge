import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("Home page should have button 'Carregar mais'", ()=> {
    
    const LoadMoreBTN = screen.findByText("Carregar mais");  // Wait for it asynchronously
})