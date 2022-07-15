import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { notifyAdmin } from "./emai.service";

const bookingCollection = collection(db, "Booking");

export const bookTicket = async (user, source, destination, date) => {
  try {
    if (user.verify) {
      console.log(user, source, destination, date);
      await addDoc(bookingCollection, { ...user, source, destination, date });
      await notifyAdmin({
        phoneNumber: user.phoneNumber,
        data: JSON.stringify({ source, destination, date, ...user }),
      });
    }
  } catch (error) {
    console.log(error);
  }
};
