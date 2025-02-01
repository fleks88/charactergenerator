document.addEventListener("DOMContentLoaded", function() {
    let lastnamesM = ['Петров','Иванов','Казаков','Грушев','Вишнев'];
    let firstnamesM = ['Петр','Иван','Казак','Виктор','Мухамед'];

    let lastnamesF = ['Петрова','Иванова','Казакова','Грушева','Вишнева'];
    let firstnamesF = ['Петра','Ирина','Кира','Виктория','Мадина'];

    let professions = ['Боксер','Фермер','Казак','Винодел','Бизнессмен'];

    let button = document.getElementById("create");

    function RandomItem(array) {
        return Math.floor(Math.random() * array.length);
    }

    button.addEventListener("click", function() {
        const checkbox = document.getElementById('gender-checkbox');
        
        let character;

        if (checkbox.checked) {
            character = {
                firstName: firstnamesF[RandomItem(firstnamesF)],
                lastName: lastnamesF[RandomItem(lastnamesF)],
                age: 30,
                profession: professions[RandomItem(professions)]
            };
        } else {
            character = {
                firstName: firstnamesM[RandomItem(firstnamesM)],
                lastName: lastnamesM[RandomItem(lastnamesM)],
                age: 30,
                profession: professions[RandomItem(professions)]
            };
        }

        let characterDiv = document.createElement("div");
        characterDiv.classList.add("character-info");
        for (let key in character) {
            if (character.hasOwnProperty(key)) {
                let value = character[key];
                let p = document.createElement("p");
                p.textContent = key + ": " + value;
                characterDiv.appendChild(p);
            }
        }

        document.getElementById("result").appendChild(characterDiv);
    });
});