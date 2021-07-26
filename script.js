fetch('style_links.json')
    .then(response => response.json())
    .then(data => {
        let links = data;

        for (let i = 0; i < links.length; i++) {
            console.log(links.length);
            let StyleBoxDiv = document.createElement('div');
            StyleBoxDiv.innerHTML = `<div class="stylebox">
            <div class="image">
                 <img src="https://raw.githubusercontent.com/arpit456jain/Cool-Front-End_Templates/master/${links[i].name}/preview.png" alt="">
             </div>
            <p>${links[i].name}</p>
            <a target="_blank" href="${links[i].link}">View</a>
            </div>`;
            document.getElementById('styles').appendChild(StyleBoxDiv);
        };

    });

