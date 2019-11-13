const zip = (arr, ...arrs) => {
    return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
}

export function concatenate_email_addresses(names:Array<string>, email_addresses:Array<string>):string {
    const email_addresses_and_names: Array<[string,string]> = zip(email_addresses, names)

    return email_addresses_and_names.map((e,n)=>`<${n}>${e}`).join("; ")
}