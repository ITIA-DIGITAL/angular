export function msgFrom422(body: any): string {
    const e = [];

    for (const prop of Object.keys(body)) {
        e.push(prop.toUpperCase().replace(/_/g, ' ') + ': ' + body[prop].join());
    }
    return e.join(', ');
}
