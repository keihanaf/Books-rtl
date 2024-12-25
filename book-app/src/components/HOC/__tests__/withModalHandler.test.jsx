import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import withModalHandler from "../withModalHandler";
import { ModalProvider } from "../../../context/ModalContext";

// Mock component for testing
const MockComponent = ({ openModal, closeModal, selectedBookId }) => (
  <div>
    <button onClick={() => openModal("create")}>Create</button>
    <button onClick={() => openModal("update", "123")}>Update</button>
    <button onClick={() => openModal("delete", "123")}>Delete</button>
    <span data-testid="selected-id">{selectedBookId}</span>
  </div>
);

const WrappedComponent = withModalHandler(MockComponent);

// Wrap component with necessary providers
const renderWithProviders = (component) => {
  return render(<ModalProvider>{component}</ModalProvider>);
};

describe("withModalHandler HOC", () => {
  test("renders wrapped component correctly", () => {
    renderWithProviders(<WrappedComponent />);
    expect(screen.getByText("Create")).toBeInTheDocument();
    expect(screen.getByText("Update")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  test("opens create modal correctly", () => {
    renderWithProviders(<WrappedComponent />);
    fireEvent.click(screen.getByText("Create"));
    expect(screen.getByText("ایجاد محصول جدید")).toBeInTheDocument();
  });

  test("handles form input changes", () => {
    renderWithProviders(<WrappedComponent />);
    fireEvent.click(screen.getByText("Create"));

    const nameInput = screen.getByPlaceholderText("نام کتاب");
    fireEvent.change(nameInput, { target: { value: "Test Book" } });
    expect(nameInput.value).toBe("Test Book");
  });

  test("closes modal when cancel button is clicked", () => {
    renderWithProviders(<WrappedComponent />);
    fireEvent.click(screen.getByText("Create"));

    const cancelButton = screen.getByText("انصراف");
    fireEvent.click(cancelButton);

    expect(screen.queryByText("ایجاد محصول جدید")).not.toBeInTheDocument();
  });

  test("sets selectedBookId when opening update modal", () => {
    renderWithProviders(<WrappedComponent />);
    fireEvent.click(screen.getByText("Update"));

    expect(screen.getByTestId("selected-id").textContent).toBe("123");
  });

  test("calls createBook prop when creating new book", () => {
    const createBook = jest.fn();
    renderWithProviders(<WrappedComponent createBook={createBook} />);

    fireEvent.click(screen.getByText("Create"));

    const nameInput = screen.getByPlaceholderText("نام کتاب");
    const quantityInput = screen.getByPlaceholderText("تعداد موجودی");
    const priceInput = screen.getByPlaceholderText("قیمت");

    fireEvent.change(nameInput, { target: { value: "Test Book" } });
    fireEvent.change(quantityInput, { target: { value: "10" } });
    fireEvent.change(priceInput, { target: { value: "100" } });

    fireEvent.click(screen.getByText("ایجاد"));

    expect(createBook).toHaveBeenCalledWith({
      name: "Test Book",
      quantity: "10",
      price: "100",
    });
  });

  test("calls deleteBook prop when confirming deletion", () => {
    const deleteBook = jest.fn();
    renderWithProviders(<WrappedComponent deleteBook={deleteBook} />);

    fireEvent.click(screen.getByText("Delete"));
    fireEvent.click(screen.getByText("تایید حذف"));

    expect(deleteBook).toHaveBeenCalledWith("123");
  });

  test("modal backdrop closes modal when clicked", () => {
    renderWithProviders(<WrappedComponent />);
    fireEvent.click(screen.getByText("Create"));

    const backdrop = screen.getByTestId("modal-backdrop");
    fireEvent.click(backdrop);

    expect(screen.queryByText("ایجاد محصول جدید")).not.toBeInTheDocument();
  });
});
