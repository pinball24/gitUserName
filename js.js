


function getUser(userName) {
    fetch("https://api.github.com/users/" + userName + "/repos")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
        $('#js-error-message').text('Something went wrong');
    });
}

function displayResults(responseJson) {
    $('.results').empty();
    console.log(responseJson);
    let html = '';
    responseJson.forEach((project) =>
    html += `
    <ul> 
        <li><a href="${project.html_url}">${project.name}</a></li>
    </ul>`)
    $('.results').append(html);
}


function watchForm () {
    $('form').submit(event => {
        event.preventDefault();
        const userName = $('#js-github-user').val();
        getUser(userName);
    });
}

$(watchForm);