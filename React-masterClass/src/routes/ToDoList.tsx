import { useState } from "react";
import { useForm } from "react-hook-form";
// export default function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setToDoError("");
//     setToDo(value);
//   };
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (toDo.length < 10) {
//       setToDoError("ToDo should be longer");
//     }
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           type="text"
//           placeholder="할 일을 입력하세요"
//           onChange={onChange}
//           value={toDo}
//         />
//         <button>추가</button>
//         {toDoError ? toDoError : null}
//       </form>
//     </div>
//   );
// }

export default function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="email" />
        <input {...register("firstName")} placeholder="firstName" />
        <input {...register("lastName")} placeholder="lastName" />
        <input {...register("username")} placeholder="username" />
        <input {...register("password")} placeholder="password" />
        <input {...register("passwordConfirm")} placeholder="passwordConfirm" />
        <button>추가</button>
      </form>
    </div>
  );
}
