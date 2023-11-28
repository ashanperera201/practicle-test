import React from "react";
import { ITile } from "./tile.interface";

export interface ISection {
    id?: number;
    code?: string;
    tiles?: ITile[]
}