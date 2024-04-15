let data;
switch (typeof data) {
  case "object":
    if (data === null) {
      console.log("null!");
    } else if (Array.isArray(data)) {
      console.log("array!");
    } else {
      console.log("object!");
    }
    break;
  case "number":
    if (Number.isNaN(data)) {
      console.log("not a number!");
    } else {
      console.log("number!");
    }
    break;
  case "Boolean":
    console.log("Boolean!");
    break;
  case "function":
    console.log("function!");
}
