import { ISection } from "../interfaces/section.interface";

export const data: ISection[] = [
    {
        code: 'SECTION-1',
        id: 0,
    },
    {
        code: 'SECTION-2',
        id: 1,
        tiles: [
            {
                title: 'Lorem ipsum #1',
                description: `
                Donec nec justo eget 
                felis facilisis 
                fermentum. Aliquam 
                porttitor mauris sit 
                amet orci.`
            },
            {
                title: 'Lorem ipsum #2',
                description: `
                Donec nec justo eget 
                felis facilisis 
                fermentum. Aliquam 
                porttitor mauris sit 
                amet orci.`
            },
            {
                title: 'Lorem ipsum #3',
                description: `
                Donec nec justo eget 
                felis facilisis 
                fermentum. Aliquam 
                porttitor mauris sit 
                amet orci.`
            },

        ]
    }
]