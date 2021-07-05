fetch('style_links.json')
    .then(response => response.json())
    .then(data => {
        let links = data;

        for (let i = 0; i < links.length; i++) {
            let StyleBoxDiv = document.createElement('div');
            StyleBoxDiv.innerHTML = `<div class="stylebox">
        <p>${links[i].name}</p>
        <a target="_blank" href="${links[i].link}">View</a>
    </div>`;
            document.getElementById('styles').appendChild(StyleBoxDiv);
        };

    });

