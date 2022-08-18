addPost();
async function addPost() {
   let posts = await fetch('js/posts.json');
   posts = await posts.json();

   document.querySelector('.blog_section__posts').remove();
   const blogSectionPost = document.createElement('div');
   blogSectionPost.className = "blog_section__posts";
   document.querySelector('.blog_section__start-blog').append(blogSectionPost);

   for (let i = 0; i < 3; i++) {
      const post= document.createElement('div');
      post.className = "post";
      blogSectionPost.append(post);

      const postImgBlock = document.createElement('div');
      postImgBlock.className = "post__img";
      post.append(postImgBlock);

      const postImg = document.createElement('img');
      postImg.alt = "Error";
      postImg.src = posts[i]["img"];
      postImgBlock.append(postImg);

      const postContent = document.createElement('div');
      postContent.className = "post__content";
      post.append(postContent);

      const postTitle = document.createElement('div');
      postTitle.className = "post__title";
      postTitle.innerText = posts[i]["title"];
      postContent.append(postTitle);

      const postInfo = document.createElement('div');
      postInfo.className = "post__info";
      const additionalBlock = document.createElement('div');
      const postDate = new Date(posts[i]["date"]);
      additionalBlock.innerHTML = `
      ${postDate.toLocaleString('en-US', {month: 'long'})} ${postDate.getDate()}, ${postDate.getFullYear()} // ${posts[i]["whoPost"]} // ${posts[i]["themes"]}
      `;
      postInfo.append(additionalBlock)
      
      const postResponse = document.createElement('div');
      postResponse.className = "post__response";
      postResponse.innerText = `${posts[i]["countResponse"]} RESPONSE`;
      postInfo.append(postResponse);
      postContent.append(postInfo);
      
      const postSup = document.createElement('div');
      postSup.className = "post__sup";
      postContent.append(postSup);

      const postText = document.createElement('div');
      postText.className = "post__text";
      postText.innerText = posts[i]["text"];
      postContent.append(postText);
   }
   post = document.querySelectorAll('.post');
}

async function addAllPost() {
   let posts = await fetch('js/posts.json');
   posts = await posts.json();

   for (let i = 3; i < posts.length; i++) {
      const post= document.createElement('div');
      post.className = "post";
      document.querySelector('.blog_section__posts').append(post);

      const postImgBlock = document.createElement('div');
      postImgBlock.className = "post__img";
      post.append(postImgBlock);

      const postImg = document.createElement('img');
      postImg.alt = "Error";
      postImg.src = posts[i]["img"];
      postImgBlock.append(postImg);

      const postContent = document.createElement('div');
      postContent.className = "post__content";
      post.append(postContent);

      const postTitle = document.createElement('div');
      postTitle.className = "post__title";
      postTitle.innerText = posts[i]["title"];
      postContent.append(postTitle);

      const postInfo = document.createElement('div');
      postInfo.className = "post__info";
      const additionalBlock = document.createElement('div');
      const postDate = new Date(posts[i]["date"]);
      additionalBlock.innerHTML = `
      ${postDate.getMonth()}/${postDate.getDate()}/${postDate.getFullYear()} // ${posts[i]["whoPost"]} // ${posts[i]["themes"]}
      `;
      postInfo.append(additionalBlock)
      
      const postResponse = document.createElement('div');
      postResponse.className = "post__response";
      postResponse.innerText = `${posts[i]["countResponse"]} RESPONSE`;
      postInfo.append(postResponse);
      postContent.append(postInfo);
      
      const postSup = document.createElement('div');
      postSup.className = "post__sup";
      postContent.append(postSup);

      const postText = document.createElement('div');
      postText.className = "post__text";
      postText.innerText = posts[i]["text"];
      postContent.append(postText);
   }
   post = document.querySelectorAll('.post');
}

const postAll = document.createElement('div');
postAll.className = 'post__all';
postAll.innerHTML = 'SHOW ALL POSTS';
document.querySelector('.blog_section').append(postAll);
postAll.onclick = () => {
   if (postAll.innerHTML == 'SHOW ALL POSTS') {
      addAllPost();
      postAll.innerHTML = 'HIDE ALL POSTS';
   }
   else {
      addPost();
      postAll.innerHTML = 'SHOW ALL POSTS';
   }
};
let post;

function loadAnimPosCheck() {
   let postPositions = [];
   const windowHeight = document.documentElement.clientHeight;
   if (post.length > 0) {
      post.forEach(elem => {
         postPositions.push(elem.getBoundingClientRect().top + window.scrollY);
      });
   }
   let postIndex;
   for (let i in postPositions) 
   if (window.scrollY > (postPositions[i] - windowHeight)) postIndex = i;
   if (postIndex >= 0) {
      post[postIndex].classList.add('post_visible');
      delete post[postIndex];
   }
}
setTimeout(() => {
   post = document.querySelectorAll('.post');
   loadAnimPosCheck()
}, 2000);

window.addEventListener("scroll", () => loadAnimPosCheck());




