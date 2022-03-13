let obj = {"you": 100, "me": 75, "foo": 116, "bar": 15};


const entries = Object.entries(obj).sort((a,b)=>b[1]-a[1])



console.log(Object.fromEntries(entries),obj)