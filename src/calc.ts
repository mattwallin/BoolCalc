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
        else if(result && orFlag) {
            return true;
        }
        else if(notFlag) {
            if(curr === "true") {
                result = false;
            }
            else {
                result = true;
            }
            notFlag = false;
        }
        else {
            switch(curr) {
                case "true":
                    result = true;
                    break;
                case "false":
                    result = false;
                    break;
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
        }
    })
    return result!;
}