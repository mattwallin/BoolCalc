export default function calc(str: string): boolean {
    let flag = false;
    if(str === "true") {
        flag = true;
    }
    if(str === "not false") {
        flag = true;
    }
    return flag;
}