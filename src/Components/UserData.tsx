interface Props{
    users:Object[] 
}
const UserData = ({users}:Props) => {
  return (
    <>
    {
        users.map((curUser)=>{
            //@ts-ignore
            const {id, name, email}= curUser;
              //@ts-ignore
            const {city, street}=curUser.address;

            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{street} {" "} , {city}</td>
                </tr>
            )
        })
    }
    </>
  )
}

export default UserData;