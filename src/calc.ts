//filter the parentheses out of the string for eval func

export default function calc(str: string): boolean {
    let strArr = str.toLowerCase().split(" ");
    let result = false;
    let notFlag = false;
    strArr.map((curr) => {
        if(notFlag) {
                if(curr.includes("true")) {
                    result = false;
                }
                else if(curr.includes("false")) {
                    result = true;
                }
            }
        else if(curr.includes("true")) {
            result = true;
        }
        else if(curr.includes("false")) {
            result = false;
        }
        else if(curr.includes("not")) {
            notFlag = true;
        }
    });
    return result;
}