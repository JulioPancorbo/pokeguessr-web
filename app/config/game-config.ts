import type { Generation } from "../types/pokemon"

export const MAX_GUESSES = 5
export const MAX_CLUES = 4

export const GENERATIONS: Generation[] = [
  { id: 1, name: "Gen I", start: 1, end: 151 },
  { id: 2, name: "Gen II", start: 152, end: 251 },
  { id: 3, name: "Gen III", start: 252, end: 386 },
  { id: 4, name: "Gen IV", start: 387, end: 493 },
  { id: 5, name: "Gen V", start: 494, end: 649 },
  { id: 6, name: "Gen VI", start: 650, end: 721 },
  { id: 7, name: "Gen VII", start: 722, end: 809 },
  { id: 8, name: "Gen VIII", start: 810, end: 905 },
  { id: 9, name: "Gen IX", start: 906, end: 1025 },
]

export const CLUE_TYPES = {
  TYPE: "type",
  CRY: "cry",
  NAME_FIRST: "name_first",
  NAME_BOTH: "name_both",
} as const

export const STORAGE_PREFIX = "pokemon-list-"

