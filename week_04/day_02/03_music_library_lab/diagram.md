```mermaid
classDiagram

class Artist  {
    name:str
    create()
    delete()
}

class Album {
    title:str
    genre:str
    artist:Artist
    create()
}

Artist-->Album
```