const API_KEY="adb2c8fe35544bafb257812f680d494e";
const url="https://newsapi.org/v2/everything?q=";
window.addEventListener("load",() => fetchnews("ireland") );
async function fetchnews(query) {
   const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
   const data=await res.json();
   console.log(data);
   bindData(data.articles);
   function bindData(articles){
    const cardsContainer= document.getElementById('cards-container');
    const newsCardTemplate=document.getElementById('news-card');
    cardsContainer.innerHTML= '';
    articles.forEach(article => {
        if(!article.urlToImage)return;
        const cardClone= newsCardTemplate.content.cloneNode(true);  // for clonng the cards cntainer
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);  
    });
   }
    function fillDataInCard(cardClone,article){
        const newsImg=cardClone.querySelector('#news-img');
        const newstitle=cardClone.querySelector('#news-title');
        const newssource=cardClone.querySelector('#news-source');
        const newsdesc=cardClone.querySelector('#news-desc');

        newsImg.src=article.urlToImage;
        newstitle.innerHTML=article.title;
        newsdesc.innerHTML=article.description;

        const date=new Date(article.publishedAt).toLocaleString("en-US", {
            timeZone:"Europe/Dublin"
        })

    }
}