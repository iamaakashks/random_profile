const getuser = document.querySelector('#getuser');
function getnewUser(){
    axios.get(`https://randomuser.me/api`)
    .then(result => {
        console.log(result.data.results[0]);
        const {name, email, gender, picture} = result.data.results[0];

        document.querySelector(".cards").innerHTML += `<div class="card bg-zinc-800 w-64 p-2 rounded-md">
                    <div class="w-20 h-20 object-cover bg-zinc-700 rounded-md mb-2">
                        <img class="h-full object-cover rounded-md" src=${picture.large} alt="">
                    </div>
                    <h2 class="text-2xl">${name.first} ${name.last}</h2>
                    <h4 class="text-sm mt-2">${gender}</h4>
                    <h4 class="text-sm opacity-40">${email}</h4>
                    <p class="text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, corrupti.</p>
                </div>`;
    })
    .catch(error => console.log(error));
}
getuser.addEventListener("click", function(){
    getnewUser();
})