import CardContainer from "@/components/CardContainer";
import { render, screen } from "@testing-library/react";

describe("CardContainer", () => {

    const mockProps = {
        page: 0,
        direction: 0,
        paginate: jest.fn(),
    }

    test("render loading", () => {
        render(<CardContainer {...mockProps} />);
        const loading = screen.getByTestId("loading");
        expect(loading).toBeInTheDocument();
    });

});