// ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।
// ------task one-------
const url = `https://jsonplaceholder.typicode.com/comments`;
// const loadData = async () => {
//     const res = await fetch(url);
//     const data = await res.json();
//     showData(data.slice(0,50))
//     // fetch(url)
//     //     .then(res => res.json())
//     // .then (data =>console.log(data.slice(0,50)))
// }

// solved-------
// ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে।
// ------task tow------
// const showData = async() => {
   
//         const res = await fetch(url);
//         const data = await res.json();
//         showDisplay(data.slice(0,50))
//         // fetch(url)
//         //     .then(res => res.json())
//         // .then (data =>console.log(data.slice(0,50)))
// }
// const showDisplay = (name) => {
//     const comment = document.getElementById('comment');
//     name.forEach(element => {
//         console.log(element);
//         const div = document.createElement('div');
//         div.className = 'col-4'
//         div.innerHTML = `<div class="custom"><p>Comment:${element.body}</p> </div>`
//         comment.appendChild(div);
//     });
    
// }
// ------task there-----
// ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে।
// const loadData = async () => {
//         const res = await fetch(url);
//         const data = await res.json();
//         loadDataWithOutLoading(data.slice(0,50))
//         // fetch(url)
//         //     .then(res => res.json())
//         // .then (data =>console.log(data.slice(0,50)))
// }
// loadData()
// const loadDataWithOutLoading = (name) => {
//     const commentBox = document.getElementById('comment-box');
//      name.forEach(element => {
//         //  console.log(element)
//          const div = document.createElement('div');
//          div.className = "col-4"
//          div.innerHTML = `<div class = "custom">
//             <p>Author Email:${element.email} </p>
//             <p> <span class ="text-warning fs-3">Comment:</span>${element.body} </p>
//          </div>`
//          commentBox.appendChild(div);
//      });
    
//     }
// ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা।
// ------task 5-----
// const loadData = async () => {
//             const res = await fetch(url);
//             const data = await res.json();
//             loadDataWithOutLoading(data.slice(0,50))
//             // fetch(url)
//             //     .then(res => res.json())
//             // .then (data =>console.log(data.slice(0,50)))
//     }
//     loadData()
//     const loadDataWithOutLoading = (name) => {
//         const commentBox = document.getElementById('comment-box');
//          name.forEach(element => {
//             //  console.log(element)
//              const div = document.createElement('div');
//              div.className = "col-4"
//              div.innerHTML = `<div class = "custom">
//                 <p>Author Email:${element.email} </p>
//                 <p> <span class ="text-warning fs-5">Comment:</span>${element.body} </p>
//                 <button class='btn btn-info' onclick="makeApi('${element.id}')">Show Details</button>
//              </div>`
//              commentBox.appendChild(div);
//          });
// }
// const makeApi = async (name) => {
//     const urls = `https://jsonplaceholder.typicode.com/comments/${name}`
//     // console.log(urls);
//     const res = await fetch(urls);
//     const data = await res.json();
//     console.log(data)
//     const showDetails = document.getElementById('show-details');
//     showDetails.textContent = '';
//     const div = document.createElement('div');
//     div.innerHTML = `<div class = "div-custom">
//     <p>Email:${data.email} </p>
//     <p>Post id:${data.postId}</p>
//     <p>Name:${data.name}</p></div>
    
//     `
//     showDetails.appendChild(div)

// }
        // task six------
        // ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে। 
        // already solved-------
        
        // task eight-------
        // the meal db এর খালতো ভাই the sports db থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। 
        // -----load data-------
const showPlayer = document.getElementById('show-player');
        const errorText = document.getElementById('error-text')
        document.getElementById('basic-addon').addEventListener('click', () => {
        const input = document.getElementById('input');
        const inputText = input.value;
        input.value = '';
                if (inputText== '') {
                        errorText.innerHTML=`<p class="text-danger fw-bold"> Not Found Anything</p>
                        <img src="./img/eror.jpeg" class="img-fluid" alt="">`
                      showPlayer.innerHTML = '';
                        return;
                }
                else {
                        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputText}`;
                  fetch(url)
                .then(res => res.json())
                .then(data => displayPlayer(data));
                }

})
        
const displayPlayer = (name) => {
        if (name.player == 0 || name.player == null) {
                errorText.innerHTML=`<p class="text-danger fw-bold"> Not Found Anything</p>
                   <img src="./img/eror.jpeg" class="img-fluid" alt="">`
                showPlayer.innerHTML = '';
                return
        }
        else {
                errorText.textContent = '';
                showPlayer.innerHTML = `
               <div class="card mx-auto" style="width: 25rem;">
                 <img src="${name.player[0].strThumb}" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title text-danger fw-bold">Country: ${name.player[0].strNationality}</h5>
                  <h5 class="card-title text-danger fw-bold">Club: ${name.player[0].strTeam}</h5>
                  <p class ="text-black">Height: ${name.player[0].strHeight} </p>
                  <p class="card-text text-black">DisCription:${name.player[0].strDescriptionEN.slice(0,100)}</p>
                  </div>
                 </div>
        
        `
        }
}