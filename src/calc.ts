export default function calc(str: string): boolean {
    let flag = false;
    if(str.includes( "true")) {
        flag = true;
    }
    if(str.includes("not false")) {
        flag = true;
    }
    if(str.includes("not true")) {
        flag = false;
    }
    return flag;
}