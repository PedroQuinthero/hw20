import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("Quiz Component", () => {
  it("renders a Start Quiz button before the quiz begins", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").should("be.visible");
  });
});