import {
  createTuit, deleteTuit,
  findTuitById, findAllTuits
} from "../services/tuits-service";

import {createUser, findUserById} from "../services/users-service"

const xenaId = "6226a684b667e06e183cd385";

describe('createTuit', () => {
  test('can create tuit with REST API', async () => {
    const xenaFirstTuit = {
      tuit: "this is xena's tuit"
    }

    const xena = await findUserById(xenaId);
    const newTuit = await createTuit(xena._id, xenaFirstTuit);

    expect(newTuit.postedBy).toEqual(xena._id);
    expect(newTuit.tuit).toEqual(xenaFirstTuit.tuit);

    const deletedCount = await deleteTuit(newTuit._id);
  });
});

describe('deleteTuit', () => {
  test('can delete tuit wtih REST API', async () => {
    const xenaSecondTuit = {
      tuit: "this is xena's second tuit"
    }

    const xena = await findUserById(xenaId);
    const newTuit = await createTuit(xena._id, xenaSecondTuit);

    const tuitToDelete = await deleteTuit(newTuit._id);
    expect(tuitToDelete.deletedCount).toBeGreaterThanOrEqual(1);
  })
});


describe('findTuitById', () => {
  test('can retrieve a tuit by their primary key with REST API', async () => {
    const xenaThirdTuit = {
      tuit: "this is xena's third tuit"
    }
    const xena = await findUserById(xenaId);
    const newTuit = await createTuit(xena._id, xenaThirdTuit);
    
    const foundTuit = await findTuitById(newTuit._id);
    expect(foundTuit._id).toEqual(newTuit._id);
    const tuitToDelete = await deleteTuit(newTuit._id);
  })
});

describe('findAllTuits', () => {
  test('can retrieve all tuits with REST API', async () => {
    const xena = await findUserById(xenaId);
    const tuits = [
      {tuit: "this is xena's fourth tuit"},
      {tuit: "this is xena's fifth tuit"}
    ]
    const newTuit = await createTuit(xena._id, tuits[0]);
    const anotherNewTuit = await createTuit(xena._id, tuits[1]);
    const existingTuits = await findAllTuits();

    expect(existingTuits.length).toBeGreaterThanOrEqual(tuits.length);
    const tuitsWeInserted = existingTuits.filter(tuit => tuit.postedBy._id === xena._id);
    
    tuitsWeInserted.forEach(tuit => {
      expect(tuit.postedBy._id).toEqual(xena._id);
      expect(tuit.tuit).toContain("this is xena's");
    })

    const tuitToDelete = await deleteTuit(newTuit._id);
    const anotherTuitToDelete = await deleteTuit(anotherNewTuit._id);
  })
});