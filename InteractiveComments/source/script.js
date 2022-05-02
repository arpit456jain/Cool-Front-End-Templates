//USER ONE DATA
const userOneImage = document.getElementById("profile-image-1");
const userOneName = document.getElementById("profile-name-1");
const userOneTime = document.getElementById("time-stamp-1");
const userOneContent = document.getElementById("post-content-1");
const userOneVote = document.getElementById("upvote-1");

//USER TWO DATA
const userTwoImage = document.getElementById("profile-image-2");
const userTwoName = document.getElementById("profile-name-2");
const userTwoTime = document.getElementById("time-stamp-2");
const userTwoContent = document.getElementById("post-content-2");
const userTwoVote = document.getElementById("upvote-2");

//USER THREE DATA
const userThreeImage = document.getElementById("profile-image-3");
const userThreeName = document.getElementById("profile-name-3");
const userThreeTime = document.getElementById("time-stamp-3");
const userThreeContent = document.getElementById("post-content-3");
const userThreeVote = document.getElementById("upvote-3");

//CLIENT DATA
const clientImage = document.getElementById("profile-image");
const clientName = document.getElementById("profile-name");
const clientTime = document.getElementById("time-stamp");
const clientContent = document.getElementById("post-content");
const clientVote = document.getElementById("upvote");

//REPLY TO A USERNAME
let atUsername = document.getElementById("at-username");
//REPLY TO A another USERNAME
let atNextUsername = document.getElementById("at-nxt-username");

//Get votes
//USER-1
let upVote = document.getElementById("add-vote");
let downVote = document.getElementById("sub-vote");

// vote accumulator
function countVote() {
  let scoreTotal = 0;
  let count = 1;
  let myUpVote = document.getElementById("my-add-vote");
  let myDownVote = document.getElementById("my-sub-vote");
  const clientVote = document.getElementById("my-upvote");

  //add button
  myUpVote.addEventListener("click", function () {
    scoreTotal += count;
    clientVote.innerText = scoreTotal;
    // console.log("clicked");
  });

  //sub button
  myDownVote.addEventListener("click", function () {
    scoreTotal -= count;
    if (scoreTotal > 0) {
      clientVote.innerText = scoreTotal;
    } else {
      clientVote.innerText = 0;
    }
    // console.log("clicked");
  });
}

countVote();

//USER-2
let upVote2 = document.getElementById("add-vote-2");
let downVote2 = document.getElementById("sub-vote-2");

//USER-3
let upVote3 = document.getElementById("add-vote-3");
let downVote3 = document.getElementById("sub-vote-3");

//USER-CLIENT
let upVoteMyself = document.getElementById("add-vote-4");
let downVoteMyself = document.getElementById("sub-vote-4");

//fetch data
let totalScore = 0;
let currentScore = 0;
function fetchData(id, image, name, time, content, vote) {
  fetch("./source/data.json")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      //USER 1 DATA
      if (id == 1) {
        image.src = data.comments[0].user.image.webp;
        name.textContent = data.comments[0].user.username;
        time.textContent = data.comments[0].createdAt;
        content.textContent = data.comments[0].content;
        vote.textContent = data.comments[0].score;
        currentScore = vote.textContent;

        //Adds score after event listener on upVote button
        upVote.addEventListener("click", function (e) {
          totalScore += 1;
          vote.textContent = parseInt(currentScore) + totalScore;
        });

        //Subtract score after event listener on downVote button
        downVote.addEventListener("click", function (e) {
          totalScore -= 1;
          vote.textContent = parseInt(currentScore) + totalScore;
        });
      } else if (id == 2) {
        image.src = data.comments[1].user.image.webp;
        name.textContent = data.comments[1].user.username;
        time.textContent = data.comments[1].createdAt;
        content.textContent = data.comments[1].content;
        vote.textContent = data.comments[1].score;
        currentScore = vote.textContent;

        //Adds score after event listener on upVote button
        upVote2.addEventListener("click", function (e) {
          totalScore += 1;
          vote.textContent = parseInt(currentScore) + totalScore;
        });

        //Subtract score after event listener on downVote button
        downVote2.addEventListener("click", function (e) {
          totalScore -= 1;
          vote.textContent = parseInt(currentScore) + totalScore;
        });
      } else if (id == 3) {
        image.src = data.comments[1].replies[0].user.image.webp;
        name.textContent = data.comments[1].replies[0].user.username;
        time.textContent = data.comments[1].replies[0].createdAt;
        atUsername = data.comments[1].replies[0].replyingTo;
        content.textContent = "  " + data.comments[1].replies[0].content;
        vote.textContent = data.comments[1].replies[0].score;
        currentScore = vote.textContent;

        //Adds score after event listener on upVote button
        upVote3.addEventListener("click", function (e) {
          totalScore += 1;
          vote.textContent = parseInt(currentScore) + totalScore;
        });

        //Subtract score after event listener on downVote button
        downVote3.addEventListener("click", function (e) {
          totalScore -= 1;
          vote.textContent = parseInt(currentScore) + totalScore;
        });
      } else if (id == 4) {
        image.src = data.comments[1].replies[1].user.image.webp;
        name.textContent = data.comments[1].replies[1].user.username;
        time.textContent = data.comments[1].replies[1].createdAt;
        atUsername = data.comments[1].replies[1].replyingTo;
        content.textContent = " " + data.comments[1].replies[1].content;
        vote.textContent = data.comments[1].replies[1].score;
        currentScore = vote.textContent;

        vote.textContent = data.comments[1].replies[1].score;
        currentScore = vote.textContent;

        //Adds score after event listener on upVote button
        upVoteMyself.addEventListener("click", function (e) {
          totalScore += 1;
          vote.textContent = parseInt(currentScore) + totalScore;
        });

        //Subtract score after event listener on downVote button
        downVoteMyself.addEventListener("click", function (e) {
          if (parseInt(currentScore) > 0) {
            totalScore -= 1;
            vote.textContent = parseInt(currentScore) + totalScore;
          } else if (vote.textContent <= 0) {
            // vote.textContent = 0;
            // console.log(vote.textContent);
          }
        });
      }
    })
    .catch((error) => {
      console.log("Error in fetching data");
    });
}

//CALL USER ONE DATA
fetchData(
  1,
  userOneImage,
  userOneName,
  userOneTime,
  userOneContent,
  userOneVote
);

//CALL USER TWO DATA
fetchData(
  2,
  userTwoImage,
  userTwoName,
  userTwoTime,
  userTwoContent,
  userTwoVote
);

//CALL USER TWO DATA
fetchData(
  3,
  userThreeImage,
  userThreeName,
  userThreeTime,
  userThreeContent,
  userThreeVote
);

//CALL CLIENT DATA
fetchData(4, clientImage, clientName, clientTime, clientContent, clientVote);

//====================SEND POST SECTION======================

//CURRENT USER (constructor)
let message = document.getElementById("post-now-text");
const sendBtn = document.getElementById("send-msg");
const currentUserImage = document.getElementById("profile-image");
currentUserImage.src = "./images/avatars/image-juliusomo.webp";
let myPost = document.getElementById("post-content");
const replySection = document.getElementById("my-reponse");
const postNowSection = document.getElementById("posting-now");
let myMsg = "";

//BUTTON TWO
let messageOne = document.getElementById("post-now-text-1");
const sendBtnOne = document.getElementById("send-msg-1");
let myPostOne = document.getElementById("post-content-reply-2");
const replySectionOne = document.getElementById("my-reponse-1");
const postNowSectionOne = document.getElementById("posting-now-1");
let myMsgOne = "";

//Send message Button
function sendReplyPost() {
  //get value of text area on change
  message.addEventListener("input", function (e) {
    myMsg = e.target.value;
    //store this message and sent it to div

    sendBtn.addEventListener("click", function (e) {
      myPost.innerText = myMsg;
      replySection.style.display = "flex";
      postNowSection.style.display = "none";
    });
  });

  messageOne.addEventListener("input", function (e) {
    myMsgOne = e.target.value;
    //store this message and sent it to div

    sendBtnOne.addEventListener("click", function (e) {
      myPostOne.innerText = myMsgOne;
      replySectionOne.style.display = "flex";
      postNowSectionOne.style.display = "none";
    });
  });
}
sendReplyPost();

//====================DELETE SECTION======================

//delete message Button
const deleteButton = document.getElementById("delete-button");
function deleteReplyPost() {
  //get value of text area on change
  deleteButton.addEventListener("click", function (e) {
    message.value = "";
    replySection.style.display = "none";
    postNowSection.style.display = "flex";
    // console.log("Delete clicked");
  });
}
deleteReplyPost();

//delete message Button
const deleteButtonOne = document.getElementById("delete-button-1");
function deleteReplyPostOne() {
  //get value of text area on change
  deleteButtonOne.addEventListener("click", function (e) {
    messageOne.value = "";
    replySectionOne.style.display = "none";
    postNowSectionOne.style.display = "flex";
    // console.log("Delete clicked");
  });
}
deleteReplyPostOne();

//====================EDIT SECTION======================

//Edit message Button
const editButton = document.getElementById("edit-button");
function editReplyPost() {
  //get value of text area on change
  editButton.addEventListener("click", function (e) {
    myPost.innerText = myMsg;
    replySection.style.display = "none";
    postNowSection.style.display = "flex";
    // console.log("Edit clicked");
  });
}
editReplyPost();

//Edit message Button two
const editButtonOne = document.getElementById("edit-button-1");
function editReplyPostOne() {
  //get value of text area on change
  editButtonOne.addEventListener("click", function (e) {
    myPost.innerText = myMsg;
    replySectionOne.style.display = "none";
    postNowSectionOne.style.display = "flex";
    // console.log("Edit clicked");
  });
}
editReplyPostOne();
