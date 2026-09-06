// function testVar() {
//   console.log(x); // undefined (hoisting: khai báo được đẩy lên, nhưng chưa gán giá trị)
//   var x = 10;
//   console.log(x); // 10

//   if (true) {
//     var y = 20; // var không quan tâm block if, nó thuộc về cả hàm testVar
//   }
//   console.log(y); // 20 -> vẫn truy cập được dù y khai báo trong block if
// }

// testVar();
// console.log(typeof x); // undefined -> x không tồn tại ngoài hàm (function scope không lộ ra ngoài)

// function testLet() {
//   console.log(a); // ReferenceError
//   let a = 10;
//   console.log(a); // 10

//   if (true) {
//     let b = 20; // b chỉ tồn tại trong block if này
//     console.log(b); // 20
//   }
//   console.log(b);
// }

// testLet();

function testConst() {
  console.log(c); // ReferenceError (TDZ, giống let)
  const c = 10;
  console.log(c); // 10

  // c = 20; // TypeError: Assignment to constant variable. -> không được gán lại

  if (true) {
    const d = 30; // d chỉ tồn tại trong block if này
    console.log(d); // 30
  }
  console.log(d); // ReferenceError: d is not defined

  // Lưu ý: const chỉ chặn gán lại BIẾN, còn nội dung bên trong object/array vẫn sửa được
  const obj = { name: "Alice" };
  obj.name = "Bob"; // được phép, vì không gán lại cả biến obj
  console.log(obj); // { name: "Bob" }
}

testConst();

