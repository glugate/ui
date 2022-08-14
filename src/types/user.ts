import { ObjectId } from "./object";

export interface IUser {
    id: ObjectId;
    first_name: string;
    last_name: string;
    email: string;
  }