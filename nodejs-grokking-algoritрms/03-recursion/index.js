function recursion(counter) {
    console.log(counter)
    if (counter<=0) {
        return
    } else {
     recursion(counter-1)
    }
}

recursion(5)