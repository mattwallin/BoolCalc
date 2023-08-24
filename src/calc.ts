//filter the parentheses out of the string for eval func

export default function calc(str: string): boolean {
    let strArr = str.toLowerCase().split(" ");
    let result = false;
    let guaranteedResult: boolean | undefined = undefined;
    let notFlag = false;
    let andFlag = false;
    strArr.map((curr) => {
        if(notFlag) {
                if(curr.includes("true")) {
                    result = false;
                }
                else if(curr.includes("false")) {
                    result = true;
                }
                notFlag = false;
        }
        else if(andFlag && result === false) {
            guaranteedResult = false;
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
        else if(curr.includes("and")) {
            andFlag = true;
        }
    });
    return guaranteedResult ?? result;
}