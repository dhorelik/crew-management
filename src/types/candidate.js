export type CandidateName = {
    title: string,
    first: string,
    last: string
}

export type CandidatePicture = {
    large: string
}

export type CandidateData = {
    name: CandidateName,
    picture: CandidatePicture
}

export type CandidateStatusValues =  'applied' | 'interviewing' | 'hired'

export type CandidateState = {
    +byId: {
        +[key: string]: CandidateData
    },
    +applied: Array<string>,
    +interviewing: Array<string>,
    +hired: Array<string>
}
