export type Story = {
    id: string;
    title: string;
    userId: string;
    description: string;
    photoUrl: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;

}
export type Chapter = {
    id : string;
    storyId: string;
    userId: string;
    title: string;
    content: string;
    photoUrl: string | null ;
    createdAt: string;
    updatedAt: string;
}
export type ChapterState = {
    errors?:{
        storyId?:string[],
        title?:string[],
        content?:string[],
        photoUrl?:string[],
    };
    message?:string|null;
}