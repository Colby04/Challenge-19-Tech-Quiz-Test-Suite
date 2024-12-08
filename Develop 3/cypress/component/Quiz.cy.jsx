import React from 'react';
import {mount} from '@cypress/react';
import Quiz from '../../client/src/components/Quiz';

const quiz = {
}

// Test case
describe('Quiz component', () => {
    it ('should render the quiz component correctly', () => {
        cy.mount(<Quiz />);

        cy.get('quiz-title').should('exist');

        cy.get('quiz-question').should('have.lenght.greaterThan', 0);

        cy.get('quiz-submit').should('exist');
    });

    it ('should allow selecting an answer', () => {
        cy.mount(<Quiz />);

        cy.get('.quiz-question').first().find('.quiz-answer').first().click();

        cy.get('.quiz-question').first().find('.quiz-answer').first().should('have.class', 'selected');
    });

    it ('should submit the quiz', () => {
        cy.mount(<Quiz />);

        cy.get('.quiz-question').each(($el) => {
            cy.wrap($el).find('.quiz-answer').first().click();
    });

    cy.get('.quiz-submit').click();

    cy.get('.quiz-result').should('exist');
    });
});

