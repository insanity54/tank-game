import { Schema, type } from "@colyseus/schema";

export class Tank extends Schema {
    @type("number")
    azimuth: number;
  
    @type("number")
    elevation: number;
  
    @type("number")
    power: number;
  
    @type("number")
    x: number;
  
    @type("number")
    y: number;
  
    @type("number")
    z: number;
  }
  