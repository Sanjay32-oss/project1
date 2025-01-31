let cardData=[
    {
        backgrounImageURL: "pragliding.jpg" ,
        heading: "Paragliding",
        text: "Bir Billing, Himachal Pradesh. It is the Paragliding Capital ofIndia and considered to be the perfect destination for theadventure sport."
    },
    {
        backgrounImageURL: "riverrafting.jpg" ,
        heading: "River rafting",
        text: "  Himachal and its serene beauty are best enjoyed during the summer months when it's sunny, warm, and pleasant."
    },
    {
        backgrounImageURL: "skiing.jpg" ,
        heading: "Skiing",
        text: "The best time for skiing in Himachal Pradesh is in the months of December, January, February and March."
    }, {
        backgrounImageURL: "mall.jfif" ,
        heading: "The Mall",
        text: "Lined with numerous shops, food joints and cafés, The Mall is considered as the nerve centre of Shimla's social life."
    },
    {
        backgrounImageURL: "bazzar.jfif" ,
        heading: "Akhara Bazar",
        text: "Akhara Bazaar is one of the best markets in Kullu, where there are a few shops famous for the woolen apparel ."
    },
    {
        backgrounImageURL: "treks.jfif" ,
        heading: "Treks",
        text: "There are a few popular treks that one can try in Himachal Pradesh such as Hampta Pass, Deo Tibba Base Camp, Buran Ghati, Pin Parvati Pass, and Friendship Peak."
    },
    {
        backgrounImageURL: "hill.jpg" ,
        heading: "Jakhoo Hill",
        text: "A major tourist attraction, Jakhoo Hill is known for its panoramic brilliance and the famous Jakhoo Temple."
    },
    {
        backgrounImageURL: "rohtang.webp" ,
        heading: "Rohtang Pass",
        text: "he Pass offers beautiful sights of glaciers, peaks, Lahaul Valley and the Chandra River. "
    },
    {
        backgrounImageURL: "spiti.jfif" ,
        heading: "Spiti Valley",
        text: " Spiti welcomes travellers to its postcard-perfect hamlets, ancient monasteries and scenic lakes."
    },
]

for(let i=0;i<cardData.length;i++){
    CardsContainer.innerHTML+=`
    <div class="main-card p-0 mt-5">
        <div class="banner-background" style="background-image: url(${cardData[i].backgrounImageURL});
        border-top-left-radius:  25px;  
        border-top-right-radius:  25px;   ">

        </div>
      <div class="card-text">
        <p class="p-0 mb-1 " style="color:  #0054a6; font-weight: 700;">${cardData[i].heading}</p>
        <p class="p-0 m-0" style="font-size: 0.9rem; font-weight: 600; word-spacing: 3px;">
          ${cardData[i].text}
        </p>
      </div>
    </div> `
}





 

