export const MOVIES = "MOVIES";

export const movies=(items)=>{
    return {
        type: MOVIES,
        payload:items
    };
}
