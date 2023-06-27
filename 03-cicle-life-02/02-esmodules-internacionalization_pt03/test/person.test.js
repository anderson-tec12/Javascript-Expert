import mocha from "mocha";
import chai from "chai";

import Person from "../src/person.js";

const { describe, it } = mocha;
const { expect } = chai;

describe("Person", () => {
  it("should return a person instance from a string", () => {
    const person = Person.generateInstanceFromString(
      "1 Bike,Carro 20000 2020-01-01 2020-02-01"
    );

    const expected = {
      from: "2020-01-01",
      to: "2020-02-01",
      vehicles: ["Bike", "Carro"],
      kmTraveled: "20000",
      id: "1",
    };

    expect(person).to.deep.equal(expected);
  });

  it("should format values", () => {
    const person = new Person({
      from: "2020-01-01",
      to: "2020-02-01",
      vehicles: ["Bike", "Carro"],
      kmTraveled: "20000",
      id: "1",
    });

    const result = person.formatted("pr-BR");
    console.log(result);

    const expected = {
      id: 1,
      vehicles: "Bike and Carro",
      kmTraveled: "20,000 km",
      from: "January 01, 2020",
      to: "February 01, 2020",
    };


    expect(result).to.be.deep.equal(expected)
  });
});
