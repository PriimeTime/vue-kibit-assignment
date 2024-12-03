# Job Advertisement Platform

A responsive Vue.js 3 application for creating, managing, and searching job advertisements.

## Features

1. **Landing Page for Unauthorized Users**:

   - Responsive design, usable across devices.
   - User-friendly widgets for authentication.

2. **Advertisement Creation and Dashboard**:

   - Post job offers.
   - Manage job posts with delete functionality.
   - View all posted jobs on a dedicated dashboard.

3. **Job Search and Details**:

   - Search for jobs.
   - View detailed information about each job.
   - Option to apply for a job via a form.

4. **API and Database**:

   - LocalStorage is used for mocking database functionality.
   - API calls are implemented as callable functions.

5. **Other Features**:
   - Example users for testing (see credentials below).
   - Unit and end-to-end tests implemented using [Vitest](https://vitest.dev/).

## Example Users

- **Employer**:

  - Username: `user_company`
  - Password: `Abc123`

- **Applicant**:
  - Username: `user_applicant`
  - Password: `Test1234`

## Technologies Used

- **Frontend**: Vue.js 3 (Composition API), TypeScript, Vite
- **State Management**: Pinia
- **Styling**: TailwindCSS
- **Testing**: Vitest for unit tests.

## Project Setup

### Install Dependencies

`npm install`

### Run the Development Server

`npm run dev`

### Build for Production

`npm run build`

### Run Unit Tests

`npm run test`

## How to Use

1. **Login**:

   - As an unauthorized user, you can search jobs and apply to them.
   - Use one of the predefined users to log in.
   - Employers can create and manage job postings.
   - Applicants and apply to jobs and view a list of jobs they have applied for.

2. **Post a Job** (Employer):

   - Navigate to the dashboard and fill out the job creation form.
   - Manage jobs as needed.

3. **Search for Jobs**:
   - Use the search bar to find relevant job listings and click on the search button.
   - Click on a job to view its details or apply.

## License

This project is licensed under the MIT License.
