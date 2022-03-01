import {
  createTuit,
  deleteTuit, findAllTuits,
  findTuitById, findTuitByUser
} from "../services/tuits-service";

import {createUser} from "../services/users-service"

describe('can create tuit with REST API', () => {
  /**const xena = {
    username: 'xena',
    password: 'gabrielle',
    email: 'xena@wp.com'
  };

  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return createUser(xena);
  })

  test('testing new user insert from tuits service', async () => {
    // insert new user in the database
    const xenaTuit = "this is xena's tuit";
    const newTuit = await createTuit(xena._id, xenaTuit);
  });
  */
});

describe('can delete tuit wtih REST API', () => {
  // TODO: implement this
});

describe('can retrieve a tuit by their primary key with REST API', () => {
  // TODO: implement this
  test('can retrieve tuits by user', async () => {
    const existingTuits = await findAllTuits();
  })
});

describe('can retrieve all tuits with REST API', () => {
  // TODO: implement this
});