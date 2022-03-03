import { render, screen } from "@testing-library/react";
import Tuit from "../components/Tuit";

describe("Given a Tuit component", () => {
  describe("When it recives a tuit", () => {
    test("Then it should render itself", () => {
      const tuit = {
        _id: "20",
        text: "something",
        likes: "10",
        date: Date.now(),
      };

      render(<Tuit tuit={tuit} />);

      const selectedTuit = screen.getByRole("listitem");

      expect(selectedTuit).toBeInTheDocument();
    });
  });
  describe("When it recives a tuit with contect", () => {
    test("Then it should render itself with that tuit content", () => {
      const tuit = {
        _id: "20",
        text: "something",
        likes: "10",
        date: Date.now(),
      };

      render(<Tuit tuit={tuit} />);

      const selectedText = screen.getByText(tuit.text);
      const selectedLikes = screen.getByText(`Likes ${tuit.likes}`);

      expect(selectedText).toBeInTheDocument();
      expect(selectedLikes).toBeInTheDocument();
    });
  });
});
