import {
  createTuit,
  deleteTuit, findAllTuits,
  findTuitById, findTuitByUser
} from "../services/tuits-service";

import {createUser, deleteUsersByUsername} from "../services/users-service"

describe('createTuit', () => {
  test('can create tuit with REST API', async () => {
    const xena = {
      username: 'xena',
      password: 'gabrielle',
      email: 'xena@wp.com'
    }
    const newUser = await createUser(xena);
    const xenaTuit = {
      tuit: "this is xena's tuit",
    }
    const newTuit = await createTuit(newUser._id, xenaTuit);
  });
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