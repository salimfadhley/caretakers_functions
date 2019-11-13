const zip = (arr, ...arrs) => {
    return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
}

export function concatenate_email_addresses(names:Array<string>, email_addresses:Array<string>):string {
    return "xxxx";
}