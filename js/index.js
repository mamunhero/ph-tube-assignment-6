const loadButton = async () => {
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
  const data = await response.json();
  // console.log(data.data);
  const button = data.data;
  // console.log(button);
  displayButton(button);
};
// show button call
const displayButton = (button) => {
  const buttonContainers = document.getElementById("button-containers");
  button.forEach((buttonCategory) => {
    const buttonName = document.createElement("div");
    buttonName.innerHTML = ` 
    <button onclick="displayVideo('${buttonCategory.category_id}')" class="text-center  text-2xl text-white px-2 py-2 rounded-lg bg-red-500">${buttonCategory.category}</button>
   
    `;
    buttonContainers.appendChild(buttonName);
  });
};
// video call
const displayVideo = async (buttonCategoryId) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${buttonCategoryId} `);
  const data = await response.json();
  // console.log(data)
  const video = data.data;
  // console.log(video);
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  if (video.length === 0) {
    const cardName = document.createElement("div");
    cardName.innerHTML = ` 
  <div class="flex justify-center items-center w-screen">
    <div class="text-center">
      <img src="./images/Icon.png" alt="">
      <span>Oops, data not found</span>
    </div>
  </div>

    `;
    cardContainer.appendChild(cardName);
  }
  video.forEach((videoItem) => {
    const cardName = document.createElement("div");
    cardName.innerHTML = `
    <div class="card  bg-base-100 shadow-xl">
    <figure class="px-5 pt-5">
      <img src="${videoItem?.thumbnail}"alt="image" class="h-48 w-[100%]"/>
    </figure>
    <div class="card-body">
      <div class="">
        <div class="flex">
          <div>
            <div class="inside-card-image">
              <div class="mr-2">
                <img class=" w-10 h-10 rounded-full"
                  src="${videoItem?.authors?.[0]?.profile_picture}"
                />
              </div>
            </div>
          </div>
          <div id="card-information" class="gap-5">
            <h5 class="mt-2">${videoItem?.title.slice(0, 12)}</h5>
            <div id="info" class="flex">
              <span class="">${videoItem?.authors?.[0]?.profile_name}</span>
              <span class="mr-2">
                <i class="fa-solid fa-check" ${videoItem?.authors[0].verified ? videoItem?.authors[0].verified : "hidden"}></i>
              </span>
            </div>
            <span>${videoItem?.others?.views} views</span>
          </div>
        </div>
      </div>
      </div>
    </div>
    `;
    cardContainer.appendChild(cardName);
    // console.log(buttonCategoryId)
  });
};
displayVideo("1000")
// sort view button
const handleSortViewButton = () => {
  const viewSortButton = document.getElementById("view-Sort-Button");
  const 
}
// function call
loadButton();

