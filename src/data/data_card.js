import { faker } from '@faker-js/faker';
import fakeImage from "../images/card-media.png";

function randomImage(image) {
  const randomOption = Math.random() > 0.5; // 50% of probability
  return randomOption ? image : "";
}

function formatDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth()+1).padStart(2, '0');
  const year = String(today.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
}

export function generateCard() {
  return {
    id: faker.string.uuid(),
    modificationDate: formatDate(),
    userName: faker.person.fullName(),
    image: randomImage(fakeImage),
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    iconClass: "geo_public_icon"
  };
}