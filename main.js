//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// https://api.nasa.gov/planetary/apod?api_key=5000&date=2022-10-12


document.querySelector('button').addEventListener('click', GetNasa)

function GetNasa(){
    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://api.nasa.gov/planetary/apod?api_key=BbRLYFGxgG6ZWRvbeXT5b8apVOd9DmK6gltZP9ww&date=${choice}`

    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
    })

    .catch(err => {
        console.log('error ${err}')
        
    });
    
}




