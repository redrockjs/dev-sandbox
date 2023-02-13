import {useAddUserMutation} from "../../api/usersEndpoints";
import {useRef} from "react";

export function AddUser() {

  const [addUser, {isLoading, isError}] = useAddUserMutation()

  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)


  const handleAddUser = async () => {
    console.log({
      username: usernameRef.current?.value,
      email: emailRef.current?.value
    })

    await addUser(
      {
        username: usernameRef.current?.value,
        email: emailRef.current?.value
      }
    ).unwrap()
  }

  return (
    <>
      <div>
        <h1>RTK-query - Add User</h1>
        <div className="flex flex-col items-start gap-2 w-[300px]">
          <input className="my-2 p-1"
                 type="text"
                 placeholder="username"
                 ref={usernameRef}
          />
          <input className="my-2 p-1"
                 type="text"
                 placeholder="email"
                 ref={emailRef}
          />
          <button type={"button"}
                  onClick={handleAddUser}>
            Send
          </button>
        </div>
        {isLoading &&
          <h2>Loading...</h2>
        }

        {isError &&
          <p className="text-red-500 text-[24px] py-2">
            error loading
          </p>
        }
      </div>
    </>
  )
}