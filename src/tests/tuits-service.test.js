import {
  createTuit,
  deleteTuit, findAllTuits,
  findTuitById, findTuitByUser
} from "../services/tuits-service";
import {createUser, deleteUsersByUsername} from "../services/users-service";


describe('can create tuit with REST API', () => {
  // create sample user
  const xena = {
    username: 'xena',
    password: 'gabrielle',
    email: 'xena@wp.com'
  };

  const xenaTuit = {
    tuit: "this is a test tuit",
    user: xena
  };

  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    findTuitByUser(xena)
    return createUser(xena);
  })

  afterAll(() => {
    // remove any data we created
    return deleteUsersByUsername(xena.username);
  })

  test('can insert new tuit with REST API', async () => {
    const newTuit = await createTuit(xenaTuit);
    expect(newTuit.tuit).toEqual("this is a test tuit");
    expect(newTuit.user).toEqual(xena);
  });
});

describe('can delete tuit wtih REST API', () => {
  // TODO: implement this
});

describe('can retrieve a tuit by their primary key with REST API', () => {
  // TODO: implement this
});

describe('can retrieve all tuits with REST API', () => {
  // TODO: implement this
});