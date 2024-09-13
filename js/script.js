const tableBody = document.getElementById('tableBody');


/* const fetchGitHubUser = async () => {
    const token = 'API_TOKEN'; // Substitua 'SEU_TOKEN_AQUI' pelo seu token do GitHub

    const URL = `https://api.github.com/users/angelolustosa`
    const config = {
        headers: { 'Authorization': `token ${token}` }
    }

    try {
        const response = await axios.get(URL, config);

        // Exibir o resultado no elemento HTML
        //document.getElementById('result').textContent = JSON.stringify(response.data, null, 2);
         renderTableRows(response.data)
    } catch (error) {
        console.error('Erro ao consumir a API do GitHub:', error);
    }
} */

const fetchGitHubUser = async () => {
    const token = 'API_TOKEN_GITHUB'; // Substitua 'SEU_TOKEN_AQUI' pelo seu token do GitHub

    const URL = `https://api.github.com/users/angelolustosa`
    const config = {
        headers: { 'Authorization': `token ${token}` }
    }

    try {
        const response = await fetch(URL, config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log('responseData', responseData);
        //document.getElementById('result').textContent = JSON.stringify(response.data, null, 2);
         renderTableRows(responseData)
    } catch (error) {
        console.error('Erro ao consumir a API do GitHub:', error);
    }
}

const renderTableRows = (data) => {
    console.log('data:', data);
    let tableRows = `
        <tr>
            <td>${1}</td>
            <td>
                <img style=" border-radius: 3em;" src="${data.avatar_url}" alt="${data.login}" width="35" height="35">
            </td>
            <td>${data.name}</td>
            <td>${data.login}</td>
            <td>${data.email}</td>
            <td>${data.public_repos}</td>
            <td>
                <a href="${data.html_url}" target="_blank">GitHub
            </td>
        </tr>
      `;

    tableBody.innerHTML = tableRows;
}

// Chamar a função para consumir a API
fetchGitHubUser('angelolustosa');