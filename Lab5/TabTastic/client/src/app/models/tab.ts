//This defines a Tab object


export class Tab {
    _id: string;
    song: string;
    artist: string;
    desc: string;
    author: string;
    authorId: string;
    tab: string;
    dateMade:Date;
    isPublic:Boolean;
    lastDayRevised:Date;
    version:number;

    constructor(song: string, artist: string, desc: string, author: string, authorId: string,tab: string, isPublic:Boolean = true,
     dateMade:Date,
    lastDayRevised:Date,
    version:number) {
        this.song = song;
        this.artist = artist;
        this.desc = desc;
        this.author = author;
        this.authorId = authorId;
        this.tab = tab;
        this.isPublic = isPublic;
        this.dateMade = dateMade;
        this.lastDayRevised = lastDayRevised;
        this.version = version;
    }

    



}
