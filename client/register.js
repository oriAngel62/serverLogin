function User(name, pass) {
    this.name = name
    this.pass = pass
}

function onClick() {
    const name = document.getElementById('name').value
    const pass = document.getElementById('pass').value

    let newUser = new User(name, pass)

    if(checkuser()) {
        // console.log(newUser)
        $.ajax({
            type: "post",
            url: "/register",
            data: JSON.stringify(newUser),
            dataType: "json",
            contentType:"application/json",
            success: function (response) {
                console.log(response)
            },
            error: function(error) {
                console.log(error)
                alert('USER EXSIT')
            }
        });
       
    }

}


function checkuser()
{
  if( document.getElementById("name").value=="")
  {
      window.alert("לא הוקש שם תקין")
      return false;
  }

  if(Number(isNaN(document.getElementById("pass").value)))
  {
    window.alert("לא הוקש גיל תקין")
    return false; 
  }
  return true;
}







