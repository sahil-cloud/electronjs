const add = document.getElementById('b11');
const displayNote = document.getElementById('displayNote');
const des = document.getElementById('des');
const title = document.getElementById('title');

add.addEventListener('click',(e) => {
    e.preventDefault();

    // console.log(title.value)
    // console.log(des.value)
    let html = `
       
            <div class="card-body">
              <h5 class="card-title" style="font-weight: bold;">${title.value}</h5>
              <p class="card-text" style="color: black;">
                ${des.value}
              </p>
              <button class="btn btn-danger" id=${title.value} onclick="deleteNote(this.id)" >Delete Note 🗑</button>
            </div>
    
    `;

    const el = document.createElement('div');
    // el.className('card');
    el.className = "card m-3 alert-info w-25"
    el.id = `${title.value}`
    el.innerHTML = html;


    displayNote.appendChild(el);

    title.value = ""
    des.value = ""

})

const deleteNote = (index) => {
    const dln = document.getElementById(index);
    dln.remove()
}