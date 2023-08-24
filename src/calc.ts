//filter the parentheses out of the string for eval func
interface correctionInterface {
    "not": string;
    "and": string;
}

export default function calc(str: string): boolean {
    const correctionObj: correctionInterface  = {
        "not": "!",
        "and": "&&",
    }
    str = str.toLowerCase();

    Object.keys(correctionObj).forEach((key) => {
        str = str.replace(/not|and/g, matched => correctionObj[matched as keyof correctionInterface]);
    })
    return eval(str)
}