interface IRepresentation {
    id: string,       // ID of the representation 
    mimeType: string, // Which kind of media 
    codecs: string,   // The codecs that encoded the media
    width: number,    // Width of the media
    height: number,   // Height of the media
    bandwith: number  // Bits par second of the media
}

interface ISegment {
    init: string     // Template string of the init segment 
    start: number    // First number of the template 
    duration: number // How many segments are there
    template: string // Template string of all the other segments
}


/**
 * Explanation of the template strings
 * bunny_$Bandwidth$bps/BigBuckBunny_2s$Number$.m4s for the segments
 * and bunny_$Bandwidth$bps/BigBuckBunny_2s_init.mp4 for the init segment
 * If we are playing a representation with a bandwith : 4219897
 * The init segment would be : bunny_4219897bps/BigBuckBunny_2s_init.mp4
 * And the 11th segment would be bunny_4219897bpps/BigBuckBunny_2s11.m4s
 */

interface Manifest {
    title: string,
    segment: ISegment,
    representations: IRepresentation[],
}