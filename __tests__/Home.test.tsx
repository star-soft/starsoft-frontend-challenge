import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/app/page";

describe("Testing group", () => {
  //Test searching load more button
  it("Home page should have button 'Carregar mais'", () => {
    const LoadMoreBTN = screen.findByText("Carregar mais");
    expect(LoadMoreBTN).toBeDefined();
  });

  it("must render in Home the component CardS", () => {});
});

// Mocking the CardS component to verify if it's rendered
jest.mock("../src/app/_components/Card", () => (props: any) => (
  <div data-testid="card-component">{props.title}</div>
));

// Mocking fetchData to simulate API response
jest.mock("../src/services/fetchData", () => ({
  fetchData: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          id: 1,
          name: "Produto Teste 1",
          description: "Descrição 1",
          image: "image1.png",
          price: "350",
          createdAt: "2024-06-20",
        },
        {
          id: 2,
          name: "Produto Teste 2",
          description: "Descrição 2",
          image: "image2.png",
          price: "290",
          createdAt: "2024-06-21",
        },
      ],
      metadata: { count: 2 },
    })
  ),
}));

// Creating a QueryClient for the test
const queryClient = new QueryClient();

describe("Home Component", () => {
  test("should render the CardS component for each product", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Produto Teste 1")).toBeInTheDocument();
      expect(screen.getByText("Produto Teste 2")).toBeInTheDocument();
    });

    // Waits until at least one card is rendered
    const cards = screen.getAllByTestId("card-component");
    expect(cards.length).toBe(2);
  });
});
