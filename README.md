# AWS Challenge

Hello, and welcome to the AWS challenge! You'll find a set of instructions below that you must attempt to complete within 3 days. Clone this repository to start the challenge, and good luck! When completed, push your solution to a _new_ repository, and send us a link. _Do not create a PR against this repository._

Within this repository, you will find an incomplete CloudFormation template and a hastily thrown together UI. When complete, you will have a basic application to manage a todo list. The CloudFormation will stand up a DynamoDB table and an API, and a UI that uses the API.

## Your tasks

1. The API is not defined in the CloudFormation template. Modify the template to create the API and all endpoints. The endpoints this API provides should be as follows:

   - `GET /todos`
     - list all todo items
     - returns item as JSON
     - items contain `todoId`, `title`, and `status` attributes
   - `POST /todos`
     - create a todo item
     - accepts a JSON body containing title and status
     - returns item as JSON
     - returns 400 for bad requests
   - `PUT /todos/{todoId}`
     - update a todo item
     - accepts a JSON body containing title and status
     - returns item as JSON
     - returns 400 for bad requests
   - `DELETE /todos/{todoId}`
     - deletes a todo item
     - returns an empty response

2. Modify (or create) a UI that uses the API to manage the todo list. You may use any framework you wish, or none at all. You may use JavaScript or TypeScript. A barebones React app has been provided in the `todo-ui` directory, but you do not need to use it.

#### Stretch Goals:

- Add security to the database and API. You can use any authorization method you'd like. All AWS resources should be part of your CloudFormation.
- Add scaling to the database to handle unexpected spikes in reads and writes.
- Add unit and/or functional tests for the UI.
- Add a linting task to the UI source.
- Make the UI pretty. You can decide what this means!

## Setup

### AWS

1. If you don't already have one, create a free tier AWS account. API Gateway and DynamoDB are included in the free tier.

1. Once you have your AWS account, configure the AWS CLI to use your credentials.

1. To create or update the CloudFormation stack, run `./cfn_run`.

### UI

1. If you don't already have `npm` installed, install `npm` (or the Node.js package manager of your choice).

1. To install the dependencies for the UI, run `npm install` from the `todo-ui` directory (this step may differ if you've chosen another Node.js package manager).

1. To start the UI, run `npm start` from the `todo-ui` directory (this step may differ if you've chosen another Node.js package manager or task runner).

_Note:_ You do not have to use Node.js if you feel more comfortable with something else.

## Submitting your work

Once you are finished, send us a link to your Github repository containing the completed CloudFormation template and UI. Please provide us with instructions if your UI requires different steps than listed above.

Don't forget to delete your CloudFormation stack so that you do not get billed when your free tier expires.

Good luck!
