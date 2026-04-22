

export type Info={
    "count": number,
    "pages": number,
    "next": string|null,
    "prev": null|string
}

export type Character={
    "id": 1,
      "name": string,
      "status": string,
      "species": string,
      "type": string,
      "gender": string,
      "origin": {
        "name": string,
        "url": string
      },
      "location": {
        "name": string,
        "url": string
      },
      "image": string,
      "episode": string[],
      "url": string,
      "created": string
    }

    export type ResultsCharacter={
        info: Info,
        results: Character[]
    }