window.addEventListener("load", function (e){
    var btn = document.querySelector("button");

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        
        const result = document.querySelector("#result");
        const input = document.querySelector("input");

        let country = input.value.trim();
        let url = `world.php?country=${country}`;

        fetch(url)
            .then(response => {
                return response.text();
            })

            .then(data => {
                result.innerHTML = data;
                console.log(data);
            })

    });
})