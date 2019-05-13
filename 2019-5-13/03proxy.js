let person = {
    name:'zs',
    age:13
}

const proxy = new Proxy(person, {
    get:function(targt, property) {
        if (property in targt ) {
            return targt[property]
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.")
        }
    }
})

console.log(proxy.name)
console.log(proxy.age)