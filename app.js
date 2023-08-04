const text = [
  `What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,

  `Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
    'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
    editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
    still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
    (injected humour and the like).`,

  `Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
    'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
    editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
    still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
    (injected humour and the like).`,

  `Where can I get some?
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
    by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
    generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
    Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
    generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,
    injected humour, or non-characteristic words etc.`,

  `Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
    'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
    editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
    still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
    (injected humour and the like).`,

  `Where does it come from?
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
    from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
    the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
    of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
    on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
    amet..", comes from a line in section 1.10.32.`,

  `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give
    you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the
    master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but
    because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor
    again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because
    occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example,
    which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right
    to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain
    that produces no resultant pleasure?`,

  `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
    distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
    placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
    officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
    perferendis doloribus asperiores repellat.`,

    `Where can I get some?
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
    by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
    generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
    Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
    generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,
    injected humour, or non-characteristic words etc.`,

  `Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
    'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
    editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
    still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
    (injected humour and the like).`,
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const item = document.querySelector("#items");
const dataSet = document.querySelector(".para");
const generate = () => {
  if (isNaN(item.value) || item.value < 0 || item.value > 10) {
    const randomIndex = Math.floor(Math.random() * text.length);
    dataSet.innerHTML = `<p> ${text[randomIndex]} </p>`;
  } else {
    const localText = shuffle(text);
    const data = localText.slice(0, item.value);
    const paras = data.map((d) => {
      return `<p> ${d} </p>`;
    });

    dataSet.innerHTML = paras.join("");
  }

  //This is for my logic if you want specific paragraph for example user submit 2 so browser shows para num 2
  //   else{
  //     const value = item.value;
  //     dataSet.innerHTML = `<p> ${text[value  - 1]} </p>`;
  //   }
};
