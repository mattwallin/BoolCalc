//Implement OR keyword
//Implement AND keyword

export default function calc(str: string): boolean {
    let result = false;
    let notFlag = false;
    let orFlag = false;
    let andFlag = false;
    let strArr = str.toLowerCase().split(" ");
    strArr.map((curr) => {
        if(result === true && orFlag) {
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
    return result;
}