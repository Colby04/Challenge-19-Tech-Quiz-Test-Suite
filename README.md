# **Challenge-19-Tech-Quiz-Test-Suite**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Mongo](https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white)
![ReactJS](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![CYPRESS](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

---

# Table of Contents

- [Project Description](#project-description)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Demonstration](#demonstration)
- [Tests](#Tests)
- [Questions](#questions)
- [License](#license)

---

## Project Description

Tech Quiz is an a MERN stack allows users to take a quiz of ten random questions and view their final score. This has tests implemented using Cypress.

---

## Technologies Used

- **FrontEnd**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose ORM
- **Tests**: Cypress, @testing-library/cypress

---

## Setup and Installation

Follow these steps to get the application running on your local machine:

1. Clone the Repository

   ```bash
    git clone <repository-url>
    cd tech-quiz
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

3. Access the App

   Setup the environment variables

   ```bash
    MONGO_URI=<your-mongodb-connection-string>
   ```

4. Run the application

   You need the app running and then open another terminal to run cypress and see the tests pass!
   ```bash
   npm run start:dev
   npm run test
   ```

---

## Demonstration

Click on this [Link](https://youtu.be/yNdzjJqOZMU) to see a video demo for this app! Unfortunatley, I was unable to resolve the 4 errors listed. Any advice to resolve would be appreciated. 

## Tests

This project includes two types of tests:
  1. Component Tests: Verifies the isolated behavior of React components using Cypress.
  2. End to End Tests: Tests the full user workflow, including interactions with the backend, using Cypress.

## Questions and Links

For any questions please reach out by email, and feel free to check my github:

- Github: https://github.com/Colby04
- Repo Link: https://github.com/Colby04/Challenge-19-Tech-Quiz-Test-Suite.git
- Screen Recording Link: https://youtu.be/yNdzjJqOZMU
- Email: cjcodes2024@gmail.com


---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).