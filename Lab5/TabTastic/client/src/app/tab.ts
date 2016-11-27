//This defines a Tab object


export class Tab {
    id: number;
    song: string;
    artist: string;
    desc: string;
    author: string;
    authorId: number;
    tab: string;
    dateMade:Date;
    isPublic:Boolean;

    constructor(song: string, artist: string, desc: string, author: string, authorId: number,tab: string, isPublic:Boolean = true) {
        this.song = song;
        this.artist = artist;
        this.desc = desc;
        this.author = author;
        this.authorId = authorId;
        this.tab = tab;
        this.isPublic = isPublic;
    }



}
