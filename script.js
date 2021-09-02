//------------ search book function start--------

const searchBooks = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    if (inputField.value === '') {
        document.getElementById('searchItem').innerText = `Search Something`;
        document.getElementById('cardContainer').textContent = '';

    } else {
        document.getElementById('cardContainer').textContent = '';
        document.getElementById('search-item').innerText = '';
        inputField.value = '';
        const url = `https://openlibrary.org/search.json?q=${inputText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayResult(data.docs));
    }

};
// -----search book function end------


//----- card display function start ----

const displayResult = allData => {
        document.getElementById('search-item').innerText = `${allData.length} search result founds`
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.textContent = '';
        if (allData.length === 0) {
            document.getElementById('search-item').innerText = `Invalid Search`;
        } else {
            // for each loop start
            allData.forEach(data => {
                // creating card div start
                const div = document.createElement('div');
                div.classList.add('col-md-4');
                div.innerHTML = `
            <div class="card p-2 m-3">
                <img style="height: 15rem;" class="img-fluid" src="https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg">
                <h3>${data.title}</h3>
                <p class="p-0 m-0"><span class="fw-bold">Author:</span> ${data.author_name}</p>
                <p class="p-0 m-0"><span class="fw-bold">Publisher:</span> ${data.publisher}</p>
                <p class="p-0 m-0"><span class="fw-bold">First publish :</span> ${data.first_publish_year}</p>
            </div>
            `
                    // creating card div end
                cardContainer.appendChild(div);
            });
            // for each loop end

        }

    }
    //------card display function end---------