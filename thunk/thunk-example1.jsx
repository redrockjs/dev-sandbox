const addPost = (dispatch) => {
    dispatch(onLoading())
    axios.post({messHere}).then ( ()=>{
        dispatch(addPost(messHere))
        dispatch(offLoading())
    }

    )
}



const addPostThunkCreator = (message)=> (dispatch) => {
    dispatch(onLoading())
    axios.post({message}).then ( ()=>{
        dispatch(addPost(message))
        dispatch(offLoading())
    }

    )
}

// в итоге мы диспатчим вызов thunk creator
dispatch(addPostThunkCreator("hello"))