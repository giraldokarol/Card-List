import { faker } from '@faker-js/faker';
import fakeImage from "../images/card-media.png";

function randomImage(image) {
  const randomOption = Math.random() > 0.5; // 50% of probability
  return randomOption ? image : "";
}

export function generateCard() {
  return {
    id: faker.string.uuid(),
    modificationDate: Date.now(),
    userName: faker.person.fullName(),
    image: randomImage(fakeImage),
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    iconClass: "geo_public_icon"
  };
}