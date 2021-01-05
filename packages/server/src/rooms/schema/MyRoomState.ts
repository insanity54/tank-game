import { Schema, ArraySchema, type } from "@colyseus/schema";
import { Tank } from "./Tank"

export class MyRoomState extends Schema {

  @type("string")
  mySynchronizedProperty: string = "Hello world";

  @type([Tank])
  tanks = new ArraySchema<Tank>();

  

}