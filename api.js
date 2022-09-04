let minehut_auth_token;
let minehut_session_id;

document.addEventListener('DOMContentLoaded', function() {
    var api_button = document.getElementById('api_button');
    // onClick's logic below:
    api_button.addEventListener('click', function() {
        window.minehut_session_id = window.localStorage.getItem("minehut_session_id");
        window.minehut_auth_token = window.localStorage.getItem("minehut_auth_token");
        main();

    });
});

async function main() {
    navigator.permissions.query({ name: 'clipboard-read' }).then(async result => {
        if (result.state === 'granted' || result.state === 'prompt') {
            await navigator.clipboard.writeText(window.localStorage.minehut_session_id), 3000)
        }
    })
}
