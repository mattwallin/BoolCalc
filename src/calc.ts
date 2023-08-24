//filter the parentheses out of the string for eval func
interface correctionInterface {
    "not": string;
    "and": string;
    "or": string;
}

export default function calc(str: string): boolean {
    const correctionObj: correctionInterface  = {
        "not": "!",
        "and": "&&",
        "or": "||",
    }

    str = str.toLowerCase();

    Object.keys(correctionObj).forEach(() => {
        str = str.replace(/not|and|or/g, matched => correctionObj[matched as keyof correctionInterface]);
    });
    return eval(str);
}