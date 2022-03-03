import { render } from "@testing-library/react";
import TuitList from "../components/TuitList";

let tuits = [];

beforeAll(() => {
  tuits = [
    { text: "this is a tweet 1", likes: 10, _id: "111", date: Date.now() },
    { text: "this is a tweet 2", likes: 6, _id: "333", date: Date.now() },
    { text: "this is a tweet 3", likes: 0, _id: "444", date: Date.now() },
  ];
});

describe("Given a TuitList component", () => {
  describe("When it's rendered", () => {
    test("It should create a list element", () => {
      const { getByRole } = render(<TuitList tuits={tuits} />);
      const ul = getByRole("list");
      expect(ul).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a list of 3 tuits", () => {
    test("It should create a list with 3 tuits", () => {
      const expectedTuitsLength = tuits.length;
      const { getByRole } = render(<TuitList tuits={tuits} />);
      const ul = getByRole("list");

      expect(ul.children.length).toEqual(expectedTuitsLength);
    });
  });
});
