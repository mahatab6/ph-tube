
function lodeCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(Response => Response.json())
    .then(data => {displayCategories(data.categories)})
}

function lodeVideo(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(Response => Response.json())
    .then(data => {displayVideo(data.videos)})
}

function videoCategory (id) {
    let url = ` https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
    .then(Response => Response.json())
    .then(data => {displayVideo(data.category)})
};


function displayCategories(categories){
    const categoriesContainer = document.getElementById("Categories-container");
    for ( let cat of categories){
        console.log(cat);
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML=`
        <button onclick="videoCategory(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] bg-slate-400 text-white text-xl px-4 py-1 rounded">${cat.category}</button>
        `;
        categoriesContainer.append(categoryDiv);
    }
}

const displayVideo =(videos) =>{

    const videoContainer = document.getElementById("videoContainer");

    videoContainer.innerHTML = "";

    if(videos.length == 0){
        videoContainer.innerHTML =`<div class="text-3xl items-center justify-items-center text-center col-span-full ">
            <img src="image/Icon.png" alt="">
            <h2>Oops!! Sorry, There is no content here</h2>
        </div>` ;
        return;
    }
    
    videos.forEach(video => {
        console.log(video);
        
        const videoCard = document.createElement("div")
        videoCard.innerHTML =`
                <div class="card bg-base-100 shadow-sm">
                    <figure class="relative">
                        <img class="w-full h-[250px]"
                        src="${video.thumbnail}"
                        alt="Shoes" />
                        <span class="absolute bg-black text-white bottom-2 right-2 rounded-lg p-1">3hrs 56 min ago</span>
                    </figure>
                    <div class="card-body">
                        <div class="flex gap-2">
                            <div>
                                <div class="avatar">
                                <div class="w-12 rounded-full">
                                    <img src="${video.authors[0].profile_picture}" />
                                </div>
                                </div>
                            </div>
                            <div>        
                                <h2 class="card-title">${video.title}</h2>
                                <div class="flex items-center gap-3">
                                <p>${video.authors[0].profile_name}</p>
                                 <img src="image/Group 3.png" alt="" />
                                </div>
                                <p>${video.others.views}</p>
                            </div>
                        </div>
                    </div>
                </div>`;

        videoContainer.append(videoCard);
    });
};

let allVideo = document.getElementById("all-btn").addEventListener("click",function(){
    lodeVideo();
})
 
lodeVideo();
lodeCategories();

