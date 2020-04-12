import React from "react";
import {
  render,
  fireEvent,
  wait,
  RenderResult,
  cleanup
} from "@testing-library/react";
import App from "../App";
import { getUsers } from "../api/getUsers";

jest.mock("../api/getUsers", () => ({
  getUsers: () =>
    Promise.resolve([
      { id: "1", name: "test-contact-1", email: "", phone: "" },
      { id: "2", name: "test-contact-2", email: "", phone: "" }
    ])
}));

beforeEach(cleanup);

const loadContacts = async (): Promise<RenderResult> => {
  const renderResult = render(<App />);
  const { getByText } = renderResult;

  const loadButton = getByText(/load contacts/i);
  fireEvent.click(loadButton);
  await wait(() => getByText("test-contact-1"));
  return renderResult;
};

describe("App", () => {
  it("should show list of contacts when load button is clicked", async () => {
    // (getUsers as jest.Mock).mockResolvedValueOnce([
    //   { id: "1", name: "test-contact-1", email: "", phone: "" },
    //   { id: "2", name: "test-contact-2", email: "", phone: "" }
    // ]);
    const { getByText } = render(<App />);

    const loadButton = getByText(/load contacts/i);
    fireEvent.click(loadButton);

    await wait(() => getByText("test-contact-1"));
    await wait(() => getByText("test-contact-2"));
  });

  it("should clears the list of contacts when clear button is clicked", async () => {
    // (getUsers as jest.Mock).mockResolvedValueOnce([
    //   { id: "1", name: "test-contact-1", email: "", phone: "" },
    //   { id: "2", name: "test-contact-2", email: "", phone: "" }
    // ]);
    const { getByText, queryByText, debug } = await loadContacts();

    const clearButton = getByText(/clear contacts/i);
    fireEvent.click(clearButton);
    debug();
    await wait(() => expect(queryByText("test-contact-1")).toBeNull());
  });
});
