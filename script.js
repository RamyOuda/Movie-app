let title;
let rating;
let counter = 0;

$(`.submit`).on(`click`, function (e) {
  e.preventDefault();

  title = $(`.title`).val();
  rating = $(`.rating`).val();

  if (title.length < 2) {
    alert(`Please input a title. (Minimum 2 characters)`);
    return;
  }

  if (!rating || parseInt(rating) > 10 || parseInt(rating) < 1) {
    alert(`Please input a rating. (1-10)`);
    return;
  }

  if (counter >= 6) {
    alert(`List is full!`);
    return;
  }

  $(`div .list`).append(
    `<div class="item"><span class="title-span">Title: <b>${title}</b></span class="rating-span"><span>Rating: <b>${rating}</b></span><button class="remove">X</button></div>`
  );

  counter++;

  $(`.title`).val(``);
  $(`.rating`).val(``);
});

$(`body`).on(`click`, `.remove`, function () {
  $(this).closest(`div`).remove();
  counter--;
});
