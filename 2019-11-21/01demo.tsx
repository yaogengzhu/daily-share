export function isType(s: any, result: string) {
    return (/\[object (\w+)\]/.exec(Object.prototype.toString.call(s)) as any[])[1] === result
}
