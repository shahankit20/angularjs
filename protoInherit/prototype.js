//** Prototypal Inheritence
var parent = {
  value: "parentValue",
  obj : {
    objValue: "parentObjValue"
  },
  walk: function() {
    console.log("walking!");
  }
};

var child = Object.create(parent);
console.log("Child Value: ", child.value);
console.log("Child Obj Value: ", child.obj.objValue);
console.log("Parent Value: ", parent.value);
console.log("Parent Obj Value: ", parent.obj.objValue);
console.log("Child: ", child);
console.log("Parent: ", parent);

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("** Changed: child.value = childValue");
console.log("** Changed: child.obj.objValue = childObjValue");
console.log("Child Value: ", child.value);
console.log("Child Obj Value: ", child.obj.objValue);
console.log("Parent Value: ", parent.value);
console.log("Parent Obj Value: ", parent.obj.objValue);
console.log("Child: ", child);
console.log("Parent: ", parent);

console.log("child.obj === parent.obj ?: ", child.obj === parent.obj);

var grandChild = Object.create(child);
console.log("Grandchild: ", grandChild);
//console.log("Grandchild walk: ", grandChild.walk());
grandChild.walk();


function Dog(name) {
  this.name = name;
  console.log("This is: ", this);
}

var myDog = new Dog("Max");
console.log("My dog: ", myDog);

Dog("Max2");
