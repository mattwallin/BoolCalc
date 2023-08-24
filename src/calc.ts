export default function calc(str: string): boolean {
    let result = false;
    if(str.includes("true")) {
        result = true;
    }
    if(str.includes("false")) {
        result = false;
    }
    return result
}