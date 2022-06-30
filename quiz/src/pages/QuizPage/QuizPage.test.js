// import { QuizPage } from "./";
// import { render, screen } from '@testing-library/react';
// import "@testing-library/jest-dom";
// import React from "react";

// // Main Imports
// import axios from "axios";
// import userEvent from "@testing-library/user-event";
// import reducer from "../../reducers/reducer";
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// const initialState = {
//     category: 20,
//     level: "easy",
//     typeOfQ: "multiple",
//     questions: [],
// };

// const TestProviders = ({ initState }) => {
//     initState ||= { initialState };
//     let testReducer = () => reducer(initState, { type: '@@INIT' })
//     const testStore = createStore(testReducer, applyMiddleware(thunk))

//     return ({ children }) => (
//         <Provider store={testStore}>
//             { children }
//         </Provider>
//     )
// }

// const renderWithReduxProvider = (ui, options={}) => {
//     let TestWrapper = TestProviders(options)
//     render(ui, { wrapper: TestWrapper, ...options })
// }

// describe("QuizPage Component", () => {
//     beforeEach(() => {
//         renderWithReduxProvider(
//             <QuizPage />
//         );
//     });

//     describe("Renders", () => {
        
//         it("Question 1 / 10 text", () => {
//             const e = screen.getByText(/question 1\/10/i)
//             expect(e).toBeInTheDocument();
//         });
//         it("\"Next Question\" text", () => {
//             const e = screen.getByText(/next question/i)
//             expect(e).toBeInTheDocument();
//         });
//     });

// });


