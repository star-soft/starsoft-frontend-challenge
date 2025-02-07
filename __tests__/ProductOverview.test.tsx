import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductOverview from "@/app/[id]/page";

const queryClient = new QueryClient();

describe("Testing group", () => {
    //Test searching load more button
    it("Product overview should have button 'Retornar a página inicial'", () => {
      const BackHomeBTN = screen.findByText("Retornar a página inicial");
      expect(BackHomeBTN).toBeDefined();
    });
});


