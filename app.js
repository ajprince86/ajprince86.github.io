BASE_URL = "https://football-amari-10.herokuapp.com/"
footballDiv = document.getElementById('footballDiv')

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', async () => {
        try {
            let response = await axios.get(`${BASE_URL}teams`);
            let allData = response.data;
            console.log(allData)

        }
        catch (error) {
            console.log(error)
        }
    })
})
