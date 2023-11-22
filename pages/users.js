import { useEffect, useState } from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";


const Users = ({users}) => {
//   const [users, setUsers] = useState([
//    {id: 1, name: 'Lena'},
//    {id: 2, name: 'Kira'},
//   ])

//   useEffect(async () => {
//      const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//      const data = await response.json()
//      setUsers(data)
//   }, [])

  return (
    <MainContainer keywords={"users next js"}>
      <h1>Пользователи</h1>
      <ul >
         {users.map((user) =>
         <li key={user.id}>
            <Link href={`/users/${user.id}`}>
               {user.name}
            </Link>
         </li>
         )}
      </ul>
    </MainContainer>
  )
}

export default Users;

export async function getStaticProps(ctx) {
   const response = await fetch ('https://jsonplaceholder.typicode.com/users')
   const users = await response.json()

   return {
      props: {users},
   }
}