import { Person } from "../store/features/personSlice";
import { firestore } from "./../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getPerson = async () => {
  const personSnapshot = await getDocs(collection(firestore, "person"));

  const persons: Person[] = [];

  personSnapshot.forEach((person) => {
    persons.push({
      id: person.data().id,
      name: person.data().name,
    });
  });
  return persons;
};