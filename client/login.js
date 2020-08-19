//table

// function getUsers()

// {
//     $.ajax({
//         type: "get",
//         url: "/users",
//         dataType: "json",
//         contentType:"application/json",
//         success: function (response) {
//             console.log(response)
//             addtotable(response);

//         },
//         error: function(error) {
//             console.log(error)
//         }
//     });
// }

// getUsers()

// function addtotable(namesArr){
//     var table = document.getElementById("tBody");

//     for(i=0;i<namesArr.length;i++)
//       {
//         var row = table.insertRow(i);
//         var cell1 = row.insertCell(0);
//         var cell2 = row.insertCell(1);
//         cell1.innerHTML = namesArr[i]["name"];
//         cell2.innerHTML = namesArr[i]["age"];
//       }

// }

// function addUser()
// {
//     var table = document.getElementById("tBody");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = document.getElementById("name").value;
//     cell2.innerHTML = document.getElementById("age").value;
// }
//

// -----------------table------------------------------------------------------------------------------------

function onClick() {
    const name = document.getElementById("name").value;
    const pass = document.getElementById("pass").value;

    let logInData = {
        name: name,
        pass: pass,
    };

    $.ajax({
        type: "post",
        url: "/logIn",
        data: JSON.stringify(logInData),
        dataType: "json",
        contentType: "application/json",
        success: function (response) {
            console.log(response);
            // alert("LOG IN");
            location.href = "user.html";
        },
        error: function (error) {
            console.log(error);
            alert("CANT FIND USER");
        },
    });
}
