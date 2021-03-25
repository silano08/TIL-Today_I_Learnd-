function passveri() {
    $.ajax({
        type: "GET",
        url: `/api/posts/${_id}`,
        data: {},
        success: function (response) {
            let postsDetail = response["detail"];
            const testpass = $("#password").val();
            const trainpass = postsDetail["password"];
            if (testpass == trainpass) {
                console.log(true);
            } else { console.log(false); }
        }
    });
}
if (passveri()) {
    console.log("okay");
} else { console.log("NO"); }

function postdelete() {
    $.ajax({
        type: "DELETE",
        url: `/api/posts/${_id}/edit`,
        data: {},
        success: function (response) {
            let postsDetail = response["detail"];
            const testpass = $("#password").val();
            const trainpass = postsDetail["password"];
            if (testpass == trainpass) {
                if (response["result"] == "success") {
                    alert("삭제되었습니다");
                    window.location.href = "/home";
                }
            }
        }
    });
}

///이게 원래꺼
function postdelete() {
    $.ajax({
        type: "GET",
        url: `/api/posts/${_id}`,
        data: {},
        success: function (response) {
            let postsDetail = response["detail"];
            console.log(postsDetail);
            const testpass = $("#password").val();
            const trainpass = postsDetail["password"];
            console.log(testpass == trainpass);
            console.log(testpass, trainpass);
        }
    });
    
    $.ajax({
        type: "DELETE",
        url: `/api/posts/${_id}/edit`,
        data: {},
        success: function (response) {
            if (response["result"] == "success") {
                alert("삭제되었습니다");
                window.location.href = "/home";
            }
        }
    });
}


function passveri() {
    $.ajax({
        type: "GET",
        url: `/api/posts/${_id}`,
        data: {},
        success: function (response) {
            let postsDetail = response["detail"];
            console.log(postsDetail);
            const testpass = $("#password").val();
            const trainpass = postsDetail["password"];
            console.log(testpass == trainpass);
            console.log(testpass, trainpass);
        }
    });
}