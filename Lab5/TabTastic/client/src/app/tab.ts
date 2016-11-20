//This defines a Tab object


export class Tab {
    id: number;
    song: string;
    artist: string;
    desc: string;
    author: string;
    authorId: number;

    constructor(id: number, song: string, artist: string, desc: string, author: string, authorId: number) {
        this.id = id;
        this.song = song;
        this.artist = artist;
        this.desc = desc;
        this.author = author;
        this.authorId = authorId;
    }



}
