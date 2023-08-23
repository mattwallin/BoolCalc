//Implement AND keyword

export default function calc(str: string): boolean {
    let result: boolean | undefined = undefined;
    let notFlag = false;
    let orFlag = false;
    let andFlag = false;
    let strArr = str.toLowerCase().split(" ");
    strArr.map((curr) => {
        if(result === false && andFlag) {
            return false;
        }
        if(result && orFlag) {
            return true;
        }
        if(notFlag) {
            if(curr === "true") {
                result = false;
            }
            else {
                result = true;
            }
            notFlag = false;
        }
        else if(curr === "true") {
            result = true;
        }
        else if(curr === "false") {
            result = false;
        }
        switch(curr) {
            case "not":
                notFlag = true;
                break;
            case "and":
                andFlag = true;
                break;
            case "or":
                orFlag = true;
                break;
            default:
                break; 
        }
    })
    return result!;
}