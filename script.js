// Array of colors
const colors = ["#677077", "#F2B632", "#A2A2A4", "#6E4B4B", "#DFDFE0"];
const tabIndividualItems = [...document.querySelectorAll('.tab-item')];

// append text by index
const blocks = document.querySelectorAll('.tab-item');

blocks.forEach((block, index) => {
    block.innerText = index < 10 ? "0" + index : index;
});

// add active class for tab buttons & filter
const tabButtons = document.querySelectorAll('.tabs-inner a');
tabButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        const target = e.target;
        const parent = target.parentElement;
        const allChild = [...parent.children];

        // remove active class from all children
        allChild.map((child) => {
            child.classList.remove('active');
        });

        // add active class for target item
        target.classList.add('active');

        // get id
        const id = target.getAttribute('id');

        // get all element regarding the same name of id
        const tabItems = document.querySelector('.tab-items');
        const filteredItems = [...tabItems.querySelectorAll(`.${id}`)];
        const remainingItems = [...tabItems.querySelectorAll(`.tab-item:not(.${id})`)];

        if (id !== 'all') {
            removeHiddenClass();
            // add hidden class for rest element
            remainingItems.forEach((item) => {
                item.classList.add('hidden');

                // add color for filtered items
                addColor(filteredItems);
            });
        } else {
            // remove hidden class from all element
            removeHiddenClass();

            // add color for all items
            addColor();
        }

        // remove hidden class from all element
        function removeHiddenClass() {
            [...tabItems.querySelectorAll('.tab-item')].forEach((item) => {
                item.classList.remove('hidden');
            });
        }


    });
});


// Add colors for individual items
const addColor = (arr) => {
    if (!arr)(arr = tabIndividualItems);
    arr.forEach((item, index) => {
        const color = colors[index % colors.length];
        item.style.backgroundColor = '';
        item.setAttribute('style', `background-color: ${color} `)
    })
};

// call the addColor method
addColor();